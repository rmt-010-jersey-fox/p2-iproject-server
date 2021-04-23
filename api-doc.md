# Welcome to the E-Commerce Server!

Website E-Commerce Online Terpercaya​

List of available endpoints:

- `POST /register`​
- `POST /login`
- `GET /anime`
- `POST /anime`
- `GET /anime/:id`
- `PUT /anime/:id`
- `DELETE /anime/:id`
- `GET /quotes-anime`
- `GET /manga`

### POST /register

description:
register user

Request:

- data:

```json
{
  "username": "string",
  "email": "string",
  "password": "string"
}
```

Response:

- status: 200
- body:
  ​

```json
{
  "id": "integer",
  "name": "string",
  "email": "string"
}
```

- status: 401
- body:
  ​

```json
{
  "message": ["Email already exist"]
}
```

### POST /login

description:
log in user

Request:

- data:

```json
{
  "email": "string",
  "password": "string"
}
```

Response:

- status: 200
- body:
  ​

```json
{
  "access_token": "jwt string"
}
```

- status: 401
- body:
  ​

```json
{
  "message": ["invalid email or password"]
}
```

- status: 500
- body:
  ​

```json
{
  "message": "Internal server error"
}
```

### GET /anime

description:
get all list anime that user created

Request:

- headers: access_token (string)

Response:

- status: 200
- body:

```json
[
  {
    "id": 1,
    "title": "Naruto",
    "image_url": "https://www.greenscene.co.id/wp-content/uploads/2020/08/Naruto-3.jpg",
    "status": "end",
    "duration": "24 menit",
    "score": 8,
    "createdAt": "2021-04-13T04:36:32.891Z",
    "updatedAt": "2021-04-13T04:36:32.891Z"
  }
]
```

- status: 401
- body:

```json
{
  "message": "You must login first"
}
```

- status: 404
- body:

```json
{
  "message": "error not found"
}
```

- status: 500
- body:
  ​

```json
{
  "message": "Internal server error"
}
```

### POST /anime

description:
Create list anime that user made in form

Request:

- headers:

```
access_token (string)
```

- body:

```json
{
  "title": "string",
  "image_url": "string",
  "status": "string",
  "duration": "string",
  "score": "integer"
}
```

Response:

- status: 201
- body:

```json
{
  "id": 1,
  "title": "Naruto",
  "image_url": "https://www.greenscene.co.id/wp-content/uploads/2020/08/Naruto-3.jpg",
  "status": "end",
  "duration": "24 menit",
  "score": 8,
  "createdAt": "2021-04-13T04:36:32.891Z",
  "updatedAt": "2021-04-13T04:36:32.891Z"
}
```

- status: 401
- body:

```json
{
  "message": "You must login first"
}
```

- status: 400
- body:
  ​

```json
{
  "message": [
    "title is required",
    "image url is required",
    "status is required",
    "duration is required",
    "score is required"
  ]
}
```

- status: 500
- body:
  ​

```json
{
  "message": "Internal server error"
}
```

### GET /anime/:id

description:
get anime that user requested

Request:

- headers:

```
access_token (string)
```

- params:

```
id (integer)
```

Response:

- status: 200
- body:

```json
{
  "id": 1,
  "title": "Naruto",
  "image_url": "https://www.greenscene.co.id/wp-content/uploads/2020/08/Naruto-3.jpg",
  "status": "end",
  "duration": "24 menit",
  "score": 8,
  "createdAt": "2021-04-13T04:36:32.891Z",
  "updatedAt": "2021-04-13T04:36:32.891Z"
}
```

- status: 401
- body:

```json
{
  "message": "You must login first"
}
```

- status: 404
- body:

```json
{
  "message": "error not found"
}
```

- status: 500
- body:
  ​

```json
{
  "message": "Internal server error"
}
```

### PUT /anime/:id

description:
Update anime that user edited

Request:

- headers:

```
access_token (string)
```

- params:

```
id (integer)
```

- body:

```json
{
  "title": "string",
  "image_url": "string",
  "status": "string",
  "duration": "integer",
  "score": "integer"
}
```

Response:

- status: 200
- body:

```json
{
  "id": 1,
  "title": "Naruto",
  "image_url": "https://www.greenscene.co.id/wp-content/uploads/2020/08/Naruto-3.jpg",
  "status": "end",
  "duration": "24 menit",
  "score": 8,
  "createdAt": "2021-04-13T04:36:32.891Z",
  "updatedAt": "2021-04-13T04:36:32.891Z"
}
```

- status: 401
- body:

```json
{
  "message": "You must login first"
}
```

