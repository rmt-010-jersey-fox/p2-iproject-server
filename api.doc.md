### POST /login

> authenticating

_Request Body_
```
{
  "email": "<email to get insert into>",
  "password": "<password to get insert into>"
}

```

_Response (200 - Created)_
```
{
  access_token : <access_token code>,
  username: <username code>
}
```

_Response (400 - Bad Request)_
```
{
  "message": "Invalid Email or Password"
}
```

### POST /register

_Request Body_
```
{
  "email": "<email to get insert into>",
  "userame": "<userame to get insert into>"
  "phone": "<userame to get insert into>"
  "password": "<password to get insert into>"
}

```

_Response (201 - Created)_
```
{
    "id": 5,
    "email": "mm@mail.com",
    "username": "mm",
    "phone": 0878716736823
}
```

_Response (400 - Bad Request)_
```
{
  "message": "Invalid requests"
}
```

### POST /appointments/:barbershopid

> Create new appointments

_Request Header_
```
{
  "access_token": "<your access token>"
}
```

_Request Body_
```
{
  "date": '2020/01/01',
  "scheduleStart": '10:30',
  "scheduleEnd": '11:30',
}

```

_Response (20i - Created)_
```
{
  "UserId": 2,
  "BarberShopId": 1,
  "ServiceId": null,
  "BarberId": null,
  "date": "2021-04-27T00:00:00.000Z",
  "scheduleStart": "10:10",
  "scheduleEnd": "11:10",
  "updatedAt": "2021-04-22T03:31:57.478Z",
  "createdAt": "2021-04-22T03:31:57.478Z",
  "status": "progress",
  "message": null,
  "rating": null
}
```

_Response (400 - Bad Request)_
```
{
  "message": "Invalid requests"
}
```


### GET /appointments

