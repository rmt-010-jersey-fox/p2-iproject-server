# Qurantara - Individual Project

Aplikasi Quran web peneman ibadah umat Islam, dalam mencari Surah di Al-Quran dan juga tersedia Hadits dari berbagai macam periwayat, serta waktu solat yang bisa dilihat dari berbagai kota di Indonesia.

&nbsp;

### RESTful endpoints list

- `POST /register`
- `POST /login`
- `POST /googleLogin`

- `POST /surah`
- `POST /quran`

- `GET /jadwalSolatUp`
- `POST /jadwalSolat`

- `POST /hadist`

- `GET /favorites`
- `POST /favorites/:SurahId`
- `DELETE /favorites/:id`

&nbsp;

## RESTful endpoint

### POST /register

> Register New User

_Request Header_

```
No needed
```

_Request Body_

```
{
    "email": "<email User>",
    "password": "<password User>"
}
```

_Response (201 - Created)_

```
{
    "id": "<user.id registed>",
    "email": "<user.email registed>"
}
```

_Response (400 - Bad Request)_

```
{
    "message": "<err name> already exists!"
}
```

_Response (500 - Internal server error)_

```
{
     "message": "Internal server error"
}
```

---

### POST /login

> Login User

_Request Header_

```
No needed
```

_Request Body_

```
{
    "email": "<email User>",
    "password": "<password User>"
}
```

_Response (200 - Ok)_

```
{
    "id": "<id login>",
    "email": "<email login>"
    "access_token": "<access_token login>"
}
```

_Response (400 - Bad Request)_

```
{
    message: "Invalid Email or Password"
}
```

_Response (500 - Internal server error)_

```
{
     "message": "Internal server error"
}
```

---

### POST /googleLogin

> Login User with GoogleOauth

_Request Header_

```
No needed
```

_Request Body_

```
{
    "email": "<email User>",
}
```

_Response (200 - Ok)_

```
{
    "id": "<id login>",
    "username": "<username login>",
    "email": "<email login>"
    "access_token": "<access_token login>"
}
```

_Response (400 - Bad Request)_

```
{
    message: "Invalid Email or Password"
}
```

_Response (500 - Internal server error)_

```
{
     "message": "Internal server error"
}
```

---

### POST /surah

> Input number of verses Quran to get Ayat

_Request Header_

```
{
  "access_token": "<your access token>"
}
```

_Request Body_

```
{
    "surah": "<number surah>",
    "ayat": "<number ayat>",
}
```

_Response (200 - Ok)_

```

{
    "number": "<obj number insurah & num inQuran>",
    "meta": "<obj data juz, page, manzil, ruku, hizbQuarter,sajda>"
    "text": "<text arab & transliteration>",
    "translation": "<english & indonesia translation>",
    "stock": "<product stock>",
    "audio": "<audio of ayat>",
    "tafsir": "<tafser ayat>",
    "surah": "<mount of verses surah>"
},

```

_Response (400 - Bad Request)_

```
{
    "message": "<err.name> is required!"
}

```

_Response (500 - Internal server error)_

```
{
  "message": "Internal server error"
}
```

---

### POST /quran

> input some value to trigger API and get data from API

_Request Header_

```
{
  "access_token": "<your access token>"
}
```

_Request Body_

```
{
  no needed
}
```

_Response (200 - Ok)_

```

{
    "number": "<number Surah>",
    "sequence": "<number of sequence>"
    "numberOfVerses": "<numberOfVerses>",
    "name": "name od Surah",
    "revelation": "<revelation(place)>",
    "audio": "<audio of ayat>",
    "tafsir": "<tafser ayat>",
    "surah": "<mount of verses surah>"
},

```

_Response (400 - Bad Request)_

```
{
    "message": "<err.name> is required!"
}

```

_Response (500 - Internal server error)_

```
{
  "message": "Internal server error"
}
```

---

### GET /jadwalSolatUp

> Get Data Solat from API

_Request Header_

```
{
  "access_token": "<your access token>"
}
```

