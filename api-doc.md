# Playlists List The World
Kanban App is an application to listen your preferred songs and playlist songs. This app has : 
* RESTful endpoint for getting songs and playlists
* JSON formatted response

### POST /register

> User Sign-Up

_Request Header_
```
Not Needed
```

_Request Body_
```
{
    "email": [string],
    "username": [string],
    "password": [string]
}
```

_Response (201)_
```
{
    "id": 1,
    "email": "sistazroel@mail.com",
    "username": "beenicerule"
}
```

_Response (400 - Bad Request)_
```
{
    "message": "email must be unique"
}
```

_Response (500 - Internal Server Error)_
```
{
    "message": "Internal Server Error"
}
```
---

### POST /login

> User Sign-In

_Request Header_
```
Not Needed
```

_Request Body_
```
{
    "email": [string],
    "password": [string]
}
```

_Response (200)_
```
{
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiZW1haWwiOiJzaXN0YXpyb2VsQG1haWwuY29tIiwidXNlcm5hbWUiOiJiZWVuaWNlcnVsZSIsImlhdCI6MTYxNzcwMjA2NH0.1Hr4Cf3zusu64U5uUJvRHgS8jQlZIbOKxqleozP4dm0"
}
```

_Response (403 - Forbidden)_
```
{
    "message": "Invalid E-Mail or Password"
}
```

_Response (500 - Internal Server Error)_
```
{
    "message": "Internal Server Error"
}
```
---

### GET /playlists

> Read all playlists

_Request Header_
```
{
    "token": [string]
}
```

_Request Body_
```
Not Needed
```

_Response (200)_
```
[
    {
        "id": 1,
        "title": "Abkhazia",
        "source": "6PPbmSoUybbqxd7ZmXGnTf"
    },
    {
        "id": 2,
        "title": "Afghanistan",
        "source": "05PAGw9rODNloUPUdaylPt"
    },
    {
        "id": 3,
        "title": "Aland Islands",
        "source": "4GsjBCRm6tp50ztNtYH87N"
    },
    {
        "id": 4,
        "title": "Albania",
        "source": "2sX7yHvwLHWrnCjd71O9Ef"
    },
    {
        "id": 5,
        "title": "Algeria",
        "source": "53JfkFeAudIg8ijVTgoWyO"
    }
]
```

_Response (401 - Not Authorized)_
```
{
    "message": "Not Authenticated"
}
```

_Response (500 - Internal Server Error)_
```
{
    "message": "Internal Server Error"
}
```
---

### GET /playlists/:id

> Read a playlist based on playlist id

_Request Header_
```
{
    "token": [string]
}
```

_Request Body_
```
Not Needed
```

_Response (200)_
```
{
    "id": 175,
    "title": "Peru",
    "source": "4KDW6kfoOr6wY3NjMOxql2"
}
```

_Response (401 - Not Authorized)_
```
{
    "message": "Not Authorized"
}
```

_Response (404 - Error Not Found)_
```
{
    "message": "Data Not Found"
}
```
---

_Response (500 - Internal Server Error)_
```
{
    "message": "Internal Server Error"
}
```
---

### GET /list

> Read all playlist's song list and details

_Request Header_
```
{
    "token": [string]
}
```

_Request Body_
```
Not Needed
```

_Response (200)_
```
{
    "image_url": "https://i.scdn.co/image/ab67706c0000bebb95d93525edd1e1399900483b",
    "name": "Romania",
    "tracks": [
        {
            "id": 1,
            "artists": "Voltaj",
            "album": "3D"
        },
        {
            "id": 2,
            "artists": "3 Sud Est",
            "album": "Mileniul"
        },
        {
            "id": 3,
            "artists": "A.S.I.A",
            "album": "Nopti albe"
        },
        {
            "id": 4,
            "artists": "N&D",
            "album": "Altfel"
        },
        {
            "id": 5,
            "artists": "Catalin Crisan",
            "album": "Vorbeste marea"
        }
    ]
}
```

_Response (401 - Not Authorized)_
```
{
    "message": "Not Authenticated"
}
```

_Response (500 - Internal Server Error)_
```
{
    "message": "Internal Server Error"
}
```
---

### GET /songs

> Read all songs

_Request Header_
```
{
    "token": [string]
}
```

_Request Body_
```
Not Needed
```

_Response (200)_
```
[
    {
        "id": 1,
        "title": "Huyamba",
        "source": "5Q6OxD3zRfYk5ReQ4e6GSS",
        "artist": "Leningrad",
        "release_year": 2003,
        "country": "USSR"
    },
    {
        "id": 2,
        "title": "Night Boat To Cairo",
        "source": "1m1PWQeZcDBmFsLCJ5qSdn",
        "artist": "Madness",
        "release_year": 1979,
        "country": "UK"
    },
    {
        "id": 3,
        "title": "Leave The Door Open",
        "source": "7MAibcTli4IisCtbHKrGMh",
        "artist": "Silk Sonic",
        "release_year": 2021,
        "country": "USA"
    },
    {
        "id": 4,
        "title": "JOS TE VOLIM",
        "source": "66CHdmld3iy8t6ZeNF1LVd",
        "artist": "Novi Fosili",
        "release_year": 1985,
        "country": "Yugoslavia"
    },
    {
        "id": 5,
        "title": "Wind of Change",
        "source": "3ovjw5HZZv43SxTwApooCM",
        "artist": "Scorpions",
        "release_year": 1990,
        "country": "FR Germany"
    }
]
```

_Response (401 - Not Authorized)_
```
{
    "message": "Not Authenticated"
}
```

_Response (500 - Internal Server Error)_
```
{
    "message": "Internal Server Error"
}
```
---

