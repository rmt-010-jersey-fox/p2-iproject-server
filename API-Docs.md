**iProject-F2 ROUTES**
- POST /users/signup
- POST /users/signin


----------------------------------
- POST /login

- GET /tasks

- POST /tasks
- PUT /tasks/:id
- PATCH /tasks/:id
- DELETE /tasks/:id

link server : `https://kanban-project-f2.herokuapp.com/` <br />
link client : `https://kanban-project-f2.web.app/`<br />
<hr><br />

**Signup User**
--------------
  Returns json data message success to `signup`

* **URL** <br/>
  `/users/signup`

* **Method:** <br/>
  `POST`
  
* **URL Params** <br/>
  None

  **Required:**
  * **Headers** <br/>
    None
  * **Data Body** <br/>
     ```
    {
      "username": "string",
      "email"   : "string",
      "password": "string"
    } 
    ```

* **Success Response:**
  * **Code:** 201 Created <br />
    **Content:** 
    ```
    {
      "id"      : "integer"
      "username": "string",
      "email"   : "string"
    } 
    ```

* **Error Response:**
  * **Code:** 400 Bad Request <br />
    **Content:** `{ "message": "username/email must be unique" }`
    <br/>OR :
  * **Code:** 400 Bad Request <br />
    **Content:** `{ "message": "Validation notEmpty on username/email failed" }`
    <br/>OR :
  * **Code:** 400 Bad Request <br />
    **Content:** `{ "message": "Validation isEmail on email failed" }`
    <br/>OR :
  * **Code:** 400 Bad Request <br />
  **Content:** `{ "message": "Your password must be at least 6 characters long. Please try another" }`
    <br/>OR :
  * **Code:** 500 SERVER ERROR <br />
    **Content:** `{ error : "Internal Server Error" }`
<hr><br />
