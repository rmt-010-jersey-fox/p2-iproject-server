# FindBuddy - Individual Project

​
List of available endpoints:
​
- `POST /register`
- `POST /login`

- `GET /buddy`
- `GET /buddy/:id`
- `GET /materials`
- `GET /materials/:id`
- `GET /buddy-materials`

- `POST /booking`
- `GET /schedule`

- `PUT /booking/:id`
- `DELETE /booking/:id`


### POST /register

Request:

- data:

```json
{
  "email": "string",
  "password": "string"
}
```

Response:

- status: 201
- body:
  ​

```json
{
    "id": 12,
    "email": "emiliakhaer@mail.com",
    "first_name": "mil",
    "last_name": "mile"
}
```

### POST /login

Request:

- data:

```json
{
  "email": "string",
  "password": "string"
}
```

Response:

- status: 200
- body:
  ​

```json
{
    "token": "jwt string"
}
```

### GET /buddy

description: 
  get all buddy

Request:

- headers: access_token (string)

Response:

- status: 200
- body:

```json
[
    {
       "id": 32,
        "email": "abuddy@mail.com",
        "first_name": "Fadel",
        "last_name": "Majid",
        "imgUrl": "https://image.freepik.com/free-vector/man-profile-cartoon_18591-58482.jpg"
    }
]
```

### GET /buddy/:id

description: 
  Get buddy details that consists of profile, schedule, and portfolio

Request:

- headers: access_token (string)
- params: 
  - id: "integer" required


Response:

- status: 200
- body:

```json
{
  "id": 1,
    "UserId": 32,
    "GithubUser": "fadelmajid",
    "GitlabUser": null,
    "skill": "mantuls",
    "rate": null,
    "rating": null,
    "createdAt": "2021-04-20T15:26:35.100Z",
    "updatedAt": "2021-04-20T15:26:35.100Z",
    "User": {
        "id": 32,
        "email": "abuddy@mail.com",
        "role": "buddy",
        "first_name": "Fadel",
        "last_name": "Majid",
        "imgUrl": "https://image.freepik.com/free-vector/man-profile-cartoon_18591-58482.jpg"
    },
    "Schedule": [
        {
            "id": 2,
            "UserId": 32,
            "time": "17.00",
            "day": "tuesday",
            "status": "available",
            "createdAt": "2021-04-20T15:26:35.100Z",
            "updatedAt": "2021-04-20T15:26:35.100Z"
        }
    ],
    "Github": [
        {
            "name": "assignment-api",
            "fullname": "fadelmajid/assignment-api",
            "owner": "fadelmajid",
            "avatar_url": "https://avatars.githubusercontent.com/u/42166502?v=4",
            "link": "https://github.com/fadelmajid/assignment-api",
            "description": "for research only"
        },
    ]
}
```

### GET /materials

description: 
  Get All materials

Request:

- headers: access_token (string)

Response:

- status: 200
- body:

```json
[
   {
        "id": 1,
        "topic": "Programming Concept",
        "description": "<<description>>",
        "duration": 80,
        "createdAt": "2021-04-21T14:26:12.323Z",
        "updatedAt": "2021-04-21T14:26:12.323Z"
    }
]
```
### GET /buddy-materials

description: 
  Get All buddy and their topics

Request:

- headers: access_token (string)

Response:

- status: 200
- body:

```json
[
  {
        "id": 1,
        "UserId": 4,
        "MaterialId": 1,
        "createdAt": "2021-04-21T15:25:07.598Z",
        "updatedAt": "2021-04-21T15:25:07.598Z",
        "User": {
            "id": 4,
            "email": "abuddy@mail.com",
            "password": "$2b$08$s.5PdvHj5b/CC1S5KpYWKeAXoUwLzDeEcA0aPmtkvHO8Lejs6jTse",
            "role": "buddy",
            "first_name": "Fadel",
            "last_name": "Majid",
            "imgUrl": "https://image.freepik.com/free-vector/man-profile-cartoon_18591-58482.jpg",
            "createdAt": "2021-04-21T14:26:12.248Z",
            "updatedAt": "2021-04-21T14:26:12.248Z"
        },
        "Material": {
            "id": 1,
            "topic": "Programming Concept",
            "description": "<<description>>",
            "duration": 80,
            "createdAt": "2021-04-21T14:26:12.323Z",
            "updatedAt": "2021-04-21T14:26:12.323Z"
        }
  }
]
```
### POST /booking

Request:

- data:

```json
{
    "UserId": 12,
    "BuddyMaterialId": "emiliakhaer@mail.com",
    "BuddyScheduleId": "mil",
}
```

Response:

- status: 201
- body:
  ​

```json
{
    "message": "Congratulation, you have successfully book a schedule!"
}
```

### GET /schedule

Request:

- headers: access_token (string)

Response:

- status: 201
- body:
  ​

```json
[
     {
        "id": 31,
        "UserId": 29,
        "BuddyMaterialId": 1,
        "BuddyScheduleId": 1,
        "status": "completed",
        "bookingDate": "2021-04-26T03:33:31.518Z",
        "createdAt": "2021-04-23T03:33:31.520Z",
        "updatedAt": "2021-04-23T03:34:00.670Z",
        "User": {
            "id": 29,
            "email": "emil@mail.com",
            "role": "student",
            "first_name": "Emil",
            "last_name": "K",
            "imgUrl": "https://image.freepik.com/free-vector/man-profile-cartoon_18591-58482.jpg"
        },
        "BuddyMaterial": {
            "id": 1,
            "UserId": 32,
            "MaterialId": 1,
            "createdAt": "2021-04-20T15:26:35.100Z",
            "updatedAt": "2021-04-20T15:26:35.100Z",
            "Material": {
                "id": 1,
                "topic": "Programming Concept",
                "description": "<<description>>",
                "duration": 80,
                "createdAt": "2021-04-20T15:26:35.100Z",
                "updatedAt": "2021-04-20T15:26:35.100Z"
            }
        },
        "BuddySchedule": {
            "id": 1,
            "UserId": 32,
            "time": "17.00",
            "day": "monday",
            "status": "unavailabe",
            "createdAt": "2021-04-20T15:26:35.100Z",
            "updatedAt": "2021-04-23T03:34:59.649Z",
            "User": {
                "id": 32,
                "email": "abuddy@mail.com",
                "role": "buddy",
                "first_name": "Fadel",
                "last_name": "Majid",
                "imgUrl": "https://image.freepik.com/free-vector/man-profile-cartoon_18591-58482.jpg"
            }
        }
    }
]
```

### PUT /booking/:id

Request:

- headers: access_token (string)
- params: 
  - id: "integer" required

Response:

- status: 200
- body:
  ​

```json
[
    {
        "id": 32,
        "UserId": 29,
        "BuddyMaterialId": 1,
        "BuddyScheduleId": 1,
        "status": "canceled",
        "bookingDate": "2021-04-26T03:34:59.634Z",
        "createdAt": "2021-04-23T03:34:59.635Z",
        "updatedAt": "2021-04-23T05:28:38.809Z"
    }
]
```

### DELETE /booking/:id

Request:

- headers: access_token (string)
- params: 
  - id: "integer" required

Response:

- status: 200
- body:
  ​

```json
{
    "message": "Delete is success"
}
```