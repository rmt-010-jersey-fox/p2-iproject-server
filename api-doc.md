# My Pixelates App Server
Pixelates app is a website, to share photos to another photographer. This app has : 
* RESTful endpoint for asset's CRUD operation
* JSON formatted response

&nbsp;

## RESTful endpoints
### POST /register

_Request Body_
```
{
    "username": "sampleUser"
    "email": "sampleUser@mail.com"
    "password": "postgres"
}
```

_Response (201)_
```
{
    "email": "sampleUser@mail.com",
    "username": "sampleUser",
}
```

_Response (400 - SequelizeUniqueConstraintError)_
```
{
    "msg": [
        "email must be unique"
    ]
}
```

_Response (400 - SequelizeValidationError)_
```
{
    {
    "msg": [
        "Username is Required",
        "Email is Required",
        "Format email is Required",
        "Password is Required"
    ]
}
```

_Response (500 - Internal Server Error)_
```
{
  "msg": "Internal Server Error"
  "errors": "<error detail>"
}
```

---
### POST /login

> Customer Login


_Request Body_
```
{
    "email": "sampleUser@mail.com"
    "password": "postgres"
}
```

_Response (200)_
```
{
    "username": "sampleUser",
    "email": "sampleUser@mail.com",
    "access_token": "<your access token>"
}
```

_Response (400 - Bad Request)_
```
{
  "msg": "Wrong email or password"
}
```

_Response (500 - Internal Server Error)_
```
{
  "msg": "Internal Server Error"
  "errors": "<error detail>"
}
```

### POST Image

_Request Header_
```
{
  "access_token": "<your access token>"
}
```

_Request Body_
```
{
    "email": "sampleUser@mail.com"
    "password": "postgres"
}
```


_Request 201
```
{
    "imgUrl": "https://images.pexels.com/photos/2792157/pexels-photo-2792157.jpeg",
    "category": "Nature",
    "description": "In The Sands",
    "userId": 16
}
```

_Request 400
```
{
    "msg": [
        "IMAGE URL MUST NOT EMPTY",
        "IMAGE MUST BE URL"
    ]
}}
```

_Request 500
```
{
    "msg": "Internal Server Error"
    "errors": <your error>
}}
```

### GET Image

_Request Header_
```
{
  "access_token": "<your access token>"
}
```

_Request 200
```
[
    {
        "id": 2,
        "imgUrl": "https://images.pexels.com/photos/87772/soldiers-military-usa-weapons-87772.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
        "category": "Photography",
        "description": "Warriors",
        "createdAt": "2021-04-11T15:36:32.203Z",
        "updatedAt": "2021-04-21T12:35:37.646Z",
        "userId": 1,
        "User": {
            "id": 1,
            "username": "maestro",
            "email": "maestro@mail.com",
            "password": "$2b$10$KYXSBelJ84aosweh3/shveLty.nz/SX2MlLwSrgwp/U9hI768g9Im",
            "createdAt": "2021-04-11T14:25:04.944Z",
            "updatedAt": "2021-04-11T14:25:04.944Z"
        }
    },
    {
        "id": 5,
        "imgUrl": "https://images.pexels.com/photos/2478248/pexels-photo-2478248.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
        "category": "Abstract",
        "description": "Dark City",
        "createdAt": "2021-04-20T22:15:08.644Z",
        "updatedAt": "2021-04-21T14:29:43.261Z",
        "userId": 1,
        "User": {
            "id": 1,
            "username": "maestro",
            "email": "maestro@mail.com",
            "password": "$2b$10$KYXSBelJ84aosweh3/shveLty.nz/SX2MlLwSrgwp/U9hI768g9Im",
            "createdAt": "2021-04-11T14:25:04.944Z",
            "updatedAt": "2021-04-11T14:25:04.944Z"
        }
    },
]
```


_Request 500
```
{
    "msg": "Internal Server Error"
    "errors": <your error>
}}
```

### GET Images

_Request Header_
```
{
  "access_token": "<your access token>"
}
```

