# TASK 08

Write `server.js` script that implements an endpoint that returns the current date and time. The API should run on an arbitrary port but default to 5555.

The autograder will check for the following things:

1. Running `node server.js --port=4635` and `curl localhost:4635/app/now/` will return a JSON message with the current UNIX timestamp, e.g. `{"unixtime":""}`.

> HINT: You can either get the UNIX timestamp using `fetch()` from an API (http://worldtimeapi.org/) or using the local system time (https://ui.dev/get-current-timestamp-javascript). 
> One of these methods is potentially easier than the other.
> The important thing is that you return the data through the API in the format specified above, i.e., only the UNIX timestamp and no other data in JSON. 
