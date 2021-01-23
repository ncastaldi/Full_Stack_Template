// Require external npm packages
const express = require("express");
const exphbs = require("express-handlebars");
const mysql = require("mysql");

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

// Declare connection to database
const connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "", // ADD DATABASE PASSWORD
    database: "" // ADD DATABASE NAME
});

// Make connection to database
connection.connect(function (err) {
    if (err) {
        console.error("error connecting: " + err.stack);
        return;
    }

    console.log("Database connected as id: " + connection.threadId);
});

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