### GET /songs/:id

> Read a song based on song id

_Request Header_
```
{
    "token": [string]
}
```

_Request Body_
```
Not Needed
```

_Response (200)_
```
{
    "id": 38,
    "title": "Bylas Dla Mnie Wszystkim",
    "source": "1gdq80dLo5STca9yMgFO6a",
    "artist": "Poparzeni kawa trzy",
    "release_year": 2013,
    "country": "Poland"
}
```

_Response (401 - Not Authorized)_
```
{
    "message": "Not Authorized"
}
```

_Response (404 - Error Not Found)_
```
{
    "message": "Data Not Found"
}
```
---

_Response (500 - Internal Server Error)_
```
{
    "message": "Internal Server Error"
}
```
---

### GET /lyrics

> Read lyrics of the song

_Request Header_
```
{
    "token": [string]
}
```

_Request Body_
```
Not Needed
```

_Response (200)_
```
{
    "html": "<p>[INTRO: Connecte-R]</p><br><p></p><br><p>G-Y-P-S-Y flavor</p><br><p>Devla, devla, devla</p><br><p>Upretele, maskar andre</p><br><p>Ai</p><br><p>Back to the roots</p><br><p>Damian Brothers</p><br><p>Loredana pe replay</p><br><p>Connecte-R</p><br><p>Aşunes, praleo</p><br><p></p><br><p>[BRIDGE: Loredana]</p><br><p></p><br><p>Mama mea e florăreasă</p><br><p>Se scoală de dimineață</p><br><p>Vinde florile pe piață</p><br><p>Vinde florile pe piață</p><br><p></p><br><p>[VERSE 1: Loredana]</p><br><p></p><br><p>Pe-o străduță mică, îngustă</p><br><p>Venea o fetiță-n fustă</p><br><p>Cu ie și cu papuci</p><br><p>Și-o întrebai 'un te duci</p><br><p></p><br><p>Eu mă duc la mama mea</p><br><p>S-o ajut să-și dea marfa</p><br><p>Mă duc s-o ajut și eu</p><br><p>Că e coșu' mamii greu</p><br><p></p><br><p>[Chorus: Loredana]</p><br><p></p><br><p>Haaaaai</p><br><p>Luați garoafe, luați</p><br><p>Haaaaai</p><br><p>Și vă bucurați</p><br><p></p><br><p>[BRIDGE: Loredana]</p><br><p></p><br><p>Mama mea e florăreasă</p><br><p>Se scoală de dimineață</p><br><p>Vinde flori și liliac</p><br><p>Pentru fratele meu drag, măi</p><br><p></p><br><p>[VERSE 2: Loredana]</p><br><p></p><br><p>Mama-n fiecare seară</p><br><p>Când vine din piața mare</p><br><p>Ne adună pe lângă ea</p><br><p>Și ne dă câte ceva</p><br><p></p><br><p>Am un frate norocos</p><br><p>E mititel și e frumos</p><br><p>Și-i dă bani de jucării</p><br><p>Că suntem șase copii</p><br><p></p><br><p>[Chorus: Loredana]</p><br><p></p><br><p>Haaaaai</p><br><p>Luați garoafe, luați</p><br><p>Haaaaai</p><br><p>Și vă bucurați</p><br><p></p><br><p>[VERSE 3: Connecte-R]</p><br><p></p><br><p>Eu sunt Ştefan, mamă</p><br><p>Român roman, mamă</p><br><p>Și nu mi-e jenă, mamă</p><br><p>Nu mi-este teamă, mamă</p><br><p>Zeamă de zeamă, mamă</p><br><p>Când rădăcină mă cheamă</p><br><p>Bobar cu Damian Brothers și Loredana pe bandă</p><br><p>Gagiii cântă</p><br><p>Și-aruncă lovele pe \"Vara nu dorm\"</p><br><p>Și uită de rele, de neică, de dor</p><br><p>Și uită de piele, sunt unul de-al lor</p><br><p>Și poate de mine, depinde ca mâine</p><br><p>Țiganii să schimbe păcatele-n flori</p><br><p>Sunt poate sute de ani, sunt poate sute de ani, ani</p><br><p>Copii de români și romani</p><br><p>Copii de români și romani</p><br><p>Da' ne desparte mândria</p><br><p>Uităm că Primăverii sau Ferentari</p><br><p>Înseamnă tot România</p><br><p>Mamă</p><br><p></p><br><p>[BRIDGE: Loredana]</p><br><p></p><br><p>Mama mea e florăreasă</p><br><p>Se scoală de dimineață</p><br><p>Vinde flori și ghiocei</p><br><p>Pentru frățiorii mei, măi</p><br><p></p><br><p>[VERSE 4: Loredana]</p><br><p></p><br><p>Când vin sărbătorile</p><br><p>Înfloresc zamblilele</p><br><p>Floare mândră și frumoasă</p><br><p>Crescută-n grădina noastră</p><br><p></p><br><p>Când vin sărbătorile</p><br><p>Înfloresc zamblilele</p><br><p>Își pune broboada lungă</p><br><p>Face buchete și cântă</p><br><p></p><br><p>[Chorus: Loredana]</p><br><p></p><br><p>Haaaaai</p><br><p>Luați garoafe, luați</p><br><p>Haaaaai</p><br><p>Și vă bucurați</p><br><p></p><br><p>Haaaaai</p><br><p>Luați garoafe, luați</p><br><p>Haaaaai</p><br><p>Și vă bucurați</p>"
}
```

_Response (401 - Not Authorized)_
```
{
    "message": "Not Authenticated"
}
```

_Response (500 - Internal Server Error)_
```
{
    "message": "Internal Server Error"
}
```