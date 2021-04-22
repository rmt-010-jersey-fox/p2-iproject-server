# MyFinance

## Available endpoints
- `POST /signup`
- `POST /signin`
- `GET /news`
- `GET /bitcoins`
- `GET /finances`
- `POST /finances`
- `GET /finances/saldo`
- `GET /finances/:financeId`
- `POST /finances/:financeId`
- `DELETE /finances/:financeId`

## RESTful endpoints
### POST /signup

> create user
_Request Body_
```
{
    email : "user@gmail.com",
    password : "test1234"
}
```
_Response (201 - Created)_
```
{
  "id": 1,
  "email": "user@mail.com",
}
```
_Response (400 - Bad Request)_
```
{
    "errorMessages": [
        "<errorMessages>"
    ]
}
```
_Response (500 - Internal Server Error)_
```
{
    "errorMessages" : "Internal Server Error"
}
```

### POST /signin


> signin user
_Request Body_
```
{
    email : "user@mail.com",
    password : "test1234"
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
    "errorMessages": "Invalid Email / Password"
}
```
_Response (500 - Internal Server Error)_
```
{
    "errorMessages" : "Internal Server Error"
}
```


### GET /news

> get news
_Response (201 - OK)_
```
[
{
        "source": {
            "id": null,
            "name": "ESPN"
        },
        "author": "Dave McMenamin",
        "title": "LeBron James explains why he deleted tweet on police shooting of Ma'Khia Bryant - ESPN",
        "description": "Los Angeles Lakers star LeBron James said he deleted a tweet responding to the fatal police shooting of Ma'Khia Bryant because it was \"being used to create more hate.\"",
        "url": "https://www.espn.com/nba/story/_/id/31306343/lebron-james-explains-why-deleted-tweet-police-shooting-makhia-bryant",
        "urlToImage": "https://a1.espncdn.com/combiner/i?img=%2Fphoto%2F2021%2F0316%2Fr827953_1296x729_16%2D9.jpg",
        "publishedAt": "2021-04-22T01:52:30Z",
        "content": "Los Angeles Lakers star LeBron James posted and later deleted a tweet on Wednesday responding to the fatal police shooting of Ma'Khia Bryant, a 16-year-old Black girl in Columbus, Ohio. In a series o… [+2646 chars]"
    },
    {
        "source": {
            "id": "reuters",
            "name": "Reuters"
        },
        "author": "Rich Mckay",
        "title": "Black man fatally shot by sheriff's deputies serving search warrant in North Carolina - Reuters",
        "description": "North Carolina state officials have opened an investigation into the fatal shooting of a Black man in his car by local sheriff's deputies serving him with a search warrant, authorities and local media reported on Wednesday.",
        "url": "https://www.reuters.com/world/us/black-man-fatally-shot-by-sheriffs-deputies-serving-search-warrant-north-2021-04-22/",
        "urlToImage": null,
        "publishedAt": "2021-04-22T01:24:00Z",
        "content": "North Carolina state officials have opened an investigation into the fatal shooting of a Black man in his car by local sheriff's deputies serving him with a search warrant, authorities and local medi… [+2118 chars]"
    },
    {
        "source": {
            "id": null,
            "name": "Daily Beast"
        },
        "author": "Blake Montgomery",
        "title": "Unvaccinated Nursing Home Worker Sets Off 46-Person Coronavirus Outbreak - The Daily Beast",
        "description": "Two people died, including one person who had been vaccinated.",
        "url": "https://www.thedailybeast.com/unvaccinated-kentucky-worker-sets-off-46-person-coronavirus-outbreak-in-nursing-home",
        "urlToImage": "https://img.thedailybeast.com/image/upload/c_crop,d_placeholder_euli9k,h_3375,w_6000,x_0,y_625/dpr_2.0/c_limit,w_740/fl_lossy,q_auto/v1619052959/2021-04-15T100611Z_1034327648_RC2AWM970LC9_RTRMADP_3_HEALTH-CORONAVIRUS-DAUGHTER-CANCER_axrvb1",
        "publishedAt": "2021-04-22T01:22:50Z",
        "content": "An unvaccinated worker at a Kentucky nursing home set off a coronavirus outbreak in March among staff and residents, even among the vaccinated, according to a CDC report released Wednesday. Nearly fo… [+554 chars]"
    },
    {
        "source": {
            "id": null,
            "name": "ESPN"
        },
        "author": "Alex Kirkland and Rodrigo Faez",
        "title": "Real Madrid's Florentino Perez - Super League is on 'standby,' Champions League 'obselete' - ESPN",
        "description": "Real Madrid president Florentino Perez has admitted the Super League is \"on standby\" and claimed the reaction was \"as if we'd killed football.\"",
        "url": "https://www.espn.com/soccer/real-madrid/story/4366470/real-madrids-florentino-perez-super-league-is-on-standby,-champions-league-obselete",
        "urlToImage": "https://a3.espncdn.com/combiner/i?img=%2Fphoto%2F2021%2F0422%2Fr843869_1296x729_16%2D9.jpg",
        "publishedAt": "2021-04-22T01:02:45Z",
        "content": "Real Madrid president Florentino Perez has admitted the European Super League is \"on standby\" after eight of the 12 clubs involved announced their withdrawal -- while blasting the current Champions L… [+3386 chars]"
    }
]
```
_Response (400 - Bad Request)_
```
{
    "errorMessages": [
        "<errorMessages>"
    ]
}
```
_Response (500 - Internal Server Error)_
```
{
    "errorMessages" : "Internal Server Error"
}
```

