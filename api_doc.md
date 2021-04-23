# Listen+ App Server
Listen+ App is an application with CMS (Content Management System). It performs standard CRUD actions based on RESTful concept.

This app has : 
* RESTful endpoint for product and cart's CRUD operation
* JSON formatted response

&nbsp;

Tech Stack used to build this app :
* Node JS
* Express JS framework
* PostgreSQL

&nbsp;

## Global Responses
> These responses are applied globally on all endpoints

_Response (400 - Bad Request)_
```
{
  "message": "Bad Request"
}
```

_Response (401 - Unauthorized)_
```
{
  "message": "Unauthorized"
}
```

&nbsp;

## RESTful endpoints
### GET /songs

> Get all songs

_Request Header_
```
not needed
```

_Request Body_
```
not needed
```

_Response (200)_
```
[
  {
    "id": 1,
    "track_title": "<song track_title>",
    "artist": "<song artist>",
    "album_title": "<song album_title>",
    "createdAt": "2021-04-14T07:15:12.149Z",
    "updatedAt": "2021-04-14T07:15:12.149Z"
  },
  {
    "id": 2,
    "track_title": "<song track_title>",
    "artist": "<song artist>",
    "album_title": "<song album_title>",
    "createdAt": "2021-04-14T07:15:12.149Z",
    "updatedAt": "2021-04-14T07:15:12.149Z"
  }
]
```

---
### POST /songs

> Create new song

_Request Header_
```
{
  "token": "<Access token>"
}
```

_Request Body_
```
{
  "track_title": "<song track_title to get insert into>",
  "artist": "<song artist to get insert into>",
  "album_title": "<song album_title to get insert into>"
}
```

_Response (201 - OK)_
```
{
  "id": <given id by system>,
  "track_title": "<posted track_title>",
  "artist": "<posted artist>",
  "album_title": "<posted album_title>",
  "createdAt": "2021-04-14T07:15:12.149Z",
  "updatedAt": "2021-04-14T07:15:12.149Z"
}
```

### POST /search

> Post songs from Genius API

_Request Header_
```
not needed
```

_Request Body_
```
{
  "keyword": "<song keyword to get insert into>"
}
```

_Response (200)_
```
[
  {
    "id": 1,
    "track_title": "<song track_title>",
    "artist": "<song artist>",
    "album_title": "<song album_title>",
    "createdAt": "2021-04-14T07:15:12.149Z",
    "updatedAt": "2021-04-14T07:15:12.149Z"
  },
  {
    "id": 2,
    "name": "<song name>",
    "artist": "<song artist>",
    "album_title": "<song album_title>",
    "createdAt": "2021-04-14T07:15:12.149Z",
    "updatedAt": "2021-04-14T07:15:12.149Z"
  }
]
```

### POST /lyrics

> Post lyrics from Genius API

_Request Header_
```
not needed
```

_Request Body_
```
{
  "keyword": "<song keyword to get insert into>"
}
```

_Response (200)_
```
[
  "<lyrics>"
]
```

### POST /playlist

> Create new playlist

_Request Header_
```
{
  "token": "<Access token>"
}
```

_Request Body_
```
{
  "name": "<playlist name to get insert into>",
  "cover": "<playlist cover to get insert into>"
}
```

_Response (201)_
```
[
  {
    "id": <given id by system>,
    "name": "<posted name>",
    "cover": "<posted cover>",
    "songs": "<playlist songs>",
    "createdAt": "2021-04-14T07:15:12.149Z",
    "updatedAt": "2021-04-14T07:15:12.149Z"
  }
]
```

### GET /playlist

> Get all playlists

_Request Header_
```
{
  "token": "<Access token>"
}

```

_Request Body_
```
not needed
```

_Response (200)_
```
[
  {
    "id": 1,
    "name": "<playlist name>",
    "cover": "<playlist cover>",
    "songs": "<playlist songs>",
    "createdAt": "2021-04-14T07:15:12.149Z",
    "updatedAt": "2021-04-14T07:15:12.149Z"
  },
  {
    "id": 2,
    "name": "<playlist name>",
    "cover": "<playlist cover>",
    "songs": "<playlist songs>",
    "createdAt": "2021-04-14T07:15:12.149Z",
    "updatedAt": "2021-04-14T07:15:12.149Z"
  }
]
```

---
### PUT /playlist/:SongId

> Update playlist by adding song with id provided

_URL Params_
```
{
  Required: SongId= <integer>
}
```

_Request Header_
```
{
  "token": "<Access token>"
}
```

_Request Body_
```
{
  "SongId": "<Song to get insert into>",
  "PlaylistId": "<Playlist to get insert into>"
}
```

_Response (200 - OK)_
```
{
  "id": <given id by system>,
  "name": "<playlist name>",
  "cover": "<playlist cover>",
  "songs": "<playlist songs>",
  "createdAt": "2021-04-14T07:15:12.149Z",
  "updatedAt": "2021-04-14T07:15:12.149Z"
}
```

---
### DELETE /playlist/:id

> Delete a playlist defined by the id provided

_URL Params_
```
{
  Required: id= <integer>
}
```

_Request Header_
```
{
  "token": "<Access token>"
}
```

_Request Body_
```
not needed
```

_Response (200 - OK)_
```
{
  "message": "Playlist Successfully Deleted"
}
```

---
### POST /register

> Register new customer

_Request Header_
```
not needed
```

_Request Body_
```
{
  "name": "<name to get insert into>",
  "email": "<email to get insert into>",
  "password": "<password to get insert into>"
}
```

_Response (201 - OK)_
```
{
  "id": <given id by system>,
  "name": "<posted name>",
  "email": "<posted email>"
}
```

---
### POST /login

> Log in user

_Request Header_
```
not needed
```

_Request Body_
```
{
  "email": "<email to get insert into>",
  "password": "<password to get insert into>"
}
```

_Response (200 - OK)_
```
{
  "token": "<generate access token>"
}
```
