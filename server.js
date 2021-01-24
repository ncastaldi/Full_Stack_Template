// Require external npm packages
const express = require("express");
const exphbs = require("express-handlebars");

// Decalre instance of ExpressJS
const app = express();

// Set the port of our application
// process.env.PORT lets the port be set by Heroku
const PORT = process.env.PORT || 8080;

// Middleware
// Serve static content for the app from the "public" directory in the application directory.
app.use(express.static("public"));

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Sets up default template for Handlebars
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// Import routes and give the server access to them.
const routes = require("./controllers/controller"); // Update controler name, if needed

app.use(routes);

// Start Express server
app.listen(PORT, function () {
    // Log (server-side) when our server has started
    console.log("The server is listening on: http://localhost:" + PORT);
});