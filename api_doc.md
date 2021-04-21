# ecommerce App endpoint
ecommerce is an application for shopping.

**End Point that don't need authentication**
 1. POST /register
 2. POST /login
 3. POST/ googleLogin
 4. GET /books/:category
 5. GET /bookDetails/:isbn

**End Point that need authentication**
 1. GET /favouriteBooks
 2. POST /favouriteBooks
 3. DELETE /favouriteBooks/:isbn
 4. GET /favouriteBooks/comments/:isbn
 5. POST /favouriteBooks/comments
 6. PATCH /favouriteBooks/comments
 7. DELETE /favouriteBooks/comments/:isbn
 8. GET /favouriteBooks/likes:isbn
 9. POST /favouriteBooks/likes
 10. PATCH /favouriteBooks/likes

**End Point that need authorization**
 1. POST /nyTimes

 ## **POST /register**
> signUp User

_Request Body_
```
{
  "username": "<string>",
	"email": "<string>",
	"password": "<string>"
}
```
_Response (201)_
```
{
	"id": <integer>,
  "username": "<string>",
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
> signIn user

_Request Body_
```
{
	"email": "<string>",
	"password": "<string>"
}
```
_Response (200)_
```
{
  "token": <your token>
  "username": "<string>"
}
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
> signIn User by Google Using Google Account

_Request Body_
```
{"id_token": "<token from google signIn>",}
```
_Response (200)_
```
{
  "token": "<your token>"
  "username": "<string>"
}
```
_Response (500 - internal server error)_
```
{"message": "<500's message>"}
```

## **GET /books/:category** <br/>
> Get all Books Data By Category

_Request Header_
```
not needed
```
_Request Body_
```
not needed
```
_Request Params_
```
{"category": <string>"}
```
_Response (200)_
```
[
	{
    "category": "<string>",
    "isbn": "<string>",
    "publisher": "<string>",
    "description": "<string>",
    "title": "<string>",
    "author": "<string>",
    "bookImage": "<string>",
    "productURL": "<string>",
    "status": "<string>",
    "createdAt": "<date>",
    "updatedAt": "<date>"
	},
]
```
_Response (500 - Internal Server Error)_
```
{"message": "<500's message>"}
```
## **GET /bookDetails/:isbn** <br/>
> Get One Book Data by its ISBN

_Request Header_
```
not needed
```
_Request Body_
```
not needed
```
_Request Params_
```
{"isbn": <string>"}
```
_Response (200)_
```
{
  "category": "<string>",
  "isbn": "<string>",
  "publisher": "<string>",
  "description": "<string>",
  "title": "<string>",
  "author": "<string>",
  "bookImage": "<string>",
  "productURL": "<string>",
  "status": "<string>",
  "createdAt": "<date>",
  "updatedAt": "<date>"
}
```
_Response (404 - Data Not Found)_
```
{"message": "data not found"}
```
_Response (500 - Internal Server Error)_
```
{"message": "<500's message>"}
```
  ## **GET /favouriteBooks** <br/>
