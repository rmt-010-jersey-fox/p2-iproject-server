
### POST /login
```
Request body:
{
  email: Required | String
  password: Required | String
}
```


* Success Response
```
- Status: 200
- Response Body:
{
    "name": admin,
    "email": "admin@mail.com",
    "id": 1,
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwibmFtZSI6ImFkbWluIiwiZW1haWwiOiJhZG1pbkBtYWlsLmNvbSIsImxldmVsIjowLCJpYXQiOjE2MTg2NDMxNjd9.Gz9j2EIqGMrbVQ9c-QXVbTBEGBTVDw9UlPvUs-cvMZQ"
}
```
* Error Response
```
- Status: 400
- Response Body:
{
  errors: [
    <errors>
  ]
}
```

### POST /register
```
Request body:
{
  email: Required | String
  password: Required | String
}
```


* Success Response
```
- Status: 200
- Response Body:
{
    "name": admin,
    "email": "admin@mail.com",
    "id": 1,
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwibmFtZSI6ImFkbWluIiwiZW1haWwiOiJhZG1pbkBtYWlsLmNvbSIsImxldmVsIjowLCJpYXQiOjE2MTg2NDMxNjd9.Gz9j2EIqGMrbVQ9c-QXVbTBEGBTVDw9UlPvUs-cvMZQ"
}
```
* Error Response
```
- Status: 400
- Response Body:
{
  errors: [
    <errors>
  ]
}
```


### GET /product/:id

_Request Header_
```
{
  access_token: String | "<user token>",
}
```

* Success Response
```
- Status: 200
- Response Body:
{
    "id": 1,
    "name": "nike",
    "price": 2000000,
    "stock": 20,
    "imageUrl": "https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
    "status": 1,
    "createdAt": "2021-04-19T07:34:56.779Z",
    "updatedAt": "2021-04-19T07:35:08.342Z",
    "LocationId": 1,
    "Location": {
        "id": 1,
        "name": "Jakarta",
        "status": 1
    }
}
```
* Error Response
```
- Status: 400
- Response Body:
{
  errors: [
    <errors>
  ]
}
```


### GET /product/


_Request Params_
```
{
  location: integer | id location | Optional,
}
```

* Success Response
```
- Status: 200
- Response Body:
[
    {
    "id": 1,
    "name": "nike",
    "price": 2000000,
    "stock": 20,
    "imageUrl": "https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
    "status": 1,
    "createdAt": "2021-04-17T07:34:56.779Z",
    "updatedAt": "2021-04-17T07:35:08.342Z",
    "LocationId": 1,
    "Location": {
        "id": 1,
        "name": "Jakarta",
        "status": 1
        }
    },
    {
        "id": 3,
    "name": "Sendal",
    "price": 300000,
    "stock": 34,
    "imageUrl": "https://s3.bukalapak.com/img/8898768362/large/Sandal_Swallow_Classic_Original_No_11__Size_42____Sendal_Jep.jpg",
    "status": 1,
    "createdAt": "2021-04-19T07:34:56.779Z",
    "updatedAt": "2021-04-19T07:35:08.342Z",
    "LocationId": 1,
    "Location": {
        "id": 1,
        "name": "Jakarta",
        "status": 1
        }
    }
]
```
* Error Response
```
- Status: 400
- Response Body:
{
  errors: [
    <errors>
  ]
}
```

### POST /product/

_Request Header_
```
{
  access_token: String | "<user token>",
}
```

_Request body_
```
{
    name: "test",
    price: 2000,
    stock: 2,
    imageUrl: "www.google.com",
    LocationId: 1,
    status: 1
}
```


* Success Response
```
- Status: 201
- Response Body:
{
{
    "id": 9,
    "name": "test",
    "price": 2000,
    "stock": 2,
    "imageUrl": "www.google.com",
    "status": 1,
    "updatedAt": "2021-04-17T07:53:42.998Z",
    "createdAt": "2021-04-17T07:53:42.998Z",
    "LocationId": 1
}
}
```
* Error Response
```
- Status: 400
- Response Body:
{
  errors: [
    <errors>
  ]
}
```

### PUT /product/:id

_Request Header_
```
{
  access_token: String | "<user token>",
}
```

_Request body_
```
{
    name: "test",
    price: 3000,
    stock: 3,
    imageUrl: "www.facebook.com",
    LocationId: 1,
    status: 1
}
```


