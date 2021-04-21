const { comparePass } = require('../helpers/bcrypt')
const { generateToken } = require('../helpers/jwt')
const baseUrl = require('../constants/url')
const services = require('../helpers/service')
const cheerio = require('cheerio')
const { User, Recipe, Transaction } = require('../models')

const fetchRecipes = (req, res, response) => {
    try {
        const $ = cheerio.load(response.data);
        const element = $('#category-content');
        let title, thumb, duration, servings, dificulty, key, url, href;
        let recipe_list = [];
        element.find('.category-posts');
        element.find('.post-col').each((i, e) => {
            title = $(e).find('a').attr('data-tracking-value');
            thumb = $(e).find('.thumb-wrapper').find('img').attr('data-lazy-src');
            duration = $(e).find('.time').find('small').text();
            servings = $(e).find('.servings').find('small').text();
            dificulty = $(e).find('.difficulty').find('small').text();
            url = $(e).find('a').attr('href');
            href = url.split('/');
            key = href[4];

            recipe_list.push({
                title : title,
                thumb : thumb,
                key : key,
                times : duration,
                portion : servings,
                dificulty : dificulty
            });
        });
        console.log('fetch new recipes');
        res.send({
            method : req.method,
            status : true,
            results : recipe_list
        });
        
        recipe_list.forEach(e => {
            // console.log(e)
            return Recipe.create({
                title: e.title,
                thumb : e.thumb,
                key : e.key,
                times : e.times,
                portion : e.portion,
                dificulty : e.dificulty
            })
            .then(data => {
                res.status(201).json(data)
            })
            .catch(err => res.status(500).json({message: 'Internal Server Error'}))
        })
    } catch (error) {
        throw error;
    }
}

class Controller {
    static register(req, res) {
        const {email, password} = req.body
        User.create({email, password})
            .then(user => {
                res.status(201).json({id: user.id, email: user.email})
            })
            .catch(err => {
                res.status(400).json({message: 'Invalid Input'})
            })
    }

    static login(req, res) {
        const {email, password} = req.body
        User.findOne({where: {email}})
            .then(user => {
                if(user) {
                    const passMatch = comparePass(password, user.password)
                    if(!passMatch) {
                        res.status(401).json({message: 'Wrong Email or Password!'})
                    } else {
                        const access_token = generateToken({
                            id: user.id, email: user.email
                        })
                        res.status(200).json({id: user.id, email: user.email, access_token})
                    }
                }
            })
            .catch(err => {
                // console.log(err)
                res.status(400).json({message: 'Invalid Input'})
            })
    }

    static async newRecipes(req, res) {
        try {
            const response = await services.fetchService(`${baseUrl}/resep-masakan/`, res);
            return fetchRecipes(req, res, response);
        } catch (error) {
            throw error;
        }
    }

