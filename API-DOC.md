# kanban-server

​
List of available endpoints:
​
- `POST /register`
- `POST /login`
- `POST /googlelogin`

And routes below need authentication
- `GET /wethers/:city`
- `GET /trips`
- `POST /trips`
- `POST /trips/:id/todos`
- `DELETE /trips/todos/:id`
- `DELEtE /trips/:id`

### POST /register

Request:

_Request Body_

```json
{
  "email": "string",
  "password": "string",
  "name": "string",
}
```

_Response (201 - Created)_
  ​
```json
{
  "id": "integer",
  "name": "string"
}
```

_Response (409 - Conflict)_

```json
{
  "message": "Email already exist"
}
```

_Response (409 - Length Required)_

```json
{
    "message": "Minimum password character is 6"
}
```

### POST /login

Request:

_Request Body_


```json
{
  "email": "string",
  "password": "string"
}
```

Response:

_Response (200 - OK)_​

```json
{
  "access_token": "string",
  "username": "string"
}
```

_Response (404 - not found)_

```json
{
  "message": "invalid username/password"
}
```

_Response (400 - Bad Request)_

```json
{
    "message": "invalid username/password"
}
```

### PUT /googlelogin

Request:

_Request Body_

required(account google)
```json
{
  "email": "string",
}
```

-status: 200
```json
{
    "access_token": "string",
    "name": "string",
    "avatar": "string"
}
```

-status: 500
```json
{
    "message": "<error messages || internal server error>"
}
```

### GET /weathers/:city

Request: 
- headers: access_token
- params: city

Response: 
```json
{
  "coord" : "{lon: number, lat: number}",
  "weather": "{
    id: number,
    main: string,
    description: string
    icon: string  
  }" ,
  "main": "{
    temp: number,
    temp_min: number,
    temp_max: number,
    pressure: numbber,
    humidity: number
  }",
  "visibility": "number",
  "wind": "{speed: number, deg: number}",
  "clouds": "{all: number}",
  "dt": "number",
  "sys": "{
    type: number,
    id: number,
    country: string,
    sunrise: number,
    sunset: number
  }",
  "timezone": "number",
  "id": "number",
  "name": "number",
  "cod": "number"
}
```

### POST /trips

Request: 
- headers: access_token
- data:
```json
{
  "title": "string",
  "origin": "string",
  "destination": "string",
  "depatureDate": "string",
}
```

Response:
- status 201
- body
```json
{
  "title": "string",
  "origin": "string",
  "destination": "string",
  "depatureDate": "string",
}
```

### GET /Trips

Request: 
- headers: access_token

Response:
- status 200
- body
```json
{
  "title": "string",
  "origin": "string",
  "destination": "string",
  "depatureDate": "string",
}
```

### POST /trips/:id/todos

Request: 
- headers: access_token

Response:
- status 200
- body
```json
{
  "title": "string",
  "description": "string"
}
```

### DELETE /trips/:id/todos

Request:
-headers: access_token

Response:
-status 200

### DELETE /trips/:id

Request:
-headers: access_token

Response:
- status 200
