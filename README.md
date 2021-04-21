# p2-iproject-server
## Bank Sampah
Individual Project server site

## RESTful endpoints
### POST /register
> Post/Create an account

_Request Header_
```
not needed
```
_Request Body_
```
{
  "email": "<your-email>",
  "password": "<your-password>",
  "name": "<your-name>"
}
```
_Response (201)_
```
{
  "id": "<your-id>",
  "name": "<your-name>"
}
```
_Response (500)_
```
{
  "message": "<err.message>"
}
```

### POST /login
> Post login to an account
_Request Header_
```
not needed
```
_Request Body_
```
{
  "email": "<your-email>",
  "password": "<your-password>",
}
```
_Response (200)_
```
{
  "access_token": "<your access token>",
  "name": ""<your name>"
}
```
_Response (401)_
```
{
  "message": "Invalid email/password"
}
```
_Response (500)_
```
{
  "message": "<err.message>"
}
```
### GET /airQuality
> Get data of air quality and weather your area
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
{
    "data": {
        "city": "Jakarta",
        "state": "Jakarta",
        "country": "Indonesia",
        "location": {
            "type": "Point",
            "coordinates": [
                106.79324,
                -6.236704
            ]
        },
        "current": {
            "weather": {
                "ts": "2021-04-20T16:00:00.000Z",
                "tp": 27,
                "pr": 1012,
                "hu": 83,
                "ws": 1.54,
                "wd": 160,
                "ic": "04n"
            },
            "pollution": {
                "ts": "2021-04-20T16:00:00.000Z",
                "aqius": 125,
                "mainus": "p2",
                "aqicn": 63,
                "maincn": "p2"
            }
        }
    },
    "converted": {
        "color": "Orange",
        "level": "Unhealthy for Sensitives People"
    }
}
```
_Response (500)_
```
{
  "message": "<err.message>"
}
```
### GET /wastes
> Get all products
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
[
  {
    "id": "<waste's-id>",
    "name": "<waste's name>",
    "condition": "<waste's condition>",
    "price": "<waste's price>",
    "baseUnit": "<waste's baseUnit>",
    "createdAt": "2020-03-20T07:15:12.149Z",
    "updatedAt": "2020-03-20T07:15:12.149Z",
  },
  {
    "id": "<waste's-id>",
    "name": "<waste's name>",
    "condition": "<waste's condition>",
    "price": "<waste's price>",
    "baseUnit": "<waste's baseUnit>",
    "createdAt": "2020-03-20T07:15:12.149Z",
    "updatedAt": "2020-03-20T07:15:12.149Z",
  }
]
```
_Response (500 - Kesalahan server)_
```
{
  "message": "<err.message>"
}
```

### GET /saldo
> Get all UserWastes
_Request Header_
```
{
  "access_token": "<your access token>"
}
```
_Request Params_
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
        "UserId": 2,
        "status": "Undeposited",
        "quantity": 7,
        "createdAt": "2021-04-20T08:27:43.132Z",
        "updatedAt": "2021-04-20T08:30:00.945Z",
        "WasteId": 1,
        "Waste": {
            "id": 1,
            "name": "Botol Plastik",
            "condition": "clean",
            "price": 2000,
            "baseUnit": "kg",
            "createdAt": "2021-04-20T07:01:21.980Z",
            "updatedAt": "2021-04-20T07:01:21.980Z"
        }
    },
    {
        "UserId": 2,
        "status": "Deposited",
        "quantity": 112,
        "createdAt": "2021-04-20T08:21:08.002Z",
        "updatedAt": "2021-04-20T08:23:41.860Z",
        "WasteId": 1,
        "Waste": {
            "id": 1,
            "name": "Botol Plastik",
            "condition": "clean",
            "price": 2000,
            "baseUnit": "kg",
            "createdAt": "2021-04-20T07:01:21.980Z",
            "updatedAt": "2021-04-20T07:01:21.980Z"
        }
    }
]
```
_Response (500 - Kesalahan server)_
```
{
  "message": "<err.message>"
}
```

### POST /saldo
> Post/create userWaste 
_Request Header_
```
{
  "access_token": "<access token>"
}
```
_Request Params_
```
not needed
```
_Request Body_
```
{
    "WasteId": "<waste's WasteId>",
    "quantity": "<waste's quantity>"
}
```
_Response (200)_
```
{
    "message": "successfully added"
}
```
_Response (400 - Validation Error)_
```
[
  "<returned error message>"
]
```
_Response (500 - Kesalahan server)_
```
{
  "message": "<err.message>"
}
```

### PATCH /saldo/:WasteId
> PATCH/replace UserWastes by WasteId
_Request Header_
```
{
  "access_token": "<access token>"
}
```
_Request Params_
```
id=[integer]
```
_Request Body_
```
{
    "quantity": "<waste's quantity>"
}
```
_Response (200)_
```
{
    "UserId": 3,
    "status": "Undeposited",
    "quantity": 4,
    "createdAt": "2021-04-20T22:38:21.263Z",
    "updatedAt": "2021-04-21T00:23:37.852Z",
    "WasteId": 8
}
```
_Response (400 - Validation Error)_
```
[
  "<returned error message>"
]
```
_Response (404 - not found)_
```
{
  "message": "not found"
}
```
_Response (500 - Kesalahan server)_
```
{
  "message": "<err.message>"
}
```

### PATCH /saldo/deposit
> Patch/modify UserWastes status by WasteId
_Request Header_
```
{
  "access_token": "<access token>"
}
```
_Request Params_
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
  "message": "Your waste has been deposited"
}
```
_Response (400 - Validation Error)_
```
[
  "<returned error message>"
]
```
_Response (404 - not found)_
```
{
  "message": "not found"
}
```
_Response (500 - Kesalahan server)_
```
{
  "message": "<err.message>"
}
```

### DELETE /saldo/:WasteId
> Delete UserWaste by WasteId
_Request Header_
```
{
  "access_token": "<access token>"
}
```
_Request Params_
```
id=[integer]
```
_Request Body_
```
not needed
```
_Response (200)_
```
{
  "message": "waste has been deleted"
}
```
_Response (404 - not found)_
```
{
  "message": "not found"
}
```
_Response (500 - Kesalahan server)_
```
{
  "message": "<err.message>"
}
```