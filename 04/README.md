# TASK 04

Write a piece of middleware called `database.js` that checks for a better-sqlite3 database and creates one if it doesn't exist.

The autograder will check for the following things:

1. An arbitrary script should be able to require your `database.js` file.
2. `database.js` checks for a `customers` table in a database file called `info.db` and creates a table in a database if these do not exist.
3. `customers` table should contain the following columns: `lastname`, `firstname`, `email`.
