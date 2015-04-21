# ng-crud
basic task CRUD with Mongo, Expressjs, Angularjs, Nodejs

Clone this repo and install dependencies.

Configure you database at ```/config/db.js``` <br/>
Refer to the ```/public/javascripts/app.js``` file for the angular **controllers**, **services**, and **config** <br/>
Check the ```/public/partials/detail.html``` directory for the partials <br/>
The main layout is the ```/views/layout.jade``` file <br/>
Refer to the ```/routes/tasks.js``` for the backend REST api
Run ```node index``` and browse to ```localhost:4000```

Todo :
  * create a **directive** for displaying message from server
  * refresh the data in service when adding a new task
  * better UI