_Request 200
```
[
    {
        "id": 2,
        "imgUrl": "https://images.pexels.com/photos/87772/soldiers-military-usa-weapons-87772.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
        "category": "Photography",
        "description": "Warriors",
        "createdAt": "2021-04-11T15:36:32.203Z",
        "updatedAt": "2021-04-21T12:35:37.646Z",
        "userId": 1,
        "User": {
            "id": 1,
            "username": "maestro",
            "email": "maestro@mail.com",
            "password": "$2b$10$KYXSBelJ84aosweh3/shveLty.nz/SX2MlLwSrgwp/U9hI768g9Im",
            "createdAt": "2021-04-11T14:25:04.944Z",
            "updatedAt": "2021-04-11T14:25:04.944Z"
        }
    },
    {
        "id": 5,
        "imgUrl": "https://images.pexels.com/photos/2478248/pexels-photo-2478248.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
        "category": "Abstract",
        "description": "Dark City",
        "createdAt": "2021-04-20T22:15:08.644Z",
        "updatedAt": "2021-04-21T14:29:43.261Z",
        "userId": 1,
        "User": {
            "id": 1,
            "username": "maestro",
            "email": "maestro@mail.com",
            "password": "$2b$10$KYXSBelJ84aosweh3/shveLty.nz/SX2MlLwSrgwp/U9hI768g9Im",
            "createdAt": "2021-04-11T14:25:04.944Z",
            "updatedAt": "2021-04-11T14:25:04.944Z"
        }
    },
]
```


_Request 500
```
{
    "msg": "Internal Server Error"
    "errors": <your error>
}}
```
### GET images/my-images

> GET PHOTO FROM SAME USER ID

_Request Header_
```
{
  "access_token": "<your access token>"
}
```

_Request 200
```
[
    {
        "id": 2,
        "imgUrl": "https://images.pexels.com/photos/87772/soldiers-military-usa-weapons-87772.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
        "category": "Photography",
        "description": "Warriors",
        "createdAt": "2021-04-11T15:36:32.203Z",
        "updatedAt": "2021-04-21T12:35:37.646Z",
        "userId": 1,
        "User": {
            "id": 1,
            "username": "maestro",
            "email": "maestro@mail.com",
            "password": "$2b$10$KYXSBelJ84aosweh3/shveLty.nz/SX2MlLwSrgwp/U9hI768g9Im",
            "createdAt": "2021-04-11T14:25:04.944Z",
            "updatedAt": "2021-04-11T14:25:04.944Z"
        }
    },
    {
        "id": 5,
        "imgUrl": "https://images.pexels.com/photos/2478248/pexels-photo-2478248.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
        "category": "Abstract",
        "description": "Dark City",
        "createdAt": "2021-04-20T22:15:08.644Z",
        "updatedAt": "2021-04-21T14:29:43.261Z",
        "userId": 1,
        "User": {
            "id": 1,
            "username": "maestro",
            "email": "maestro@mail.com",
            "password": "$2b$10$KYXSBelJ84aosweh3/shveLty.nz/SX2MlLwSrgwp/U9hI768g9Im",
            "createdAt": "2021-04-11T14:25:04.944Z",
            "updatedAt": "2021-04-11T14:25:04.944Z"
        }
    },
]
```


_Request 500
```
{
    "msg": "Internal Server Error"
    "errors": <your error>
}}
```

### GET images/:id

_Request Header_
```
{
  "access_token": "<your access token>"
}
```

_Request 200_
```
{
    "id": 2,
    "imgUrl": "https://images.pexels.com/photos/87772/soldiers-military-usa-weapons-87772.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    "category": "Photography",
    "description": "Warriors",
    "createdAt": "2021-04-11T15:36:32.203Z",
    "updatedAt": "2021-04-11T15:36:32.203Z",
    "userId": 1,
    "User": {
        "id": 1,
        "username": "maestro",
        "email": "maestro@mail.com",
        "password": "$2b$10$KYXSBelJ84aosweh3/shveLty.nz/SX2MlLwSrgwp/U9hI768g9Im",
        "createdAt": "2021-04-11T14:25:04.944Z",
        "updatedAt": "2021-04-11T14:25:04.944Z"
    }
}
```

_Request 500
```
{
    "msg": "Internal Server Error"
    "errors": <your error>
}}
```

### PUT images/:id

_Request Header_
```
{
  "access_token": "<your access token>"
}
```

_Request Body_
```
{
  "imgUrl": <your image url>,
  "category": <your image category>,
  "description": <your image description>
}
```

_Request 200_
```
{
  msg: {
    "Successfully updated"
  }
}
```

_Request 400
```
{
    "msg": [
        "IMAGE URL MUST NOT EMPTY",
        "IMAGE MUST BE URL"
    ]
}}
```

_Request 500
```
{
    "msg": "Internal Server Error"
    "errors": <your error>
}}
```

### PATCH images/:id

_Request Header_
```
{
  "access_token": "<your access token>"
}
```

_Request Body_
```
{
  "description": <your image description>
}
```

