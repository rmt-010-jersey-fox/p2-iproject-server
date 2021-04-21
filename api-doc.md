# MaiPren Server

Maipren is a social media App. This app has :

- RESTful endpoint for asset's CRUD operation

- JSON formatted response

&nbsp;

## RESTful endpoints

### POST /register

> Register a new user

_Request Header_

```

    not needed

```

_Request Body_

```

{
    "username": "Your Username",
    "email": "Your Email",
    "password": "Your Password"
}

```

_Response (200)_

```

{
    "id": "given by system",
    "email":"your email",
    "password":"your password"
}

```

_Response (400 - Bad Request)_

```
    {

    "message": "Validation messages"

    }

```

_Response (500 - Internal Server Error)_

```
    {

    "message": "This page isn't working"

    }

```

---

### POST /login

> Login to an existing user

_Request Header_

```

    not needed

```

_Request Body_

```

{
    "email": "Your Email",
    "password": "Your Password"
}

```

_Response (200)_

```

{
    "id": "given by system",
    "email":"your email",
    "access_token":"your access_token"
}

```

_Response (400 - Bad Request)_

```
    {

    "message": "Validation messages"

    }

```

_Response (500 - Internal Server Error)_

```
    {

    "message": "This page isn't working"

    }

```

---

### GET /users

> Get all users

_Request Header_

```

    access_token

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

    "email": "<user email>",

    "password": "<hashed user password>",

    "username":"<user username>",

    "avatar":"<user avatar>",

    "createdAt": "2020-03-20T07:15:12.149Z",

    "updatedAt": "2020-03-20T07:15:12.149Z",

    },

    {

    "id": 2,

    "email": "<user email>",

    "password": "<hashed user password>",

    "username":"<user username>",

    "avatar":"<user avatar>",

    "createdAt": "2020-03-20T07:15:12.149Z",

    "updatedAt": "2020-03-20T07:15:12.149Z",

    },
]

```

_Response (404 - Not Found)_

```
    {

    "message": "Not Found"

    }

```

_Response (500 - Internal Server Error)_

```

    {

    "message": "This page isn't working"

    }

```

---

### GET /users/:id

> Get user by id

_Request Header_

```

    access_token

```

_Request Params_

```
    req.params.id
```

_Request Body_

```

not needed

```

_Response (200)_

```
    {

    "id": 1,

    "email": "<user email>",

    "password": "<hashed user password>",

    "username":"<user username>",

    "avatar":"<user avatar>",

    "createdAt": "2020-03-20T07:15:12.149Z",

    "updatedAt": "2020-03-20T07:15:12.149Z",

    "Posts" : <array of user posts>,

    "Friends" : <array of user friends>

    },

```

_Response (404 - Not Found)_

```
    {

    "message": "Not Found"

    }

```

_Response (500 - Internal Server Error)_

```

    {

    "message": "This page isn't working"

    }

```

---

### PATCH /users/:id

> change username

_Request Header_

```

    access_token

```

_Request Params_

```
    req.params.id
```

_Request Body_

```
    {
        "username": "your username that you want to update to"
    }

```

_Response (200)_

```
    {

    "message": "username changed successfully",

    },

```

_Response (404 - Not Found)_

```
    {

    "message": "Not Found"

    }

```

_Response (500 - Internal Server Error)_

```

    {

    "message": "This page isn't working"

    }

```

---

### PATCH /users/avatar/:id

> change avatar

_Request Header_

```

    access_token

```

_Request Params_

```
    req.params.id
```

_Request Body_

```
    {
        "avatar": "your avatar that you want to update to"
    }

```

_Response (200)_

```
    {

    "message": "avatar changed successfully",

    },

```

_Response (404 - Not Found)_

```
    {

    "message": "Not Found"

    }

```

_Response (500 - Internal Server Error)_

```

    {

    "message": "This page isn't working"

    }

```

---

### Delete /users/:id

> delete user

_Request Header_

```

    access_token

```

_Request Params_

```
    req.params.id
```

_Request Body_

```
    not needed

```

_Response (200)_

```
    {

    "message": "User Deleted successfully",

    },

```

_Response (404 - Not Found)_

```
    {

    "message": "Not Found"

    }

```

_Response (500 - Internal Server Error)_

```

    {

    "message": "This page isn't working"

    }

```

---

### GET /posts

> Get all user's posts,

_Request Header_

```

    access_token

```

_Request Body_

```

not needed

```

_Response (200)_

```
{

"message": "read post sucess"
"data" : [

    {

    "id": 1,

    "filePath": "<post filePath>",

    "caption": "<post image>",

    "UserId":"<post UserId>",

    "createdAt": "2020-03-20T07:15:12.149Z",

    "updatedAt": "2020-03-20T07:15:12.149Z",

    },

    {

    "id": 2,

    "filePath": "<post filePath>",

    "caption": "<post image>",

    "UserId":"<post UserId>",

    "createdAt": "2020-03-20T07:15:12.149Z",

    "updatedAt": "2020-03-20T07:15:12.149Z",

    },
]


}
```

