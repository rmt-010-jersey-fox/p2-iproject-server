# p2-iproject-server
Individual Project server site: TRIP-PLANER

## List Route
- POST `/register`
- POST `/login`
- GET `/vacations`
- POST `/vacations`
- PUT `/vacations/:id`
- DELETE `/vacations/:id`
- GET `/destinations-list/:vacationId`
- POST `/destinations/:vacationId`
- GET `/destinations`
- DELETE `/destinations/:id`


**Register**

* **URL**

  /register

* **Method:**

  `POST`
  
*  **Request Header**

   **Required:**
``` 
  None
```   

* **Request Body**

  **Required:**
```
  {
    "name": "<User's name>"
    "username": "<User's username>"
    "email": "<User's email>",
    "password": "<User's password>"
  }
```
  

* **Success Response:**

  * **Code:** 200 <br />
    **Content:**
```
      {
        "id": 1,
        "name": "user name",
        "username": "username",
        "email": "user1@mail.com"
      }
```

* **Error Response:**

  * **Code:** 400 BAD REQUEST <br />
    **Content:**
```
    {
      "Error": "VALIDATION_ERROR"
      "Messege": ""Name required", "Username required", "Email required", "Password required", "username/email is already taken""
    }
```
  OR

* **Code:** 500 <br />
    **Content:**
```
    {
      "Error" :  "UNKNOWN_ERROR"
    }
```

**Login**

* **URL**

  /login

* **Method:**

  `POST`
  
*  **Request Header**

   **Required:**
``` 
  None
```   

* **Request Body**

  **Required:**
```
  {
    "username": "<User's username>",
    "password": "<User's password>"
  }
```
  

* **Success Response:**

  * **Code:** 200 <br />
    **Content:**
```
      {
        "id": 1,
        "username": "username",
        "email": "user1@mail.com",
        "access_token": "<user's access token>"
      }
```

* **Error Response:**

  * **Code:** 401 UNAUTHORIZED <br />
    **Content:**
```
    {
      "Error" :  "USER_NOT_AUTHENTICATED"
      "Message": "Invalid username/password"
    }
```
  OR

* **Code:** 500 <br />
    **Content:**
```
    {
      "Error" :  "UNKNOWN_ERROR"
    }
```

**Show All Vacations**

* **URL**

  /vacations

* **Method:**

  `GET`
  
*  **Request Header**

   **Required:**
``` 
  {
    access_token: token
  }
```   

* **Request Body**

  **Required:**
```
  None
```
  

* **Success Response:**

  * **Code:** 200 <br />
    **Content:**
```
    [
      {
        "id": 2,
        "start_date": "2021-05-05T00:00:00.000Z",
        "end_date": "2021-06-06T00:00:00.000Z",
        "city": "Surabaya",
        "lat": "-7.2574719",
        "lng": "112.7520883",
        "photo_reference": "ATtYBwIg_Dh4ag6JdeJN8gD0t66FEBXmfOiPqXB2V_vepOkH5Iilg10ysaoYILmRO0Ssf4RPXDyKitMAvHbeJXRHoi6whBT0iQAHmmqgb15Q3LGdS4iQIBfYYMD9VSUE7SYfw26iJUJuGFREcewgo4F6POI7mQSbAJLzNHbgiZ1ZnE1z_cM",
        "userId": 1,
        "createdAt": "2021-04-21T16:56:45.603Z",
        "updatedAt": "2021-04-21T16:56:45.603Z"
      },
      {
        "id": 3,
        "start_date": "2021-05-05T00:00:00.000Z",
        "end_date": "2021-06-06T00:00:00.000Z",
        "city": "Bali",
        "lat": "-8.3405389",
        "lng": "115.0919509",
        "photo_reference": "ATtYBwJvURk3PNpHAoWJnPug2lMNVRx2GmdVVbAtHoYrcxoyG9P6gKlX4Ril5c0B-fq5Ys4OBiiNPTM57A-bwGDFc87C6ekPJuRk7c5WC0KteItgrwXBQr_lvK7ex-SnoLXanzhgjy4e_m-0LkU3o-bFchvF1Db4Ug9AfmorFdE_rEHGL-HV",
        "userId": 1,
        "createdAt": "2021-04-21T16:56:50.731Z",
        "updatedAt": "2021-04-21T16:56:50.731Z"
      }
    ]
```

* **Error Response:**

  * **Code:** 401 UNAUTHORIZED <br />
    **Content:**
