# ecommerce App endpoint
ecommerce is an application for shopping.

**End Point that don't need authentication**
 1. POST /register
 2. POST /login
 3. POST/ googleLogin
 4. GET /nytimes
 5. GET /books

**End Point that need authentication**
 1. GET /favouriteBooks
 2. POST /favouriteBooks/

**End Point that need authentication amd authorization**
 1. DELETE /favouriteBooks/:id

 ## **POST /register**
> signUp User

_Request Body_
```
{
	"email": "<string>",
	"password": "<string>"
}
```
_Response (201)_
```
{
	"id": <integer>,
	"email": "<string>"
}
```
_Response (400 - SequelizeValidationError  or SequelizeUniqueConstraintError)_
```
{"message": <string>}
```
_Response (500 - internal server error)_
```
{"message": "<500's message>"}
```
## **POST /login**
> signIn user or admin

_Request Body_
```
{
	"email": "<string>",
	"password": "<string>"
}
```
_Response (200)_
```
{"token": <your token>}
```
_Response (401)_
```
{ "message": "invalid password or email"}
```
_Response (500 - internal server error)_
```
{"message": "<500's message>"}
```
## **POST /googleLogin**
> signIn User by Google

_Request Body_
```
{"id_token": "<token from google signIn>",}
```
_Response (200)_
```
{"token": "<your token>"}
```
_Response (500 - internal server error)_
```
{"message": "<500's message>"}
```

## **get /nyTimes**
> signIn User by Google

_Request Body_
```
not needed
```
_Response (200)_
```
{'input data from NY Times to Database Sucess'}
```
_Response (500 - internal server error)_
```
{"message": "<500's message>"}
```

  ## **GET /books** <br/>
> Get all Books Data

_Request Header_
```
not needed
```
_Request Body_
```
not needed
```
_Response (200)_
```
[
	{
		"id": <integer>,
        "category": "<string>",
        "isbn": "<string>",
        "publisher": "<string>",
        "description": "<string>",
        "title": "<string>",
        "author": "<string>",
        "bookImage": "<string>",
        "productURL": "<string>",
        "createdAt": "<date>",
        "updatedAt": "<date>"
	},
]
```
_Response (500 - Internal Server Error)_
```
{"message": "<500's message>"}
```
  ## **GET /favouriteBooks** <br/>
> Get all favourite books

_Request Header_
```
{"token": "<token>"}
```
_Request Body_
```
not needed
```
_Response (200)_
```
[
	{
		"id": <integer>,
        "category": "<string>",
        "isbn": "<string>",
        "publisher": "<string>",
        "description": "<string>",
        "title": "<string>",
        "author": "<string>",
        "bookImage": "<string>",
        "productURL": "<string>",
        "createdAt": "<date>",
        "updatedAt": "<date>"
	},
]
```
_Response (500 - Internal Server Error)_
```
{"message": "<500's message>"}
```

## **POST /favouriteBooks** <br/>
> Create new favourite Books

_Request Header_
```
{"token": "<token>"}
```
_Request Body_
```
{
	"bookId": "<integer>",
}
```
_Response (200)_ 
```
{
	"bookId": <integer>,
    "userId": <integer>,
    "updatedAt": "<date>",
    "createdAt": "<date>"
}
```
_Response (400) - SequelizeValidationError or book already in wishlist_ 
```
{"message": "<400's message>"}
```
_Response (500 - Internal Server Error)_
```
{"message": "<500's message>"}
```

## **DELETE /favouriteBooks/:id** <br/>
> Delete carts

_Request Header_
```
{"access_token": "<your access token>"}
```
_Request Params_
```
{"id": <integer>"}
```
_Response (200)_
```
{`Buku berhasil dihapus`},
```
_Response (500 - Internal Server Error)_
```
{"message": "<500's message>"}
```