# NEWSFEED
​
List of available endpoints:

- `POST /register`
- `POST /login`
- `POST/googleLogin`

### POST /register

Request:

- data:

```json
{
  "email": "string",
  "username": "string",
  "password": "string"
}
```

Response:

- status: 201
- body:
  ​

```json
{
  "message": "<user> has been created"
}
```
- status: 400
- body:
  ​

```json
{
  "name": "registerFailed",
  "message": "username has been used"
}
```
- status: 500
- body:
  ​

```json
{
  "message": "Internal Server Error"
}
```

### POST /login

Request:

- data:

```json
{
  "username": "string",
  "password": "string"
}
```

Response:

- status: 200
- body:
  ​

```json
{
  "email": <email>,
  "username": <username>,
  "access_token":  <access_token>
}
```
- status: 400
- body:
  ​

```json
{
  "name": "loginFailed",
  "message": "Invalid username/password"
}
```
- status: 500
- body:
  ​
```json
{
  "message": "Internal Server Error"
}
```

### POST /googleLogin

Request:

- data:

```json
{
  "access_token": <id_token>,
  }
```

Response:

- status: 201
- body:
  ​

```json
{
  "email": <email>,
  "username": <username>,
  "access_token":  <access_token>
}
```

- status: 200
- body:
  ​

```json
{
  "email": <email>,
  "username": <username>,
  "access_token":  <access_token>
}
```
- status: 500
- body:
  ​

```json
{
  "message": "Internal Server Error"
}
```

### POST /headlines

> get all headlines

Request:

- data:

```json
{
    "q": <kewords:string>,
    "country": <country_code>,
    "category":  <category>
}
```
more descriptions [here](https://newsapi.org/docs/endpoints/top-headlines)

Response:

- status: 200
- body:
  ​

```json
[
    {
        "source": {
            "id": "google-news",
            "name": "Google News"
        },
        "author": null,
        "title": "Bentuk European Super League, Liverpool Ditinggal Sponsor - CNN Indonesia",
        "description": null,
        "url": "https://news.google.com/__i/rss/rd/articles/CBMieGh0dHBzOi8vd3d3LmNubmluZG9uZXNpYS5jb20vb2xhaHJhZ2EvMjAyMTA0MjEwODI2MjYtMTQyLTYzMjU4OC9iZW50dWstZXVyb3BlYW4tc3VwZXItbGVhZ3VlLWxpdmVycG9vbC1kaXRpbmdnYWwtc3BvbnNvctIBfGh0dHBzOi8vd3d3LmNubmluZG9uZXNpYS5jb20vb2xhaHJhZ2EvMjAyMTA0MjEwODI2MjYtMTQyLTYzMjU4OC9iZW50dWstZXVyb3BlYW4tc3VwZXItbGVhZ3VlLWxpdmVycG9vbC1kaXRpbmdnYWwtc3BvbnNvci9hbXA?oc=5",
        "urlToImage": null,
        "publishedAt": "2021-04-21T03:42:22Z",
        "content": null
    }
]
```
- status: 500
- body:
  ​

```json
{
  "message": "Internal Server Error"
}
```

### POST /everything

> get all news with a set configuration

Request:

- data:

```json
{
         "q": <keywords:strings>,
        "sources": <string>,
        "from":<yyyy-mm-dd>,
        "to": <yyyy-mm-dd>,
        "sortBy": <string>,

}
```
more descriptions [here](https://newsapi.org/docs/endpoints/everything)

Response:

- status: 200
- body:
  ​

```json
[
    {
        "source": {
            "id": "bbc-news",
            "name": "BBC News"
        },
        "author": null,
        "title": "Leipzig's Konate on Liverpool centre-half shortlist",
        "description": "Liverpool are looking at RB Leipzig defender Ibrahima Konate as they seek to strengthen at centre-back this summer.",
        "url": "https://www.bbc.co.uk/sport/football/56559638",
        "urlToImage": "https://ichef.bbci.co.uk/live-experience/cps/624/cpsprodpb/FAA4/production/_117746146_gettyimages-1230029989.jpg",
        "publishedAt": "2021-03-29T12:36:25Z",
        "content": "Konate did not play in either of RB Leipzig's games against Liverpool in their Champions League last-16 tie\r\nLiverpool have a five-man shortlist including RB Leipzig defender Ibrahima Konate and Ozan… [+695 chars]"
    },
    {
        "source": {
            "id": null,
            "name": "New York Times"
        },
        "author": "Tariq Panja",
        "title": "European Super League to Include Six Premier League Teams",
        "description": "A group led by Juventus, Manchester United, Liverpool and Real Madrid has agreed in principle on a plan that would upend the sport’s structures and economics.",
        "url": "https://www.nytimes.com/2021/04/18/sports/soccer/super-league-united-liverpool-juventus-madrid.html",
        "urlToImage": "https://static01.nyt.com/images/2021/04/18/sports/18soccer-superleague1/merlin_186254121_126f66d1-cf1e-4b22-af2a-9986ce53f925-facebookJumbo.jpg",
        "publishedAt": "2021-04-18T13:06:25Z",
        "content": "Still, according to documents reviewed by The Times in January, plans for the breakaway league had gathered pace since the summer. Top clubs sought to take advantage of uncertainty in the soccer indu… [+2541 chars]"
    },
]
```
- status: 500
- body:
  ​

```json
{
  "message": "Internal Server Error"
}
```