_Response (404 - Not Found)_

```
    {

    "message": "Not Found"

    }

```

_Response (500 - Internal Server Error)_

```

    {

    "message": "This page isn't working"

    }

```

---

### GET /posts/:id

> Get user post by id

_Request Header_

```

    access_token

```

\_Request params

```

   req.params.id

```

_Request Body_

```

not needed

```

_Response (200)_

```
{

"message": "read post sucess"
"data" :
    {

    "id": 1,

    "filePath": "<post filePath>",

    "caption": "<post image>",

    "UserId":"<post UserId>",

    "createdAt": "2020-03-20T07:15:12.149Z",

    "updatedAt": "2020-03-20T07:15:12.149Z",

    },
}
```

_Response (404 - Not Found)_

```
    {

    "message": "Not Found"

    }

```

_Response (500 - Internal Server Error)_

```

    {

    "message": "This page isn't working"

    }

```

---

### POST /posts

> Upload a posts

_Request Header_

```

    access_token

```

\_Request params

```

   not needed

```

_Request Body_

```

not needed

```

_Response (200)_

```
{

"message": "upload success"
"data" :
    {

    "id": 1,

    "filePath": "<post filePath>",

    "caption": "<post image>",

    "UserId":"<post UserId>",

    "createdAt": "2020-03-20T07:15:12.149Z",

    "updatedAt": "2020-03-20T07:15:12.149Z",

    },
}
```

_Response (500 - Internal Server Error)_

```

    {

    "message": "This page isn't working"

    }

```

---

### PATCH /posts/:id

> Edit a post's caption

_Request Header_

```

    access_token

```

\_Request params

```

   not needed

```

_Request Body_

```

not needed

```

_Response (200)_

```
{

"message": "Edit Caption Success"
"data" :
    {

    "id": 1,

    "filePath": "<post filePath>",

    "caption": "<post caption (updated)>",

    "UserId":"<post UserId>",

    "createdAt": "2020-03-20T07:15:12.149Z",

    "updatedAt": "2020-03-20T07:15:12.149Z",

    },
}
```

_Response (404 - Not Found)_

```
    {

    "message": "Not Found"

    }

```

_Response (500 - Internal Server Error)_

```

    {

    "message": "This page isn't working"

    }

```

---

### DELETE /posts/:id

> Upload a posts

_Request Header_

```

    access_token

```

\_Request params

```

   req.params.id

```

_Request Body_

```

not needed

```

_Response (200)_

```
{

"message": "Delete Post Success"

}
```

_Response (404 - Not Found)_

```
    {

    "message": "Not Found"

    }

```

_Response (500 - Internal Server Error)_

```

    {

    "message": "This page isn't working"

    }

```

---

### GET /friends

> Get all user's friends

_Request Header_

```

    access_token

```

_Request Body_

```

not needed

```

_Response (200)_

```

{

    "message": "Read Friends Success"

    "data": [

    {

    "id": 1,

    "email": "<user email>",

    "password": "<hashed user password>",

    "username":"<user username>",

    "avatar":"<user avatar>",

    "createdAt": "2020-03-20T07:15:12.149Z",

    "updatedAt": "2020-03-20T07:15:12.149Z",

    },

    {

    "id": 2,

    "email": "<user email>",

    "password": "<hashed user password>",

    "username":"<user username>",

    "avatar":"<user avatar>",

    "createdAt": "2020-03-20T07:15:12.149Z",

    "updatedAt": "2020-03-20T07:15:12.149Z",

    },
]


}


```

_Response (404 - Not Found)_

```
    {

    "message": "Not Found"

    }

```

_Response (500 - Internal Server Error)_

```

    {

    "message": "This page isn't working"

    }

```

---

### POST /friends

> add a friend

_Request Header_

```

    access_token

```

\_Request params

```

   not needed

```

_Request Body_

```

 {
     "FriendId":"Friend Id to insert into"
 }

```

_Response (200)_

```
{

"message": "Add Friend Success"
"data" :
    {

    "id": 1,

    "UserId": "<UserId who inputted this>",

    "FriendId": "<User's Friend>",

    "createdAt": "2020-03-20T07:15:12.149Z",

    "updatedAt": "2020-03-20T07:15:12.149Z",

    },
}
```

_Response (404 - Not Found)_

```
    {

    "message": "Not Found"

    }

```

_Response (500 - Internal Server Error)_

```

    {

    "message": "This page isn't working"

    }

```

---

### DELETE /friends

> delete add a friend

_Request Header_

```

    access_token

```

\_Request params

```

   {
       "id": "Friend's ID that you want to delete to"
   }

```

_Request Body_

```

 not needed

```

_Response (200)_

```
{

"message": "Delete Friend Success"

}
```

_Response (404 - Not Found)_

```
    {

    "message": "Not Found"

    }

```

_Response (500 - Internal Server Error)_

```

    {

    "message": "This page isn't working"

    }

```

---
