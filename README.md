# Flashero - Server Documentation

* RESTful endpoint for card, deck, and user CRUD operation
* powered with express and postgres (with sequelize)

## Deployed at: https://flashero-02azure-server.herokuapp.com

## Endpoints 

<details>
<summary>1. POST /register</summary>

&nbsp;

> Register a new user ( as customer )

&nbsp;

**Request Body**
``` JS
{
  username: "otong322 <alphanumeric>" 
  email: "otong@mail.com",
  password: "pass123"
}
```

**Response (201)**
``` JSON
{
  "id": 1,
  "username": "otong322",
  "email": "otong@mail.com"
}
```

**Response (400) (validation error: example: username is using non alphanumeric and incorrect email format)**
``` JSON
{
  "error": [
    "Please use alphanumeric characters only fo username",
    "Please fill your email with a correct format: example@mail.com"
  ]
}
```

**Response (400) (Email or username is already registered)**
``` JSON
{
  "error": "This username or email is already taken"
}
```
</details>

---

<details>
<summary>2. POST /login</summary>

&nbsp;

> Logging in a user

&nbsp;

**Request Body**
``` JS
{
  username: "lilynano",
  password: "lilily"
}
```

**Response (200)**
``` JSON
{
    "access_token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwidXNlcm5hbWUiOiJsaWx5bmFubyIsImlhdCI6MTYxNzcwMjYwNX0.qjLvckyJeKDSlYKZDqZiAHqazqiUU_zzFNYdu3uXD08",
    "username": "lilynano",
    "id": 1,
    "avatarImageUrl": "https://example.com/image.jpg"
```

**Response (400) (id and/or password is empty or null)**
``` JSON
{
  "error": "Please fill both of the fields"
}
```