> Get all appointments
> customerAuthor

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
  "UserId": 2,
  "BarberShopId": 1,
  "ServiceId": null,
  "BarberId": null,
  "date": "2021-04-27T00:00:00.000Z",
  "status": "progress",
  "scheduleStart": "10:10",
  "scheduleEnd": "11:10",
  "message": null,
  "rating": null,
  "createdAt": "2021-04-22T03:31:57.478Z",
  "updatedAt": "2021-04-22T03:31:57.478Z"
}
```

_Response (400 - Bad Request)_
```
{
  "message": "Invalid request"
}
```

### GET /barbershops

> Get all barbershops
> customerAuthor

_Request Body_
```
not needed
```

_Response (200)_
```
[
  {
    "id": 3,
    "email": "bunut@mail.com",
    "phone": "6212987209876",
    "name": "Bunut Manly",
    "address": "Pinang Sebatang Timur, Tualang, Siak Regency, Riau 28685",
    "imgUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTzIFvh0BXVPStJM8bRYyPNVpZpAMgNlWopug&usqp=CAU",
    "latitude": "0.700614",
    "langitude": "101.624423",
    "open": "09:00",
    "closed": "23:00",
    "createdAt": "2021-04-21T23:52:13.287Z",
    "updatedAt": "2021-04-21T23:52:13.287Z",
    "Services": [
      {
        "id": 7,
        "BarberShopId": 3,
        "name": "Standar",
        "description": "Pangkas normal",
        "timeServices": 40,
        "price": 20000,
        "createdAt": "2021-04-21T23:52:13.407Z",
        "updatedAt": "2021-04-21T23:52:13.407Z"
      }
    ],
      {
        "id": 20,
        "BarberShopId": 3,
        "name": "Boy",
        "status": "active",
        "createdAt": "2021-04-22T03:09:05.031Z",
        "updatedAt": "2021-04-22T03:09:05.031Z"
      },
      {
        "id": 19,
        "BarberShopId": 3,
        "name": "Rian",
        "status": "active",
        "createdAt": "2021-04-22T03:08:48.973Z",
        "updatedAt": "2021-04-22T03:08:48.973Z"
      },
      {
        "id": 18,
        "BarberShopId": 3,
        "name": "Tony",
        "status": "active",
        "createdAt": "2021-04-22T03:08:41.771Z",
        "updatedAt": "2021-04-22T03:08:41.771Z"
      },
      {
        "id": 17,
        "BarberShopId": 3,
        "name": "Wilman",
        "status": "active",
        "createdAt": "2021-04-22T03:08:34.318Z",
        "updatedAt": "2021-04-22T03:08:34.318Z"
      }
    ]
  },
  {
    "id": 4,
    "email": "km5@mail.com",
    "phone": "6212987209876",
    "name": "Km5",
    "address": "Jl. Perawang - Siak, Perawang, Kec. Tualang, Kabupaten Siak, Riau 28685",
    "imgUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTcG3euiE1KHL7dlobBmwnM8TZ5MacLw2eUuw&usqp=CAU",
    "latitude": "0.671735",
    "langitude": "101.605884",
    "open": "07:15",
    "closed": "18:20",
    "createdAt": "2021-04-21T23:52:13.379Z",
    "updatedAt": "2021-04-21T23:52:13.379Z",
    "Services": [
        {
        "id": 8,
        "BarberShopId": 4,
        "name": "Standar",
        "description": "Pangkas normal",
        "timeServices": 40,
        "price": 20000,
        "createdAt": "2021-04-21T23:52:13.407Z",
        "updatedAt": "2021-04-21T23:52:13.407Z"
      }
    ],
  "Barbers": [
      {
        "id": 22,
        "BarberShopId": 4,
        "name": "Wendy",
        "status": "active",
        "createdAt": "2021-04-22T03:09:27.501Z",
        "updatedAt": "2021-04-22T03:09:27.501Z"
      },
      {
        "id": 21,
        "BarberShopId": 4,
        "name": "Wili",
        "status": "active",
        "createdAt": "2021-04-22T03:09:15.112Z",
        "updatedAt": "2021-04-22T03:09:15.112Z"
      }
    ]
  }
]
```

_Response (400 - Bad Request)_
```
{
  "message": "Invalid request"
}
```

### Patch /appointments/:id/reschedule

> Get appointments by id(find)
_Request Params_
```
id
```

_Request Header_
```
{
 {
  "UserId": 2,
  "BarberShopId": 1,
  "ServiceId": null,
  "BarberId": null,
  "date": "2021-04-27T00:00:00.000Z",
  "status": "progress",
  "scheduleStart": "10:10",
  "scheduleEnd": "11:10",
  "message": null,
  "rating": null,
  "createdAt": "2021-04-22T03:31:57.478Z",
  "updatedAt": "2021-04-22T03:31:57.478Z"
}
}
```

_Request Body_
```
{
"date": <appointments date>,
"scheduluStart": <appointments scheduluStart>,
"scheduluEnd": <appointments scheduluEnd>,
"}
```

_Response (200)_
```
{
  "id": 3,
  "ProductId": 2,
  "UserId": 5,
  "quantity": 3,
  "status": "ready",
  "createdAt": "2021-04-14T13:52:46.002Z",
  "updatedAt": "2021-04-14T13:55:36.081Z"
}
```

_Response (400 - Bad Request)_
```
{
  "message": "Invalid request"
}
```
---

_Response (404 - Not Found)_
```
{
  "message": "appointments not found"
}
```
---

_Response (500 - Server Error)_
```
{
  "message": "Internal server error"
}
```
---

### Delete /appointments/:id

> Get appointments by id(find)
_Request Params_
```
id
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
  No needed,
"}
```

_Response (200)_
```
{
  message: "success deleted"
}
```

_Response (404 - Not Found)_
```
{
  "message": "appointments not found"
}
```
---

_Response (500 - Server Error)_
```
{
  "message": "Internal server error"
}
```
---