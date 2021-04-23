# MyBook App Server
MyBook App is an application to create and manage your digital Library. This app has : 
* RESTful endpoint for asset's CRUD operation
* JSON formatted response

&nbsp;

## RESTful endpoints
### POST /login

> login to existing account

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

_Response (200 - Ok)_
```
{
    "id": "<user id>",
    "email": "<user email>",
    "access_token": "<given access token by system>",
    "firstName": "<user firstName>"
}
```
_Response (500 - Internal Server Error)_
```
{
    "message": <error detail>
}
```
_Response (401 - Unauthorized)_
```
{
    "message": "Invalid Email / Password"
}
```

---
### POST /register

> register new account

_Request Header_
```
not needed
```

_Request Body_
```
{
    "firstName": "<first name to get insert into>",
    "lastName": "<last name to get insert into>",
    "email": "<email to get insert into>",
    "password": "<password to get insert into>",
}
```

_Response (201 - Created)_
```
{
    "id" "<given id by system>"
    "email": "<posted email>"
    "access_token": "<given access token by system>"
    "firstName": "<posted firstName>"
}
```
_Response (500 - Internal Server Error)_
```
{
    "message": <error detail>
}
```

---
### GET /profile

> Get current user profile

_Request Header_
```
{
    "access_token": "<your access token>"
}
```

_Request Body_
```
not needed
```

_Response (200 - Ok)_
```
{
    "id": 1,
    "email": "<asset email>",
    "firstName": "<asset firstName>",
    "lastName": "<asset lastName>",
    "createdAt": "2021-03-29T09:46:51.225Z",
    "updatedAt": "2021-03-29T09:46:51.225Z"
}
```
_Response (500 - Internal Server Error)_
```
{
    "message": <error detail>
}
```
_Response (400 - Bad Request)_
```
{
    "message": "Login Required"
}
```

---
### GET /books

> Get current user books

_Request Header_
```
{
    "access_token": "<your access token>"
}
```

_Request Body_
```
not needed
```

_Response (200 - Ok)_
```
[
   {
        "id": 1,
        "title": "<asset title>",
        "author": "<asset author>",
        "description": "<asset description>",
        "preview": "<asset preview>",
        "released_year": "<asset released year>",
        "UserId": "<asset user id>",
        "createdAt": "2021-03-29T09:46:51.225Z",
        "updatedAt": "2021-03-29T09:46:51.225Z"
   },
   {
        "id": 2,
        "title": "<asset title>",
        "author": "<asset author>",
        "description": "<asset description>",
        "preview": "<asset preview>",
        "released_year": "<asset released year>",
        "UserId": "<asset user id>",
        "createdAt": "2021-03-29T09:46:51.225Z",
        "updatedAt": "2021-03-29T09:46:51.225Z"
   },
   ...
]
```
_Response (500 - Internal Server Error)_
```
{
    "message": <error detail>
}
```
_Response (400 - Bad Request)_
```
{
    "message": "Login Required"
}
```

---
### POST /books

> Add new book to user library

_Request Header_
```
{
    "access_token": "<your access token>"
}
```

_Request Body_
```
{
    "title": "<title to get insert to>",
    "author": "<author to get insert to>",
    "description": "<description to get insert to>",
    "preview": "<preview to get insert to>",
    "released_year": "<released year to get insert to>",
}
```

_Response (201 - Created)_
```
{
    "id": "<given id by system>",
    "title": "<posted title>",
    "author": "<posted author>",
    "description": "<posted description>",
    "preview": "<posted preview>",
    "released_year": "<posted released year>",
    "UserId": "<current user id>",
    "updatedAt": "2021-03-29T09:46:51.225Z",
    "createdAt": "2021-03-29T09:46:51.225Z"
}
```
_Response (500 - Internal Server Error)_
```
{
    "message": <error detail>
}
```

---
### GET /books/:id

> Get single book detail as defined by the id provided

_Request Params_
```
    Required: id=[integer]
```

_Request Header_
```
{
    "access_token": "<your access token>"
}
```

_Request Body_
```
not needed
```

