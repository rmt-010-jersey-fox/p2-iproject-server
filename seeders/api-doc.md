# Individual-Project-Server

​
List of available endpoints:
​
- `POST /register`
- `POST /login`
- `POST /loginGoogle`
- `GET /highlights`
- `GET /schedules/:id`

And routes below need authentication:

- `GET /player/:position`
- `GET /mySquad`
- `POST /mySquad/:playerid`
- `PUT /mySquad/:playerid`
- `DELETE /mySquad/:playerid`

### POST /register

Request:

- data:

```json
{
  "email": "izzan@mail.com",
  "password": "string123"
}
```

Success Response:

- status: 201
- body:
  ​

```json
{
    "id": 1,
    "email": "izzan@mail.com"
}
```

Error Response:

- status: 400 (Bad Request)
- body:

```json
{
    "message": "Password cannot be empty, Password must have min of 5 characters and max of 20 characters"
}
```

- status: 500
- body:

```json
{
    "msg": "Internal Server Error"
}
```

### POST /login

Request:

- data:

```json
{
  "email": "izzan@mail.com",
  "password": "string123"
}
```

Success Response:

- status: 200
- body:
  ​

```json
{
    "id": 1,
    "email": "izzan@mail.com",
    "access_token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiZW1haWwiOiJpenphbkBtYWlsLmNvbSIsImlhdCI6MTYxNzY4MTU0NH0.Gs3lR_pfS5EcjPvgBVQj6KocA6rPRnpzGRB7wOONgPE"
}
```

Error Response:

- status: 400 (Bad Request)
- body:

```json
{
    "msg": "Invalid Email / Password"
}
```

Or

- status: 500
- body:

```json
{
    "msg": "Internal Server Error"
}
```

### POST /loginGoogle

Request:

- data:

```json
{
  "email": "< Your email google >",
  "password": "< Your email password >"
}
```

Success Response:

- status: 200
- body:
  ​

```json
{
    "access_token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiZW1haWwiOiJpenphbkBtYWlsLmNvbSIsImlhdCI6MTYxNzY4MTU0NH0.Gs3lR_pfS5EcjPvgBVQj6KocA6rPRnpzGRB7wOONgPE"
}
```

Error Response:

- status: 400 (Bad Request)
- body:

```json
{
    "msg": "Invalid Email / Password"
}
```

Or

- status: 500
- body:

```json
{
    "msg": "Internal Server Error"
}
```
