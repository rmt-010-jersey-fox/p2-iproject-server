# Individual-Project-Server

​
List of available endpoints:
​
- `POST /register`
- `POST /login`
- `POST /loginGoogle`
- `GET /highlights`
- `GET /schedules/:id`
- `GET /player/:position`

And routes below need authentication:

- `GET /mySquad`
- `POST /mySquad/:playerid`
- `PUT /mySquad/:playerid`
- `DELETE /mySquad/:playerid`

### POST /register

Request:

- data:

```json
{
  "email": "izzan@mail.com",
  "password": "string123"
}
```

Success Response:

- status: 201
- body:
  ​

```json
{
    "id": 1,
    "email": "izzan@mail.com"
}
```

Error Response:

- status: 400 (Bad Request)
- body:

```json
{
    "message": "Password cannot be empty, Password must have min of 5 characters and max of 20 characters"
}
```

- status: 500
- body:

```json
{
    "msg": "Internal Server Error"
}
```

### POST /login

Request:

- data:

```json
{
  "email": "izzan@mail.com",
  "password": "string123"
}
```

Success Response:

- status: 200
- body:
  ​

```json
{
    "id": 1,
    "email": "izzan@mail.com",
    "access_token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiZW1haWwiOiJpenphbkBtYWlsLmNvbSIsImlhdCI6MTYxNzY4MTU0NH0.Gs3lR_pfS5EcjPvgBVQj6KocA6rPRnpzGRB7wOONgPE"
}
```

Error Response:

- status: 400 (Bad Request)
- body:

```json
{
    "msg": "Invalid Email / Password"
}
```

Or

- status: 500
- body:

```json
{
    "msg": "Internal Server Error"
}
```

### POST /loginGoogle

Request:

- data:

```json
{
  "email": "< Your email google >",
  "password": "< Your email password >"
}
```

Success Response:

- status: 200
- body:
  ​

```json
{
    "access_token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiZW1haWwiOiJpenphbkBtYWlsLmNvbSIsImlhdCI6MTYxNzY4MTU0NH0.Gs3lR_pfS5EcjPvgBVQj6KocA6rPRnpzGRB7wOONgPE"
}
```

Error Response:

- status: 400 (Bad Request)
- body:

```json
{
    "msg": "Invalid Email / Password"
}
```

Or

- status: 500
- body:

```json
{
    "msg": "Internal Server Error"
}
```

### GET /highlights

​Success Response:

- status: 200
- body:


```json
[
    {
        "title": "Aston Villa - Manchester City",
        "link": "<div style='width:100%;height:0px;position:relative;padding-bottom:56.250%;'><iframe src='https://www.scorebat.com/embed/v/6080b01973adb/?utm_source=api&utm_medium=video&utm_campaign=dflt' frameborder='0' width='100%' height='100%' allowfullscreen allow='autoplay; fullscreen' style='width:100%;height:100%;position:absolute;left:0px;top:0px;overflow:hidden;'></iframe></div>"
    },
    {
        "title": "Tottenham Hotspur - Southampton",
        "link": "<div style='width:100%;height:0px;position:relative;padding-bottom:56.250%;'><iframe src='https://www.scorebat.com/embed/v/6080954fe90f4/?utm_source=api&utm_medium=video&utm_campaign=dflt' frameborder='0' width='100%' height='100%' allowfullscreen allow='autoplay; fullscreen' style='width:100%;height:100%;position:absolute;left:0px;top:0px;overflow:hidden;'></iframe></div>"
    },
    {
        "title": "Chelsea - Brighton",
        "link": "<div style='width:100%;height:0px;position:relative;padding-bottom:56.250%;'><iframe src='https://www.scorebat.com/embed/v/607fc8e9c88aa/?utm_source=api&utm_medium=video&utm_campaign=dflt' frameborder='0' width='100%' height='100%' allowfullscreen allow='autoplay; fullscreen' style='width:100%;height:100%;position:absolute;left:0px;top:0px;overflow:hidden;'></iframe></div>"
    },
    {
        "title": "Leeds - Liverpool",
        "link": "<div style='width:100%;height:0px;position:relative;padding-bottom:56.250%;'><iframe src='https://www.scorebat.com/embed/v/607e0c8139c28/?utm_source=api&utm_medium=video&utm_campaign=dflt' frameborder='0' width='100%' height='100%' allowfullscreen allow='autoplay; fullscreen' style='width:100%;height:100%;position:absolute;left:0px;top:0px;overflow:hidden;'></iframe></div>"
    },
    {
        "title": "Manchester United - Burnley",
        "link": "<div style='width:100%;height:0px;position:relative;padding-bottom:56.250%;'><iframe src='https://www.scorebat.com/embed/v/607d15c623434/?utm_source=api&utm_medium=video&utm_campaign=dflt' frameborder='0' width='100%' height='100%' allowfullscreen allow='autoplay; fullscreen' style='width:100%;height:100%;position:absolute;left:0px;top:0px;overflow:hidden;'></iframe></div>"
    },
    {
        "title": "Arsenal - Fulham",
        "link": "<div style='width:100%;height:0px;position:relative;padding-bottom:56.250%;'><iframe src='https://www.scorebat.com/embed/v/607c9effd8aed/?utm_source=api&utm_medium=video&utm_campaign=dflt' frameborder='0' width='100%' height='100%' allowfullscreen allow='autoplay; fullscreen' style='width:100%;height:100%;position:absolute;left:0px;top:0px;overflow:hidden;'></iframe></div>"
    },
    {
        "title": "Everton - Tottenham Hotspur",
        "link": "<div style='width:100%;height:0px;position:relative;padding-bottom:56.250%;'><iframe src='https://www.scorebat.com/embed/v/607a1a39ecadc/?utm_source=api&utm_medium=video&utm_campaign=dflt' frameborder='0' width='100%' height='100%' allowfullscreen allow='autoplay; fullscreen' style='width:100%;height:100%;position:absolute;left:0px;top:0px;overflow:hidden;'></iframe></div>"
    }
]
```

Error Response:

- status: 500
- body:

```json
{
    "msg": "Internal Server Error"
}
```

### GET /schedules/:id

- params: 
  - id: integer (required) (Game Week in Premier League Number ex: 33)

​Success Response:

- status: 200
- body:


```json
{
    "matches": [
        {
            "date": "2021-04-16T19:00:00Z",
            "status": "FINISHED",
            "homeTeam": "Everton FC",
            "homeTeamScore": 2,
            "awayTeam": "Tottenham Hotspur FC",
            "awayTeamScore": 2
        },
        {
            "date": "2021-04-18T00:00:00Z",
            "status": "POSTPONED",
            "homeTeam": "Southampton FC",
            "homeTeamScore": null,
            "awayTeam": "Crystal Palace FC",
            "awayTeamScore": null
        },
        {
            "date": "2021-04-17T11:30:00Z",
            "status": "FINISHED",
            "homeTeam": "Newcastle United FC",
            "homeTeamScore": 3,
            "awayTeam": "West Ham United FC",
            "awayTeamScore": 2
        },
        {
            "date": "2021-04-17T19:15:00Z",
            "status": "FINISHED",
            "homeTeam": "Wolverhampton Wanderers FC",
            "homeTeamScore": 1,
            "awayTeam": "Sheffield United FC",
            "awayTeamScore": 0
        },
        {
            "date": "2021-04-18T12:30:00Z",
            "status": "FINISHED",
            "homeTeam": "Arsenal FC",
            "homeTeamScore": 1,
            "awayTeam": "Fulham FC",
            "awayTeamScore": 1
        },
        {
            "date": "2021-04-18T15:00:00Z",
            "status": "FINISHED",
            "homeTeam": "Manchester United FC",
            "homeTeamScore": 3,
            "awayTeam": "Burnley FC",
            "awayTeamScore": 1
        },
        {
            "date": "2021-04-19T19:00:00Z",
            "status": "FINISHED",
            "homeTeam": "Leeds United FC",
            "homeTeamScore": 1,
            "awayTeam": "Liverpool FC",
            "awayTeamScore": 1
        },
        {
            "date": "2021-04-20T19:15:00Z",
            "status": "FINISHED",
            "homeTeam": "Chelsea FC",
            "homeTeamScore": 0,
            "awayTeam": "Brighton & Hove Albion FC",
            "awayTeamScore": 0
        },
        {
            "date": "2021-04-21T19:15:00Z",
            "status": "FINISHED",
            "homeTeam": "Aston Villa FC",
            "homeTeamScore": 1,
            "awayTeam": "Manchester City FC",
            "awayTeamScore": 2
        },
        {
            "date": "2021-04-22T19:00:00Z",
            "status": "SCHEDULED",
            "homeTeam": "Leicester City FC",
            "homeTeamScore": null,
            "awayTeam": "West Bromwich Albion FC",
            "awayTeamScore": null
        }
    ]
}
```