_Request 200_
```
{
  msg: {
    "Successfully updated"
  }
}
```

_Request 500
```
{
    "msg": "Internal Server Error"
    "errors": <your error>
}}
```


### PATCH images/:id

_Request Header_
```
{
  "access_token": "<your access token>"
}
```

_Request 200_
```
{
  msg: {
    "Image successfully deleted"
  }
}
```

_Request 500
```
{
    "msg": "Internal Server Error"
    "errors": <your error>
}}
```

### GET comments/:imageId

_Request Header_
```
{
  "access_token": "<your access token>"
}
```

_Request 200_
```
[
    {
        "id": 10,
        "content": "Mantap Gan",
        "imageId": 2,
        "userId": 1,
        "createdAt": "2021-04-11T17:00:43.324Z",
        "updatedAt": "2021-04-11T17:00:43.324Z",
        "Image": {
            "id": 2,
            "imgUrl": "https://images.pexels.com/photos/87772/soldiers-military-usa-weapons-87772.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
            "category": "Photography",
            "description": "Warriors",
            "createdAt": "2021-04-11T15:36:32.203Z",
            "updatedAt": "2021-04-21T12:35:37.646Z",
            "userId": 1
        },
        "User": {
            "id": 1,
            "username": "maestro",
            "email": "maestro@mail.com",
            "password": "$2b$10$KYXSBelJ84aosweh3/shveLty.nz/SX2MlLwSrgwp/U9hI768g9Im",
            "createdAt": "2021-04-11T14:25:04.944Z",
            "updatedAt": "2021-04-11T14:25:04.944Z"
        }
    },
    {
        "id": 11,
        "content": "Mantap Djiwa",
        "imageId": 2,
        "userId": 1,
        "createdAt": "2021-04-11T17:00:51.763Z",
        "updatedAt": "2021-04-11T17:00:51.763Z",
        "Image": {
            "id": 2,
            "imgUrl": "https://images.pexels.com/photos/87772/soldiers-military-usa-weapons-87772.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
            "category": "Photography",
            "description": "Warriors",
            "createdAt": "2021-04-11T15:36:32.203Z",
            "updatedAt": "2021-04-21T12:35:37.646Z",
            "userId": 1
        },
        "User": {
            "id": 1,
            "username": "maestro",
            "email": "maestro@mail.com",
            "password": "$2b$10$KYXSBelJ84aosweh3/shveLty.nz/SX2MlLwSrgwp/U9hI768g9Im",
            "createdAt": "2021-04-11T14:25:04.944Z",
            "updatedAt": "2021-04-11T14:25:04.944Z"
        }
    },
    {
        "id": 12,
        "content": "Mantap Djiwa",
        "imageId": 2,
        "userId": 1,
        "createdAt": "2021-04-18T10:48:21.267Z",
        "updatedAt": "2021-04-18T10:48:21.267Z",
        "Image": {
            "id": 2,
            "imgUrl": "https://images.pexels.com/photos/87772/soldiers-military-usa-weapons-87772.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
            "category": "Photography",
            "description": "Warriors",
            "createdAt": "2021-04-11T15:36:32.203Z",
            "updatedAt": "2021-04-21T12:35:37.646Z",
            "userId": 1
        },
        "User": {
            "id": 1,
            "username": "maestro",
            "email": "maestro@mail.com",
            "password": "$2b$10$KYXSBelJ84aosweh3/shveLty.nz/SX2MlLwSrgwp/U9hI768g9Im",
            "createdAt": "2021-04-11T14:25:04.944Z",
            "updatedAt": "2021-04-11T14:25:04.944Z"
        }
    },
]
```

_Request 500
```
{
    "msg": "Internal Server Error"
    "errors": <your error>
}}
```

### POST comments/:imageId

_Request Header_
```
{
  "access_token": "<your access token>"
}
```

_Request Body_
```
{
  "content": <your message>
}
```

_Response 201_
```
{
    "content": "Semangat trus",
    "imageId": "2",
    "userId": 1
}
```

_Request 500
```
{
    "msg": "Internal Server Error"
    "errors": <your error>
}}
```

### DELETE comments/:id

_Request Header_
```
{
  "access_token": "<your access token>"
}
```

_Response 200_
```
{
  msg: "Comment successfully deleted"
}

```

_Request 500
```
{
    "msg": "Internal Server Error"
    "errors": <your error>
}}
```

### PATCH comments/:id

_Request Header_
```
{
  "access_token": "<your access token>"
}
```

