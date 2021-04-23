
## HOSPITAL SYSTEM DOCUMENTATION


### Doctors can manage patient by using this website

## Hospital System App Step-by-step development process

---
### 1. POST/register
> Create new user

_Request Body_
```
{
    "email": "<inserting email>"
    "password": "<inserting password>"
    "role": "<inserting role>"
}

```

_Response (201)_ SUCCESS
```
{
    "id": 6,
    "email": "doctor7@mail.com",
    "role": "Surgeons"
}
```
_Response (400)_ BAD REQUEST
```
  {
    message: 'Error in validation'
  }

```
_Response (500)_ INTERNAL SERVER ERROR
```
  {
    message: "internal server error, something's wrong with your input"
  }

```
---
### 2. POST/login
login user

_Request Body_
```
{
    "email": "<inserting email>"
    "password": "<inserting password>"
}

```

_Response (200)_ SUCCESS
```
{
"access_token" : "<access token user>"
}
```
_Response (400)_ BAD REQUEST
```
  {
    message: 'Error in validation'
  }

```
_Response (500)_ INTERNAL SERVER ERROR
```
  {
    message: "internal server error, something's wrong with your input"
  }
```
---
### 3. POST/patient

> Create new patient list

_Request Header_
```
{
  "access_token": "<your access_token>"
}
```

_Request Body_
```
{
    "name": "<inserting name>"
    "date_of_birth": "<inserting date_of_birth>"
    "gender": "<inserting gender>"
    "status": "<inserting status>"
    "DiseaseId": "<inserting DiseaseId>"
    "UserId": "<inserting UserId>"
}

```

_Response (201)_ SUCCESS
```
{
    "name": "patient8",
    "date_of_birth": "2002-08-12",
    "gender": "male",
    "status": false,
    "DiseaseId": 4,
    "UserId": 1,
    "message": "Patient has been created"
}
```
_Response (400)_ BAD REQUEST
```
  {
    message: 'Error in validation'
  }

```
_Response (500)_ INTERNAL SERVER ERROR
```
  {
    message: "internal server error, something's wrong with your input"
  }

```
---
### 2.  GET/patient

> Get all assets


_Request Header_

```
{
  "access_token": "<your access token>"
}
```

_Request Body_

```
no request body needed

```

_Response (200)_ SUCCESS
```
[
  {
     "id": 1,
        "name": "Patient1",
        "date_of_birth": "2002-02-12",
        "gender": "Male",
        "status": false,
        "UserId": 2,
        "DiseaseId": 4,
        "User": {
            "id": 2,
            "email": "doctor2@mail.com",
            "role": "Surgeons"
        },
]
```
_Response (500)_ INTERNAL SERVER ERROR
```
  {
    message: "internal server error, something's wrong with your input"
  }

```
---
### 3.  GET/patient/:id

> Get one patient from database


_Request Header_

```
{
  "access_token": "<your access token>"
}
```
_Request Params_
```
  "id": "<your primary key>"
```

_Request Body_

```
no request body needed

```

_Response (200)_ SUCCESS
```
[
  {
    "name": "patient8",
    "date_of_birth": "2002-08-12",
    "gender": "male",
    "status": false,
    "DiseaseId": 4,
    "UserId": 1,
}
]

```
_Response (500)_ INTERNAL SERVER ERROR
```
  {
    message: "internal server error, something's wrong with your input"
  }

```
_Response (404)_
```
  {
    message: 'Error not Found
  }

```
---


### 4. PUT/patient/:id

> Update patient list based on id


_Request Header_

```
{
  "access_token": "<your access token>"
}
```
_Request Params_
```
  "id": "<your primary key>"
```


_Request Body_

```
{
    "name": "<inserting name>"
    "date_of_birth": "<inserting date_of_birth>"
    "gender": "<inserting gender>"
    "status": "<inserting status>"
    "DiseaseId": "<inserting DiseaseId>"
    "UserId": "<inserting UserId>"
}

```

_Response (200)_ SUCCESS
```

  {
      message: "patient has been updated
  }

```
_Response (400)_ BAD REQUEST
```
  {
    message: 'Error in validation'
  }

```
_Response (500)_ INTERNAL SERVER ERROR
```
  {
    message: "internal server error, something's wrong with your input"
  }

```

---

### 5. PATCH/patient/:id/survey


> Update patient status

_Request Header_

```
{
  "access_token": "<your access token>"
}
```
_Request Params_
```
  "id": "<your primary key>"
```