**Response (400) (id and/or password isn't matched with any user)**
``` JSON
{
  "error": "Incorrect Username or Password"
}
```

</details>

---

<details>
<summary>3. GET /profile/:id</summary>

&nbsp;

> View a user's profile

&nbsp;

**Request Parameters**
``` JSON
{
  "id": "<User id that you want to view>"
}
```

**Response (200)**
``` JSON
{
    "username": "lilynano",
    "level": 14,
    "exp": 2346,
    "nextLevel": 179,
    "cardsCleared": 767,
    "desc": "app untuk memorization nano!",
    "avatarImageUrl": "https://i.imgur.com/qjIemZX.png"
}
```
</details>

---
<details>
<summary>4. PATCH /profile</summary>

&nbsp;

> Edit user's description

&nbsp;

**Request Header**
``` JSON
{
  "access_token": "<your access token>"
}
```

**Request Body**
``` JS
{
  desc: "edited desc!!",
}
```

**Response (200)**
``` JSON
{
  "success": "Description has been updated"
}
```

</details>

---
<details>
<summary>5. PATCH /profile/avatar</summary>

&nbsp;

> Change user's avatar

&nbsp;

**Request Header**
``` JSON
{
  "access_token": "<your access token>"
}
```

**Request Body**
``` JS
{
  random: false, // when sets to true, will ignore imageurl body and will fill the image url from robothash api
  avatarImageUrl: "https://example.com/4.jpg" 
}
```

**Response (200)**
``` JS
{
 "https://robohash.org/flashero28099?set=set1" // or your image url input if random set to false
},
```

**Response (400) (random set to false and invalid URL)**
``` JSON
{
    "error": [
        "Please fill avatar url with valid url format"
    ]
}
```

</details>

---

<details>
<summary>6. GET /decks</summary>

&nbsp;

> Get all user's decks

&nbsp;

**Request Header**
``` JSON
{
  "access_token": "<your access token>"
}
```

**Response (200)**
``` JSON
[
    {
        "id": 1,
        "name": "Pembacaan Kanji",
        "UserId": 1,
        "createdAt": "2021-04-21T14:19:43.566Z",
        "updatedAt": "2021-04-21T14:19:43.566Z",
        "Cards": [
            {
                "id": 1,
                "front": "楽しい",
                "back": "(tano-shii) Menyenangkan",
                "mastery": 3,
                "due": "2021-04-04",
                "DeckId": 1,
                "createdAt": "2021-04-21T14:19:43.593Z",
                "updatedAt": "2021-04-21T14:19:43.593Z"
            },
            {
                "id": 2,
                "front": "行く",
                "back": "(i-ku) Pergi",
                "mastery": 2,
                "due": "2021-04-12",
                "DeckId": 1,
                "createdAt": "2021-04-21T14:19:43.593Z",
                "updatedAt": "2021-04-21T14:19:43.593Z"
            },
            {
                "id": 3,
                "front": "面白い",
                "back": "(omo-shiro-i) Menarik",
                "mastery": 6,
                "due": "2021-06-12",
                "DeckId": 1,
                "createdAt": "2021-04-21T14:19:43.593Z",
                "updatedAt": "2021-04-21T14:19:43.593Z"
            },
            {
                "id": 4,
                "front": "私",
                "back": "(watashi) Saya, aku",
                "mastery": 1,
                "due": "2021-04-12",
                "DeckId": 1,
                "createdAt": "2021-04-21T14:19:43.593Z",
                "updatedAt": "2021-04-21T14:19:43.593Z"
            },
            {
                "id": 5,
                "front": "元気",
                "back": "(gen-ki) Baik, sehat",
                "mastery": 0,
                "due": "2021-04-01",
                "DeckId": 1,
                "createdAt": "2021-04-21T14:19:43.593Z",
                "updatedAt": "2021-04-21T14:19:43.593Z"
            }
        ]
    },
    {
        "id": 2,
        "name": "Kosakata Inggris",
        "UserId": 1,
        "createdAt": "2021-04-21T14:19:43.566Z",
        "updatedAt": "2021-04-21T14:19:43.566Z",
        "Cards": [
            {
                "id": 6,
                "front": "Arduous",
                "back": "Sulit/susah/menantang",
                "mastery": 0,
                "due": "2021-04-22",
                "DeckId": 2,
                "createdAt": "2021-04-21T14:19:43.593Z",
                "updatedAt": "2021-04-21T16:06:11.294Z"
            },
            {
                "id": 8,
                "front": "Inept",
                "back": "Tidak pandai/kompeten (dalam melakukan sesuatu)",
                "mastery": 1,
                "due": "2021-04-22",
                "DeckId": 2,
                "createdAt": "2021-04-21T14:19:43.593Z",
                "updatedAt": "2021-04-21T16:06:14.186Z"
            },
            {
                "id": 7,
                "front": "Ardent",
                "back": "(dengan) bersemangat, bergairah, antusias",
                "mastery": 0,
                "due": "2021-04-22",
                "DeckId": 2,
                "createdAt": "2021-04-21T14:19:43.593Z",
                "updatedAt": "2021-04-21T16:06:16.601Z"
            }
        ]
    }
]
```
</details>

---

<details>
<summary>7. POST /decks</summary>

&nbsp;

> Create a new deck

&nbsp;

**Request Header**
``` JSON
{
  "access_token": "<your access token>"
}
```

**Request Body**
``` JS
{
  name: "this is a new deck!!"
}
```

**Response (201)**
``` JSON
{
    "id": 3,
    "name": "this is a new deck!!",
    "UserId": 1,
    "updatedAt": "2021-04-21T21:51:11.088Z",
    "createdAt": "2021-04-21T21:51:11.088Z"
}
```

**Response (400) (Empty name)**
``` JSON
{
    "error": [
        "Deck name can't be empty"
    ]
}
```
</details>

---

<details>
<summary>8. POST /decks/import</summary>

&nbsp;

> Create a new deck along with the cards from the pastebin link

&nbsp;

**Request Header**
``` JSON
{
  "access_token": "<your access token>"
}
```

**Request Body**
``` JS
{
  key: "<pastebin link key code>"
}
```

**Response (201)**
``` JSON
{
  "success": "<deck name> has been successfully imported!"
}
```

**Response (400) (invalid pastebin format link/file)**
``` JSON
{
  "error": "Invalid format for deck, invalid pastebin key, or internal server error from pastebin"
}
```
</details>

---

<details>
<summary>9. GET /decks/:id</summary>

&nbsp;

> Get one deck with matched id

&nbsp;

**Request Header**
``` JSON
{
  "access_token": "<your access token>"
}
```

**Request Parameters**
``` JS
{
  id: 1 // <Deck's id you want to get>
}
```

**Response (200)**
``` JSON
{
    "id": 1,
    "name": "Pembacaan Kanji",
    "UserId": 1,
    "createdAt": "2021-04-21T14:19:43.566Z",
    "updatedAt": "2021-04-21T14:19:43.566Z",
    "Cards": [
        {
            "id": 1,
            "front": "楽しい",
            "back": "(tano-shii) Menyenangkan",
            "mastery": 3,
            "due": "2021-04-04",
            "DeckId": 1,
            "createdAt": "2021-04-21T14:19:43.593Z",
            "updatedAt": "2021-04-21T14:19:43.593Z"
        },
        {
            "id": 2,
            "front": "行く",
            "back": "(i-ku) Pergi",
            "mastery": 2,
            "due": "2021-04-12",
            "DeckId": 1,
            "createdAt": "2021-04-21T14:19:43.593Z",
            "updatedAt": "2021-04-21T14:19:43.593Z"
        },
        {
            "id": 3,
            "front": "面白い",
            "back": "(omo-shiro-i) Menarik",
            "mastery": 6,
            "due": "2021-06-12",
            "DeckId": 1,
            "createdAt": "2021-04-21T14:19:43.593Z",
            "updatedAt": "2021-04-21T14:19:43.593Z"
        },
        {
            "id": 4,
            "front": "私",
            "back": "(watashi) Saya, aku",
            "mastery": 1,
            "due": "2021-04-12",
            "DeckId": 1,
            "createdAt": "2021-04-21T14:19:43.593Z",
            "updatedAt": "2021-04-21T14:19:43.593Z"
        },
        {
            "id": 5,
            "front": "元気",
            "back": "(gen-ki) Baik, sehat",
            "mastery": 0,
            "due": "2021-04-01",
            "DeckId": 1,
            "createdAt": "2021-04-21T14:19:43.593Z",
            "updatedAt": "2021-04-21T14:19:43.593Z"
        }
    ]
}
```

**Response (401, not the owner of that deck)**
``` JSON
{
  "error": "You are not authorized for this action"
}
```

**Response (404)**
``` JSON
{
  "error": "Deck with this Id is not found"
}
```

</details>

---
<details>
<summary>10. POST /decks/:id</summary>

&nbsp;

> Export a deck with matched id to the pastebin

&nbsp;

**Request Header**
``` JSON
{
  "access_token": "<your access token>"
}
```

**Request Parameters**
``` JS
{
  "id": 1 // Deck's id you want to export
}
```

**Response (201)**
``` JSON
{
  "link": "https://pastebin.com/af33tAAF"
}
```

**Response (400) (Deck without any card)**
``` JSON
{
  "error": "You can't export an empty deck"
}
```

**Response (404)**
``` JSON
{
  "error": "Deck with this Id is not found"
}
```
</details>

---
<details>
<summary>11. PATCH /decks/:id</summary>

&nbsp;

> Changes the deck name

&nbsp;

**Request Header**
``` JSON
{
  "access_token": "<your access token>"
}
```

**Request Parameters**
``` JS
{
  id: 1 // Deck's id you want to update
}
```

**Request Body**
``` JS
{
  name: "The new name for that deck!",
}
```

**Response (200)**
``` JSON
{
  "success": "Deck's name has been updated"
}
```

**Response (400) (Empty name)**
``` JSON
{
    "error": [
        "Deck name can't be empty"
    ]
}
```

</details>

---
<details>

<summary>12. DELETE /decks/:id</summary>

&nbsp;

> Delete a deck with matched id. Also will delete all of the deck's card.

&nbsp;

**Request Header**
``` JSON
{
  "access_token": "<your access token>"
}
```

**Request Parameters**
``` JS
{
  id: 1 // Deck's id you want to delete
}
```

**Response (200)**
``` JSON
{
  "success": "The deck has been successfully deleted"
}
```
</details>

---
<details>
<summary>13. POST /cards</summary>

&nbsp;

> Create a new card

&nbsp;

**Request Header**
``` JSON
{
  "access_token": "<your access token>"
}
```

**Request Body**
``` JS
{
  DeckId: 1, // the deck that you want to add card to
  front: "This is typically a question" //mandatory,
  back: "And this is the answer" // optional
}
```

**Response (201)**
``` JSON
{
  "success": "Card has been successfully added to Deck <deckname>"
}
```

**Response (400) (Validation error: empty front)**
``` JSON
{
  "error": [
    "Card front can't be empty"
  ]
}
```

**Response (404)**
``` JSON
{
  "error": "Deck with this Id is not found"
}
```
</details>

---
<details>

<summary>14. GET /cards/:id</summary>

&nbsp;

> View a card with matched id

&nbsp;

**Request Header**
``` JSON
{
  "access_token": "<your access token>"
}
```

**Request Parameters**
``` JSON
{
  "id": 2
}
```

**Response (200)**
``` JSON
{
  "id": 2,
  "front": "行く",
  "back": "(i-ku) Pergi",
  "mastery": 2,
  "due": "2021-04-12",
  "DeckId": 1,
  "createdAt": "2021-04-21T14:19:43.593Z",
  "updatedAt": "2021-04-21T14:19:43.593Z",
  "Deck": {
    "id": 1,
    "name": "Pembacaan Kanji",
    "UserId": 1,
    "createdAt": "2021-04-21T14:19:43.566Z",
    "updatedAt": "2021-04-21T14:19:43.566Z"
  }
}
```

**Response (404)**
``` JSON
{
  "error": "Card with this Id is not found"
}
```

</details>

---
<details>
<summary>15. PUT /cards/:id</summary>

&nbsp;

> Edit a card with matched id

&nbsp;

**Request Header**
``` JSON
{
  "access_token": "<your access token>"
}
```

**Request Parameters**
``` JS
{
  id:  4 // card's id you want to edit
}
```

**Request Body**
``` JS
{
  DeckId: 1, // the deck that you want to move into
  front: "This is the edited question" 
  back: "And this is the edited answer" 
}
```

**Response (200)**
``` JSON
{
  "success": "Card has been successfully udpated"
}
```
**Response (400, validation error)**
``` JSON
{
  "error": [
    "Card front can't be empty"
  ]
}
```

**Response (404)**
``` JSON
{
  "error": "Card with this id is not found"
}
```
</details>

---
<details>
<summary>16. DELETE /cards/:id</summary>

&nbsp;

> Delete a card with matched Id

&nbsp;

**Request Header**
``` JSON
{
  "access_token": "<your access token>"
}
```

**Request Parameters**
``` JS
{
  id: 4 //Card's id you want to delete
}
```

**Response (200)**
``` JSON
{
  "success": "Card has been successfully deleted"
}
```
**Response (401)**
``` JSON
{
  "error": "You are not authorized for this action"
}
```

**Response (404)**
``` JSON
{
  "error": "Card with this id is not found"
}
```
</details>


---
<details>
<summary>17. PUT /cards/:id/mastery</summary>

&nbsp;

> Update the card's mastery and due date. Consequently, might update the user's exp and cards cleared stats

&nbsp;

**Request Header**
``` JSON
{
  "access_token": "<your access token>"
}
```

**Request Parameters**
``` JS
{
  id: 2 // Card's id you want to update
}
```

**Request ody**
``` JS
{
  answer: "hard", // answer type ( again/hard/good )
  mastery: 3 // new mastery level for that card
}
```

**Response (200)**
``` JS
{
  newMastery: 3,
  level: 4 // User's level after calculating the XP from new mastery
}
```

**Response (400)**
``` JSON
{
  "error": "Answer type is not valid"
}
```

**Response (404)**
``` JSON
{
  "error": "Card with this id is not found"
}
```
</details>