_Request Body_
```
{
  "content": <your message>
}
```

_Response 200_
```
{
    "msg": "Content successfully updated"
}
```

_Request 500
```
{
    "msg": "Internal Server Error"
    "errors": <your error>
}}
```

### GET /favourites

_Request Header_
```
{
  "access_token": "<your access token>"
}
```

_Response 200_
```
[
    {
        "id": 1,
        "userId": 1,
        "imageId": 2,
        "createdAt": "2021-04-18T22:17:36.799Z",
        "updatedAt": "2021-04-18T22:17:36.799Z",
        "Image": {
            "id": 2,
            "imgUrl": "https://images.pexels.com/photos/87772/soldiers-military-usa-weapons-87772.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
            "category": "Photography",
            "description": "Warriors",
            "createdAt": "2021-04-11T15:36:32.203Z",
            "updatedAt": "2021-04-21T12:35:37.646Z",
            "userId": 1
        }
    },
    {
        "id": 6,
        "userId": 1,
        "imageId": 5,
        "createdAt": "2021-04-21T13:51:27.157Z",
        "updatedAt": "2021-04-21T13:51:27.157Z",
        "Image": {
            "id": 5,
            "imgUrl": "https://images.pexels.com/photos/2478248/pexels-photo-2478248.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
            "category": "Abstract",
            "description": "Gedung",
            "createdAt": "2021-04-20T22:15:08.644Z",
            "updatedAt": "2021-04-21T12:33:24.235Z",
            "userId": 1
        }
    }
]
```

_Request 500
```
{
    "msg": "Internal Server Error"
    "errors": <your error>
}}
```

### POST /favourites/:id

_Request Header_
```
{
  "access_token": "<your access token>"
}
```
_Response 200_

```
{
  "msg": "already exists"
}

```

_Response 200_

```
{
  "userId": <user>
  "imageId": <image>
}

```

_Request 500
```
{
    "msg": "Internal Server Error"
    "errors": <your error>
}}
```


### DELETE /favourites/:id

_Request Header_
```
{
  "access_token": "<your access token>"
}
```
_Response 200_

```
{
  "msg": "Favourite deleted
}

```

_Request 500
```
{
    "msg": "Internal Server Error"
    "errors": <your error>
}}
```

### 3RD PARTY API

### GET /pexels

_Request Header_
```
{
  "access_token": "<your access token>"
}
```

