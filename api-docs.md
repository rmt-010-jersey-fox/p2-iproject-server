# RESTAPI

## Login User
### POST /login
_Request Body_
```
{
  email:<user email>,
  password:<user password>
}
```
_Response (200)_
```
{
  access_token:<token to access>
}
```
_Response (500)_
```
{
  "message": <error server message>
}
```
_Response (400)_
```
{
  "message": [
      <error validation>,
      <error validation>,
      ...
  ]
}
```
## register User
### POST /register
_Request Body_
```
{
  email:<user email>,
  password:<user password>,
  username:<username>,
  birth_year:<birth_year>
}
```
_Response (200)_
```
{
    "id": 21,
    "email": "mail@mail.com",
    "username": "polite-slowboy-26",
    "birth_year": "2021-08-11T17:00:00.000Z"
}
```
_Response (500)_
```
{
  "message": <error server message>
}
```
_Response (400)_
```
{
  "message": [
      <error validation>,
      <error validation>,
      ...
  ]
}
```
## Timeline
### POST /timeline
_Request Headers_
```
{
  access_token:<token>,
}
```
_Request Body_
```
{
  status:<user status>,
  likes:<user likes>,
  UserId:<id>
}
```
_Response (200)_
```
{
    "postStatus": {
        "id": 9,
        "status": "cobain seed data 2",
        "likes": 0,
        "UserId": 7,
        "updatedAt": "2021-04-22T03:48:11.289Z",
        "createdAt": "2021-04-22T03:48:11.289Z"
    }
}
```
_Response (500)_
```
{
  "message": <error server message>
}
```
_Response (400)_
```
{
  "message": [
      <error validation>,
      <error validation>,
      ...
  ]
}
```
## Timeline
### GET /timeline

_Request Body_
```
{
  status:<user status>,
  likes:<user likes>,
  UserId:<id>
}
```
_Response (200)_
`{
    "status": [
        {
            "id": 6,
            "status": "cobain seed data",
            "likes": 0,
            "UserId": 7,
            "createdAt": "2021-04-21T17:22:04.082Z",
            "updatedAt": "2021-04-21T17:22:04.082Z"
        },
        {
            "id": 7,
            "status": "cobain seed data 1",
            "likes": 0,
            "UserId": 7,
            "createdAt": "2021-04-21T17:22:18.128Z",
            "updatedAt": "2021-04-21T17:22:18.128Z"
        },
        {
            "id": 8,
            "status": "cobain seed data 2",
            "likes": 0,
            "UserId": 7,
            "createdAt": "2021-04-21T17:22:21.999Z",
            "updatedAt": "2021-04-21T17:22:21.999Z"
        },
        {
            "id": 9,
            "status": "cobain seed data 2",
            "likes": 0,
            "UserId": 7,
            "createdAt": "2021-04-22T03:48:11.289Z",
            "updatedAt": "2021-04-22T03:48:11.289Z"
        }
    ]
}
```
_Response (500)_
```
{
  "message": <error server message>
}
```
_Response (400)_
```
{
  "message": [
      <error validation>,
      <error validation>,
      ...
  ]
}
```

## Timeline
### Put /timeline/:Id
_Request Headers_
```
{
  access_token:<token>,
}
```
_Request Body_
```
{
  status:<user status>
}
```
_Response (200)_
```
{
    "message": "Edit status successfull",
    "putStatus": [
        1
    ]
}
```
_Response (500)_
```
{
  "message": <error server message>
}
```
_Response (400)_
```
{
  "message": [
      <error validation>,
      <error validation>,
      ...
  ]
}
```

## Timeline
### Patch /timeline/:Id
_Request Headers_
```
{
  access_token:<token>,
}
```
_Request Body_
```
{
  likes:<user likes>
}
```
_Response (200)_
```
{
    "message": "Edit likes successfull",
    "patchLike": [
        1
    ]
}
```
_Response (500)_
```
{
  "message": <error server message>
}
```
_Response (400)_
```
{
  "message": [
      <error validation>,
      <error validation>,
      ...
  ]
}
```
## Timeline
### Delete /timeline/:Id
_Request Headers_
```
{
  access_token:<token>,
}
```
_Request Params_
```
id

```
_Response (200)_
```
{
                message: 'Your status has been deleted'
}
```
_Response (500)_
```
{
  "message": <error server message>
}
```
_Response (400)_
```
{
  "message": [
      <error validation>,
      <error validation>,
      ...
  ]
}
```
## Favorite
### GET /favorite
_Request Headers_
```
{
  access_token:<token>,
}
```
_Request Params_
```


```
_Response (200)_
```
[
    {
        "id": 8,
        "UserId": 7,
        "TimelineId": 7,
        "Timeline": {
            "id": 7,
            "status": "cobain seed data 1",
            "likes": 0,
            "UserId": 7,
            "createdAt": "2021-04-21T17:22:18.128Z",
            "updatedAt": "2021-04-21T17:22:18.128Z"
        }
    },
    {
        "id": 5,
        "UserId": 7,
        "TimelineId": 6,
        "Timeline": {
            "id": 6,
            "status": "cobain seed data dll",
            "likes": 2,
            "UserId": 7,
            "createdAt": "2021-04-21T17:22:04.082Z",
            "updatedAt": "2021-04-22T03:53:13.377Z"
        }
    }
]
```
_Response (500)_
```
{
  "message": <error server message>
}
```
_Response (400)_
```
{
  "message": [
      <error validation>,
      <error validation>,
      ...
  ]
}
```
## Favorite
### POST /favorite/TimelineId
_Request Headers_
```
{
  access_token:<token>,
}
```
_Request Params_
```
TimelineId

```
_Response (200)_
```
{
    "id": 9,
    "TimelineId": 7
}
```
_Response (500)_
```
{
  "message": <error server message>
}
```
_Response (400)_
```
{
  "message": [
      <error validation>,
      <error validation>,
      ...
  ]
}
```
## Favorite
### Delete /favorite/id
_Request Headers_
```
{
  access_token:<token>,
}
```
_Request Params_
```
id

```
_Response (200)_
```
{msg: 'Successfully delete favorite Post'}
```
_Response (500)_
```
{
  "message": <error server message>
}
```
_Response (400)_
```
{
  "message": [
      <error validation>,
      <error validation>,
      ...
  ]
}
```