    static async recipesDetail(req, res) {
        try {
            const key = req.params.key;
            const response = await services.fetchService(`${baseUrl}/resep/${key}`, res);
            const $ = cheerio.load(response.data);
            let metaDuration, metaServings, metaDificulty, metaIngredient;
            let title , thumb, user, datePublished, desc, quantity, ingredient, ingredients;
            let parseDuration, parseServings, parseDificulty, parseIngredient;
            let duration, servings, dificulty;
            let servingsArr = [];
            let difficultyArr = [];
            let object = {};
            const elementHeader = $('#recipe-header');
            const elementDesc = $('.the-content').first();
            const elementNeeded = $('.needed-products');
            const elementIngredients = $('#ingredients-section');
            const elementTutorial = $('#steps-section');
            title = elementHeader.find('.title').text();
            thumb = elementHeader.find('.featured-img').attr('data-lazy-src');
            if (thumb === undefined) {
                thumb = null;
            }
            user = elementHeader.find('small.meta').find('.author').text();
            datePublished = elementHeader.find('small.meta').find('.date').text();

            elementHeader.find('.recipe-info').each((i, e) => {
                metaDuration = $(e).find('.time').find('small').text();
                metaServings = $(e).find('.servings').find('small').text();
                metaDificulty = $(e).find('.difficulty').find('small').text();
                if (metaDuration.includes('\n') && metaServings.includes('\n') && metaDificulty.includes('\n')) {
                    parseDuration = metaDuration.split('\n')[1].split(' ');
                    parseDuration.forEach( r => {
                        if(r !== "") duration = r;
                    });

                    parseServings = metaServings.split('\n')[1].split(' ');
                    parseServings.forEach(r => {
                        if(r !== "") servingsArr.push(r);
                    });
                    servings = Array.from(servingsArr).join(' ');
                    parseDificulty = metaDificulty.split('\n')[1].split(' ');
                    parseDificulty.forEach(r => {
                        if(r !== "") difficultyArr.push(r);
                    });
                    dificulty = Array.from(difficultyArr).join(' ');
                }

                object.title = title;
                object.thumb = thumb;
                object.servings = servings;
                object.times = duration;
                object.dificulty = dificulty;
                object.author = {user, datePublished};
            });
            
            elementDesc.each((i, e) => {
                desc = $(e).find('p').text();
                object.desc = desc;
            });

            let thumb_item, need_item;
            let neededArr = [];
            elementNeeded.find('.d-inline-flex').find('.justify-content-around').each((i, e) => {
                thumb_item = $(e).find('.product-img').find('img').attr('data-lazy-src');
                need_item = $(e).find('.product-info').find('.product-name').text();
                neededArr.push({
                    item_name : need_item,
                    thumb_item : thumb_item
                });
            });

            object.needItem = neededArr;

            let ingredientsArr = [];
            elementIngredients.find('.ingredient-groups').find('.ingredients').find('.ingredient-item').each((i, e) => {
                const term = [];
                quantity = $(e).find('.quantity').text();
                metaIngredient = $(e).find('.ingredient').text();
                parseIngredient = metaIngredient.split('\n')[1].split(' ');
                parseIngredient.forEach(r => {
                    if(r !== "") term.push(r);
                });
                ingredient = Array.from(term).join(' ');
                ingredients = `${quantity} ${ingredient}`
                ingredientsArr.push(ingredients)
            });
            
            object.ingredient = ingredientsArr;
            let step, resultStep;
            let stepArr = [];
            elementTutorial.find('.steps').find('.step').each((i, e) => {
                step = $(e).find('.step-description').find('p').text();
                resultStep = `${i + 1} ${step}`
                stepArr.push(resultStep);
            });

            object.step = stepArr;

            res.send({
                method : req.method,
                status : true,
                results : object
            });

        } catch (error) {
            throw error;
        }
    }

    static async category(req, res) {
        try {
            const response = await services.fetchService(`${baseUrl}/resep-masakan/`, res);
            const $ = cheerio.load(response.data);
            const element = $('#sidebar');
            let category, url, key;
            let category_list = [];
            element.find('.explore-by-widget');
            element.find('.category-col').each((i, e) => {
                category = $(e).find('a').attr('data-tracking-value');
                url = $(e).find('a').attr('href');
                const split = category.split(' ');
                if (split.includes('Menu')) split.splice(0, 1);
                const results = Array.from(split).join('-');
                key = results.toLowerCase();
                category_list.push({
                    category : category,
                    url : url,
                    key : key
                });
            });

            return res.send({
                method : req.method,
                status : true,
                results : category_list
            });

        } catch (error) {
            throw error;
        }
    }

    static async recipesByCategory(req, res) {
        try {
            const key = req.params.key;
            const response = await services.fetchService(`${baseUrl}/resep-masakan/${key}`, res);
            return fetchRecipes(req, res, response);

        } catch (error) {
            throw error;
        }
    }

    static async searchRecipes(req, res) {
        try {
            const query = req.query.q;
            console.log(query);
            const response = await services.fetchService(`${baseUrl}/?s=${query}`, res);
            const $ = cheerio.load(response.data);
            const element = $('#search-content');

            let title, url, key, thumb, duration, serving, difficulty;
            let search_list = [];
            element.find('.results-row').find('.post-col').each((i, e) => {
                title = $(e).find('a').attr('data-tracking-value');
                url = $(e).find('a').attr('href').split('/');
                thumb = $(e).find('.thumb-wrapper').find('img').last().attr('data-lazy-src');
                key = url[4];
                duration = $(e).find('.recipe-info').find('.time').find('small').text();
                serving = $(e).find('.recipe-info').find('.servings').find('small').text();
                difficulty = $(e).find('.recipe-info').find('.difficulty').find('small').text();

                search_list.push({
                    title : title,
                    thumb : thumb,
                    key : key,
                    times : duration,
                    serving : serving,
                    difficulty : difficulty,
                });
            });

            const item = search_list.filter(result => result.times !== "");

            res.send({
                method : req.method,
                status : true,
                results : item
            });

            // console.log(item)
            Recipe.findOne({
                where: {q: req.params.q}
            })
            .then(data => {
                res.status(200).json(data)
            })
            .catch(err => res.status(500).json({message: 'Internal Server Error'}))

        } catch (error) {
            throw error;
        }
    }

    

}

module.exports = Controller