```
    {
      "Error" :  "USER_NOT_AUTHENTICATED"
      "Message": "Invalid User"
    }
```
OR

  * **Code:** 500 <br />
    **Content:**
```
    {
      "Error" :  "UNKNOWN_ERROR"
    }
```

**Create New Vacation**

* **URL**

  /vacations

* **Method:**

  `POST`
  
*  **Request Header**

   **Required:**
``` 
  {
    access_token: token
  }
```   

* **Request Body**

  **Required:**
```
  {
    "start_date": "<start_date to get to insert into>",
    "end_date": "<end_date to get to insert into>",
    "city": "<city to get to insert into>"
  }
```
  

* **Success Response:**

  * **Code:** 201 <br />
    **Content:**
```
    {
      "id": 3,
      "start_date": "2021-05-05T00:00:00.000Z",
      "end_date": "2021-06-06T00:00:00.000Z",
      "city": "Bali",
      "lat": "-8.3405389",
      "lng": "115.0919509",
      "photo_reference": "ATtYBwJvURk3PNpHAoWJnPug2lMNVRx2GmdVVbAtHoYrcxoyG9P6gKlX4Ril5c0B-fq5Ys4OBiiNPTM57A-bwGDFc87C6ekPJuRk7c5WC0KteItgrwXBQr_lvK7ex-SnoLXanzhgjy4e_m-0LkU3o-bFchvF1Db4Ug9AfmorFdE_rEHGL-HV",
      "userId": 1,
      "updatedAt": "2021-04-21T16:56:50.731Z",
      "createdAt": "2021-04-21T16:56:50.731Z"
    }
```

* **Error Response:**

  * **Code:** 400 BAD REQUEST <br />
    **Content:**
```
    {
      "Error": "VALIDATION_ERROR"
      "Messege": ""Start date required", "End date required", "City required""
    }
```
  OR

  * **Code:** 401 UNAUTHORIZED <br />
    **Content:**
```
    {
      "Error" :  "USER_NOT_AUTHENTICATED"
      "Message": "Invalid User"
    }
```
OR

  * **Code:** 500 <br />
    **Content:**
```
    {
      "Error" :  "UNKNOWN_ERROR"
    }
```

**Edit Vacation By ID**

* **URL**

  /vacations/:id

* **Method:**

  `PUT`
  
*  **Request Header**

   **Required:**
``` 
  {
    access_token: token
  }
```   

* **Request Body**

  **Required:**
```
  {
    "start_date": "<start_date to get updated>",
    "end_date": "<end_date to get updated>"
  }
```
  

* **Success Response:**

  * **Code:** 200 <br />
    **Content:**
```
    {
      {
        "id": 1,
        "start_date": "2022-04-05T00:00:00.000Z",
        "end_date": "2022-05-05T00:00:00.000Z",
        "city": "Surabaya",
        "lat": "-7.2574719",
        "lng": "112.7520883",
        "photo_reference": "ATtYBwLm1iUp7RMrvNhGhRWM5tFm5kjnpzYIqfcGgMOQV6TovdPzFplOyACKdwIdC48nNldCFJ5MohA6mI5t16xZG1eiioQmSl5mhOBVhbIrQbyVe7_LPD-cI3ZYX4-W2607fTBh6jlBka9Ye70tAyBwRBFfx6rJze50gYT7XTb8qtQqpMk",
        "userId": 1,
        "createdAt": "2021-04-21T15:37:41.038Z",
        "updatedAt": "2021-04-21T16:17:42.205Z"
      }
```

* **Error Response:**

  * **Code:** 400 BAD REQUEST <br />
    **Content:**
```
    {
      "Error": "VALIDATION_ERROR"
      "Messege": ""Start date required", "End date required""
    }
```
  OR

  * **Code:** 401 UNAUTHORIZED <br />
    **Content:**
```
    {
      "Error" :  "USER_NOT_AUTHENTICATED"
      "Message": "Invalid User"
    }
```
OR

  * **Code:** 500 <br />
    **Content:**
```
    {
      "Error" :  "UNKNOWN_ERROR"
    }
```

**Remove Vacation ID**

* **URL**

  /vacations/id:

* **Method:**

  `DELETE`
  
*  **Request Header**

   **Required:**
``` 
  {
    access_token: token
  }
```   

* **Request Body**

  **Required:**
```
  None
```
  

* **Success Response:**

  * **Code:** 200 <br />
    **Content:**
```
      "vacations": 1
      "Message": "vacations deleted successfully"
```

* **Error Response:**

  * **Code:** 401 UNAUTHORIZED <br />
    **Content:**
