# Shoopinc (E-commerce) App Server
An application to browse food and drink recipes. 


This app has :

* RESTful endpoint for user's register and login
* RESTful endpoint for Read Recipes
* JSON formatted response
 
Demo link :


 ## RESTful Endpoints

 List of available endpoints:
​
- `POST /register`
- `POST /login`

- `GET /meals/random`
- `GET /meals/categories`
- `GET /meals/categories/:category`
- `GET /meals/search/:name`

- `GET /drinks/random`
- `GET /drinks/categories`
- `GET /drinks/categories/:category`
- `GET /drinks/search/:name`


### POST /register
> Create new User

_Request Body_
```
{
  "name": <user's name>, 
  "email": <user's email>, 
  "password": <user's password> 
  }
```

_Response (201 - Created)_
```
{
    "id": 1,
    "name": "user0",
    "email": "user0@mail.com"
}
```

_Response (400 - Bad Request)_
```
{
    "message": [
        "Name is required",
        "Email is required",
        "Your email is invalid, please check again",
        "Password is required",
        "Email already exist"
    ]
}
```

### POST /login
> Login to app

_Request Body_
```
{
	"email": <user's email>,
	"password": <user's password>
}
```

_Response (200 - OK)_
```
{

    "token": <jwt access token>
}
```
_Response (400 - Bad Response)_

```
{
    "message": "The email and password you entered did not match our records. Please double-check and try again."
}
```

### GET /meals/random
> Get random meal recipes


_Response (200 - OK)_

```
{
    "id": "52936",
    "name": "Saltfish and Ackee",
    "category": "Seafood",
    "area": "Jamaican",
    "imgUrl": "https://www.themealdb.com/images/media/meals/vytypy1511883765.jpg",
    "instructions": "For the saltfish, soak the salt cod overnight, changing the water a couple of times.\r\nDrain, then put the cod in a large pan of fresh water and bring to the boil. Drain again, add fresh water and bring to the boil again.\r\nSimmer for about five minutes, or until cooked through, then drain and flake the fish into large pieces. Discard any skin or bones.\r\nFor the dumplings, mix the flour and suet with a pinch of salt and 250ml/9fl oz water to make a dough.\r\nWrap the mixture in clingfilm and leave in the fridge to rest.\r\nOpen the can of ackee, drain and rinse, then set aside.\r\nHeat a tablespoon of olive oil in a pan and fry the onion until softened but not brown.\r\nAdd the spices, seasoning, pepper sauce and sliced peppers and continue to fry until the peppers are tender.\r\nAdd the chopped tomatoes, then the salt cod and mix together. Lastly stir in the ackee very gently and leave to simmer until ready to serve.\r\nWhen you’re almost ready to eat, heat about 1cm/½in vegetable oil in a frying pan and heat until just smoking.\r\nShape the dumpling mix into plum-size balls and shallow-fry until golden-brown. (CAUTION: hot oil can be dangerous. Do not leave the pan unattended.)\r\nDrain the dumplings on kitchen paper and serve with the saltfish and ackee.",
    "ingridients": [
        "450g Salt Cod",
        "400g Ackee",
        "1 chopped Onion",
        "1 tsp  Paprika",
        "2 tsp Curry Powder",
        "2 tsp Jerusalem Artichokes",
        "1 tsp  Hotsauce",
        "1 sliced Red Pepper",
        "1 sliced Yellow Pepper",
        "200g Tomatoes",
        "to taste Salt",
        "to taste Pepper",
        "250g Self-raising Flour",
        "30g Suet",
        "pinch Salt",
        "for frying Olive Oil"
    ]
}
```

_Response (500 - Internal Server Error)_

```
{
    "message": "error message"
}
```


### GET /meals/categories
> Get meals categories


_Response (200 - OK)_

