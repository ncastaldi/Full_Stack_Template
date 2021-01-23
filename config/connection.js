// Require external npm packages
const mysql = require("mysql");

module.exports = {
    makeConnection: function () {
        // Declare connection
        const connection = mysql.createConnection({
            host: "localhost",
            port: 3306,
            user: "root",
            password: "", // ADD DATABASE PASSWORD
            database: "your_database_name" // ADD DATABASE NAME
        });

        // Make connection
        connection.connect(function (err) {
            if (err) {
                console.error("error connecting: " + err.stack);
                return;
            }

            console.log("Database connected as id: " + connection.threadId);
        });
    }
}