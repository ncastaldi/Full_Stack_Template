// Require external npm packages
const express = require("express");
const exphbs = require("express-handlebars");

// Require local depenancies
const connection = require("./config/connection");

// Decalre instance of ExpressJS
const app = express();

// Set the port of our application
// process.env.PORT lets the port be set by Heroku
const PORT = process.env.PORT || 8080;

// Middleware
// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Sets up default template for Handlebars
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// Declare and make connection to database
connection.makeConnection();

// HTML Routes
app.get("/", function (req, res) {
    res.send("Hello, world!");
});
// HTML Routes

// API Routes
// API Routes


// Start Express server
app.listen(PORT, function () {
    // Log (server-side) when our server has started
    console.log("The server is listening on: http://localhost:" + PORT);
});