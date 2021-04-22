# p2-iproject-server

Individual Project server site

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
  username: <user.username>,
  avatarUrl: <user.avatarUrl>,
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

## Register User dan create chatroom user tsb

### POST /register

_Request Body_

```
{
  email:<user email>,
  password:<user password>,
  username:<user username>,
  roomName:<user room title>,

}
```

_Response (201)_

```
{
      message: 'Successfully register user',
      username: <user username>,
      email: <user email>,
      id: <user id>,
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

## Get random cat image url

### GET /cat-api

_Response (200)_

```
{
    message: 'successfully hit cat api',
    image_url: <image url>,
}
```

_Response (500)_

```
{
  "message": <error server message>
}
```

## Get random quote

### GET /random-quote

_Response (200)_

```
{
				content: <quote content>,
				author: <quote author>,
}
```

_Response (500)_

```
{
  "message": <error server message>
}
```

## Get user by username

### GET /users/:username

_Request Headers_

```
{
  access_token:<admin token>,

}
```

_Request Params_

```
  username:string
```

_Response (200)_

```
{
    user: {
          username:<user username>
          avatarUrl:<user avatarUrl>
          createdAt:<createdAt date>
          updatedAt:<updatedAt date>
          email:<user email>
          id:<user id>
          location:<user location>
          password:<user password>
          Cats:[{
              createdAt:<createdAt date>,
              updatedAt:<updatedAt date>,
              UserId :<user id>,
              avatarUrl :<cat avatarUrl>,
              id :<cat id>,
              name :<cat name>,
              Photos:[{
                CatId:<cat id>,
                createdAt:<createdAt date>,
                updatedAt:<updatedAt date>,
                caption:<photo caption>,
                imageUrl:<photo imageUrl>,
              }..]
          }, ...]
        }

}
```

_Response (500)_

```
{
  "message": <error server message>
}
```

_Response (401)_

```
{
  "message": <authentication error>
}
```

# Add CAT

### POST /cats

_Request Headers_

```
{
  access_token:<admin token>,

}
```

_Request Body_

```
{
    avatarUrl: <cat avatarUrl>,
    name: <cat name>,
    imageUrl : <cat photo url>

}
```

_Response (201)_

```

{
  cat:{
    UserId: <user id>,
    avatarUrl: <cat avatar url>,
    createdAt: <date createdAt>,
    id: <cat id>,
    name: <cat name>,
    updatedAt: <date updatedAt>
  }
}

```

_Response (500)_

```

{
"message": <error server message>
}

```

_Response (401)_

```

{
"message": <authentication error>
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

# delete cat by id

### DELETE /cats/:id

_Request Headers_

```
{
  access_token:<admin token>,

}
```

_Request Params_

```
{
  id:integer of cat id,

}
```

_Response (200)_

```
{
 message: 'Successfully delete cat',
}
```

_Response (500)_

```
{
  "message": <error server message>
}
```

_Response (401)_

```
{
  "message": <authentication error>
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

## Get list chatroom

### GET /rooms

_Request Headers_

```
{
  access_token:<admin token>,

}
```

_Response (200)_

```
{
  rooms:[
    {
      UserId: <user id>
      createdAt: <createdAt date>
      id: <room id>
      status: <room status boolean>
      title: <room title>
      updatedAt: <updatedAt date>
      User: {
          username:<user username>
          avatarUrl:<user avatarUrl>
          createdAt:<createdAt date>
          updatedAt:<updatedAt date>
          email:<user email>
          id:<user id>
          location:<user location>
          password:<user password>
      }
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

_Response (401)_

```
{
  "message": <authentication error>
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