* Success Response
```
- Status: 200
- Response Body:
[
    {
        "id": 9,
        "name": "test",
        "price": 3000,
        "stock": 3,
        "imageUrl": "www.facebook.com",
        "status": 1,
        "createdAt": "2021-04-17T07:53:42.998Z",
        "updatedAt": "2021-04-17T07:59:12.932Z",
        "LocationId": 1
    }
]
```
* Error Response
```
- Status: 400
- Response Body:
{
  errors: [
    <errors>
  ]
}
```

### PATCH /product/:id

_Request Header_
```
{
  access_token: String | "<user token>",
}
```

_Request body_
```
{
    status: 0
}
```


* Success Response
```
- Status: 200
- Response Body:
[
    {
        "id": 9,
        "name": "test",
        "price": 3000,
        "stock": 3,
        "imageUrl": "www.facebook.com",
        "status": 0,
        "createdAt": "2021-04-17T07:53:42.998Z",
        "updatedAt": "2021-04-17T07:59:12.932Z",
        "LocationId": 1
    }
]
```
* Error Response
```
- Status: 400
- Response Body:
{
  errors: [
    <errors>
  ]
}
```


### DELETE /product/:id

_Request Header_
```
{
  access_token: String | "<user token>",
}
```

* Success Response
```
- Status: 200
- Response Body:
{
    "message" : "item successfully deleted"
}
```
* Error Response
```
- Status: 400
- Response Body:
{
  errors: [
    <errors>
  ]
}
```



### GET /location/:id

_Request Header_
```
{
  access_token: String | "<user token>",
}
```

* Success Response
```
- Status: 200
- Response Body:
{
    "id": 1,
    "name": "Fashion",
    "status": 1,
    "createdAt": "2021-04-17T09:05:37.592Z",
    "updatedAt": "2021-04-1T09:05:37.592Z"
}
```
* Error Response
```
- Status: 400
- Response Body:
{
  errors: [
    <errors>
  ]
}
```


### GET /location/



* Success Response
```
- Status: 200
- Response Body:
[
    {
        "id": 1,
        "name": "Fashion",
        "status": 1,
        "createdAt": "2021-04-17T09:05:37.592Z",
        "updatedAt": "2021-04-17T09:05:37.592Z"
    },
    {
        "id": 3,
        "name": "Goods",
        "status": 1,
        "createdAt": "2021-04-19T09:09:17.662Z",
        "updatedAt": "2021-04-19T09:09:17.662Z"
    },
    {
        "id": 3,
        "name": "Furniture",
        "status": 1,
        "createdAt": "2021-04-19T09:09:17.662Z",
        "updatedAt": "2021-04-19T09:09:17.662Z"
    }

]
```
* Error Response
```
- Status: 400
- Response Body:
{
  errors: [
    <errors>
  ]
}
```

### POST /location/

_Request Header_
```
{
  access_token: String | "<user token>",
}
```

_Request body_
```
{
    name: "test",
}
```


* Success Response
```
- Status: 201
- Response Body:
{
        "id": 3,
        "name": "Furniture",
        "status": 1,
        "createdAt": "2021-04-19T09:09:17.662Z",
        "updatedAt": "2021-04-19T09:09:17.662Z"
}
```
* Error Response
```
- Status: 400
- Response Body:
{
  errors: [
    <errors>
  ]
}
```

### PUT /location/:id

_Request Header_
```
{
  access_token: String | "<user token>",
}
```

_Request body_
```
{
    name: "Fashion",
    status: 1
}
```


* Success Response
```
- Status: 200
- Response Body:
[
    {
        "id": 2,
        "name": "Goods",
        "status": 1,
        "createdAt": "2021-04-19T09:08:10.385Z",
        "updatedAt": "2021-04-19T08:10:00.106Z"
    }
]
```
* Error Response
```
- Status: 400
- Response Body:
{
  errors: [
    <errors>
  ]
}
```

### PATCH /location/:id

_Request Header_
```
{
  access_token: String | "<user token>",
}
```

_Request body_
```
{
    status: 0
}
```


* Success Response
```
- Status: 200
- Response Body:
[
    {
        "id": 2,
        "name": "Goods",
        "status": 0,
        "createdAt": "2021-04-19T09:08:10.385Z",
        "updatedAt": "2021-04-19T08:10:33.699Z"
    }
]
```
* Error Response
```
- Status: 400
- Response Body:
{
  errors: [
    <errors>
  ]
}
```


### DELETE /location/:id

_Request Header_
```
{
  access_token: String | "<user token>",
}
```

