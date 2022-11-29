# TASK 03

Write a `server.js` script that takes an arbitrary port number as a command line argument `--port` and then serves `index.html` when called.

The autograder will check for the following behaviors:

1. `node server.js` should run your server script with 5555 as the default port and `curl localhost:5555` will return the contents of the supplied `index.html` file.
2. `node server.js --port=63224` should run your server script with 63224 as the port and `curl localhost:63224` will return the contents of the supplied `index.html` file.