- status: 404
- body:

```json
{
  "message": "error not found"
}
```

- status: 500
- body:
  ​

```json
{
  "message": "Internal server error"
}
```

### DELETE /anime/:id

description:
Delete anime

Request:

- headers:

```
access_token (string)
```

- params:

```
id (integer)
```

Response:

- status: 200
- body:

```json
{
  "message": "your anime's deleted"
}
```

- status: 401
- body:

```json
{
  "message": "You must login first"
}
```

- status: 404
- body:

```json
{
  "message": "error not found"
}
```

- status: 500
- body:
  ​

```json
{
  "message": "Internal server error"
}
```

---

### GET /quotes-anime

description:
get all list quotes that API picked.

Request:

- headers:

```
access_token (string)
```

Response:

- status: 200
- body:

```json
[
  [
    {
      "anime": "Chihayafuru",
      "character": "Tsutomu Komano",
      "quote": "You have to do the things you don't want to do, before you can do the things you truly want to do."
    },
    {
      "anime": "Fairy Tail",
      "character": "Erza Scarlet",
      "quote": "Even if we walk on different paths, one must always live on as you are able! You must never treat your own life as something insignificant! You must never forget the friends you love for as long as you live! Let bloom the flowers of light within your hearts."
    },
    {
      "anime": "Gekkou",
      "character": "Tsukimori Youko",
      "quote": "If you are afraid to get hurt, you won't obtain what you really desire."
    },
    {
      "anime": "xxxHOLiC",
      "character": "Yuuko Ichihara",
      "quote": "If you're gonna have great happiness, it requires great effort in exchange, that's called compensation. For the good things in life, there are the bad. For the bad things in life, there are always the good. In order for you to be happy, you must be willing to accept a burden of a equal amount of unhappiness in exchange as your payment. The more you achieve, the greater the demands will be placed upon you in return."
    },
    {
      "anime": "Naruto",
      "character": "Kiba Inuzuka",
      "quote": "A wall's a wall and there's no wall I can't punch a hole through!"
    },
    {
      "anime": "Higurashi No Naku Koro Ni",
      "character": "Sonozaki Mion",
      "quote": "Life is like a tube of toothpaste. When you've used all the toothpaste down the last squeeze, that's when you've really lived. Live with all your might. And struggle as long as you have life."
    },
    {
      "anime": "Kingdom",
      "character": "Ei Sei",
      "quote": "People's lives don't belong to anyone. Anyone, except themselves. But people have a path. The path of how to use that life."
    }
  ]
]
```

- status: 401
- body:

```json
{
  "message": "you must login first"
}
```

- status: 404
- body:

```json
{
  "message": "error not found"
}
```

- status: 500
- body:
  ​

```json
{
  "message": "Internal server error"
}
```

### GET /manga

description:
get all list manga that API picked.

Request:

- headers:

```
access_token (string)
```

- params:

```
id (integer)
```

Response:

- status: 200
- body:

```json
{
  "id": "1",
  "type": "manga",
  "links": {
    "self": "https://kitsu.io/api/edge/manga/1"
  },
  "attributes": {
    "createdAt": "2013-12-18T13:48:24.164Z",
    "updatedAt": "2021-04-21T12:00:11.065Z",
    "slug": "guardian-dog",
    "synopsis": "Gengo Kurosaka leads a normal life until a run-away alien called \"Six-eyes\" decides to take refuge in his body. From then on, Gengo becomes Ishtar's target, a beautiful alien in charge of making sure the aliens don't turn planet Earth into hunting grounds. Gengo has now to learn to coexist with his parasite to stay alive...",
    "description": "Gengo Kurosaka leads a normal life until a run-away alien called \"Six-eyes\" decides to take refuge in his body. From then on, Gengo becomes Ishtar's target, a beautiful alien in charge of making sure the aliens don't turn planet Earth into hunting grounds. Gengo has now to learn to coexist with his parasite to stay alive...",
    "coverImageTopOffset": 0,
    "titles": {
      "en": null,
      "en_jp": "Guardian Dog",
      "en_us": "Guardian Dog"
    },
    "canonicalTitle": "Guardian Dog",
    "abbreviatedTitles": ["Guardian Dog"],
    "averageRating": "72.39",
    "ratingFrequencies": {
      "2": "0",
      "3": "0",
      "4": "1",
      "5": "0",
      "6": "0",
      "7": "0",
      "8": "1",
      "9": "0",
      "10": "7",
      "11": "0",
      "12": "20",
      "13": "1",
      "14": "26",
      "15": "0",
      "16": "11",
      "17": "0",
      "18": "4",
      "19": "0",
      "20": "4"
    },
    "userCount": 129,
    "favoritesCount": 1,
    "startDate": "2005-01-01",
    "endDate": null,
    "nextRelease": null,
    "popularityRank": 7720,
    "ratingRank": 4673,
    "ageRating": null,
    "ageRatingGuide": null,
    "subtype": "manga",
    "status": "current",
    "tba": null,
    "posterImage": {
      "tiny": "https://media.kitsu.io/manga/poster_images/1/tiny.jpg?1434249400",
      "small": "https://media.kitsu.io/manga/poster_images/1/small.jpg?1434249400",
      "medium": "https://media.kitsu.io/manga/poster_images/1/medium.jpg?1434249400",
      "large": "https://media.kitsu.io/manga/poster_images/1/large.jpg?1434249400",
      "original": "https://media.kitsu.io/manga/poster_images/1/original.jpg?1434249400",
      "meta": {
        "dimensions": {
          "tiny": {
            "width": null,
            "height": null
          },
          "small": {
            "width": null,
            "height": null
          },
          "medium": {
            "width": null,
            "height": null
          },
          "large": {
            "width": null,
            "height": null
          }
        }
      }
    },
    "coverImage": null,
    "chapterCount": 22,
    "volumeCount": 4,
    "serialization": "Comic Rush",
    "mangaType": "manga"
  },
  "relationships": {
    "genres": {
      "links": {
        "self": "https://kitsu.io/api/edge/manga/1/relationships/genres",
        "related": "https://kitsu.io/api/edge/manga/1/genres"
      }
    },
    "categories": {
      "links": {
        "self": "https://kitsu.io/api/edge/manga/1/relationships/categories",
        "related": "https://kitsu.io/api/edge/manga/1/categories"
      }
    },
    "castings": {
      "links": {
        "self": "https://kitsu.io/api/edge/manga/1/relationships/castings",
        "related": "https://kitsu.io/api/edge/manga/1/castings"
      }
    },
    "installments": {
      "links": {
        "self": "https://kitsu.io/api/edge/manga/1/relationships/installments",
        "related": "https://kitsu.io/api/edge/manga/1/installments"
      }
    },
    "mappings": {
      "links": {
        "self": "https://kitsu.io/api/edge/manga/1/relationships/mappings",
        "related": "https://kitsu.io/api/edge/manga/1/mappings"
      }
    },
    "reviews": {
      "links": {
        "self": "https://kitsu.io/api/edge/manga/1/relationships/reviews",
        "related": "https://kitsu.io/api/edge/manga/1/reviews"
      }
    },
    "mediaRelationships": {
      "links": {
        "self": "https://kitsu.io/api/edge/manga/1/relationships/media-relationships",
        "related": "https://kitsu.io/api/edge/manga/1/media-relationships"
      }
    },
    "characters": {
      "links": {
        "self": "https://kitsu.io/api/edge/manga/1/relationships/characters",
        "related": "https://kitsu.io/api/edge/manga/1/characters"
      }
    },
    "staff": {
      "links": {
        "self": "https://kitsu.io/api/edge/manga/1/relationships/staff",
        "related": "https://kitsu.io/api/edge/manga/1/staff"
      }
    },
    "productions": {
      "links": {
        "self": "https://kitsu.io/api/edge/manga/1/relationships/productions",
        "related": "https://kitsu.io/api/edge/manga/1/productions"
      }
    },
    "quotes": {
      "links": {
        "self": "https://kitsu.io/api/edge/manga/1/relationships/quotes",
        "related": "https://kitsu.io/api/edge/manga/1/quotes"
      }
    },
    "chapters": {
      "links": {
        "self": "https://kitsu.io/api/edge/manga/1/relationships/chapters",
        "related": "https://kitsu.io/api/edge/manga/1/chapters"
      }
    },
    "mangaCharacters": {
      "links": {
        "self": "https://kitsu.io/api/edge/manga/1/relationships/manga-characters",
        "related": "https://kitsu.io/api/edge/manga/1/manga-characters"
      }
    },
    "mangaStaff": {
      "links": {
        "self": "https://kitsu.io/api/edge/manga/1/relationships/manga-staff",
        "related": "https://kitsu.io/api/edge/manga/1/manga-staff"
      }
    }
  }
}
```

- status: 401
- body:

```json
{
  "message": "you must login first"
}
```

- status: 404
- body:

```json
{
  "message": "error not found"
}
```

- status: 500
- body:
  ​

```json
{
  "message": "Internal server error"
}
```