_Response OK_
```
{
    "page": 1,
    "per_page": 5,
    "photos": [
        {
            "id": 4666751,
            "width": 2832,
            "height": 4240,
            "url": "https://www.pexels.com/photo/photo-of-whale-underwater-4666751/",
            "photographer": "Elianne Dipp",
            "photographer_url": "https://www.pexels.com/@eliannedipp",
            "photographer_id": 3076080,
            "avg_color": "#4F7E9D",
            "src": {
                "original": "https://images.pexels.com/photos/4666751/pexels-photo-4666751.jpeg",
                "large2x": "https://images.pexels.com/photos/4666751/pexels-photo-4666751.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
                "large": "https://images.pexels.com/photos/4666751/pexels-photo-4666751.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
                "medium": "https://images.pexels.com/photos/4666751/pexels-photo-4666751.jpeg?auto=compress&cs=tinysrgb&h=350",
                "small": "https://images.pexels.com/photos/4666751/pexels-photo-4666751.jpeg?auto=compress&cs=tinysrgb&h=130",
                "portrait": "https://images.pexels.com/photos/4666751/pexels-photo-4666751.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800",
                "landscape": "https://images.pexels.com/photos/4666751/pexels-photo-4666751.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
                "tiny": "https://images.pexels.com/photos/4666751/pexels-photo-4666751.jpeg?auto=compress&cs=tinysrgb&dpr=1&fit=crop&h=200&w=280"
            },
            "liked": false
        },
        {
            "id": 3225517,
            "width": 4664,
            "height": 5830,
            "url": "https://www.pexels.com/photo/photo-of-stream-during-daytime-3225517/",
            "photographer": "Michael Block",
            "photographer_url": "https://www.pexels.com/@michael-block-1691617",
            "photographer_id": 1691617,
            "avg_color": "#6D7B7C",
            "src": {
                "original": "https://images.pexels.com/photos/3225517/pexels-photo-3225517.jpeg",
                "large2x": "https://images.pexels.com/photos/3225517/pexels-photo-3225517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
                "large": "https://images.pexels.com/photos/3225517/pexels-photo-3225517.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
                "medium": "https://images.pexels.com/photos/3225517/pexels-photo-3225517.jpeg?auto=compress&cs=tinysrgb&h=350",
                "small": "https://images.pexels.com/photos/3225517/pexels-photo-3225517.jpeg?auto=compress&cs=tinysrgb&h=130",
                "portrait": "https://images.pexels.com/photos/3225517/pexels-photo-3225517.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800",
                "landscape": "https://images.pexels.com/photos/3225517/pexels-photo-3225517.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
                "tiny": "https://images.pexels.com/photos/3225517/pexels-photo-3225517.jpeg?auto=compress&cs=tinysrgb&dpr=1&fit=crop&h=200&w=280"
            },
            "liked": false
        },
        {
            "id": 2414442,
            "width": 3198,
            "height": 3997,
            "url": "https://www.pexels.com/photo/silhouette-of-tree-under-half-moon-2414442/",
            "photographer": "Adrian Lang",
            "photographer_url": "https://www.pexels.com/@adrianlang",
            "photographer_id": 1266616,
            "avg_color": "#7E4722",
            "src": {
                "original": "https://images.pexels.com/photos/2414442/pexels-photo-2414442.jpeg",
                "large2x": "https://images.pexels.com/photos/2414442/pexels-photo-2414442.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
                "large": "https://images.pexels.com/photos/2414442/pexels-photo-2414442.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
                "medium": "https://images.pexels.com/photos/2414442/pexels-photo-2414442.jpeg?auto=compress&cs=tinysrgb&h=350",
                "small": "https://images.pexels.com/photos/2414442/pexels-photo-2414442.jpeg?auto=compress&cs=tinysrgb&h=130",
                "portrait": "https://images.pexels.com/photos/2414442/pexels-photo-2414442.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800",
                "landscape": "https://images.pexels.com/photos/2414442/pexels-photo-2414442.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
                "tiny": "https://images.pexels.com/photos/2414442/pexels-photo-2414442.jpeg?auto=compress&cs=tinysrgb&dpr=1&fit=crop&h=200&w=280"
            },
            "liked": false
        },
        {
            "id": 2422915,
            "width": 5472,
            "height": 3648,
            "url": "https://www.pexels.com/photo/photo-of-pod-of-dolphins-2422915/",
            "photographer": "Jeremy Bishop",
            "photographer_url": "https://www.pexels.com/@jeremy-bishop-1260133",
            "photographer_id": 1260133,
            "avg_color": "#21617E",
            "src": {
                "original": "https://images.pexels.com/photos/2422915/pexels-photo-2422915.jpeg",
                "large2x": "https://images.pexels.com/photos/2422915/pexels-photo-2422915.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
                "large": "https://images.pexels.com/photos/2422915/pexels-photo-2422915.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
                "medium": "https://images.pexels.com/photos/2422915/pexels-photo-2422915.jpeg?auto=compress&cs=tinysrgb&h=350",
                "small": "https://images.pexels.com/photos/2422915/pexels-photo-2422915.jpeg?auto=compress&cs=tinysrgb&h=130",
                "portrait": "https://images.pexels.com/photos/2422915/pexels-photo-2422915.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800",
                "landscape": "https://images.pexels.com/photos/2422915/pexels-photo-2422915.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
                "tiny": "https://images.pexels.com/photos/2422915/pexels-photo-2422915.jpeg?auto=compress&cs=tinysrgb&dpr=1&fit=crop&h=200&w=280"
            },
            "liked": false
        },
        {
            "id": 2792157,
            "width": 5151,
            "height": 7723,
            "url": "https://www.pexels.com/photo/landscape-photography-of-mountain-2792157/",
            "photographer": "Ian Beckley",
            "photographer_url": "https://www.pexels.com/@ian-beckley-1278367",
            "photographer_id": 1278367,
            "avg_color": "#3F4752",
            "src": {
                "original": "https://images.pexels.com/photos/2792157/pexels-photo-2792157.jpeg",
                "large2x": "https://images.pexels.com/photos/2792157/pexels-photo-2792157.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
                "large": "https://images.pexels.com/photos/2792157/pexels-photo-2792157.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
                "medium": "https://images.pexels.com/photos/2792157/pexels-photo-2792157.jpeg?auto=compress&cs=tinysrgb&h=350",
                "small": "https://images.pexels.com/photos/2792157/pexels-photo-2792157.jpeg?auto=compress&cs=tinysrgb&h=130",
                "portrait": "https://images.pexels.com/photos/2792157/pexels-photo-2792157.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800",
                "landscape": "https://images.pexels.com/photos/2792157/pexels-photo-2792157.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
                "tiny": "https://images.pexels.com/photos/2792157/pexels-photo-2792157.jpeg?auto=compress&cs=tinysrgb&dpr=1&fit=crop&h=200&w=280"
            },
            "liked": false
        }
    ],
    "total_results": 8000,
    "next_page": "https://api.pexels.com/v1/search/?page=2&per_page=5&query=Nature"
}
```

