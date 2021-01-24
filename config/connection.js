// Require external npm packages
const mysql = require("mysql");
let connection;

// Declare connection
if (process.env.JAWSDB_URL) {
    connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
    connection = mysql.createConnection({
        host: "localhost",
        port: 3306,
        user: "root",
        password: "", // ADD DATABASE PASSWORD
        database: "" // ADD DATABASE NAME
    });
};

// Make connection
connection.connect(function (err) {
    if (err) {
        console.error("error connecting: " + err.stack);
        return;
    }

    console.log("Database connected as id: " + connection.threadId);
});

// Export connection
module.exports = connection;