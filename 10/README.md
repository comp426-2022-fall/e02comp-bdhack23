# TASK 10

Stand up an API server with an endpoint that takes two numbers as parameters, adds them together, and then returns JSON with the input numbers and the sum.

The API should run on an arbitrary port but default to 5555.

The autograder will check for the following things:

1. Running `node server.js --port=32338` and `curl localhost:32338/app/add/3/4` will return JSON that looks like `{"input1":3,"input2":4,"sum":7}`.
