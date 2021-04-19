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

## Schedules API

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
    "date": "<schedules date>",
    "PatientId": "<your PatientId>",
    "DoctorId": "<doctor id>",
    "Doctor": { "instance of Doctor, instance of Poli"}
  },
  {
    "id": "2",
    "date": "<schedules date>",
    "PatientId": "<your PatientId>",
    "DoctorId": "<doctor id>",
    "Doctor": { "instance of Doctor, instance of Poli"}
  }
]
```

_Response (401 - Unauthorize)_

```
  {
    "message": "Harap login terlebih dahulu"
  }
```

_Response (500 - Internal Server Error)_

```
{
  "message": "Internal server error"
}
```

### POST /schedules

_Request Header_

```
{
  "access_token": "<your access token>"
}
```

_Request Body_

```
  {
    "date": "<date> on validation isAfter and isDate",
    "PatientId": "<your patient id>",
    "DoctorId": "<doctor id>, on validation mustFilled"
  }
```

_Response (201 - Created)_

```
  {
    "id": "<schedules id create by server>",
    "date": "<your picked date>",
    "PatientId": "<your patient id>",
    "DoctorId": "<doctor id>",
  }
```

_Response (400 - Bad Request)_

```
  {
    "message": "["Anda belum memilih dokter", "Pilih tanggal berobat anda", "Tanggal untuk pendaftaran jadwal berobat minimal adalah besok"]"
  }
```

_Response (401 - Unauthorize)_

```
  {
    "message": "Harap login terlebih dahulu"
  }
```

_Response (500 - Internal Server Error)_

```
{
  "message": "Internal server error"
}
```

### GET /schedules/:id

_Request Header_

```
{
  "access_token": "<your access token>"
}
```

_Request Params_

```
  {
    "id": "<schedule id>"
  }
```

_Request Body_

```
Not needed
```

_Response (200 - OK)_

```
  {
    "id": "<requested schedule id>",
    "date": "<requested schedule date>",
    "PatientId": "<your patient id>",
    "DoctorId": "<requested doctor id>",
    "Doctor": "<instance of doctor and instance of poli>"
  }
```

_Respponse (401 - Unauthorize)_

```
  {
    "message": ["Harap login terlebih dahulu", "Bukan rekam medis anda"]
  }
```

_Response (500 - Internal Server Error)_

```
{
  "message": "Internal server error"
}
```

### PUT /schedules/:id

_Request Header_

```
{
  "access_token": "<your access token>"
}
```

_Request Params_

```
  {
    "id": "<schedule id>"
  }
```

_Request Body_

```
  {
    "DoctorId": "<doctor id>",
    "date": "<picked date>"
  }
```

_Response (200 - OK)_

```
  {
    "message": "Data jadwal berobat berhasil diubah"
  }
```

_Reseponse (400 - Bad Request)_

```
  {
    "message": "[Anda belum memilih dokter", "Pilih tanggal berobat anda", "Tanggal untuk pendaftaran jadwal berobat minimal adalah besok"]"
  }
```

_Respponse (401 - Unauthorize)_

```
  {
    "message": ["Harap login terlebih dahulu", "Bukan rekam medis anda"]
  }
```

_Response (500 - Internal Server Error)_

```
{
  "message": "Internal server error"
}
```

### DELETE /schedules/:id

_Request Header_

```
{
  "access_token": "<your access token>"
}
```

_Request Params_

```
  {
    "id": "<schedule id>"
  }
```

_Request Body_

```
Not needed
```

_Response (200 - OK)_

```
{
  "message": "Jadwal berobat berhasil dihapus"
}
```

_Respponse (401 - Unauthorize)_

```
  {
    "message": ["Harap login terlebih dahulu", "Bukan rekam medis anda"]
  }
```

_Response (500 - Internal Server Error)_

```
{
  "message": "Internal server error"
}
```

## Hospital API

### GET /hospital/doctor

_Request Header_

```
Not needed
```

_Request Body_

```
Not needed
```

_Response (200 - OK)_

```
  [
    {
      "id": "<doctor id>",
      "full_name": "<doctor full name>",
      "session": "<doctor session>",
      "PoliId": "<poli id>",
      "Poli": "<instance of poli>"
    },
    {
      "id": "<doctor id>",
      "full_name": "<doctor full name>",
      "session": "<doctor session>",
      "PoliId": "<poli id>",
      "Poli": "<instance of poli>"
    }
  ]
```

_Response (500 - Internal Server Error)_

```
{
  "message": "Internal server error"
}
```

### GET /hospital/poli

_Request Header_

```
Not needed
```

_Request Body_

```
Not needed
```

_Response (200 - OK)_

```
  [
    {
      "id": "<doctor id>",
      "name": "<poli name>"
    },
    {
      "id": "<doctor id>",
      "name": "<poli name>"
    }
  ]
```

_Response (500 - Internal Server Error)_

```
{
  "message": "Internal server error"
}
```