* Success Response
```
- Status: 200
- Response Body:
{
    "message" : "item successfully deleted"
}
```
* Error Response
```
- Status: 400
- Response Body:
{
  errors: [
    <errors>
  ]
}
```



### GET /banner/:id

_Request Header_
```
{
  access_token: String | "<user token>",
}
```

* Success Response
```
- Status: 200
- Response Body:
{
    "id": 1,
    "name": "test",
    "imageUrl": "https://s3.envato.com/files/156746004/1200x628.jpg",
    "status": 1,
    "updatedAt": "2021-04-19T05:53:00.054Z",
    "createdAt": "2021-04-19T05:53:00.054Z"
}
```
* Error Response
```
- Status: 400
- Response Body:
{
  errors: [
    <errors>
  ]
}
```


### GET /banner/


* Success Response
```
- Status: 200
- Response Body:
[
    {
    "id": 1,
    "name": "test",
    "imageUrl": "https://s3.envato.com/files/156746004/1200x628.jpg",
    "status": 1,
    "updatedAt": "2021-04-19T05:53:00.054Z",
    "createdAt": "2021-04-19T05:53:00.054Z"
}
]
```
* Error Response
```
- Status: 400
- Response Body:
{
  errors: [
    <errors>
  ]
}
```

### POST /banner/

_Request Header_
```
{
  access_token: String | "<user token>",
}
```

_Request body_
```
{
    name: "test",
    imageUrl: "https://google.com",
    status: 1
}
```


* Success Response
```
- Status: 201
- Response Body:
{
    "id": 1,
    "name": "test",
    "imageUrl": "https://google.com",
    "status": 1,
    "updatedAt": "2021-04-19T05:53:00.054Z",
    "createdAt": "2021-04-19T05:53:00.054Z"
}
```
* Error Response
```
- Status: 400
- Response Body:
{
  errors: [
    <errors>
  ]
}
```

### PUT /banner/:id

_Request Header_
```
{
  access_token: String | "<user token>",
}
```

_Request body_
```
{
    name: "computer",
    imageUrl: "https://facebook.com",
    status: 1
}
```


* Success Response
```
- Status: 200
- Response Body:
[
    {
        "id": 1,
        "name": "test",
        "imageUrl": "https://s3.envato.com/files/156746004/1200x628.jpg",
        "status": 1,
        "createdAt": "2021-04-19T09:08:10.385Z",
        "updatedAt": "2021-04-19T08:10:00.106Z"
    }
]
```
* Error Response
```
- Status: 400
- Response Body:
{
  errors: [
    <errors>
  ]
}
```

### PATCH /banner/:id

_Request Header_
```
{
  access_token: String | "<user token>",
}
```

_Request body_
```
{
    status: 0
}
```


* Success Response
```
- Status: 200
- Response Body:
[
    {
        "id": 1,
        "name": "test",
        "imageUrl": "https://s3.envato.com/files/156746004/1200x628.jpg",
        "status": 0,
        "createdAt": "2021-04-19T09:08:10.385Z",
        "updatedAt": "2021-04-19T08:10:00.106Z"
    }
]
```
* Error Response
```
- Status: 400
- Response Body:
{
  errors: [
    <errors>
  ]
}
```


### DELETE /banner/:id

_Request Header_
```
{
  access_token: String | "<user token>",
}
```

* Success Response
```
- Status: 200
- Response Body:
{
    "message" : "item successfully deleted"
}
```
* Error Response
```
- Status: 400
- Response Body:
{
  errors: [
    <errors>
  ]
}
```


### GET /cart/

_Request Header_
```
{
  access_token: String | "<user token>",
}
```

* Success Response
```
- Status: 200
- Response Body:
[
    {
        "id": 10,
        "status": 0,
        "quantity": 12,
        "createdAt": "2021-04-20T13:56:59.303Z",
        "updatedAt": "2021-04-20T06:46:02.810Z",
        "UserId": 2,
        "ProductId": 2,
        "TransactionId": null,
        "Product": {
            "id": 2,
            "name": "asdasdsa",
            "price": 1399,
            "stock": 12,
            "imageUrl": "https://images.unsplash.com/photo-1585488434451-7ee645d0574b?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjN8fHNhbmRhbHxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
        }
    }
]
```
* Error Response
```
- Status: 400
- Response Body:
{
  errors: [
    <errors>
  ]
}
```


### POST /cart/

_Request Header_
```
{
  access_token: String | "<user token>",
}
```

_Request body_
```
{
    ProductId: 1,
    quantity: 2
}
```