### GET /bitcoins
> fetch bitcoins

_Response (200 - OK)_
```
{
    "idr": 0.01825,
    "percentage": 62.77
}
```
_Response (500 - Internal Server Error)_
```
{
    "errorMessages" : "Internal Server Error"
}
```


### GET /finances

> get finances user
_Request Header_
```
    access_token: "<access_token>"
```
_Response (200 - OK)_
```
[
    {
        "id": 2,
        "name": "Dompetku kedua",
        "UserId": 1,
        "saldo": 4000,
        "createdAt": "2021-04-21T07:01:16.096Z",
        "updatedAt": "2021-04-22T01:08:08.260Z"
    }
]
```
_Response (400 - Bad Request)_
```
{
    "errorMessages": [
        "<errorMessages>"
    ]
}
```
_Reponse (401 - Unauthorized)_
```
{
    "errorMessages" : "Unauthorized Access"
}
```
_Response (404 - Not Found)_
```
{
    "errorMessages": "Finances Not Found"
}
```
_Response (500 - Internal Server Error)_
```
{
    "errorMessages" : "Internal Server Error"
}
```


### POST /finances

> delete products based on id
_Request Header_
```
    access_token: "<access_token>"
```
_Request Body_
```
    name: "string",
    saldo: "integer"
```
_Response (200 - OK)_
```
{
    "id": 15,
    "name": "tesasdfa",
    "saldo": 210,
    "UserId": 1,
    "updatedAt": "2021-04-22T04:06:23.745Z",
    "createdAt": "2021-04-22T04:06:23.745Z"
}
```
_Response (400 - Bad Request)_
```
{
    "errorMessages": [
        "<errorMessages>"
    ]
}
```
_Response (500 - Internal Server Error)_
```
{
    "errorMessages" : "Internal Server Error"
}
```

### GET /finances/saldo

> fetch sum all saldo on all wallets
_Request Header_
```
    access_token: "<access_token>"
```
_Response (200 - OK)_
```
[
    4000,
    43534,
    24222,
    30252,
    308707,
    213123,
    42242442,
    20000,
    24374353,
    22269708,
    222,
    213123,
    213,
    966665,
    210
]
```
_Response (401 - Unauthorized)_
```
{
    "errorMessages": "Please Login First"
}
```
_Response (500 - Internal Server Error)_
```
{
    "errorMessages" : "Internal Server Error"
}
```


### GET /finances/:financeId

> get all transaction on finance id
_Request Header_
```
    access_token: "<access_token>"
```
_Request Params_
```
    financeId: "integer"
```

_Response (200 - OK)_
```
[
    {
        "id": 27,
        "TransactionsType": "income",
        "date": "2020-12-31T17:00:00.000Z",
        "amount": 5000,
        "UserId": 1,
        "FinanceId": 2,
        "createdAt": "2021-04-22T04:10:53.833Z",
        "updatedAt": "2021-04-22T04:10:53.833Z",
        "Finance": {
            "id": 2,
            "name": "Dompetku kedua",
            "UserId": 1,
            "saldo": 9000,
            "createdAt": "2021-04-21T07:01:16.096Z",
            "updatedAt": "2021-04-22T04:10:53.853Z"
        }
    }
]
```
_Response (400 - Bad Request)_
```
{
    "errorMessagess": [
        "<errorMessagess>"
    ]
}
```
_Response (401 - Unauthorized)_
```
{
    "errorMessages": "Please Login First"
}
```
_Response (500 - Internal Server Error)_
```
{
    "errorMessages" : "Internal Server Error"
}
```


### POST /finances/:financeId

> add transaction on finances id user
_Request Header_
```
    access_token: "<access_token>"
```
_Request Params_
```
    financeId: "integer"
```
_Request Body_
```
    TransactionsType: "income | outcome"
    date: "date",
    amount: "integer"
```
_Response (200 - OK)_
```
{
    "id": 27,
    "TransactionsType": "income",
    "date": "2020-12-31T17:00:00.000Z",
    "amount": 5000,
    "UserId": 1,
    "FinanceId": 2,
    "updatedAt": "2021-04-22T04:10:53.833Z",
    "createdAt": "2021-04-22T04:10:53.833Z"
}
```
_Response (400 - Bad Request)_
```
{
    "errorMessages" : ["errorMessages"]
}
```
_Response (500 - Internal Server Error)_
```
{
    "errorMessages" : "Internal Server Error"
}
```

### DELETE /finances/:financeDetailId

> delete transaction by id
_Request Header_
```
    access_token: "<access token>"
```
_Request Params_
```
    financeDetailId: "integer"
```
_Response (200 - OK)_
```
{
    "messages": "Successfuly Delete Transaction in wallet"
}
```
_Response (400 - Bad Request)_
```
{
    "errorMessages": [
        "<errorMessages>"
    ]
}
```
_Reponse (401 - Unauthorized)_
```
{
    "errorMessages": "Unauthorized Access"
}
```
_Response (500 - Internal Server Error)_
```
{
    "errorMessages" : "Internal Server Error"
}
```