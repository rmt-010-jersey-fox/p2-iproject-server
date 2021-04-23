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
  "data": {
    "twitter": {
      "data": [
        {
          "id": "1384702373939978241",
          "text": "R6Campus Testing development untuk aplikasi Tournament Generator"
        }
      ],
      "meta": {
        "newest_id": "1384702373939978241",
        "oldest_id": "1384702373939978241",
        "result_count": 1
      }
    },
    "steamnews": {
      "appnews": {
        "appid": 359550,
        "newsitems": [
          {
            "gid": "4570566565010902956",
            "title": "Ubisoft confirms new dates for postponed 2021 Six Invitational",
            "url": "https://steamstore-a.akamaihd.net/news/externalpost/The Loadout/4570566565010902956",
            "is_external_url": true,
            "author": "editor@theloadout.com",
            "contents": "<img width=\"900\" height=\"507\" src=\"https://www.theloadout.com/wp-content/uploads/2021/02/Rainbow-Six-Siege-Sledge-1-900x506.jpg\"/><p>Ubisoft has revealed new dates for the previously postponed 2021 Six Invitational, the top event in Rainbow Six Siege esports. The tournament, which aims to be held offline in Paris, France, was originally billed for February, but was <a href=\"https://www.theloadout.com/rainbow-six-siege/six-invitational-2021-postponed\">called off just days before</a> due to an increase in coronavirus restrictions from the French government.</p>\n<p>Ubisoft has now rescheduled the competition for May, and aims to still host the event on LAN with all 20 of the qualified teams. The developer confirms that on April 8 it was \"authorised by the government and the local authorities to hold the Six Invitational 2021 in Paris, France, from May 11-23.\" However, the tournament will be played without a live audience.</p>\n<p>In <a href=\"https://www.ubisoft.com/en-gb/esports/rainbow-six/siege/news-updates/38Zp2hYYhAIn7NwjTN8wlQ/an-update-on-the-six-invitational-2021\">a statement</a>, Ubisoft does express concerns over current travel restrictions between France and Brazil, one of the biggest producers of Siege talent and home to six of the teams qualified for the Six Invitational.</p>\n<p><a href=\"https://www.theloadout.com/rainbow-six-siege/2021-six-invitaional-new-dates\">Read the rest of the story...</a></p>\n<p>RELATED LINKS:<br />\n<a href=\"https://www.theloadout.com/rainbow-six-siege/kayak-interview\">Rainbow Six Siege's Kayak on his debut weekend for G2, replacing Pengu, and more</a><br />\n<a href=\"https://www.theloadout.com/rainbow-six-siege/kayak-replacing-pengu\">Kayak says he doesn't feel like he's \"replacing Pengu\" on G2's Siege team</a><br />\n<a href=\"https://www.theloadout.com/rainbow-six-siege/ranks\">Rainbow Six Siege Ranked: Ranks, MMR, and more explained</a></p>",
            "feedlabel": "The Loadout",
            "date": 1618945743,
            "feedname": "The Loadout",
            "feed_type": 0,
            "appid": 359550
          },
          {
            "gid": "4570566565009850586",
            "title": "Rainbow Six Siege Doc charity bundle raises over $170k for AbleGamers",
            "url": "https://steamstore-a.akamaihd.net/news/externalpost/PCGamesN/4570566565009850586",
            "is_external_url": true,
            "author": "editor@pcgamesn.com",
            "contents": "<img width=\"900\" height=\"507\" src=\"https://www.pcgamesn.com/wp-content/uploads/2021/04/rainbow-six-siege-ablegamers-bundle-900x506.jpg\"/><p>In November last year, <a href=\"https://www.pcgamesn.com/rainbow-six-siege\">Rainbow Six Siege</a> developer Ubisoft launched an initiative called the <a href=\"https://news.ubisoft.com/en-us/article/2maEZYBk06tPLKieU6VQ17/rainbow-six-siege-launches-sixth-guardian-charity-bundles\">Sixth Guardian Program</a> for the <a href=\"https://www.pcgamesn.com/15-best-pc-first-person-shooters\">FPS game's</a> Operation Neon Dawn. This kicked off a series of seasonal operator gear bundles with 100% of net proceeds going directly to selected charities - and it seems they've been a roaring success. The first chosen charity, The AbleGamers Charity, has announced its own bundle has raised a whopping $170k.</p>\n<p>Well, $171,183 to be precise, which is a pretty huge final total. <a href=\"https://ablegamers.org/\">AbleGamers</a>, which is a US-based non-profit organisation \"dedicated to bringing inclusion and improved quality-of-life to people with disabilities through the power of videogames\", was the first charity to be assigned to a Sixth Guardian Program bundle and has announced the total in a press release.</p>\n<p>The charity's Siege bundle was for defending operator Doc, including a gear set inspired by the charity's colour scheme, with white, yellow-orange, and grey tones. The bundle kitted Doc out with a new uniform, baseball cap headgear, weapon skin, and charm, which you can check out in the image below.</p>\n<p><a href=\"https://www.pcgamesn.com/rainbow-six-siege/the-ablegamers-charity-doc-bundle\">Read the rest of the story...</a></p>\n<p>RELATED LINKS:<br />\n<a href=\"https://www.pcgamesn.com/rainbow-six-siege/tachanka-grenade-buff\">Rainbow Six Siege's Tachanka is getting upgrenaded</a><br />\n<a href=\"https://www.pcgamesn.com/rainbow-six-siege/patch-elo-glitch\">Rainbow Six Siege's 'ELO glitch' is getting patched today</a><br />\n<a href=\"https://www.pcgamesn.com/rainbow-six-siege/defuser-time-glitch\">Rainbow Six Siege's defuser timing is off, confusing esports casters</a></p>",
            "feedlabel": "PCGamesN",
            "date": 1618920815,
            "feedname": "PCGamesN",
            "feed_type": 0,
            "appid": 359550
          },
          {
            "gid": "4570566565007976917",
            "title": "Rainbow Six Siege's Tachanka is getting upgrenaded",
            "url": "https://steamstore-a.akamaihd.net/news/externalpost/PCGamesN/4570566565007976917",
            "is_external_url": true,
            "author": "editor@pcgamesn.com",
            "contents": "<img width=\"900\" height=\"507\" src=\"https://www.pcgamesn.com/wp-content/uploads/2019/03/rainbow-six-siege-tachanka-900x506.jpg\"/><p>The latest patch notes for the Rainbow Six Siege test server include an initial operator balancing pass, and several of the tactical <a href=\"https://www.pcgamesn.com/best-multiplayer-games\" target=\"_blank\" rel=\"noopener noreferrer\">multiplayer game's</a> ops are getting notable buffs and nerfs. Among them is lovable beefcastle Tachanka, who Ubisoft says is still getting picked with less frequency than his designers had hoped following his extensive <a href=\"https://www.pcgamesn.com/rainbow-six-siege/tachanka-rework-bio\" target=\"_blank\" rel=\"noopener noreferrer\">rework last year</a>.</p>\n<p>This initial test server balancing patch improves Tachanka's grenades in just about every way. His Shumikha Launcher's magazine is being increased from five to seven rounds, its fire duration is going from five to seven seconds, the time to detonate on the rounds has been reduced to 0.75 seconds from one second, and the fire area radius has been increased to 1.9 metres from 1.7 metres.</p>\n<p>The rounds themselves go quite a bit further, too - their speed has been boosted to 30 (up from 20) and the \"distance to start drop\" has been increased from eight metres to 20 metres. That's going to make the launcher much more useful as a direct-fire weapon, with less need to arc the rounds up to make sure they travel far enough to hit their targets.</p>\n<p><a href=\"https://www.pcgamesn.com/rainbow-six-siege/tachanka-grenade-buff\">Read the rest of the story...</a></p>\n<p>RELATED LINKS:<br />\n<a href=\"https://www.pcgamesn.com/rainbow-six-siege/the-ablegamers-charity-doc-bundle\">Rainbow Six Siege Doc charity bundle raises over $170k for AbleGamers</a><br />\n<a href=\"https://www.pcgamesn.com/rainbow-six-siege/patch-elo-glitch\">Rainbow Six Siege's 'ELO glitch' is getting patched today</a><br />\n<a href=\"https://www.pcgamesn.com/rainbow-six-siege/defuser-time-glitch\">Rainbow Six Siege's defuser timing is off, confusing esports casters</a></p>",
            "feedlabel": "PCGamesN",
            "date": 1618876231,
            "feedname": "PCGamesN",
            "feed_type": 0,
            "appid": 359550
          }
        ],
        "count": 1047
      }
    }
  }
}
```
_Response (500 - Internal Server Error)_
```
{
    "message" : "Internal Server Error"
}