_Request 500
```
{
    "msg": "Internal Server Error"
    "errors": <your error>
}}
```

### GET /pixa

_Request Header_
```
{
  "access_token": "<your access token>"
}
```

_Response 200_
```
[
    {
        "id": 5942140,
        "pageURL": "https://pixabay.com/photos/island-church-sea-sky-clouds-5942140/",
        "type": "photo",
        "tags": "island, church, sea",
        "previewURL": "https://cdn.pixabay.com/photo/2021/01/23/10/55/island-5942140_150.jpg",
        "previewWidth": 150,
        "previewHeight": 100,
        "webformatURL": "https://pixabay.com/get/g82404bdb34b96630635f7a2e60a7d87a05e4b9f408374a5c18171717215970e4571b6ae40c76f320f2540ca5d37fd82f964645247821be1fbe66a3a1ec9613a8_640.jpg",
        "webformatWidth": 640,
        "webformatHeight": 427,
        "largeImageURL": "https://pixabay.com/get/g4fa968aecb678f87f88f92b79616070a8fb7f5cba7039d8416b1d59ca466a2eb984fd135540705f862a9ac79050e6bfc72719b8cf7b133b047c6d23900b3a423_1280.jpg",
        "imageWidth": 5853,
        "imageHeight": 3902,
        "imageSize": 12060199,
        "views": 36503,
        "downloads": 35181,
        "favorites": 29,
        "likes": 107,
        "comments": 76,
        "user_id": 3764790,
        "user": "enriquelopezgarre",
        "userImageURL": "https://cdn.pixabay.com/user/2021/03/08/19-47-06-54_250x250.jpg"
    },
    {
        "id": 5987976,
        "pageURL": "https://pixabay.com/photos/dresden-buildings-street-road-city-5987976/",
        "type": "photo",
        "tags": "dresden, buildings, street",
        "previewURL": "https://cdn.pixabay.com/photo/2021/02/06/12/31/dresden-5987976_150.jpg",
        "previewWidth": 100,
        "previewHeight": 150,
        "webformatURL": "https://pixabay.com/get/gb9e89fcc5dcba08c6315f27775397845f7c8fddd2daf74f44c08224eded8948b5eb9016f1620b059636a3d15dfff364eef8c993d9ad22cbb1fbf695e6cd75f30_640.jpg",
        "webformatWidth": 427,
        "webformatHeight": 640,
        "largeImageURL": "https://pixabay.com/get/g6b5c2aa346cbb70d469013a4cceb96e078530a42f579314871a0b7f839832ba2f5bfab80b3f012a747045285d5894eb056d890cbcca6a06bcb7ef74cf392db0e_1280.jpg",
        "imageWidth": 3870,
        "imageHeight": 5805,
        "imageSize": 4043385,
        "views": 38270,
        "downloads": 33367,
        "favorites": 68,
        "likes": 88,
        "comments": 13,
        "user_id": 20176744,
        "user": "Pozhi",
        "userImageURL": "https://cdn.pixabay.com/user/2021/03/03/20-43-28-194_250x250.jpg"
    },
    {
        "id": 5890874,
        "pageURL": "https://pixabay.com/photos/bled-lake-island-church-landmark-5890874/",
        "type": "photo",
        "tags": "bled, lake, island",
        "previewURL": "https://cdn.pixabay.com/photo/2021/01/05/11/19/bled-5890874_150.jpg",
        "previewWidth": 150,
        "previewHeight": 100,
        "webformatURL": "https://pixabay.com/get/gca016dea1bbf3a0c8aa92794ee4d43d872f2200a142c6004aabf1859d95eaafa3bcac7bd7da9b1d860b921bdaeef29de8b191d0c2155a75f76957b852da77f12_640.jpg",
        "webformatWidth": 640,
        "webformatHeight": 427,
        "largeImageURL": "https://pixabay.com/get/ga8d0872088bfb1e2ab16c4253396f935a3493ef63dc0e5d3ee1dbcdedd80f0f8c54737ea261719778ad18ef2c828c708f9bc4952ee0abed52f8a36175cea83f0_1280.jpg",
        "imageWidth": 4893,
        "imageHeight": 3262,
        "imageSize": 3568008,
        "views": 77177,
        "downloads": 65453,
        "favorites": 84,
        "likes": 136,
        "comments": 27,
        "user_id": 19031569,
        "user": "GreenvalleyPictures",
        "userImageURL": "https://cdn.pixabay.com/user/2020/11/26/17-47-01-165_250x250.jpg"
    },
    {
        "id": 6137773,
        "pageURL": "https://pixabay.com/photos/church-building-chapel-6137773/",
        "type": "photo",
        "tags": "church, building, chapel",
        "previewURL": "https://cdn.pixabay.com/photo/2021/03/30/20/39/church-6137773_150.jpg",
        "previewWidth": 150,
        "previewHeight": 102,
        "webformatURL": "https://pixabay.com/get/g6627b20d8015578c6eac8949b0f3a7bdded9fe009a24155a1e546553c6a528b72d66224bc682e4a5817857e2e0d5be05e9ff0452f43d34ea017ba23cb0f60e86_640.jpg",
        "webformatWidth": 640,
        "webformatHeight": 434,
        "largeImageURL": "https://pixabay.com/get/g0ce8a29f72edf314323da00d6c762f03bd02464f40193fcfa3e69e2959a882fea1d3aeaa6ea6b1a842a6e239ef6ce5fcca0497420e4a83e9d1aff29abbb7c512_1280.jpg",
        "imageWidth": 5563,
        "imageHeight": 3776,
        "imageSize": 5786451,
        "views": 167,
        "downloads": 106,
        "favorites": 0,
        "likes": 40,
        "comments": 46,
        "user_id": 6355831,
        "user": "pasja1000",
        "userImageURL": "https://cdn.pixabay.com/user/2021/02/06/02-19-29-704_250x250.png"
    },
    {
        "id": 6186166,
        "pageURL": "https://pixabay.com/photos/book-piano-church-old-vintage-6186166/",
        "type": "photo",
        "tags": "book, piano, church",
        "previewURL": "https://cdn.pixabay.com/photo/2021/04/17/16/01/book-6186166_150.jpg",
        "previewWidth": 150,
        "previewHeight": 100,
        "webformatURL": "https://pixabay.com/get/g1a72c38a8fa3cd5a16fe86e9ba72e44d75b71870af746fc4fd91feca7f253d2cc62dcf5eb429e275553c8c67bdbc25cf2a3317e8123a26243c2731c645171296_640.jpg",
        "webformatWidth": 640,
        "webformatHeight": 427,
        "largeImageURL": "https://pixabay.com/get/gd259718bfbeeabf0f35869c7cc7b05657f1ced48717198290969e60aa88341986b9b52f72254d5d76b2f40fe33498a70f9d6bf90c7b3768477fa14355a4f9108_1280.jpg",
        "imageWidth": 6016,
        "imageHeight": 4016,
        "imageSize": 6918449,
        "views": 196,
        "downloads": 187,
        "favorites": 0,
        "likes": 0,
        "comments": 0,
        "user_id": 15902545,
        "user": "matthiaskost",
        "userImageURL": "https://cdn.pixabay.com/user/2020/05/02/11-24-24-801_250x250.jpg"
    },
    {
        "id": 5964812,
        "pageURL": "https://pixabay.com/photos/salzburg-city-night-lights-river-5964812/",
        "type": "photo",
        "tags": "salzburg, city, night",
        "previewURL": "https://cdn.pixabay.com/photo/2021/01/30/18/07/salzburg-5964812_150.jpg",
        "previewWidth": 150,
        "previewHeight": 100,
        "webformatURL": "https://pixabay.com/get/gf678cdb7749b392bab97c2a73154ed8f7edcc5dc2e7b2a9b77a87ad7550467ed884683a4db5b2b30ffbc5a88ce002d667f5eaaaaf5ec1078b4fc05ef7bdccbc1_640.jpg",
        "webformatWidth": 640,
        "webformatHeight": 426,
        "largeImageURL": "https://pixabay.com/get/g3c659b6f8fd01cd579969879aa7a9fa600ce66acf33b9dc1d06800c7a9113b23bcdae2a0b2589ff571a190e1e6a53c822dfd5689396cfebd1212ca93913053bb_1280.jpg",
        "imageWidth": 6048,
        "imageHeight": 4024,
        "imageSize": 5738136,
        "views": 29989,
        "downloads": 26212,
        "favorites": 58,
        "likes": 83,
        "comments": 12,
        "user_id": 13672056,
        "user": "keywi",
        "userImageURL": ""
    },
    {
        "id": 6178933,
        "pageURL": "https://pixabay.com/photos/book-piano-old-pages-paper-6178933/",
        "type": "photo",
        "tags": "book, piano, old",
        "previewURL": "https://cdn.pixabay.com/photo/2021/04/14/16/59/book-6178933_150.jpg",
        "previewWidth": 150,
        "previewHeight": 100,
        "webformatURL": "https://pixabay.com/get/g2200d9d8ca44daab4d5cf20a6386317891748b6c7feb5da6c5891abe77daee7f5b1c98d255065ee9ca751a2e669965fee7c415bc34155faabbcddb2e853d9ff2_640.jpg",
        "webformatWidth": 640,
        "webformatHeight": 427,
        "largeImageURL": "https://pixabay.com/get/g346b9f6ba3c1424661a4771e82068e8b9eb408032c82e4e50b4861edde370e1a7dd08efc90ecef4ea4eb2451805ff15d772c570e1e2edaf14bbad53c523fcbae_1280.jpg",
        "imageWidth": 6016,
        "imageHeight": 4016,
        "imageSize": 7394336,
        "views": 445,
        "downloads": 408,
        "favorites": 0,
        "likes": 5,
        "comments": 3,
        "user_id": 15902545,
        "user": "matthiaskost",
        "userImageURL": "https://cdn.pixabay.com/user/2020/05/02/11-24-24-801_250x250.jpg"
    },
    {
        "id": 6124956,
        "pageURL": "https://pixabay.com/illustrations/easter-resurrection-hand-6124956/",
        "type": "illustration",
        "tags": "easter, resurrection, hand",
        "previewURL": "https://cdn.pixabay.com/photo/2021/03/26/06/10/easter-6124956_150.jpg",
        "previewWidth": 150,
        "previewHeight": 90,
        "webformatURL": "https://pixabay.com/get/g3542bb03cf0f845e8978e4366ccdcb64a9e606798ec69d6877b3f1c1c022c3b8355d6cba5ffa77fbdf5c86161ead7117c22c4483c32ab49371004435cd12f4f6_640.jpg",
        "webformatWidth": 640,
        "webformatHeight": 384,
        "largeImageURL": "https://pixabay.com/get/g426427507ff0133e801bdaddd4a1c748a1e0ece199a182696ed595a5bc8828b4c2f32d3c3604ecb016a90f104218b53846832a6a889aecfe24ac5c7f0ea41a55_1280.jpg",
        "imageWidth": 5000,
        "imageHeight": 3000,
        "imageSize": 1685096,
        "views": 2053,
        "downloads": 1124,
        "favorites": 0,
        "likes": 34,
        "comments": 25,
        "user_id": 9301,
        "user": "geralt",
        "userImageURL": "https://cdn.pixabay.com/user/2021/03/03/15-28-58-440_250x250.jpg"
    },
    {
        "id": 1384758,
        "pageURL": "https://pixabay.com/illustrations/meditation-spiritual-yoga-1384758/",
        "type": "illustration",
        "tags": "meditation, spiritual, yoga",
        "previewURL": "https://cdn.pixabay.com/photo/2016/05/10/21/50/meditation-1384758_150.jpg",
        "previewWidth": 150,
        "previewHeight": 103,
        "webformatURL": "https://pixabay.com/get/g7758242c961a6f6341246bd5f9463e345c042f091395e5a64c28e706b4f4739f5bf85d460e89376a40e02c8e7cf51ff441fddcd1d244c816b7b61d41c7374de0_640.jpg",
        "webformatWidth": 640,
        "webformatHeight": 440,
        "largeImageURL": "https://pixabay.com/get/g1c009e79ab9890b27c0b3fb2846cf1ed400b67fb1baa59810e680597a0e608471f95a079f1f7122647fc29bfac7bb75f6d31645ede8861bcd128d82950953fa1_1280.jpg",
        "imageWidth": 7400,
        "imageHeight": 5100,
        "imageSize": 13947673,
        "views": 504530,
        "downloads": 221649,
        "favorites": 1888,
        "likes": 2199,
        "comments": 433,
        "user_id": 665768,
        "user": "Activedia",
        "userImageURL": "https://cdn.pixabay.com/user/2020/03/20/11-26-01-450_250x250.jpg"
    }
]
```

_Request 500
```
{
    "msg": "Internal Server Error"
    "errors": <your error>
}}
```