```
    {
      "Error" :  "USER_NOT_AUTHENTICATED"
      "Message": "Invalid User"
    }
```
OR

  * **Code:** 403 FORBIDDEN <br />
    **Content:**
```
    {
      "Error" :  "FORBIDDEN_ACCESS"
      "Message": "You don't have permission to access"
    }
```
OR

  * **Code:** 404 NOT FOUND <br />
    **Content:**
```
    {
      "Error" :  "INVALID_ID"
      "Message": "Data not found"
    }
```
OR

  * **Code:** 500 <br />
    **Content:**
```
    {
      "Error" :  "UNKNOWN_ERROR"
    }
```

**Show All Destinations**

* **URL**

  /destinations-list/:vacationId

* **Method:**

  `GET`
  
*  **Request Header**

   **Required:**
``` 
  {
    access_token: token
  }
```   

* **Request Body**

  **Required:**
```
  None
```
  

* **Success Response:**

  * **Code:** 200 <br />
    **Content:**
```
    [
      {
        "business_status": "OPERATIONAL",
        "geometry": {
          "location": {
            "lat": -8.5188075,
            "lng": 115.2585558
          },
          "viewport": {
            "northeast": {
              "lat": -8.516888119708497,
              "lng": 115.2603250302915
            },
            "southwest": {
              "lat": -8.519586080291502,
              "lng": 115.2576270697085
            }
          }
        },
        "icon": "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/worship_hindu-71.png",
        "name": "Pura Dalem Agung Padangtegal",
        "opening_hours": {
          "open_now": false
        },
        "photos": [
          {
            "height": 1800,
            "html_attributions": [
              "<a href=\"https://maps.google.com/maps/contrib/104420489713970235234\">Derek Hill</a>"
            ],
            "photo_reference": "ATtYBwLYajMMxPpzNMwBfhy0RlLjItb3Bf-mslQIXa9tIZ42MHTHGmqYjbrZTpzNInfdbmfpvo66yBrv3g_cYJJAKErGqsE_zkiti1JDJvNZwrKgHJy65Y4lOUElUkLpHRadr9JX5bOVEDSKQonoqanOpX8IAuoSqD6l1mgz9TA0LCBmRgnU",
            "width": 2400
          }
        ],
        "place_id": "ChIJB4M3rQs90i0RG8xbNY04VoU",
        "plus_code": {
          "compound_code": "F7J5+FC Ubud, Gianyar, Bali, Indonesia",
          "global_code": "6P3QF7J5+FC"
        },
        "rating": 4.5,
        "reference": "ChIJB4M3rQs90i0RG8xbNY04VoU",
        "scope": "GOOGLE",
        "types": [
          "hindu_temple",
          "tourist_attraction",
          "place_of_worship",
          "point_of_interest",
          "establishment"
        ],
        "user_ratings_total": 167,
        "vicinity": "Jalan Monkey Forest, Ubud"
      },
      {
        "business_status": "OPERATIONAL",
        "geometry": {
          "location": {
            "lat": -8.648484999999999,
            "lng": 115.123589
          },
          "viewport": {
            "northeast": {
              "lat": -8.647204869708498,
              "lng": 115.1250311802915
            },
            "southwest": {
              "lat": -8.649902830291502,
              "lng": 115.1223332197085
            }
          }
        },
        "icon": "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/lodging-71.png",
        "name": "Kubudiuma Bali",
        "opening_hours": {
          "open_now": true
        },
        "photos": [
          {
            "height": 3174,
            "html_attributions": [
              "<a href=\"https://maps.google.com/maps/contrib/100256262231621457558\">Kubudiuma Bali</a>"
            ],
            "photo_reference": "ATtYBwKw7ktqiqpCh7G6mJfH9I5R3c4ZJkDk3nYW0ZasYCTT9byl3M54ps0Qb1oeHB4bUO42uficoTGESBuHPP82NTxflwq9VHVK9hgbtL13FllJWQdn2TbMmrrVNwRQgRCMXCf0ZgIsIKIT5kURI5re-L4vYHJGBFdCXRxY497cGudZL-T6",
            "width": 5082
          }
        ],
        "place_id": "ChIJRe-ngHE40i0RPfCGt4NFJv8",
        "plus_code": {
          "compound_code": "942F+JC Pererenan, Badung Regency, Bali, Indonesia",
          "global_code": "6P3Q942F+JC"
        },
        "rating": 4.5,
        "reference": "ChIJRe-ngHE40i0RPfCGt4NFJv8",
        "scope": "GOOGLE",
        "types": [
          "lodging",
          "tourist_attraction",
          "point_of_interest",
          "establishment"
        ],
        "user_ratings_total": 181,
        "vicinity": "Jalan Pantai Pererenan Canggu No.150, Pererenan"
      }
    ]
```

