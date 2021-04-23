# NutriSum Server #
===================

NutriSum is a application about nutrition and get a random recipe.

### 3rd API
1. Spoonacular -> to get a recipe and nutrition
2. Nodemailer -> to sending an email 

## Rest API

### POST /register 

__Request Header__

```JSON
  no needed
```

__Request Body__

```JSON
{
  "username": "<username>",
  "email": "<email>",
  "password": "<password>"
}
```

__Response (201 - Created)__

```JSON
{
  "msg": "Success Created!",
  "user": {
    "id": 1,
    "email": "sample@mail.com",
    "username": "sample"
  }
}
```

__Response (500 - Internal Server Error)__

```JSON
{
  "msg": "<error msg>"
}
```

### POST /login 

__Request Header__

```JSON
  no needed
```

__Request Body__

```JSON
{
  "email": "<email>",
  "password": "<password>"
}
```

__Response (200 - OK)__

```JSON
  {
  "payload": {
    "id": 1,
    "email": "sample@mail.com"
  },
  "access_token": "<access_token>"
  }
```

__Response (500 - Internal Server Error)__

```JSON
{
  "msg": "<error msg>"
}
```

__Response (401 - Unauthorized)__

```JSON
{
  "msg": "Invalid email/password"
}
```