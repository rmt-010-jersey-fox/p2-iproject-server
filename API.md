# E-commerce

## Available endpoints

- `POST /register`
- `POST /login`

- `GET /bookmarks`
- `POST /bookmarks`
- `DELETE /bookmarks/:id`


## RESTful endpoints

### POST /register

> create user

_Request Header_

```
    not needed
```

_Request Body_

```
{
    email : "test1@mail.com",
    password : "password" 
}
```

_Response (201 - Created)_

```
{
    "id": 4,
    "email": "test1@mail.com",
    "password": "$2b$08$6vAR11yQu7mRolNxmhuQ2.aFJOYIyUtP.8/G4L7QEc1m/ySNkeB7y",
    "updatedAt": "2021-04-21T08:53:13.438Z",
    "createdAt": "2021-04-21T08:53:13.438Z"
}
```

_Response (400 - Bad Request)_

```
{
    "message": [
        "email already exists",
        "email can't be empty",
        "invalid email format"
    ]
}
```

_Response (500 - Internal Server Error)_

```
{
    "message" : "Internal Server Error"
}
```

### POST /login

> login user

_Request Header_

```
    not needed
```

_Request Body_

```
{
    email : "test@mail.com",
    password : "password"
}
```

_Response (200 - OK)_

```
{
    "access_token" : "<access_token>"
}
```

_Response (401 - Unauthorized)_

```
{
    "message": "invalid email or password"
}
```

_Response (500 - Internal Server Error)_

```
{
    "message" : "Internal Server Error"
}
```

### GET /bookmarks

> fetch all product data

_Request Header_

```
    access_token(string)
```

_Request Body_

```
    not needed
```

_Response (200 - OK)_

```
[
    {
        "id": 9,
        "title": "one piece",
        "lang": "EN",
        "mangaLink": "one-piece_142",
        "UserId": 1,
        "createdAt": "2021-04-21T02:02:52.082Z",
        "updatedAt": "2021-04-21T02:02:52.082Z"
    },
    {
        "id": 10,
        "title": "rebirth of the urban immortal cultivator",
        "lang": "EN",
        "mangaLink": "rebirth-of-the-urban-immortal-cultivator",
        "UserId": 1,
        "createdAt": "2021-04-21T02:02:53.530Z",
        "updatedAt": "2021-04-21T02:02:53.530Z"
    },
]
```

_Response (401 - Forbidden Access)_

```
{
    "message" : "please login first"
}
```

_Response (500 - Internal Server Error)_

```
{
    "message" : "Internal Server Error"
}
```

### POST /bookmarks

> add product

_Request Header_

```
    access_token(string)
```

_Request Body_

```
{
    "title" : "sweet guy",
    "UserId" : 1,
    "lang" : "EN"
    "mangaLink" : "sweet-guy_132"
}
```

_Response (200 - OK)_

```
{
    "id": 18,
    "title": "sweet guy",
    "UserId": 1,
    "lang": "EN",
    "mangaLink": "sweet-guy_132",
    "updatedAt": "2021-04-21T09:37:05.832Z",
    "createdAt": "2021-04-21T09:37:05.832Z"
}
```

_Response (400 - Bad Request)_

```
{
    "message": [
        "title can't be empty", 
}
```

_Reponse (401 - Unauthorized)_

```
{
    "message" : "unauthorized", "please login first"
}
```

_Response (500 - Internal Server Error)_

```
{
    "message" : "Internal Server Error"
}
```

### DELETE /bookmarks/:id

> edit products stock based on id

_Request Header_

```
    access_token(string)
```

_Request Body_

```
not needed
```

_Request Params_

```
    id=[integer]
```

_Response (200 - OK)_

```
{
    "message": "manga successfully deleted from bookmark"
}
```

_Response (401 - Unauthorized)_

```
{
    "message": "unauthorized", "please login first"
}
```

_Response (404 - Not Found)_

```
{
    "message": "product not found"
}
```

_Response (500 - Internal Server Error)_

```
{
    "message" : "Internal Server Error"
}
```