* **Error Response:**

  * **Code:** 401 UNAUTHORIZED <br />
    **Content:**
```
    {
      "Error" :  "USER_NOT_AUTHENTICATED"
      "Message": "Invalid User"
    }
```
OR

  * **Code:** 500 <br />
    **Content:**
```
    {
      "Error" :  "UNKNOWN_ERROR"
    }
```

**Create New Destination**

* **URL**

  /destinations/:vacationId

* **Method:**

  `POST`
  
*  **Request Header**

   **Required:**
``` 
  {
    access_token: token
  }
```   

* **Request Body**

  **Required:**
```
  {
    "place_name": "<place_name to get to insert into>",
    "lat": "<latitude to get to insert into>",
    "lng": "<longitude to get to insert into>"
  }
```
  

* **Success Response:**

  * **Code:** 201 <br />
    **Content:**
```
    {
      "id": 4,
      "place_name": "Great Mosque Tabanan",
      "lat": "-8.540743899999999",
      "lng": "115.1246357",
      "vacationId": 3,
      "updatedAt": "2021-04-21T18:18:48.413Z",
      "createdAt": "2021-04-21T18:18:48.413Z"
    }
```

* **Error Response:**

  * **Code:** 400 BAD REQUEST <br />
    **Content:**
```
    {
      "Error": "VALIDATION_ERROR"
      "Messege": "Place name required"
    }
```
  OR

  * **Code:** 401 UNAUTHORIZED <br />
    **Content:**
```
    {
      "Error" :  "USER_NOT_AUTHENTICATED"
      "Message": "Invalid User"
    }
```
OR

  * **Code:** 500 <br />
    **Content:**
```
    {
      "Error" :  "UNKNOWN_ERROR"
    }
```

**Show All User's Destinations**

* **URL**

  /destinations

* **Method:**

  `GET`
  
*  **Request Header**

   **Required:**
``` 
  {
    access_token: token
  }
```   

* **Request Body**

  **Required:**
```
  None
```
  

* **Success Response:**

  * **Code:** 200 <br />
    **Content:**
```
    [
      {
        "id": 4,
        "place_name": "Great Mosque Tabanan",
        "lat": "-8.540743899999999",
        "lng": "115.1246357",
        "vacationId": 3,
        "createdAt": "2021-04-21T18:18:48.413Z",
        "updatedAt": "2021-04-21T18:18:48.413Z"
      },
      {
        "id": 5,
        "place_name": "Finns Recreation Club",
        "lat": "-8.5407438999",
        "lng": "115.1246357",
        "vacationId": 3,
        "createdAt": "2021-04-21T18:18:48.413Z",
        "updatedAt": "2021-04-21T18:18:48.413Z"
      }
    ]
```

* **Error Response:**

  * **Code:** 401 UNAUTHORIZED <br />
    **Content:**
```
    {
      "Error" :  "USER_NOT_AUTHENTICATED"
      "Message": "Invalid User"
    }
```
OR

  * **Code:** 500 <br />
    **Content:**
```
    {
      "Error" :  "UNKNOWN_ERROR"
    }
```

**Remove Destinations ID**

* **URL**

  /destinations/id:

* **Method:**

  `DELETE`
  
*  **Request Header**

   **Required:**
``` 
  {
    access_token: token
  }
```   

* **Request Body**

  **Required:**
```
  None
```
  

* **Success Response:**

  * **Code:** 200 <br />
    **Content:**
```
      "destionations": 4
      "Message": "destination's deleted"
```

* **Error Response:**

  * **Code:** 401 UNAUTHORIZED <br />
    **Content:**
```
    {
      "Error" :  "USER_NOT_AUTHENTICATED"
      "Message": "Invalid User"
    }
```
OR

  * **Code:** 403 FORBIDDEN <br />
    **Content:**
```
    {
      "Error" :  "FORBIDDEN_ACCESS"
      "Message": "You don't have permission to access"
    }
```
OR

  * **Code:** 404 NOT FOUND <br />
    **Content:**
```
    {
      "Error" :  "INVALID_ID"
      "Message": "Data not found"
    }
```
OR

  * **Code:** 500 <br />
    **Content:**
```
    {
      "Error" :  "UNKNOWN_ERROR"
    }
```