_Response (200)_
```
{
    "id": 1,
    "title": "<asset title>",
    "author": "<asset author>",
    "description": "<asset description>",
    "preview": "<asset preview>",
    "released_year": "<asset released year>",
    "UserId": "<asset user id>",
    "createdAt": "2021-03-29T09:46:51.225Z",
    "updatedAt": "2021-03-29T09:46:51.225Z"
}
```
_Response (500 - Internal Server Error)_
```
{
    "message": <error detail>
}
```
_Response (404 - Not Found)_
```
{
    "message": "Book Not Found"
}
```
_Response (401 - Unauthorized)_
```
{
    "message": "Unauthorized"
}
```

---
### PUT /books/:id

> Update a book defined by the id provided

_Request Params_
```
    Required: id=[integer]
```

_Request Header_
```
{
    "access_token": "<your access token>"
}
```

_Request Body_
```
{
    "title": "<title to get insert to>",
    "author": "<author to get insert to>",
    "description": "<description to get insert to>",
    "preview": "<preview to get insert to>",
    "released_year": "<released year to get insert to>",
}
```

_Response (200 - OK)_
```
{
    "id": "<given id by system>",
    "title": "<posted title>",
    "author": "<posted author>",
    "description": "<posted description>",
    "preview": "<posted preview>",
    "released_year": "<posted released year>",
    "UserId": "<current user id>",
    "updatedAt": "2021-03-29T09:46:51.225Z",
    "createdAt": "2021-03-29T09:46:51.225Z"
}
```
_Response (500 - Internal Server Error)_
```
{
    "message": <error detail>
}
```
_Response (404 - Not Found)_
```
{
    "message": "Book not found"
}
```
_Response (401 - Unauthorized)_
```
{
    "message": "Unauthorized"
}
```

---
### DELETE /books/:id

> Delete a product defined by the id provided

_Request Params_
```
  Required: id=[integer]
```

_Request Header_
```
{
  "access_token": "<your access token>"
}
```

_Request Body_
```
not needed
```

_Response (200 - OK)_
```
{
  "message": "Book deleted"
}
```
_Response (500 - Internal Server Error)_
```
{
    "message": <error detail>
}
```
_Response (404 - Not Found)_
```
{
    "message": "Book not found"
}
```
_Response (401 - Unauthorized)_
```
{
    "message": "Unauthorized"
}
```

---
### POST /books/search

> search books based on user input

_Request Header_
```
{
    "access_token": "<your access token>"
}
```

_Request Body_
```
{
    "userSearch": "<posted userSearch>"
}
```

_Response (200 - Ok)_
```
[
   {
        "id": "<search results id>",
        "title": "<search results title>",
        "author": "<search results author>",
        "description": "<search results description>",
        "preview": "<search results preview>",
        "released_year": "<search results released year>",
   },
   {
        "id": "<search results id>",
        "title": "<search results title>",
        "author": "<search results author>",
        "description": "<search results description>",
        "preview": "<search results preview>",
        "released_year": "<search results released year>",
   },
   ...
]
```
_Response (500 - Internal Server Error)_
```
{
    "message": <error detail>
}
```
_Response (400 - Bad Request)_
```
{
    "message": "Login Required"
}
```

---
### GET /books/recommendation

> get books recommendation

_Request Header_
```
{
    "access_token": "<your access token>"
}
```

_Request Body_
```
not needed
```

_Response (200 - Ok)_
```
[
   {
        "rank": "<search results rank>",
        "rank_last_week": "<search results rank last week>",
        "asterisk": "<search results asterisk>",
        "dagger": "<search results dagger>",
        "primary_isbn10": "<search results primary isbn10>",
        ...
   },
   {
        "rank": "<search results rank>",
        "rank_last_week": "<search results rank last week>",
        "asterisk": "<search results asterisk>",
        "dagger": "<search results dagger>",
        "primary_isbn10": "<search results primary isbn10>",
        ...
   },
   ...
]
```
_Response (500 - Internal Server Error)_
```
{
    "message": <error detail>
}
```
_Response (400 - Bad Request)_
```
{
    "message": "Login Required"
}
```