Error Response:

- status: 500
- body:

```json
{
    "msg": "Internal Server Error"
}
```

### GET /player/:position

Description: Get all players based on their position

- params: 
  - position: String (required) ('Goalkeeper' / 'Defender' / 'Midfielder' / 'Attacker'

Success Response:

- status: 200
- body:
  ​

```json
{
    "players": [
        {
            "id": 1,
            "name": "Edouard Mendy",
            "position": "Goalkeeper",
            "dateOfBirth": "1992-03-01T00:00:00.000Z",
            "countryOfBirth": "France",
            "nationality": "Senegal",
            "shirtNumber": 16,
            "role": "PLAYER",
            "ClubId": 1,
            "createdAt": "2021-04-21T06:09:01.307Z",
            "updatedAt": "2021-04-21T06:09:01.307Z",
            "Club": {
                "id": 1,
                "name": "Chelsea FC",
                "shortName": "Chelsea",
                "tla": "CHE",
                "createdAt": "2021-04-21T06:09:01.296Z",
                "updatedAt": "2021-04-21T06:09:01.296Z"
            }
        },
        {
            "id": 11,
            "name": "Emiliano Martínez",
            "position": "Goalkeeper",
            "dateOfBirth": "1992-09-02T00:00:00.000Z",
            "countryOfBirth": "Argentina",
            "nationality": "Argentina",
            "shirtNumber": null,
            "role": "PLAYER",
            "ClubId": 3,
            "createdAt": "2021-04-21T06:09:01.307Z",
            "updatedAt": "2021-04-21T06:09:01.307Z",
            "Club": {
                "id": 3,
                "name": "Aston Villa FC",
                "shortName": "Aston Villa",
                "tla": "AST",
                "createdAt": "2021-04-21T06:09:01.296Z",
                "updatedAt": "2021-04-21T06:09:01.296Z"
            }
        },
        {
            "id": 26,
            "name": "Alisson",
            "position": "Goalkeeper",
            "dateOfBirth": "1992-10-02T00:00:00.000Z",
            "countryOfBirth": "Brazil",
            "nationality": "Brazil",
            "shirtNumber": null,
            "role": "PLAYER",
            "ClubId": 6,
            "createdAt": "2021-04-21T06:09:01.307Z",
            "updatedAt": "2021-04-21T06:09:01.307Z",
            "Club": {
                "id": 6,
                "name": "Liverpool FC",
                "shortName": "Liverpool",
                "tla": "LIV",
                "createdAt": "2021-04-21T06:09:01.296Z",
                "updatedAt": "2021-04-21T06:09:01.296Z"
            }
        },
        {
            "id": 32,
            "name": "Ederson",
            "position": "Goalkeeper",
            "dateOfBirth": "1993-08-17T00:00:00.000Z",
            "countryOfBirth": "Brazil",
            "nationality": "Brazil",
            "shirtNumber": null,
            "role": "PLAYER",
            "ClubId": 7,
            "createdAt": "2021-04-21T06:09:01.307Z",
            "updatedAt": "2021-04-21T06:09:01.307Z",
            "Club": {
                "id": 7,
                "name": "Manchester City FC",
                "shortName": "Man City",
                "tla": "MCI",
                "createdAt": "2021-04-21T06:09:01.296Z",
                "updatedAt": "2021-04-21T06:09:01.296Z"
            }
        },
        {
            "id": 36,
            "name": "David De Gea",
            "position": "Goalkeeper",
            "dateOfBirth": "1990-11-07T00:00:00.000Z",
            "countryOfBirth": "Spain",
            "nationality": "Spain",
            "shirtNumber": null,
            "role": "PLAYER",
            "ClubId": 8,
            "createdAt": "2021-04-21T06:09:01.307Z",
            "updatedAt": "2021-04-21T06:09:01.307Z",
            "Club": {
                "id": 8,
                "name": "Manchester United FC",
                "shortName": "Man United",
                "tla": "MUN",
                "createdAt": "2021-04-21T06:09:01.296Z",
                "updatedAt": "2021-04-21T06:09:01.296Z"
            }
        },
        {
            "id": 46,
            "name": "Hugo Lloris",
            "position": "Goalkeeper",
            "dateOfBirth": "1986-12-26T00:00:00.000Z",
            "countryOfBirth": "France",
            "nationality": "France",
            "shirtNumber": null,
            "role": "PLAYER",
            "ClubId": 10,
            "createdAt": "2021-04-21T06:09:01.307Z",
            "updatedAt": "2021-04-21T06:09:01.307Z",
            "Club": {
                "id": 10,
                "name": "Tottenham Hotspur FC",
                "shortName": "Tottenham",
                "tla": "TOT",
                "createdAt": "2021-04-21T06:09:01.296Z",
                "updatedAt": "2021-04-21T06:09:01.296Z"
            }
        },
        {
            "id": 55,
            "name": "Sam Johnstone",
            "position": "Goalkeeper",
            "dateOfBirth": "1993-03-25T00:00:00.000Z",
            "countryOfBirth": "England",
            "nationality": "England",
            "shirtNumber": null,
            "role": "PLAYER",
            "ClubId": 11,
            "createdAt": "2021-04-21T06:09:01.307Z",
            "updatedAt": "2021-04-21T06:09:01.307Z",
            "Club": {
                "id": 11,
                "name": "West Bromwich Albion FC",
                "shortName": "West Brom",
                "tla": "WBA",
                "createdAt": "2021-04-21T06:09:01.296Z",
                "updatedAt": "2021-04-21T06:09:01.296Z"
            }
        },
        {
            "id": 56,
            "name": "Rui Patrício",
            "position": "Goalkeeper",
            "dateOfBirth": "1988-02-15T00:00:00.000Z",
            "countryOfBirth": "Portugal",
            "nationality": "Portugal",
            "shirtNumber": null,
            "role": "PLAYER",
            "ClubId": 12,
            "createdAt": "2021-04-21T06:09:01.307Z",
            "updatedAt": "2021-04-21T06:09:01.307Z",
            "Club": {
                "id": 12,
                "name": "Wolverhampton Wanderers FC",
                "shortName": "Wolverhampton",
                "tla": "WOL",
                "createdAt": "2021-04-21T06:09:01.296Z",
                "updatedAt": "2021-04-21T06:09:01.296Z"
            }
        },
        {
            "id": 61,
            "name": "Nick Pope",
            "position": "Goalkeeper",
            "dateOfBirth": "1992-04-19T00:00:00.000Z",
            "countryOfBirth": "England",
            "nationality": "England",
            "shirtNumber": null,
            "role": "PLAYER",
            "ClubId": 13,
            "createdAt": "2021-04-21T06:09:01.307Z",
            "updatedAt": "2021-04-21T06:09:01.307Z",
            "Club": {
                "id": 13,
                "name": "Burnley FC",
                "shortName": "Burnley",
                "tla": "BUR",
                "createdAt": "2021-04-21T06:09:01.296Z",
                "updatedAt": "2021-04-21T06:09:01.296Z"
            }
        },
        {
            "id": 67,
            "name": "Kasper Schmeichel",
            "position": "Goalkeeper",
            "dateOfBirth": "1986-11-05T00:00:00.000Z",
            "countryOfBirth": "Denmark",
            "nationality": "Denmark",
            "shirtNumber": null,
            "role": "PLAYER",
            "ClubId": 14,
            "createdAt": "2021-04-21T06:09:01.307Z",
            "updatedAt": "2021-04-21T06:09:01.307Z",
            "Club": {
                "id": 14,
                "name": "Leicester City FC",
                "shortName": "Leicester City",
                "tla": "LEI",
                "createdAt": "2021-04-21T06:09:01.296Z",
                "updatedAt": "2021-04-21T06:09:01.296Z"
            }
        },
        {
            "id": 89,
            "name": "Aaron Ramsdale",
            "position": "Goalkeeper",
            "dateOfBirth": "1998-09-09T00:00:00.000Z",
            "countryOfBirth": "England",
            "nationality": "England",
            "shirtNumber": null,
            "role": "PLAYER",
            "ClubId": 18,
            "createdAt": "2021-04-21T06:09:01.307Z",
            "updatedAt": "2021-04-21T06:09:01.307Z",
            "Club": {
                "id": 18,
                "name": "Sheffield United FC",
                "shortName": "Sheffield Utd",
                "tla": "SHE",
                "createdAt": "2021-04-21T06:09:01.296Z",
                "updatedAt": "2021-04-21T06:09:01.296Z"
            }
        },
        {
            "id": 98,
            "name": "Łukasz Fabiański",
            "position": "Goalkeeper",
            "dateOfBirth": "1985-04-18T00:00:00.000Z",
            "countryOfBirth": "Poland",
            "nationality": "Poland",
            "shirtNumber": null,
            "role": "PLAYER",
            "ClubId": 20,
            "createdAt": "2021-04-21T06:09:01.307Z",
            "updatedAt": "2021-04-21T06:09:01.307Z",
            "Club": {
                "id": 20,
                "name": "West Ham United FC",
                "shortName": "West Ham",
                "tla": "WHU",
                "createdAt": "2021-04-21T06:09:01.296Z",
                "updatedAt": "2021-04-21T06:09:01.296Z"
            }
        }
    ]
}
```

Error Response:

- status: 500
- body:

```json
{
    "msg": "Internal Server Error"
}
```

### GET /mySquad

Description: Get all players that have been choosen by user into their team

Request:

- headers: access_token

Success Response:

- status: 200
- body:
  ​

```json
[
    {
        "name": "Christian Pulisic",
        "UserId": 1,
        "PlayerId": 5,
        "createdAt": "2021-04-21T15:08:57.140Z",
        "updatedAt": "2021-04-21T15:08:57.140Z",
        "ClubId": 1,
        "Club": {
            "id": 1,
            "name": "Chelsea FC",
            "shortName": "Chelsea",
            "tla": "CHE",
            "createdAt": "2021-04-21T06:09:01.296Z",
            "updatedAt": "2021-04-21T06:09:01.296Z"
        },
        "Player": {
            "id": 5,
            "name": "Christian Pulisic",
            "position": "Midfielder",
            "dateOfBirth": "1998-09-18T00:00:00.000Z",
            "countryOfBirth": "United States",
            "nationality": "United States",
            "shirtNumber": null,
            "role": "PLAYER",
            "ClubId": 1,
            "createdAt": "2021-04-21T06:09:01.307Z",
            "updatedAt": "2021-04-21T06:09:01.307Z"
        }
    },
    {
        "name": "N'Golo Kanté",
        "UserId": 1,
        "PlayerId": 2,
        "createdAt": "2021-04-21T18:31:03.063Z",
        "updatedAt": "2021-04-21T18:31:03.063Z",
        "ClubId": 1,
        "Club": {
            "id": 1,
            "name": "Chelsea FC",
            "shortName": "Chelsea",
            "tla": "CHE",
            "createdAt": "2021-04-21T06:09:01.296Z",
            "updatedAt": "2021-04-21T06:09:01.296Z"
        },
        "Player": {
            "id": 2,
            "name": "N'Golo Kanté",
            "position": "Midfielder",
            "dateOfBirth": "1991-03-29T00:00:00.000Z",
            "countryOfBirth": "France",
            "nationality": "France",
            "shirtNumber": null,
            "role": "PLAYER",
            "ClubId": 1,
            "createdAt": "2021-04-21T06:09:01.307Z",
            "updatedAt": "2021-04-21T06:09:01.307Z"
        }
    },
    {
        "name": "Jack Grealish",
        "UserId": 1,
        "PlayerId": 12,
        "createdAt": "2021-04-21T15:08:52.314Z",
        "updatedAt": "2021-04-21T20:08:07.246Z",
        "ClubId": 3,
        "Club": {
            "id": 3,
            "name": "Aston Villa FC",
            "shortName": "Aston Villa",
            "tla": "AST",
            "createdAt": "2021-04-21T06:09:01.296Z",
            "updatedAt": "2021-04-21T06:09:01.296Z"
        },
        "Player": {
            "id": 12,
            "name": "Jack Grealish",
            "position": "Midfielder",
            "dateOfBirth": "1995-09-10T00:00:00.000Z",
            "countryOfBirth": "England",
            "nationality": "England",
            "shirtNumber": null,
            "role": "PLAYER",
            "ClubId": 3,
            "createdAt": "2021-04-21T06:09:01.307Z",
            "updatedAt": "2021-04-21T06:09:01.307Z"
        }
    },
    {
        "name": "Virgil van Dijk",
        "UserId": 1,
        "PlayerId": 29,
        "createdAt": "2021-04-21T20:05:32.749Z",
        "updatedAt": "2021-04-21T20:05:32.749Z",
        "ClubId": 6,
        "Club": {
            "id": 6,
            "name": "Liverpool FC",
            "shortName": "Liverpool",
            "tla": "LIV",
            "createdAt": "2021-04-21T06:09:01.296Z",
            "updatedAt": "2021-04-21T06:09:01.296Z"
        },
        "Player": {
            "id": 29,
            "name": "Virgil van Dijk",
            "position": "Defender",
            "dateOfBirth": "1991-07-08T00:00:00.000Z",
            "countryOfBirth": "Netherlands",
            "nationality": "Netherlands",
            "shirtNumber": null,
            "role": "PLAYER",
            "ClubId": 6,
            "createdAt": "2021-04-21T06:09:01.307Z",
            "updatedAt": "2021-04-21T06:09:01.307Z"
        }
    },
    {
        "name": "Federico Fernández",
        "UserId": 1,
        "PlayerId": 44,
        "createdAt": "2021-04-21T19:45:16.814Z",
        "updatedAt": "2021-04-21T22:18:07.867Z",
        "ClubId": 9,
        "Club": {
            "id": 9,
            "name": "Newcastle United FC",
            "shortName": "Newcastle",
            "tla": "NEW",
            "createdAt": "2021-04-21T06:09:01.296Z",
            "updatedAt": "2021-04-21T06:09:01.296Z"
        },
        "Player": {
            "id": 44,
            "name": "Federico Fernández",
            "position": "Defender",
            "dateOfBirth": "1989-02-21T00:00:00.000Z",
            "countryOfBirth": "Argentina",
            "nationality": "Argentina",
            "shirtNumber": null,
            "role": "PLAYER",
            "ClubId": 9,
            "createdAt": "2021-04-21T06:09:01.307Z",
            "updatedAt": "2021-04-21T06:09:01.307Z"
        }
    },
    {
        "name": "Harry Kane",
        "UserId": 1,
        "PlayerId": 47,
        "createdAt": "2021-04-21T15:33:01.771Z",
        "updatedAt": "2021-04-21T20:11:34.151Z",
        "ClubId": 10,
        "Club": {
            "id": 10,
            "name": "Tottenham Hotspur FC",
            "shortName": "Tottenham",
            "tla": "TOT",
            "createdAt": "2021-04-21T06:09:01.296Z",
            "updatedAt": "2021-04-21T06:09:01.296Z"
        },
        "Player": {
            "id": 47,
            "name": "Harry Kane",
            "position": "Attacker",
            "dateOfBirth": "1993-07-28T00:00:00.000Z",
            "countryOfBirth": "England",
            "nationality": "England",
            "shirtNumber": null,
            "role": "PLAYER",
            "ClubId": 10,
            "createdAt": "2021-04-21T06:09:01.307Z",
            "updatedAt": "2021-04-21T06:09:01.307Z"
        }
    },
    {
        "name": "Ryan Bertrand",
        "UserId": 1,
        "PlayerId": 73,
        "createdAt": "2021-04-21T15:09:02.667Z",
        "updatedAt": "2021-04-21T15:09:02.667Z",
        "ClubId": 15,
        "Club": {
            "id": 15,
            "name": "Southampton FC",
            "shortName": "Southampton",
            "tla": "SOU",
            "createdAt": "2021-04-21T06:09:01.296Z",
            "updatedAt": "2021-04-21T06:09:01.296Z"
        },
        "Player": {
            "id": 73,
            "name": "Ryan Bertrand",
            "position": "Defender",
            "dateOfBirth": "1989-08-05T00:00:00.000Z",
            "countryOfBirth": "England",
            "nationality": "England",
            "shirtNumber": null,
            "role": "PLAYER",
            "ClubId": 15,
            "createdAt": "2021-04-21T06:09:01.307Z",
            "updatedAt": "2021-04-21T06:09:01.307Z"
        }
    }
]
```

Error Response:

- status: 401 (Not Authorized)
- body:

```json
{
    "msg": "Please login first"
}
```

Or

- status: 500
- body:

```json
{
    "msg": "Internal Server Error"
}
```

### POST /mySquad/:playerid
Request:

- headers: access_token
- params: 
  - PlayerId (ex: /mySquad/89)


​Success Response:

- status: 201
- body:
  ​

```json
{
    "player": {
        "name": "Aaron Ramsdale",
        "UserId": 1,
        "PlayerId": 89,
        "ClubId": 18,
        "updatedAt": "2021-04-22T04:27:15.969Z",
        "createdAt": "2021-04-22T04:27:15.969Z"
    }
}
```

Error Response:


- status: 401 (Not Authorized)
- body:

```json
{
    "msg": "Please login first"
}
```

Or

- status: 404 (Wrong PlayerId and Not Found)
- body:

```json
{
    "message": "Player not found"
}
```

Or

- status: 500
- body:

```json
{
    "msg": "Internal Server Error"
}
```

### PUT /mySquad/:playerid
Request:

- headers: access_token
- params: 
  - playerid: integer (required)
  (PlayerId's player that replaced)

- data:
PlayerId's new player team

```json
{
  "PlayerId": 1,
}
```

​Success Response:

- status: 200
- body:


```json
{
    "message": "One player has successfully replaced"
}
```

Error Response:

- status: 400 (Bad Request)
- body:

```json
{
    "message": "Title cannot be empty, Category cannot be empty"
}
```

Or

- status: 401 (Not Authorized)
- body:

```json
{
    "message": "Not Authorized"
}
```

Or

- status: 404 (Not Found)
- body:

```json
{
    "msg": "Player not found"
}
```

Or

- status: 500
- body:

```json
{
    "msg": "Internal Server Error"
}
```

### DELETE /mySquad/:playerid

description: 
  Delete one player in user team. (cannot delete another user's player)

Request:

- headers: access_token
- params: 
  - playerid: integer (required)

Success Response:

- status: 200
- body:

```json
{
    "message": "Player is successfully delete from your squad"
}
```

Error Response:

- status: 401 (Not Authorized)
- body:

```json
{
    "message": "Not Authorized"
}
```

Or

- status: 404 (Not Found)
- body:

```json
{
    "msg": "Player not found"
}
```

Or

- status: 500
- body:

```json
{
    "msg": "Internal Server Error"
}
```





