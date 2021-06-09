# cekongkir-server

​
List of available endpoints:
​

- `POST /register`
- `POST /login`

And routes below need authentication

- `GET /user`
- `POST /history`
- `GET /history`
- `GET /location/`
- `GET/ongkir/:province`
- `POST /ongkir`

### POST /register

Request:

- data:

```json
{
  "username": [string],
  "email": [string],
  "password": [string],
  "address": [string]
}
```

Response:

- status: 201
- body:

```json
{
  "id": 2,
  "email": "mulki2@gmail.com"
}
```

- status: 500
- body:

```json
{
    "internal server error"
}
```

- status: 400
- body:

```json
{
  "message": [
    "Please Input the Username",
    "Invalid Email Format",
    "Please Input the Email",
    "Please Input the Password"
  ]
}
```

### POST /login

Request:

- data:

```json
{
  "email": [string],
  "password": [string]
}
```

Response:

- status: 200
- body:

```json
{
    "access_token": <access_token>
}
```

- status: 400
- body:

```json
{
    "invalid email or password"
}
```

- status: 500
- body:

```json
{
    "internal server error"
}
```

### GET /user

Request:

- headers:

```json
{
    "access_token": <access_token>
}
```

Response:

- status: 200
- body:

```json
{
  "username": "mulkimrwn",
  "email": "mulki@gmail.com",
  "address": "Gading"
}
```

- status: 500
- body:

```json
{
    "internal server error"
}
```

### POST /history

Request:

- headers:

```json
{
    "access_token": <access_token>
}
```

- data:

```json
{
  "price": [integer],
  "item": [string]
}
```

Response:

- status: 200
- body:

```json
{
  "price": "25000",
  "item": "sapu",
  "UserId": "2"
}
```

- status: 500
- body:

```json
{
    "internal server error"
}
```

### GET /history

Request:

- headers:

```json
{
    "access_token": <access_token>
}
```

Response:

- status: 200
- body:

```json
{
  "price": "25000",
  "item": "sapu",
  "UserId": "2"
}
```

- status: 500
- body:

```json
{
    "internal server error"
}
```

### GET /location

Request:

- headers:

```json
{
    "access_token": <access_token>
}
```

Response:

- status: 200
- body:

```json
{
    [
        {
        "province_id": "1",
        "province": "Bali"
        },
        {
        "province_id": "2",
        "province": "Bangka Belitung"
        },
        {
        "province_id": "3",
        "province": "Banten"
        }
    ]
}
```

- status: 500
- body:

```json
{
    "internal server error"
}
```

### GET /location/:province

Request:

- headers:

```json
{
    "access_token": <access_token>
}
```

- params:

```json
{
  "province": [integer]
}
```

Response:

- status: 200
- body:

```json
{
    [
            {
                "city_id": "27",
                "province_id": "2",
                "province": "Bangka Belitung",
                "type": "Kabupaten",
                "city_name": "Bangka",
                "postal_code": "33212"
            },
            {
                "city_id": "28",
                "province_id": "2",
                "province": "Bangka Belitung",
                "type": "Kabupaten",
                "city_name": "Bangka Barat",
                "postal_code": "33315"
            },
    ]
}
```

- status: 500
- body:

```json
{
    "internal server error"
}
```

### GET /ongkir

Request:

- headers:

```json
{
    "access_token": <access_token>
}
```

- data:

```json
{
  "origin": [integer],
  "destination": [integer],
  "weight": [integer],
  "courier": [string]
}
```

Response:

- status: 200
- body:

```json
{
  [
        {
            "code": "pos",
            "name": "POS Indonesia (POS)",
            "costs": [
                {
                    "service": "Paket Kilat Khusus",
                    "description": "Paket Kilat Khusus",
                    "cost": [
                        {
                            "value": 48000,
                            "etd": "3 HARI",
                             "note": ""
                        }
                    ]
                }
            ]
        }
  ]
}
```

- status: 500
- body:

```json
{
    "internal server error"
}
```
