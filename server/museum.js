const axios = require('axios')

const dataMuseum =  []

axios.get('https://api.artic.edu/api/v1/artworks')
  .then( ({data})=> {
    // handle success
    //dataMuseum.push(response.data[0].title)
  console.log(data);
   data.data.forEach(element => {
        let input = {
            id: element.id,
            title: element.title,
            place_of_origin:element.place_of_origin,
            category_titles: element.category_titles,
            image: element.image_id,
            artist: element.artist_title
        }
        dataMuseum.push(input)
    });
    console.log(dataMuseum);
    ;
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })
  
