# I-Project Tournament Bracket Generator

## Available endpoints
- `POST /register`
- `POST /login`
- `POST /tournament`
- `PUT /tournament/:id`
- `GET /tournament`
- `POST /team`
- `PUT /team`
- `POST /bracket`
- `PATCH /bracket/:id`
- `POST /bracket/:id`
- `Delete /tournament/:id`
- `GET /twitter/:id`


## RESTful endpoints
### POST /register
> create user

_Request Header_
```
    not needed
```
_Request Body_
```
{
    email : "user@mail.com",
    password : "samplepassword"
}
```
_Response (201 - Created)_
```
{
  "id": 5,
  "email": "user@mail.com",
  "role": "customer"
}
```
_Response (400 - Bad Request)_
```
{
    "message": [
        "Email has been registered",
        "Invalid email format",
        "Minimal password length is 6 character"
    ]
}
```
_Response (500 - Internal Server Error)_
```
{
    "message" : "Internal Server Error"
}
```

### POST /login
> login user

_Request Header_
```
    not needed
```
_Request Body_
```
{
    email : "user@mail.com",
    password : "samplepassword"
}
```
_Response (200 - OK)_
```
{
    "access_token" : "<access_token>"
}
```
_Response (401 - Unauthorized)_
```
{
    "message": "Invalid Email / Password"
}
```
_Response (500 - Internal Server Error)_
```
{
    "message" : "Internal Server Error"
}
```

### POST /tournament
> Add Tournament

_Request Header_
```
    access_token(string)
```
_Request Body_
```
{
  name: "R6Campus",
  description: "Tournament R6 Internal Campus",
  game: "R6",
  UserId: 1
}
```
_Response (200 - OK)_
```
{
  "id": 3,
  "name": "R6Campus",
  "description": "Tournament R6 Internal Campus",
  "game": "R6",
  "UserId": 1,
  "updatedAt": "2021-04-12T12:24:28.844Z",
  "createdAt": "2021-04-12T12:24:28.844Z"
}
```
_Response (400 - Bad Request)_
```
{
    "message": [
        "Name is required",
        "Name format should only contain letter and number",
    ]
}
```
_Reponse (401 - Unauthorized)_
```
{
    "message" : "Unauthorized Access"
}
```
_Response (500 - Internal Server Error)_
```
{
    "message" : "Internal Server Error"
}
```

### PUT /tournament/:id
> Edit Tournament

_Request Header_
```
    access_token(string)
```
_Request Body_
```
{
  name: "R6Campus",
  description: "Tournament R6 Internal Campus",
  game: "R6",
  UserId: 1
}
```
_Response (200 - OK)_
```
{
  "id": 3,
  "name": "R6Campus",
  "description": "Tournament R6 Internal Campus",
  "game": "R6",
  "UserId": 1,
  "updatedAt": "2021-04-12T12:24:28.844Z",
  "createdAt": "2021-04-12T12:24:28.844Z"
}
```
_Response (400 - Bad Request)_
```
{
    "message": [
        "Name is required",
        "Name format should only contain letter and number",
    ]
}
```
_Reponse (401 - Unauthorized)_
```
{
    "message" : "Unauthorized Access"
}
```
_Response (500 - Internal Server Error)_
```
{
    "message" : "Internal Server Error"
}
```

### GET /tournament
> GET all currently running tournament

_Request Header_
```
  not needed
```
_Request Body_
```
  not needed
```
_Response (200 - OK)_
```
[
  {
    "id": 3,
    "name": "Rainbow6",
    "description": "turnament game fps close quarter combat tingkat kampus",
    "game": "R6",
    "UserId": 1,
    "createdAt": "2021-04-19T06:36:21.308Z",
    "updatedAt": "2021-04-19T06:36:21.308Z",
    "User": {
      "id": 1,
      "email": "user@mail.com"
    }
  }
]
```
_Response (500 - Internal Server Error)_
```
{
    "message" : "Internal Server Error"
}
```

### POST /team
> Add Team for Tournament

_Request Header_
```
    access_token(string)
```
_Request Body_
```
{
  name: "TSM",
  description: "Team Solomid",
  TournamentId: 1
}
```
_Response (200 - OK)_
```
{
  "id": 1,
  "name": "TSM",
  "description": "Team Solomid",
  "TournamentId": 1,
  "updatedAt": "2021-04-12T12:24:28.844Z",
  "createdAt": "2021-04-12T12:24:28.844Z"
}
```
_Response (400 - Bad Request)_
```
{
    "message": [
        "Name is required",
        "Name format should only contain letter and number",
    ]
}
```
_Reponse (401 - Unauthorized)_
```
{
    "message" : "Unauthorized Access"
}
```
_Response (500 - Internal Server Error)_
```
{
    "message" : "Internal Server Error"
}
```

### PUT /team
> Edit Team

_Request Header_
```
    access_token(string)
```
_Request Body_
```
{
  name: "TSM",
  description: "Team Solo Mid",
  TournamentId: 1
}
```
_Response (200 - OK)_
```
{
  "id": 1,
  "name": "TSM",
  "description": "Team SoloMid",
  "TournamentId": 1,
  "updatedAt": "2021-04-12T12:24:28.844Z",
  "createdAt": "2021-04-12T12:24:28.844Z"
}
```
_Response (400 - Bad Request)_
```
{
    "message": [
        "Name is required",
        "Name format should only contain letter and number",
    ]
}
```
_Reponse (401 - Unauthorized)_
```
{
    "message" : "Unauthorized Access"
}
```
_Response (500 - Internal Server Error)_
```
{
    "message" : "Internal Server Error"
}
```