_Request Body_

```
{
  no needed
}
```

_Response (200 - Ok)_

```

{
    "id": "<id place>",
    "lokasi": "<name of place>",
    "daerah": "<Provinsi>",
    "kordinat": "<Location Coordinate>",
    "jadwal": "<data of tanggal, imsak, subuh, terbit, dhuha, dzuhur, ashar, maghrib, isya, date>",
},

```

_Response (400 - Bad Request)_

```
{
    "message": "<err.name> is required!"
}

```

_Response (500 - Internal server error)_

```
{
  "message": "Internal server error"
}
```

---

### POST /jadwalsolat

> Get Data Time Solat from API

_Request Header_

```
{
  "access_token": "<your access token>"
}
```

_Request Body_

```
{
  date: "<date>",
  place: "<place>"
}
```

_Response (200 - Ok)_

```

{
    "id": "<id place>",
    "lokasi": "<name of place>",
    "daerah": "<Provinsi>",
    "kordinat": "<Location Coordinate>",
    "jadwal": "<data of tanggal, imsak, subuh, terbit, dhuha, dzuhur, ashar, maghrib, isya, date>",
},

```

_Response (400 - Bad Request)_

```
{
    "message": "<err.name> is required!"
}

```

_Response (500 - Internal server error)_

```
{
  "message": "Internal server error"
}
```

---

### POST /hadist

> Get Data Hadist from API

_Request Header_

```
{
  "access_token": "<your access token>"
}
```

_Request Body_

```
{
  kitab: "<name kitab Hadist>",
  nomor: "<nomor Hadist>"
}
```

_Response (200 - Ok)_

```

{
    "code": "<code>",
    "message": "<name and no Hadist>",
    "data": "<obj of name, id, contents, number, arab, meaning>",
},

```

_Response (400 - Bad Request)_

```
{
    "message": "<err.name> is required!"
}

```

_Response (500 - Internal server error)_

```
{
  "message": "Internal server error"
}
```

---

### GET /favorites

> Get Data Favorites Surah

_Request Header_

```
{
  "access_token": "<your access token>"
}
```

_Request Body_

```
no needed
```

_Response (200 - Ok)_

```

{
    "SurahId" : "<id Surah>",
    "surahName" : "<name Surah>",
    "surahArti" : "<translation of Surah>",
    "surahAyat" : "<numberOfVerses>",
    "surahJenis" : <revelation of Surah>"
},

```

_Response (400 - Bad Request)_

```
{
    "message": "<err.name> is required!"
}

```

_Response (500 - Internal server error)_

```
{
  "message": "Internal server error"
}
```

---

### POST /favorites/:SurahId

> Post Favorite Surah

_Request Header_

```
{
  "access_token": "<your access token>"
}
```

_Request Body_

```
{
    no needed
}
```

_Request Params_

```
id = <id Surah>
```

_Response (200 - Ok)_

```
{
    "id": 1,
    "SurahId" : "<Id Surah>"
    "UserId": <user Id>,
    "createdAt": "2021-04-06T13:16:23.226Z",
    "updatedAt": "2021-04-06T13:16:23.226Z",
}
```

_Response (401 - Unauthorize)_

```
{
  "message": "Unauthorized Access"
}
```

_Response (404 - Not Found)_

```
{
  "message": "Surah Not Found"
}
```

_Response (500 - Internal server error)_

```
{
  "message": "Internal server error"
}
```

---

### DELETE /favorites/:id/

> Delete selected favorites

_Request Header_

```
{
  "access_token": "<your access token>"
}
```

_Request Body_

```
No needed
```

_Request Params_

```
id = <id favorite>
```

_Response (200 - Ok)_

```
{
    "message": "Favorite Surah success to delete"
}
```

_Response (401 - Unauthorize)_

```
{
  "message": "Unauthorized Access"
}
```

_Response (404 - Not Found)_

```
{
  "message": "Not Found"
}
```

_Response (500 - Internal server error)_

```
{
  "message": "Internal server error"
}
```

---
