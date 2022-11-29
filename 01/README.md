# TASK 01

Stand up an API server on port 5555 that returns a JSON message at a base endpoint.

Write a server script that returns a default message at a base endpoint `/app/` unless the command line argument `--message` is included.
In this case, the server should return the message supplied in the argument.

The autograder will check for the following things:

1. `node server.js` should run your server script and `curl localhost:5555/app/` will return `{"message":"It works!"}`.
2. `node server.js --message=MESSAGE` should run your server and `curl localhost:5555/app/` will return `{"message":"MESSAGE"}`.
