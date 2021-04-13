# Hospital Web Schedule

Hospital Web Schedule is an web-application that helps patients to select schedules and doctors by online. This app has:

- RESful endpoint for CRUD operation
- JSON formatted response

## RESTful endpoints

## Patient API

### POST /patient/register

_Request Header_

```
Not needed
```

_Request Body_

```
{
  "email": "<your email> on validation unique, is email",
  "password": "<your password> on validation not empty",
  "first_name": "<your first name> on validation not empty",
  "last_name": "<your last name>",
  "address": "<your address> on validation not empty",
  "birthdate": "<your birthdate> on validation not empty",
  "ktp": "<your identity number(ktp)>, on validation unique, not empty",
  "phone": "<your phone number>, on validation unique, not empty",
  "gender": "<your gender>, on validation not empty"
}
```

_Response (201 - Created)_

```
{
  "id": "<your id created by system>",
  "email": "<your email>",
  "first_name": "<your first name>",
  "last_name": "<your last name>",
  "address": "<your address>",
  "birthdate": "<your birthdate>",
  "ktp": "<your identity number(ktp)>"
  "phone": "<your phone number>",
  "gender": "<your gender>"
}
```

_Response (400 - Bad Request)_

```
{
  "message": ["Masukkan email menggunakan format email", "Password tidak boleh kosong", "Nama depan anda tidak boleh kosong", "Tanggal lahir tidak boleh kosong", "Alamat tidak boleh kosong", "KTP tidak boleh kosong", "Nomor hp tidak boleh kosong", "Gender tidak boleh kosong", "Email sudah terdaftar, gunakan email lain", "KTP sudah terdaftar", "Nomor hp telah terdaftar"]
}
```

_Response (500 - Internal Server Error)_

```
{
  "message": "Internal server error"
}
```

### POST /patient/login

_Request Header_

```
Not needed
```

_Request Body_

```
{
  "email": "<your email>",
  "password": "<your password>"
}
```

_Response (201 - Created)_

```
{
  "access_token": "<your access token>"
}
```

_Response (400 - Bad Request)_

```
{
  "message": "Invalid Email/password"
}
```

_Response (500 - Internal Server Error)_

```
{
  "message": "Internal server error"
}
```

### GET /schedules

_Request Header_

```
{
  "access_token": "<your access token>"
}
```

_Request Body_

```
Not needed
```

_Response (200 - OK)_

```
[
  {
    "id": "1",
    "time": "<schedules time>",
    "session": "<schedules session>",
    "doctor_name": "<doctor name>",
    "specialist": "<doctor speciality>"
  },
  {
    "id": "2",
    "time": "<schedules time>",
    "session": "<schedules session>",
    "doctor_name": "<doctor name>",
    "specialist": "<doctor speciality>"
  }
]
```

_Response (500 - Internal Server Error)_

```
{
  "message": "The page isn't working"
}
```
