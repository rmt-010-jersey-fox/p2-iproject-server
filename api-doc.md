# climate news portal

​
List of available endpoints:
​
- `POST /register`
- `POST /login`
- `GET /`
- `GET /comments`
- `POST /comments`
- `PUT /comments/:id`
- `DELETE /comments/:id`

### POST /register

Request:

- data:

```json
{
  "email": "string",
  "password": "string",
  "username": "string"
}
```

Response:

- status: 201
- body:
  ​

```json
{
  "id": "integer",
  "email": "string",
  "username": "string"
}
```

_Response (400 - Bad Request)_
```
{
  "message": error validation message
}
```

_Response (500 - Bad Request)_
```
{
  "message": error message or 'Internal Server Error'
}
```

## POST /login

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
    "id": "integer",
    "email": "string",
    "access_token": "jwt string"
}
```

_Response (400 - Bad Request)_
```
{
  "message": error validation message
}
```

_Response (500 - Bad Request)_
```
{
  "message": error message or 'Internal Server Error'
}
```

### GET /

description: 
  get all news from newsapi.org

Request:

- headers: api-key (string)

Response:

- status: 200
- body:

```json
{
  "data": [
    {
      "title": "string",
      "description": "string",
      "url": "string",
      "urlToImage": "string"
    }
  ]
}
```

_Response (400 - Bad Request)_
```
{
  "message": error input message
}
```

_Response (500 - Bad Request)_
```
{
  "message": error message or 'Internal Server Error'
}
```


### POST /comments

description: 
  add a comments to an article

Request:

- headers: access_token (string)

Response:

- status: 201
- body:

```json
{
    "comments": [
    {
      "id": "integer",
      "UserId": "integer",
      "articleTitle": "string",
      "comment": "string"
    }
  ]
}
```

_Response (400 - Bad Request)_
```
{
  "message": error validation message
}
```

_Response (500 - Bad Request)_
```
{
  "message": error message or 'Internal Server Error'
}
```

### PUT /comments/:id

description: 
  update commented articles

Request:

- headers: access_token (string)
- params: 
  - id: "integer" required


Response:

- status: 200
- body:

```json
{
    "comments": [
    {
      "id": "integer",
      "UserId": "integer",
      "articleTitle": "string",
      "comment": "string"
    }
  ]
}
```

_Response (400 - Bad Request)_
```
{
  "message": error validation message
}
```
_Response (401 - Bad Request)_
```
{
  "message": unauthorized
}
```
_Response (500 - Bad Request)_
```
{
  "message": error message or 'Internal Server Error'
}
```
{
  "message": error message or 'Internal Server Error'
}
```

```
### DELETE /comments/:id

description: 
  delete comment

Request:

- headers: access_token (string)
- params: 
  - id: "integer" required

Response:

- status: 200
- body:

```json
{
  "message": "comment deleted"
}
```

_Response (400 - Bad Request)_
```
{
  "message": error validation message
}
```
_Response (401 - Bad Request)_
```
{
  "message": unauthorized
}
```
_Response (500 - Bad Request)_
```
{
  "message": error message or 'Internal Server Error'
}
```
