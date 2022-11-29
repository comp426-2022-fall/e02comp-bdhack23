# TASK 07

Write a NODE script `weather.js` that uses `fetch()` to get a forecast for an arbitrary latitude and longitude within the United States.

The script should take two command line arguments `--latitude` and `--longitude`.

The autograder will check for the following things:

1. Running `node weather.js --latitude=36.2168 --longitude=-81.6746` will return JSON for the specified coordinates (those are for Boone, NC).

> HINT: Look at the EXAMPLES tab on the API documentation: https://www.weather.gov/documentation/services-web-api (remember that this API only returns weather data for locations inside the United States).