_Request Body_

```
{
    "status": "<inserting status>"
}

```

_Response (200)_ SUCCESS
```
[
  {
    message: "patient has been updated
  }
]
    
```
_Response (400)_ BAD REQUEST
```
  {
    message: 'Error in validation'
  }

```
_Response (404)_
```
  {
    message: 
  }

```
_Response (500)_ INTERNAL SERVER ERROR
```
  {
    message: "internal server error, something's wrong with your input"
  }

```
### 6. PATCH/patient/:id/dispatch


> Update patient status


_Request Header_

```
{
  "access_token": "<your access token>"
}
```
_Request Params_
```
  "id": "<your primary key>"
```

_Request Body_

```
{
    "status": "<inserting status>"
}

```

_Response (200)_ SUCCESS
```
[
  {
    message: "patient has been updated
  }
]
    
```
_Response (400)_ BAD REQUEST
```
  {
    message: 'Error in validation'
  }

```
_Response (404)_
```
  {
    message: 
  }

```
_Response (500)_ INTERNAL SERVER ERROR
```
  {
    message: "internal server error, something's wrong with your input"
  }

```
---


### 7. DELETE/patient/:id


> Delete patient list based on id


_Request Header_

```
{
  "access_token": "<your access token>"
}
```
_Request Params_
```
  "id": "<your primary key>"
```

_Request Body_

```
{
    request body not needed
}

```

_Response (200)_ SUCCESS
```
[
  {
      "message: "patient has been removed"
  }
]
```
_Response (404)_
```
  {
    message: 'Error not Found
  }

````
_Response (500)_ INTERNAL SERVER ERROR
```
  {
    message: "internal server error, something's wrong with your input"
  }

```
---

### 7. GET/Weather
 Get all weather status


_Request Header_

```
{
  "access_token": "<no need for access_token>"
}
```

_Request Body_

```
no request body needed

```

_Response (200)_ SUCCESS
```
[
    {
        "location": "Jakarta, Indonesia",
        "time": "2021-04-23 13:52",
        "weatherIcons": "https://assets.weatherstack.com/images/wsymbols01_png_64/wsymbol_0006_mist.png",
        "weatherDescriptions": "Haze",
        "temperature": 33
    }
]
```
_Response (500)_ INTERNAL SERVER ERROR
```
  {
    message: "internal server error, something's wrong with your input"
  }

```
---
### 8. GET/covid
 Get all covid cases in indonesia


_Request Header_

```
{
  "access_token": "<no need for access_token>"
}
```

_Request Body_

```
no request body needed

```

_Response (200)_ SUCCESS
```
[
    {
        "country": "Indonesia",
        "confirmed": 1537967,
        "recovered": 1381677,
        "deaths": 41815
    }
]
```
_Response (500)_ INTERNAL SERVER ERROR
```
  {
    message: "internal server error, something's wrong with your input"
  }

```
---
### 9. GET/news
 Get all news


_Request Header_

```
{
  "access_token": "<no need for access_token>"
}
```

_Request Body_

```
no request body needed

```

_Response (200)_ SUCCESS
```
[
     {
        "source": {
            "id": null,
            "name": "Kompas.com"
        },
        "author": "Krisiandi",
        "title": "Kemenkes: 132 WN India Masuk Indonesia dengan Pesawat Carter - Kompas.com - Nasional Kompas.com",
        "description": "'Mereka 132 orang masuk melalui Bandara Soekarno-Hatta,' kata Benget Saragih.",
        "url": "https://nasional.kompas.com/read/2021/04/23/10550851/kemenkes-132-wn-india-masuk-indonesia-dengan-pesawat-carter",
        "urlToImage": "https://asset.kompas.com/crops/ernImYfCzgGGordbgJ9hC9QZYDE=/0x962:5000x4295/780x390/filters:watermark(data/photo/2020/03/10/5e6775ae18c31.png,0,-0,1)/data/photo/2019/12/31/5e0a7b28cea59.jpg",
        "publishedAt": "2021-04-23T03:55:00Z",
        "content": "JAKARTA, KOMPAS.com - Hingga Jumat (23/4/2021), sebanyak 132 orang warga negara asing (WNA) asal India masuk ke Indonesia.\r\nKasubdit Karantina Kesehatan Direktorat Jenderal Pencegahan dan Pengendalia… [+1519 chars]"
    },
```
_Response (500)_ INTERNAL SERVER ERROR
```
  {
    message: "internal server error, something's wrong with your input"
  }

```

---