# TASK 09

Add log file creation/update to a `server.js` script with a root endpoint `/app/` such that every time you use curl to call the endpoint, the server writes to the log file. 
You can use the Morgan npm package for this. 

The name of the log file should be `access.log`. 

The API should run on an arbitrary port but default to 5555.

The autograder will check for the following things:

1. Running `node server.js --port=9635` and `curl localhost:9635/app/` will create a log record in a file named `access.log`.
