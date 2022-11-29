# TASK 05

Write a `server.js` script that implements endpoints to create and read records from your database. `server.js` should run on an arbitrary port number supplied as a command line argument (default 5555).

The autograder will check for the following things:

1. When we run `node server.js`, `curl -X POST -d "lastname=Baharnd&firstname=Phil&email=phil.baharnd@fargo.email" localhost:5555/app/new/` (using either JSON or URLEncoded data), the body messages containing `lastname`, `firstname`, and `email` will create a database record in the `customers` table of a database called `info.db`.
2. When we run ` node server.js --port=7623`, ` curl -X GET -d "email=autoking@fargo.email" localhost:7623/app/lookup/`, the API should return JSON that looks like: `{"lastname":"Baharnd","firstname":"Phil","email":"autoking@fargo.email"}`.
