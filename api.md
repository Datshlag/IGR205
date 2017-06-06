# API description

Everything in JSON

**Notify action**
----
  Notify an action, a cookie is needed

* **URL**

  /log/action

* **Method:**

  `POST`


* **Data Params**

  **Required:**

  * `method=[integer]`

    The method id, to be defined.

  * `userAction=[integer]`

    The user action id.

  * `expectedAction=[integer]`

    The expected action id.

  * `shortcut=[bool]`

    True if the user used a shortcut.

  * `time=[integer]`

    Time in ms for the user to trigger the action.


* **Error Response:**

  * **Code:** 401 Unauthorized <br />
    **Content:** `{ error : "No cookie" }`


* **Sample Call:**

  ```TODO
  ```
