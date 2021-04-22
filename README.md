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

### POST /search

> get all news

Request:

- data:

```json
{
        language: language,
        keywords: keywords,
        country: country,
        category: category,
        start_date: start_date,
        end_date: end_date,
      }```
more descriptions [here](https://currentsapi.services/api/docs/)

Response:

- status: 200
- body:
  ​

```json
[
  {
  "status": "ok",
  "news": [
    {
      "id": "ac4062d1-5fbb-4784-bf1d-6b50f5f643a0",
      "title": "Tulevaisuustutkija Markku Wilenius tietää, että 10 vuoden päästä elämme täysin erilaisessa maailmassa: \"Suuri herääminen on selvästi tapahtumassa\"",
      "description": "Elämä on tähän saakka pyörinyt perustarpeiden ympärillä. Meille on riittänyt, että suuhun on saanut syötävää, on ollut paikka missä asua, puoliso, kavereita ja mahdollisuus hiukan toteuttaa itseään.\nT...",
      "url": "https://yle.fi/uutiset/3-10905769?origin=rss",
      "author": "yle",
      "image": "//images.cdn.yle.fi/image/upload/w_960,h_640/13-3-10906278.jpg",
      "language": "fi",
      "category": [
        "general"
      ],
      "published": "2019-08-04 14:22:08 +0000"
    },
    {
      "id": "713f0c68-9bac-4168-9880-c94eecaf735f",
      "title": "Tubettaja muuttaa vuodeksi Sodankylään ja markkinoi kuntaa somessaan – 2 500 euron kuukausipalkka herättänyt närää kuntalaisissa",
      "description": "Kunnissa tiedostetaan, kuinka tärkeää oikeiden mielikuvien luominen on, kun yritetään houkutella uusia asukkaita\nMuuttoliike suuntautuu useimmin maalta kaupunkiin kuin toisin päin. Kaupunkilaista Fern...",
      "url": "https://yle.fi/uutiset/3-10908157?origin=rss",
      "author": "yle",
      "image": "None",
      "language": "fi",
      "category": [
        "general"
      ],
      "published": "2019-08-04 14:22:08 +0000"
    }
  ]
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

