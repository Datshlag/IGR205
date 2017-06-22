# API description

Everything in JSON

**Get actions**
----
  Get the action set (doesn't work)
  * **URL**

    /actionSet

  * **Method:**

    `GET`

**Create session**
----
  Create a session

* **URL**

  /log/session

* **Method:**

  `POST`
  
* **Returns: (JSON)**
  
  * `id=[integer]`
    
    Id of the session

* **Data Params**

**Notify action**
----
  Notify an action, a cookie is needed

* **URL**

  /log/action

* **Method:**

  `POST`


* **Data Params**
  
  Adapted from Guillaume's code
  
  In result, put sessionId=[interger]

* **Error Response:**

  * **Code:** 401 Unauthorized <br />
    **Content:** `{ error : "No cookie" }`


* **Sample Call:**

  ```TODO
  ```