* Success Response
```
- Status: 200
- Response Body:
[
    {
        "id": 10,
        "status": 0,
        "quantity": 1,
        "createdAt": "2021-04-20T13:56:59.303Z",
        "updatedAt": "2021-04-20T06:46:02.810Z",
        "UserId": 4,
        "ProductId": 1,
        "TransactionId": null,
    }
]
```
* Error Response
```
- Status: 400
- Response Body:
{
  errors: [
    <errors>
  ]
}
```

### PATCH /cart/:id

_Request Header_
```
{
  access_token: String | "<user token>",
}
```

_Request body_
```
{
    quantity: 2
}
```

* Success Response
```
- Status: 200
- Response Body:
[
    {
        "id": 10,
        "status": 0,
        "quantity": 1,
        "createdAt": "2021-04-20T13:56:59.303Z",
        "updatedAt": "2021-04-20T06:46:02.810Z",
        "UserId": 4,
        "ProductId": 1,
        "TransactionId": null,
    }
]
```
* Error Response
```
- Status: 400
- Response Body:
{
  errors: [
    <errors>
  ]
}
```



### DELETE /cart/:id

_Request Header_
```
{
  access_token: String | "<user token>",
}
```

* Success Response
```
- Status: 200
- Response Body:
{
    "message" : "item successfully deleted"
}
```
* Error Response
```
- Status: 400
- Response Body:
{
  errors: [
    <errors>
  ]
}
```


### GET /wishlist/

_Request Header_
```
{
  access_token: String | "<user token>",
}
```

* Success Response
```
- Status: 200
- Response Body:
[
    {
        "id": 10,
        "status": 1,
        "createdAt": "2021-04-20T13:56:59.303Z",
        "updatedAt": "2021-04-20T06:46:02.810Z",
        "UserId": 4,
        "ProductId": 2,
        "Product": {
            "id": 2,
            "name": "asdasdsa",
            "price": 1399,
            "stock": 12,
            "imageUrl": "https://images.unsplash.com/photo-1585488434451-7ee645d0574b?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjN8fHNhbmRhbHxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
        }
    }
]
```
* Error Response
```
- Status: 400
- Response Body:
{
  errors: [
    <errors>
  ]
}
```


### POST /wishlist/:id

_Request Header_
```
{
  access_token: String | "<user token>",
}
```

* Success Response
```
- Status: 200
- Response Body:
[
    {
        "id": 10,
        "status": 1,
        "createdAt": "2021-04-23T13:56:59.303Z",
        "updatedAt": "2021-04-24T06:46:02.810Z",
        "UserId": 4,
        "ProductId": 1,
    }
]
```
* Error Response
```
- Status: 400
- Response Body:
{
  errors: [
    <errors>
  ]
}
```


### DELETE /wishlist/:id

_Request Header_
```
{
  access_token: String | "<user token>",
}
```

* Success Response
```
- Status: 200
- Response Body:
{
    "message" : "item successfully deleted"
}
```
* Error Response
```
- Status: 400
- Response Body:
{
  errors: [
    <errors>
  ]
}
```


### POST /transaction/

_Request Header_
```
{
  access_token: String | "<user token>",
}
```

* Success Response
```
- Status: 200
- Response Body:
{
    "msg": "successfully checked out"
}
```
* Error Response
```
- Status: 400
- Response Body:
{
  errors: [
    <errors>
  ]
}
```


### GET /transaction/

_Request Header_
```
{
  access_token: String | "<user token>",
}
```

* Success Response
```
- Status: 200
- Response Body:
[
    {
        "id": 2,
        "status": 1,
        "date": "2021-04-20T07:30:09.234Z",
        "createdAt": "2021-04-20T07:30:09.235Z",
        "updatedAt": "2021-04-20T07:30:09.235Z",
        "UserId": 4,
        "Carts": [
            {
                "id": 10,
                "status": 1,
                "quantity": 12,
                "createdAt": "2021-04-23T13:56:59.303Z",
                "updatedAt": "2021-04-24T07:30:09.243Z",
                "UserId": 4,
                "ProductId": 2,
                "TransactionId": 2,
                "Product": {
                    "id": 2,
                    "name": "asdasdsa",
                    "price": 1399,
                    "stock": 12,
                    "imageUrl": "https://images.unsplash.com/photo-1585488434451-7ee645d0574b?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjN8fHNhbmRhbHxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
                }
            }
        ]
    }
}
```
* Error Response
```
- Status: 400
- Response Body:
{
  errors: [
    <errors>
  ]
}
```