> Get all favourite books that wished by User

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
    "category": "<string>",
    "isbn": "<string>",
    "publisher": "<string>",
    "description": "<string>",
    "title": "<string>",
    "author": "<string>",
    "bookImage": "<string>",
    "productURL": "<string>",
    "status": "<string>",
    "createdAt": "<date>",
    "updatedAt": "<date>",
    "BookUser": {
        "isbn": "<string>",
        "userId": <integer>,
        "wished": <boolean>,
        "liked": <boolean>,
        "comment": "<string>",
        "createdAt": "<date>",
        "updatedAt": "<date>"
    }
  },
]
```
_Response (404 - Data Not Found)_
```
{"message": "data not found"}
```
_Response (500 - Internal Server Error)_
```
{"message": "<500's message>"}
```

## **POST /favouriteBooks** <br/>
> Create or update favourite Books

_Request Header_
```
{"token": "<token>"}
```
_Request Body_
```
{
	"isbn": "<string>",
}
```
_Response (200) Update the Data_ 
```
{
  "isbn": "<string>",
  "userId": <integer>,
  "wished": <boolean>,
  "liked": <boolean>,
  "comment": "<string>",
  "createdAt": "<date>",
  "updatedAt": "<date>"
}
```
_Response (201) Create New Data_ 
```
{
  "isbn": "<string>",
  "userId": <integer>,
  "wished": <boolean>,
  "liked": <boolean>,
  "comment": "<string>",
  "createdAt": "<date>",
  "updatedAt": "<date>"
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

## **DELETE /favouriteBooks/:isbn** <br/>
> Delete favourite Book from wishlist

_Request Header_
```
{"token": "<your token>"}
```
_Request Params_
```
{"isbn": "<string>"}
```
_Response (200)_
```
{`Buku berhasil dihapus`},
```
_Response (500 - Internal Server Error)_
```
{"message": "<500's message>"}
```

## **GET /favouriteBooks/comments/:isbn** <br/>
> Get all comments data on One Book 

_Request Header_
```
{"token": "<your token>"}
```
_Request Params_
```
{"isbn": <string>"}
```
_Response (200)_
```
[
  {
    "username": "<string>",
    "comment": "<string>",
    "commented": <boolean>
  }
]
```
_Response (500 - Internal Server Error)_
```
{"message": "<500's message>"}
```
## **POST /favouriteBooks/comments/:isbn** <br/>
> Post new comment on one Book

_Request Header_
```
{"token": "<your token>"}
```
_Request Body_
```
{
	"isbn": "<string>",
  "comment": "<string>",
}
```
_Response (200)_
```
{
    "isbn": "<string>",
    "userId": <integer>,
    "wished": <boolean>,
    "liked": <boolean>,
    "comment": "<string>",
    "createdAt": <date>,
    "updatedAt": <date>
}
```
_Response (400)_ 
```
{"message": "you already comment this book"}
```
_Response (500 - Internal Server Error)_
```
{"message": "<500's message>"}
```

## **PATCH /favouriteBooks/comments** <br/>
> Update comment on one Book

_Request Header_
```
{"token": "<your token>"}
```
_Request Body_
```
{
	"isbn": "<string>",
  "comment": "<string>",
}
```
_Response (200)_
```
{
    "isbn": "<string>",
    "userId": <integer>,
    "wished": <boolean>,
    "liked": <boolean>,
    "comment": "<string>",
    "createdAt": <date>,
    "updatedAt": <date>
}
```
_Response (400)_ 
```
{"message": "You haven't give any comment on this book"}
```
_Response (500 - Internal Server Error)_
```
{"message": "<500's message>"}
```

## **DELETE /favouriteBooks/comments/:isbn** <br/>
> Update comment on one Book

_Request Header_
```
{"token": "<your token>"}
```
_Request Params_
```
{"isbn": <string>"}
```
_Response (200)_
```
{message : "the comment has been deleted"}
```
_Response (400)_ 
```
{"message": "You haven't give any comment on this book"}
```
_Response (500 - Internal Server Error)_
```
{"message": "<500's message>"}
```
## **GET /favouriteBooks/likes/:isbn** <br/>
> Get liked, wished amount and whether the user like or wish the book

_Request Header_
```
{"token": "<your token>"}
```
_Request Params_
```
{"isbn": <string>"}
```
_Response (200)_
```
{
  "jumlahLike": <integer>,
  "jumlahWish": <integer>,
  "liked": <boolean>,
  "wished": <boolean>
}
```
_Response (500 - Internal Server Error)_
```
{"message": "<500's message>"}
```

## **POST /favouriteBooks/likes/** <br/>
> Like One Book

_Request Header_
```
{"token": "<your token>"}
```
_Request Body_
```
{
	"isbn": "<string>",
}
```
_Response (200) Update the Data_ 
```
{
  "isbn": "<string>",
  "userId": <integer>,
  "wished": <boolean>,
  "liked": <boolean>,
  "comment": "<string>",
  "createdAt": "<date>",
  "updatedAt": "<date>"
}
```
_Response (201) Create New Data_ 
```
{
  "isbn": "<string>",
  "userId": <integer>,
  "wished": <boolean>,
  "liked": <boolean>,
  "comment": "<string>",
  "createdAt": "<date>",
  "updatedAt": "<date>"
}
```
_Response (400) - SequelizeValidationError or book already liked_ 
```
{"message": "<400's message>"}
```
_Response (500 - Internal Server Error)_
```
{"message": "<500's message>"}
```

## **PATCH /favouriteBooks/likes/** <br/>
> Dislike One Book

_Request Header_
```
{"token": "<your token>"}
```
_Request Body_
```
{
	"isbn": "<string>",
}
```
_Response (200) Update the Data_ 
```
{
  "isbn": "<string>",
  "userId": <integer>,
  "wished": <boolean>,
  "liked": <boolean>,
  "comment": "<string>",
  "createdAt": "<date>",
  "updatedAt": "<date>"
}
```
_Response (400) - SequelizeValidationError or book already disliked or user haven't like the book yet_ 
```
{"message": "<400's message>"}
```
_Response (500 - Internal Server Error)_
```
{"message": "<500's message>"}
```

## **POST /nyTimes**
> update books data in database

_Request Body_
```
{
	"key": "<string>",
}
```
_Response (200)_
```
{'input data from NY Times to Database Sucess'}
```
_Response (400)_
```
{"message" :"wrong key"}
```
_Response (403)_
```
{"message" :"you must input key"}
```
_Response (500 - internal server error)_
```
{"message": "<500's message>"}
```