LayarTancepWeb
LayarTancepWeb adalah sebuah web yang menyediakan pelayanan info terbaru sebuah film yang ada di dunia bahkan mars, project ini sudah menggunakan single-page dan juga design yang elegant. enjoy the explore in my web app :)
* RESFUL endpoint for assest's CRUD operation and workflow program backend
* JSON formatted response

&nbsp;


## All requirement package
- bcrypt
- jsonwebtoken
- cors
- axios
- express
- postgres
- dotenv
- sequelize-cli
- nodemon 

## RESTFUL endpoints

## POST /register

> create user

Request body

```json

{
    "email": "<your email>",
    "password": "<your password>"
}
```

Response (201)

```json

{
    "id": 1,
    "email": "<testing@mail.com>",
    "username": "<username>"
}
```

Response (500 - internal server wrong)

```json
{
    "message": "internal server error"
}
```

## POST /login

Request body

```json

{
    "email": "<your email>",
    "password": "<your password>"
}
```

Response (200)

```json
{
    "id": 1,
    "email": "<your email>"
    "access_token": "<your_token>"
}
```

Response (400 - Bad Request)

```json
{
    "message": "invalid email / password"
}
```

Response (500 - wrong server)

```json
{
    "message": "internal server error"
}
```


## GET /movies/popular

Request headers

```json
{
    "access_token": "<your_token>",
    "authorization": "< api_key >"
}
```

Request body

```
not needed
```

Response (200)

```json
[
    {
        "adult": false,
        "backdrop_path": "/inJjDhCjfhh3RtrJWBmmDqeuSYC.jpg",
        "genre_ids": [
            28,
            878
        ],
        "id": 399566,
        "original_language": "en",
        "original_title": "Godzilla vs. Kong",
        "overview": "In a time when monsters walk the Earth, humanity’s fight for its future sets Godzilla and Kong on a collision course that will see the two most powerful forces of nature on the planet collide in a spectacular battle for the ages.",
        "popularity": 4668.083,
        "poster_path": "/pgqgaUx1cJb5oZQQ5v0tNARCeBp.jpg",
        "release_date": "2021-03-24",
        "title": "Godzilla vs. Kong",
        "video": false,
        "vote_average": 8.3,
        "vote_count": 4759
    }
]
```

Response (500 - wrong server)

```json
{
    "message": "internal server error"
}
```

## GET /movies/upcoming

Request headers

```json
{
    "access_token": "<your_token>",
    "authorization": "< api_key >"
}
```

Request body

```
not needed
```

Response (200)

```json
[
    {
        "adult": false,
        "backdrop_path": "/inJjDhCjfhh3RtrJWBmmDqeuSYC.jpg",
        "genre_ids": [
            28,
            878
        ],
        "id": 399566,
        "original_language": "en",
        "original_title": "Godzilla vs. Kong",
        "overview": "In a time when monsters walk the Earth, humanity’s fight for its future sets Godzilla and Kong on a collision course that will see the two most powerful forces of nature on the planet collide in a spectacular battle for the ages.",
        "popularity": 4668.083,
        "poster_path": "/pgqgaUx1cJb5oZQQ5v0tNARCeBp.jpg",
        "release_date": "2021-03-24",
        "title": "Godzilla vs. Kong",
        "video": false,
        "vote_average": 8.3,
        "vote_count": 4759
    }
]
```

Response (500 - wrong server)

```json
{
    "message": "internal server error"
}
```

## GET /movies/top_rated

Request headers

```json
{
    "access_token": "<your_token>",
    "authorization": "< api_key >"
}
```

Request body

```
not needed
```

Response (200)

```json
[
    {
        "adult": false,
        "backdrop_path": "/inJjDhCjfhh3RtrJWBmmDqeuSYC.jpg",
        "genre_ids": [
            28,
            878
        ],
        "id": 399566,
        "original_language": "en",
        "original_title": "Godzilla vs. Kong",
        "overview": "In a time when monsters walk the Earth, humanity’s fight for its future sets Godzilla and Kong on a collision course that will see the two most powerful forces of nature on the planet collide in a spectacular battle for the ages.",
        "popularity": 4668.083,
        "poster_path": "/pgqgaUx1cJb5oZQQ5v0tNARCeBp.jpg",
        "release_date": "2021-03-24",
        "title": "Godzilla vs. Kong",
        "video": false,
        "vote_average": 8.3,
        "vote_count": 4759
    }
]
```

Response (500 - wrong server)

```json
{
    "message": "internal server error"
}
```

## GET /movies/:id

Request headers

```json
{
    "access_token": "<your_token>",
    "authorization": "< api_key >"
}
```
Request params
```
    req.params.id
```

Request body

```
not needed
```

Response (200)

```json
[
    {
        "adult": false,
        "backdrop_path": "/inJjDhCjfhh3RtrJWBmmDqeuSYC.jpg",
        "genre_ids": [
            28,
            878
        ],
        "id": 399566,
        "original_language": "en",
        "original_title": "Godzilla vs. Kong",
        "overview": "In a time when monsters walk the Earth, humanity’s fight for its future sets Godzilla and Kong on a collision course that will see the two most powerful forces of nature on the planet collide in a spectacular battle for the ages.",
        "popularity": 4668.083,
        "poster_path": "/pgqgaUx1cJb5oZQQ5v0tNARCeBp.jpg",
        "release_date": "2021-03-24",
        "title": "Godzilla vs. Kong",
        "video": false,
        "vote_average": 8.3,
        "vote_count": 4759
    }
]
```

Response (500 - wrong server)

```json
{
    "message": "internal server error"
}
```

## GET /movies/genre/list

Request headers

```json
{
    "access_token": "<your_token>",
    "authorization": "< api_key >"
}
```

Request body

```
not needed
```

Response (200)

```json
[
    {
        "adult": false,
        "backdrop_path": "/inJjDhCjfhh3RtrJWBmmDqeuSYC.jpg",
        "genre_ids": [
            28,
            878
        ],
        "id": 399566,
        "original_language": "en",
        "original_title": "Godzilla vs. Kong",
        "overview": "In a time when monsters walk the Earth, humanity’s fight for its future sets Godzilla and Kong on a collision course that will see the two most powerful forces of nature on the planet collide in a spectacular battle for the ages.",
        "popularity": 4668.083,
        "poster_path": "/pgqgaUx1cJb5oZQQ5v0tNARCeBp.jpg",
        "release_date": "2021-03-24",
        "title": "Godzilla vs. Kong",
        "video": false,
        "vote_average": 8.3,
        "vote_count": 4759
    }
]
```

Response (500 - wrong server)

```json
{
    "message": "internal server error"
}
```