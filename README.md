# Note Taker 

![image](https://user-images.githubusercontent.com/98507912/182032634-66bc3b2e-351c-4d34-91fd-94ee445c9bc5.png)

#### About
Note Taker is a project created for the U of W Coding Bootcamp Module 11 Challenge.  The project began as starter code and was modified until the application functioned as intended.

#### Goals
* Clicking the "Get Started" button takes Users to a page with existing notes and new note entry.
* Entering a new note title and text populates a save icon at the top of the page.
* Clicking the save icon saves the new note to the existing notes and displays it in the left-hand column.
* Clicking the write icon presents the User with empty fields a new note title and text.
* Create the following routes: 
  * HTML
    * GET /notes - return notes.html
    * GET * - return index.html
  * API
    * GET /api/notes - read and return all saved notes as JSON
    * POST /api/notes - recieve and add a new note, then return the note to the client

#### Technologies used
* Express
* Node
* NPM 
  * shortid
  * nodemon
* Heroku
* Javascript

#### Deployed site
[Note Taker](https://mighty-castle-49512.herokuapp.com/)
