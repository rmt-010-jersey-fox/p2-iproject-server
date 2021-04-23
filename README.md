# LaLaLapan App
Always Forgeting Which Episodes Of Anime You Last Watch??
Cry No More
LaLaLapan is an app to managing your anime watching
so you (hopefuly) doesn't forget which last episode you watch

This App has :
 - RESTful endpoint for anime's CRUD operation
 - JSON formatted response
 
 # RESTful Endpoints

 ## User Side

 ### POST `/register`

> register for application User

Request Body
```
    {
	    "username":"<your username>",
	    "email":"<your email>",
	    "password":"<your password>"
	}
```
Response (201 - Success Register)
```
	{
		"id":"<given by system>",
	    "email":"<your email>"
    }
```

Response (400 - Validation Error)
```
{
	"err": {
		"name": "Error400",
		"msg": "<Error Message>"
	}
}
```
Response (500)
```
{
	"err": {
		"name": "Error500",
		"msg": "<Internal Server Error>"
	}
}
```

### POST `/login`
> Login to use application

Request Body
```
    {
	    "email":"<your email>",
	    "password":"<your password>"
	}
```
Response (201 - Success Register)
```
	{
		"access_token":"<your access token>",
		"email":"<your email>"
    }
```
Response (400 - Validation Error)
```
{
	"err": {
		"name": "Error400",
		"msg": "<Error Message>"
	}
}
```
Response (500)
```
{
	"err": {
		"name": "Error500",
		"msg": "Internal Server Error"
	}
}
```

### GET '/getUpdate'
> get some update news about daily airing Anime

Request Body
```
not needed
```
Response (201 - OK)
```
[
    {
        "mal_id":"<given by system>",
        "url":"<given by system>",
        "title": "<given by system>",
	    "image_url":"<given by system>",
		"synopsis":"<given by system>",
		"type":"<given by system>",
		"airing_start":"<given by system>",
		"episodes":"<given by system>",
		"members":"<given by system>",
		"genres":"[<given by system>]",
		"source":"<given by system>",
		"producers":"<given by system>",
		"score":"<given by system>",
		"licensors":"[given by system]",
		"r18":"<given by system>",
		"kids":"<given by system>",
    }
]
```
Response (403 - Forbidden)
```
{
    "name":"Error403",
    "message":"<Error Message>"
}
```
Response (404 - Not Found)
```
{
    "name":"Error404",
    "message":"<Error Message>"
}
```
Response (500 - Internal Server Error)
```
{
    "name":"Error500",
    "message":"Internal Server Error"
}
```

## Anime CRUD Side

### GET `/anime`
> Get all anime list
Request Header
```
    {
	    "access_token":"<your access token>"
	}
```
Request Body
```
not needed
```
Response (200 - if there is an anime)
```
	{
		"id":"<given by system>",
		"name":"<anime name>",
		"imageURL":"<anime imageURL>",
		"episodes":"<anime episodes>",
		"totalEpisodes":"<anime totalEpisodes>",
		"status":"<anime status>",
		"createdAt":"<anime date createdAt>",
		"updatedAt":"<anime date updatedAt>"
    }
```
Response (200 - if there is no anime list)
```
{
	"message":"you dont have any Anime"
}
```
Response (401 - Authentication Error)
```
{
	"name": "Error401",
	"msg": "<Error Message>"
}
```
Response (403 - Token Error)
```
{
	"name": "Error401",
	"msg": "<Error Message>"
}
```
Response (500)
```
{
	"name": "Error401",
	"msg": "<Error Message>"
}
```

### POST `/anime`
> Create new anime

Request Header
```
    {
	    "access_token":"<your access token>"
	}
```
Request Body
```
    {
	    "name":"<your anime name>",
	    "imageURL":"<your anime imageURL>",
	    "episodes":"<your anime episodes>",
	    "totalEpisodes":"<your anime totalEpisodes>",
	    
	}
```
Response (201 - anime created)
```
[
    {
        "id":"<given by system>",
        "name":"<anime name>",
	    "imageURL":"<anime imageURL>",
	    "episodes":"<anime episodes>",
	    "totalEpisodes":"<anime totalEpisodes>",
	    "status":"<anime status>",
	    "createdAt":"<anime date createdAt>",
		"updatedAt":"<anime date updatedAt>"
    }
]
```
Response (400 - Validation Error)
```
{
	"name": "Error400",
	"msg": "<Error Message>"
}
```
Response (401 - Authentication Error)
```
{
	"name": "Error401",
	"msg": "<Error Message>"
}
```
Response (403 - Token Error)
```
{
	"name": "Error403",
	"msg": "<Error Message>"
}
```
Response (500)
```
{
	"name": "Error500",
	"msg": "<Error Message>"
}
```

### GET `/anime/:id`
> Get anime by user Id

