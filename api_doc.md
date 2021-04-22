# Online Movie Forum

is an application to talk about movie, where you can search movie by title, give comments, and add thoso movies into your watchlists. This app has :

- RESTful endpoint for asset's CRUD operation
- JSON formatted response

&nbsp;

## RESTful endpoints

### POST /register

> Register your account

_Request Header_

```
not needed
```

_Request Body_

```
{
  "email": "<email to get insert into>",
  "password": "<password to get insert into>",
}
```

_Response (201 - Created)_

```
{
  "id": "<given by system>",
  "email": "<your email>",
}
```

_Response (400 - Bad Request)_

```
{
    "message": "<error message>"
}
```

_Response (500 - Internal Server Error)_

```
{
    "message": "<error message>"
}
```

---

### POST /login

> Log into your account

_Request Header_

```
not needed
```

_Request Body_

```
{
  "email": "<email to get insert into>",
  "password": "<password to get insert into>",
}
```

_Response (200)_

```
{
  "id": "<userId>"
  "token": "<token string>",
}
```

_Response (400 - Bad Request)_

```
{
    "message": "<error message>"
}
```

_Response (500 - Internal Server Error)_

```
{
    "message": "<error message>"
}
```

---

### GET /comments/:imdbID

> Get all comments's in specific movie

_Request Header_

```
{
  params: <imdbID>
}
```

_Request Body_

```
not needed
```

_Response (200)_

```
[
    {
        "id": 5,
        "comment": "dsds",
        "UserId": 1,
        "imdbId": "tt0848228",
        "createdAt": "2021-04-20T09:08:41.913Z",
        "updatedAt": "2021-04-20T09:08:41.913Z"
    },
    {
        "id": 7,
        "comment": "fdsfsafsd",
        "UserId": 1,
        "imdbId": "tt0848228",
        "createdAt": "2021-04-20T09:14:09.633Z",
        "updatedAt": "2021-04-20T09:14:09.633Z"
    }
]
```

_Response (400 - Bad Request)_

```
{
  "message": "<error message>"
}
```

_Response (500 - Internal Server Error)_

```
{
    "message": "<error message>"
}
```

### GET /latest/

> Get all latest movies

_Request Header_

```
{
  not needed
}
```

_Request Body_

```
not needed
```

_Response (200)_

```
[
    {
        "title": "West Michigan (2021)",
        "thumbnailPotrait": "https://image.filemanager.work/poster/tt10448124.jpg",
        "rating": "6.2",
        "quality": "WebRip",
        "movieId": "148065",
        "detail": {
            "trailer": "https://www.youtube.com/embed/wWmIjP1XkUg",
            "views": "10507",
            "genre": "Comedy, Drama",
            "director": "Riley Warmoth",
            "actors": "Chloe Ray Warmoth, Riley Warmoth, Seth Lee, Sydney Agudong",
            "country": "N/A",
            "duration": "N/A",
            "release": " 2021",
            "thumbnailLandscape": "https://image.filemanager.work/backdrop/backdrop-tt10448124.jpg",
            "description": "\nHannah is a seventeen-year-old girl who struggles to find her place in the world. Around the time that she gives up all hope of fitting in, her grandfather falls ill. She and her brother, Charlie, drive up the coast of West Michigan in order to visit him on his deathbed. However, their journey north takes a turn after their car breaks down in rural Michigan, and Hannah’s search for meaning grows more crucial than ever."
        }
    },
    {
        "title": "The Penthouse (2021)",
        "thumbnailPotrait": "https://image.filemanager.work/poster/tt10730376.jpg",
        "rating": "3.8",
        "quality": "WebRip",
        "movieId": "148063",
        "detail": {
            "trailer": "https://www.youtube.com/embed/YGOmsAP_osY",
            "views": "13476",
            "genre": "Thriller",
            "director": "Massimiliano Cerchi",
            "actors": "Jeannie West, Krista Grotte Saxon, Michael Paré, Nicholas Turturro",
            "country": "USA",
            "duration": "88 min",
            "release": " 2021",
            "thumbnailLandscape": "https://image.filemanager.work/backdrop/backdrop-tt10730376.jpg",
            "description": "\nA man covering up a crime assumes a nosy neighbor may have seen what he did. He turns the neighbor’s lives upside down to keep his secret. But is there more to his motive?"
        }
    },
]
```

_Response (400 - Bad Request)_

```
{
  "message": "<error message>"
}
```

_Response (500 - Internal Server Error)_

```
{
    "message": "<error message>"
}
```

---

### POST /searchMovie

> Search movies by its title

_Request Header_

```
not needed
```

_Request Body_

```
{
        "search": "<movie title>",
    }
```

_Response (200)_

```
[
    {
        "Title": "Shrek",
        "Year": "2001",
        "imdbID": "tt0126029",
        "Type": "movie",
        "Poster": "https://m.media-amazon.com/images/M/MV5BOGZhM2FhNTItODAzNi00YjA0LWEyN2UtNjJlYWQzYzU1MDg5L2ltYWdlL2ltYWdlXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg"
    },
    {
        "Title": "Shrek 2",
        "Year": "2004",
        "imdbID": "tt0298148",
        "Type": "movie",
        "Poster": "https://m.media-amazon.com/images/M/MV5BMDJhMGRjN2QtNDUxYy00NGM3LThjNGQtMmZiZTRhNjM4YzUxL2ltYWdlL2ltYWdlXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg"
    },
]
```

_Response (400 - Bad Request)_

```
{
  "message": "<error message>"
}
```

_Response (500 - Internal Server Error)_

```
{
    "message": "<error message>"
}
```

