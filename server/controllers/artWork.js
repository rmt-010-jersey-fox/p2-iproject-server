const axios = require('axios')

class Controller {
    static getArts(req,res,next){
        const dataMuseum =  []

        axios.get('https://api.artic.edu/api/v1/artworks')
        .then( ({data})=> {
            // handle success
            //dataMuseum.push(response.data[0].title)
        // console.log(data.data);
        data.data.forEach(element => {
                let input = {
                    id: element.id,
                    title: element.title,
                    place_of_origin:element.place_of_origin,
                    category_titles: element.category_titles,
                    image: element.image_id,
                    artist: element.artist_title,
                    publication_history: element.publication_history,
                    exhibition_history: element.exhibition_history
                }
                dataMuseum.push(input)
            });
            res.status(200).json(dataMuseum)  
        })
        .catch(function (error) {
            // handle error
            next(error);
        })
    }

    static getArtsById(req,res,next){
        
    }

}

module.exports = Controller