Request Header
```
    {
	    "access_token":"<your access token>"
	}
```
Request Body
```
	not needed
```
Response (200 - OK)
```
[
    {
        "id":"<given by system>",
        "name":"<anime name>",
	    "imageURL":"<anime imageURL>",
	    "episodes":"<anime episodes>",
	    "totalEpisodes":"<anime totalEpisodes>",
	    "status":"<anime status>",
	    "createdAt":"<anime date createdAt>",
		"updatedAt":"<anime date updatedAt>"
    }
]
```
Response (400 - Validation Error)
```
{
	"name": "Error400",
	"msg": "<Error Message>"
}
```
Response (401 - Authentication Error)
```
{
	"name": "Error401",
	"msg": "<Error Message>"
}
```
Response (403 - Token Error)
```
{
	"name": "Error403",
	"msg": "<Error Message>"
}
```
Response (500)
```
{
	"name": "Error500",
	"msg": "<Error Message>"
}
```

### GET `/completed`
> Get anime that has complete status

Request Header
```
    {
	    "access_token":"<your access token>"
	}
```
Request Body
```
	not needed
```
Response (200 - OK)
```
[
    {
        "id":"<given by system>",
        "name":"<anime name>",
	    "imageURL":"<anime imageURL>",
	    "episodes":"<anime episodes>",
	    "totalEpisodes":"<anime totalEpisodes>",
	    "status":"complete",
	    "createdAt":"<anime date createdAt>",
		"updatedAt":"<anime date updatedAt>"
    }
]
```
Response (400 - Validation Error)
```
{
	"name": "Error400",
	"msg": "<Error Message>"
}
```
Response (401 - Authentication Error)
```
{
	"name": "Error401",
	"msg": "<Error Message>"
}
```
Response (403 - Token Error)
```
{
	"name": "Error403",
	"msg": "<Error Message>"
}
```
Response (500)
```
{
	"name": "Error500",
	"msg": "<Error Message>"
}
```


### PUT `/anime/:id`
> edit existing anime

Request Header
```
    {
	    "access_token":"<your access token>"
	}
```
Request Body
```
    {
	    "name":"<your anime name>",
	    "imageURL":"<your anime imageURL>",
	    "episodes":"<your anime episodes>",
	    "totalEpisodes":"<your anime totalEpisodes>",
	    
	}
```
Response (201 - success)
```
[
    {
        "id":"<given by system>",
        "name":"<anime name>",
	    "imageURL":"<anime imageURL>",
	    "episodes":"<anime episodes>",
	    "totalEpisodes":"<anime totalEpisodes>",
	    "status":"<anime status>",
	    "createdAt":"<anime date createdAt>",
		"updatedAt":"<anime date updatedAt>"
    }
]
```
Response (400 - Validation Error)
```
{
	"name": "Error400",
	"msg": "<Error Message>"
}
```
Response (401 - Authentication Error)
```
{
	"name": "Error401",
	"msg": "<Error Message>"
}
```
Response (403 - Token Error)
```
{
	"name": "Error403",
	"msg": "<Error Message>"
}
```
Response ( 404 - Token Error)
```
{
	"name": "Error404",
	"msg": "<Error Message>"
}
```
Response (500)
```
{
	"name": "Error500",
	"msg": "<Error Message>"
}
```

### PATCH `/anime/:id`
> patching the episodes watched

Request Header
```
    {
	    "access_token":"<your access token>"
	}
```
Request Body
```
    {
	    "episodes":"<your anime episodes>",
	}
```
Response (201 - Episodes Less Than Total Episodes)
```
[
    {
        "id":"<given by system>",
        "name":"<anime name>",
	    "imageURL":"<anime imageURL>",
	    "episodes":"<anime episodes>",
	    "totalEpisodes":"<anime totalEpisodes>",
	    "status":"On-Going",
	    "createdAt":"<anime date createdAt>",
		"updatedAt":"<anime date updatedAt>"
    }
]
```
Response (201 - Episodes Equal Total Episodes)
```
[
    {
        "id":"<given by system>",
        "name":"<anime name>",
	    "imageURL":"<anime imageURL>",
	    "episodes":"<anime episodes>",
	    "totalEpisodes":"<anime totalEpisodes>",
	    "status":"complete",
	    "createdAt":"<anime date createdAt>",
		"updatedAt":"<anime date updatedAt>"
    }
]
```
Response (400 - Validation Error)
```
{
	"name": "Error400",
	"msg": "<Error Message>"
}
```
Response (401 - Authentication Error)
```
{
	"name": "Error401",
	"msg": "<Error Message>"
}
```
Response (403 - Token Error)
```
{
	"name": "Error403",
	"msg": "<Error Message>"
}
```
Response ( 404 - Token Error)
```
{
	"name": "Error404",
	"msg": "<Error Message>"
}
```
Response (500)
```
{
	"name": "Error500",
	"msg": "<Error Message>"
}
```

### DELETE `/anime/:id`
> delete existing anime

Request Header
```
    {
	    "access_token":"<your access token>"
	}
```
Request Body
```
    not needed
```
Response (200 - success)
```
[
    {"message":"Success Delete Anime"}
]
```
Response (400 - Validation Error)
```
{
	"name": "Error400",
	"msg": "<Error Message>"
}
```
Response (401 - Authentication Error)
```
{
	"name": "Error401",
	"msg": "<Error Message>"
}
```
Response (403 - Token Error)
```
{
	"name": "Error403",
	"msg": "<Error Message>"
}
```
Response ( 404 - Token Error)
```
{
	"name": "Error404",
	"msg": "<Error Message>"
}
```
Response (500)
```
{
	"name": "Error500",
	"msg": "<Error Message>"
}
```