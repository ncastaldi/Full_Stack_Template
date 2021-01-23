# Create a Fullstack App with Express, MySQL, and Handlebars

## Basic Setup

1. `touch server.js`
2. run `npm init -y`
3. `npm install mysql express express-handlebars`
4. OPTIONAL: `npm install nodemon -D`
5. Build out the folder structure.
6. Add boilerplate to the main.handlebars (include `{{{ body }}}`)

## Create your SQL Schema and Seeds

1. Drop database
2. Create database
3. Use database
4. Create tables
5. Insert seed data into tables.

## Build out My Server

1. Require the packages
   a. `express`
   b. `exphbs`
   c. `mysql`
2. Create an instance of express
3. Add a PORT to listen on
4. Listen on the PORT
5. Copy/Paste the middleware
   a. `JSON body parser`
   b. `Handlebars engine config`
6. Create the MySQL connection
7. Connect to MySQL
8. Add the routes

## Building a Single View Route - GET Requests

1. Test with `res.send`
2. Build out the query in MySQL Workbench.
3. Call `connection.query` inside the route to return the data.
4. Build the handlebars file you wish to render.
5. Call `res.render` with the data we want to display.
   - Include as parameters:
     a. `name of the file to render`
     b. `an object that includes`
6. Rinse and repeat.

## Build API Routes
