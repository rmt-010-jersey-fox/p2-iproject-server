* **Method** <br>

the path that I use <br>

`GET` | `POST` <br>

**Tech Stack** <br>

* Express Js <br>
* PostgreSQL <br>
* Node Js <br>
* Sequelize <br>
* Socket.io <br>
* Vue
* Bootstrap
* Dotenv
* Jsonwebtoken <br>

List of available endpoints:
- `POST /register`
- `POST /login`
- `GET /showCase/`
- `GET /globalCase/`
- `GET /news/`

## Global Response

Response (500 - Internal Server Error)_
```
{
	"message" : "<message err>"
}
```

## ENDPOINTS

### GET/showCase

Response( 200 - OK)
```
[
  {
    "name": "string",
    "positif": "integer",
    "sembuh": "integer",
    "meninggal": "integer",
    "dirawat": "integer"
  }
]
```

Response (500 - Internal Server Error)

```
{
	"message" : "<message for 500>"
}
```

### GET/globalCase

Response( 200 - OK)
```
[
  {
    "Country": "string",
    "Confirmed Cases": "integer",
    "Death Cases": "integer",
    "Active Cases": "integer",
    "Recovered": "integer"
  }
]
```

Response (500 - Internal Server Error)

```
{
	"message" : "<message for 500>"
}
```

### GET/news

Response( 200 - OK)
```
[
  {
    "title": "string",
    "imageUrl": "string",
    "img": "string",
    "content": "string"",
    "link": "string"
  }
]
```

Response (500 - Internal Server Error)
```
{
	"message" : "<message for 500>"
}
```

### POST/login

> Login user

_Request Body_
```
{
	'name': 'string',
	'email': 'string'
}
```
_Response (200)_
```
{
	'access_token': 'string'
}
```

Response (500 - Internal Server Error)
```
{
	"message" : "<message for 500>"
}
```

### POST /register

  

> Register user
  

_Request Body_
```
{
	'name': 'string',
	'email': 'string'
}
```

_Response (201 - Created)_

```
{
	'user' : {
		name: string,
		email: string
	}
}
```

Response (500 - Internal Server Error)
```
{
	"message" : "<message for 500>"
}
```