### POST /bracket
> Generate Base Bracket for Tournament

_Request Header_
```
  access_token(string)
```
_Request Body_
```
  not needed
```
_Response (201 - CREATED)_
```
[
  {
    "id": 107,
    "TeamId": 9,
    "position": 1,
    "TournamentId": 3,
    "score": 0,
    "createdAt": "2021-04-19T07:41:56.246Z",
    "updatedAt": "2021-04-19T07:41:56.246Z",
    "Team": {
      "id": 9,
      "name": "TSM",
      "description": "Team SoloMid",
      "TournamentId": 3,
      "createdAt": "2021-04-19T06:36:52.946Z",
      "updatedAt": "2021-04-19T06:36:52.946Z"
    }
  },
  ...
  {
    "id": 114,
    "TeamId": 16,
    "position": 8,
    "TournamentId": 3,
    "score": 0,
    "createdAt": "2021-04-19T07:41:56.248Z",
    "updatedAt": "2021-04-19T07:41:56.248Z",
    "Team": {
      "id": 16,
      "name": "TSM",
      "description": "Team SoloMid",
      "TournamentId": 3,
      "createdAt": "2021-04-19T06:36:56.511Z",
      "updatedAt": "2021-04-19T06:36:56.511Z"
    }
  }
]
```
_Reponse (401 - Unauthorized)_
```
{
    "message" : "Unauthorized Access"
}
```
_Response (500 - Internal Server Error)_
```
{
    "message" : "Internal Server Error"
}
```

### PATCH /bracket/:id
> Edit Score on Bracket

_Request Header_
```
  access_token(string)
```
_Request Body_
```
{
  score: 3
}
```
_Response (201 - CREATED)_
```
{
  "id": 113,
  "TeamId": 15,
  "position": 7,
  "TournamentId": 3,
  "score": 3,
  "createdAt": "2021-04-19T07:41:56.248Z",
  "updatedAt": "2021-04-19T07:43:31.902Z"
}
```
_Reponse (400 - Bad Request)_
```
{
    "message": [
        "minimum score is 0",
        "maximum score is 3",
    ]
}
```
_Reponse (401 - Unauthorized)_
```
{
    "message" : "Unauthorized Access"
}
```
_Response (500 - Internal Server Error)_
```
{
    "message" : "Internal Server Error"
}
```

### POST /bracket/:id
> Advanced Winner Team for next Bracket

_Request Header_
```
  access_token(string)
```
_Request Body_
```
  not needed
```
_Response (201 - CREATED)_
```
{
  "id": 115,
  "TeamId": 15,
  "position": 12,
  "TournamentId": 3,
  "score": 3,
  "updatedAt": "2021-04-19T07:47:10.339Z",
  "createdAt": "2021-04-19T07:47:10.339Z"
}
```
_Reponse (400 - Bad Request)_
```
{
    "message": [
        "minimum score is 0",
        "maximum score is 3",
    ]
}
```
_Reponse (401 - Unauthorized)_
```
{
    "message" : "Unauthorized Access"
}
```
_Response (500 - Internal Server Error)_
```
{
    "message" : "Internal Server Error"
}
```

### DELETE /tournament/:id
> Delete finished Tournament

_Request Header_
```
  access_token(string)
```
_Request Body_
```
  not needed
```
_Response (201 - CREATED)_
```
{
  "message": "Tournament has finished"
}
```
_Reponse (401 - Unauthorized)_
```
{
    "message" : "Unauthorized Access"
}
```
_Response (500 - Internal Server Error)_
```
{
    "message" : "Internal Server Error"
}
```

### GET /twitter/:id
> Get Latest Tweet related to game / tournament

_Request Header_
```
  not needed
```
_Request Body_
```
  not needed
```
_Response (201 - CREATED)_
```
{
    "data": [
      {
        "id": "1383102894862430216",
        "text": "Pickle Rick and Gromflomite skins are now available in Rainbow Six Siege! Check out the new Rick and Morty uniforms on Ubisoft News Plays at 10AM PT on https://t.co/zWdgdMiW4Z."
      },
      ...
      {
        "id": "1381928387699212288",
        "text": "🛠 Y6S1.2 PC Maintenance 🛠\n\nWe'll be deploying Y6S1.2 on PC today, April 13th.\n\n🖥️PC Only: 9am EDT / 1pm UTC\n⏲Estimated Downtime: 30 mins\n\nFull Patch Notes 🔗 https://t.co/YT9IBDLnDn https://t.co/dalKKBUi9q"
      }
    ],
    "meta": {
      "oldest_id": "1381928387699212288",
      "newest_id": "1383102894862430216",
      "result_count": 10,
      "next_token": "7140dibdnow9c7btw3w4d2gm2dblgc4x17gh8s5wqic6w"
    }
  }
```
_Response (500 - Internal Server Error)_
```
{
    "message" : "Internal Server Error"
}
```