```
[
    {
        "idCategory": "1",
        "strCategory": "Beef",
        "strCategoryThumb": "https://www.themealdb.com/images/category/beef.png",
        "strCategoryDescription": "Beef is the culinary name for meat from cattle, particularly skeletal muscle. Humans have been eating beef since prehistoric times.[1] Beef is a source of high-quality protein and essential nutrients.[2]"
    },
    {
        "idCategory": "2",
        "strCategory": "Chicken",
        "strCategoryThumb": "https://www.themealdb.com/images/category/chicken.png",
        "strCategoryDescription": "Chicken is a type of domesticated fowl, a subspecies of the red junglefowl. It is one of the most common and widespread domestic animals, with a total population of more than 19 billion as of 2011.[1] Humans commonly keep chickens as a source of food (consuming both their meat and eggs) and, more rarely, as pets."
    },
        ...     
    {
        "idCategory": "14",
        "strCategory": "Goat",
        "strCategoryThumb": "https://www.themealdb.com/images/category/goat.png",
        "strCategoryDescription": "The domestic goat or simply goat (Capra aegagrus hircus) is a subspecies of C. aegagrus domesticated from the wild goat of Southwest Asia and Eastern Europe. The goat is a member of the animal family Bovidae and the subfamily Caprinae, meaning it is closely related to the sheep. There are over 300 distinct breeds of goat. Goats are one of the oldest domesticated species of animal, and have been used for milk, meat, fur and skins across much of the world. Milk from goats is often turned into goat cheese."
    }
]

```

_Response (500 - Internal Server Error)_

```
{
    "message": "error message"
}
```


### GET /meals/categories/:category
> Get meals by categories


_Request URL Params_

```
/Beef [categories]
```

_Response (200 - OK)_

```
[
    {
        "strMeal": "Beef and Mustard Pie",
        "strMealThumb": "https://www.themealdb.com/images/media/meals/sytuqu1511553755.jpg",
        "idMeal": "52874"
    },
    {
        "strMeal": "Beef and Oyster pie",
        "strMealThumb": "https://www.themealdb.com/images/media/meals/wrssvt1511556563.jpg",
        "idMeal": "52878"
    },
        ...
    {
        "strMeal": "Vegetable Shepherd’s Pie",
        "strMealThumb": "https://www.themealdb.com/images/media/meals/w8umt11583268117.jpg",
        "idMeal": "53000"
    }
]

```

_Response (500 - Internal Server Error)_

```
{
    "message": "error message"
}
```


### GET /meals/search/:name
> Get meals recipes by name 


_Request URL Params_

```
/Beef and Mustard Pie [name]
```

_Response (200 - OK)_

```
{
    "id": "52874",
    "name": "Beef and Mustard Pie",
    "category": "Beef",
    "area": "British",
    "imgUrl": "https://www.themealdb.com/images/media/meals/sytuqu1511553755.jpg",
    "instructions": "Preheat the oven to 150C/300F/Gas 2.\r\nToss the beef and flour together in a bowl with some salt and black pepper.\r\nHeat a large casserole until hot, add half of the rapeseed oil and enough of the beef to just cover the bottom of the casserole.\r\nFry until browned on each side, then remove and set aside. Repeat with the remaining oil and beef.\r\nReturn the beef to the pan, add the wine and cook until the volume of liquid has reduced by half, then add the stock, onion, carrots, thyme and mustard, and season well with salt and pepper.\r\nCover with a lid and place in the oven for two hours.\r\nRemove from the oven, check the seasoning and set aside to cool. Remove the thyme.\r\nWhen the beef is cool and you're ready to assemble the pie, preheat the oven to 200C/400F/Gas 6.\r\nTransfer the beef to a pie dish, brush the rim with the beaten egg yolks and lay the pastry over the top. Brush the top of the pastry with more beaten egg.\r\nTrim the pastry so there is just enough excess to crimp the edges, then place in the oven and bake for 30 minutes, or until the pastry is golden-brown and cooked through.\r\nFor the green beans, bring a saucepan of salted water to the boil, add the beans and cook for 4-5 minutes, or until just tender.\r\nDrain and toss with the butter, then season with black pepper.\r\nTo serve, place a large spoonful of pie onto each plate with some green beans alongside.",
    "ingridients": [
        "1kg Beef",
        "2 tbs Plain Flour",
        "2 tbs Rapeseed Oil",
        "200ml Red Wine",
        "400ml Beef Stock",
        "1 finely sliced Onion",
        "2 chopped Carrots",
        "3 sprigs Thyme",
        "2 tbs Mustard",
        "2 free-range Egg Yolks",
        "400g Puff Pastry",
        "300g Green Beans",
        "25g Butter",
        "pinch Salt",
        "pinch Pepper"
    ]
}
```