### POST /details/:imdbID

> Search movie details

_Request Header_

```
not needed
```

_Request Body_

```
{
        "params": {
          "imdbID": <Movie Id>
        }
    }
```

_Response (200)_

```
{
    "Title": "The Amazing Spider-Man 2",
    "Year": "2014",
    "Rated": "PG-13",
    "Released": "02 May 2014",
    "Runtime": "142 min",
    "Genre": "Action, Adventure, Fantasy, Sci-Fi",
    "Director": "Marc Webb",
    "Writer": "Alex Kurtzman (screenplay), Roberto Orci (screenplay), Jeff Pinkner (screenplay), Alex Kurtzman (screen story), Roberto Orci (screen story), Jeff Pinkner (screen story), James Vanderbilt (screen story), Stan Lee (Marvel comic book), Steve Ditko (Marvel comic book)",
    "Actors": "Andrew Garfield, Emma Stone, Jamie Foxx, Dane DeHaan",
    "Plot": "When New York is put under siege by Oscorp, it is up to Spider-Man to save the city he swore to protect as well as his loved ones.",
    "Language": "English",
    "Country": "USA",
    "Awards": "4 wins & 30 nominations.",
    "Poster": "https://m.media-amazon.com/images/M/MV5BOTA5NDYxNTg0OV5BMl5BanBnXkFtZTgwODE5NzU1MTE@._V1_SX300.jpg",
    "Ratings": [
        {
            "Source": "Internet Movie Database",
            "Value": "6.6/10"
        },
        {
            "Source": "Rotten Tomatoes",
            "Value": "51%"
        },
        {
            "Source": "Metacritic",
            "Value": "53/100"
        }
    ],
    "Metascore": "53",
    "imdbRating": "6.6",
    "imdbVotes": "421,143",
    "imdbID": "tt1872181",
    "Type": "movie",
    "DVD": "03 May 2015",
    "BoxOffice": "$202,853,933",
    "Production": "Marvel Studios, Matt Tolmach, Avi Arad",
    "Website": "N/A",
    "Response": "True"
}
```

_Response (400 - Bad Request)_

```
{
  "message": "<error message>"
}
```

_Response (500 - Internal Server Error)_

```
{
    "message": "<error message>"
}
```

### POST /watchlists/:imdbID

> add a movie to watchlists

_Request Header_

```
{
  "token": "<token string>"
}
```

_Request Body_

```
{
  "poster": <poster string>,
  "title": <title string>
},
```

_Response (201 - Created)_

```
 {
    "id": 4,
    "UserId": 1,
    "MovieId": "tt0848228",
    "updatedAt": "2021-04-21T01:35:42.862Z",
    "createdAt": "2021-04-21T01:35:42.862Z"
}
```

_Response (400 - Bad Request)_

```
{
  "message": "<error message>"
}
```

_Response (500 - Internal Server Error)_

```
{
    "message": "<error message>"
}
```

### GET /watchlists/

> Find all watchlists

_Request Header_

```
{
  "token": "<token string>"
}
```

_Request Body_

```
not needed
```

_Response (200)_

```
 [
    {
        "id": 1,
        "UserId": 1,
        "MovieId": "tt0848228",
        "createdAt": "2021-04-20T07:52:58.016Z",
        "updatedAt": "2021-04-20T07:52:58.016Z"
    },
    {
        "id": 3,
        "UserId": 1,
        "MovieId": "tt0848228",
        "createdAt": "2021-04-20T13:30:36.972Z",
        "updatedAt": "2021-04-20T13:30:36.972Z"
    },
    {
        "id": 4,
        "UserId": 1,
        "MovieId": "tt0848228",
        "createdAt": "2021-04-21T01:35:42.862Z",
        "updatedAt": "2021-04-21T01:35:42.862Z"
    }
]
```

_Response (400 - Bad request)_

```
{
  "message": "<error message>"
}
```

_Response (500 - Internal Server Error)_

```
{
    "message": "<error message>"
}
```

### DELETE /watchlists/:id

> delete a watchlist based on Id

_Request Header_

```
{
  "access_token": "<your access token>",
  params: {
    "id": <watchlist id>
  }
}
```

_Request Body_

```
not needed
```

_Response (200)_

```
{
    "msg": "watchlist deleted"
}
```

_Response (401 - Unauthorized)_

```
{
  "message": "<error message>"
}
```

_Response (500 - Internal Server Error)_

```
{
    "message": "<error message>"
}
```

### POST /comments/:imdbID

> delete a product

_Request Header_

```
{
  "access_token": "<your access token>",
  "params": {
          "imdbID": <Movie Id>
        }

}
```

_Request Body_

```
"comment":<comments string>
```

_Response (201 - created)_

```
{
    "id": 11,
    "comment": "dsf",
    "UserId": 1,
    "imdbId": "tt1872181",
    "updatedAt": "2021-04-21T01:45:03.397Z",
    "createdAt": "2021-04-21T01:45:03.397Z"
}
```

_Response (400 - Bad Request)_

```
{
  "message": "<error message>"
}
```

_Response (500 - Internal Server Error)_

```
{
    "message": "<error message>"
}
```

### DELETE /comments/:commentId

> delete a comment

_Request Header_

```
{
  "access_token": "<your access token>",
  params: {
    "id": <watchlist id>
  }
}
```

_Request Body_

```
not needed
```

_Response (200)_

```
{
    "msg": "comment deleted"
}
```

_Response (401 - Unauthorized)_

```
{
  "message": "<error message>"
}
```

_Response (500 - Internal Server Error)_

```
{
    "message": "<error message>"
}
```