_Response (500 - Internal Server Error)_

```
{
    "message": "error message"
}
```


### GET /drinks/random
> Get random drink recipes

_Response (200 - OK)_

```
{
    "id": "17242",
    "name": "Bombay Cassis",
    "category": "Cocktail",
    "alcoholic": "Alcoholic",
    "instructions": "Add the Bombay Sapphire, Crème de Cassis and lime juice to a balloon glass and swirl well to mix.\r\nFill the glass with good quality cubed ice.\r\nTop up with chilled and freshly opened Fever-Tree Ginger Beer.\r\nGently stir to combine, top with a gently squeezed lime wedge and finish with a fresh ginger slice.",
    "imgUrl": "https://www.thecocktaildb.com/images/media/drink/h1e0e51510136907.jpg",
    "ingridients": [
        "Gin",
        "Creme de Cassis",
        "Fresh Lime Juice",
        "Ginger beer",
        "Lime",
        "Ginger"
    ]
}

```

_Response (500 - Internal Server Error)_

```
{
    "message": "error message"
}
```

### GET /drinks/categories
> Get drinks categories


_Response (200 - OK)_

```
[
    {
        "strCategory": "Ordinary Drink"
    },
    {
        "strCategory": "Cocktail"
    },

        ...

    {
        "strCategory": "Soft Drink / Soda"
    }
]

```

_Response (500 - Internal Server Error)_

```
{
    "message": "error message"
}
```


### GET /drinks/categories/:category
> Get drinks by categories


_Request URL Params_

```
/Beer [categories]
```

_Response (200 - OK)_

```
{
    "drinks": [
        {
            "strDrink": "110 in the shade",
            "strDrinkThumb": "https://www.thecocktaildb.com/images/media/drink/xxyywq1454511117.jpg",
            "idDrink": "15423"
        },
        {
            "strDrink": "Black & Tan",
            "strDrinkThumb": "https://www.thecocktaildb.com/images/media/drink/rwpswp1454511017.jpg",
            "idDrink": "13282"
        },
        ...
        {
            "strDrink": "Winter Rita",
            "strDrinkThumb": "https://www.thecocktaildb.com/images/media/drink/fwpd0v1614006733.jpg",
            "idDrink": "178347"
        }
    ]
}

```

_Response (500 - Internal Server Error)_

```
{
    "message": "error message"
}
```



### GET /drinks/search/:name
> Get drinks recipes by name 


_Request URL Params_

```
/Black & Tan [name]
```

_Response (200 - OK)_

```
{
    "id": "13282",
    "name": "Black & Tan",
    "category": "Beer",
    "alcoholic": "Alcoholic",
    "instructions": "Fill pint glass half full with Bass. Next pour Guiness over a spoon slowly until glass is full. If done correctly the Guiness will stay on top and the Bass on bottom hence the name Black & Tan.",
    "imgUrl": "https://www.thecocktaildb.com/images/media/drink/rwpswp1454511017.jpg",
    "ingridients": [
        "Ale",
        "Guinness stout"
    ]
}
```

_Response (500 - Internal Server Error)_

```
{
    "message": "error message"
}
```