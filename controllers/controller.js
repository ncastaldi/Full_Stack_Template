// Require external npm packages
const express = require("express");

const router = express.Router();

// Require local depenancies
const model = require("../models/model"); // Update variable and model names

// Root route
router.get("/", function (req, res) {
    model.all(function (data) {
        var hbsObject = {
            burgers: data
        };
        console.log(hbsObject);
        res.render("index", hbsObject);
    });
});

// Post route
// Update route
router.post("", function (req, res) {
    model.create(["burger_name", "devoured"], [req.body.name, false], function (result) {
        // Send back the ID of the new quote
        res.json({ id: result.insertId });
    });
});

// Put route
// Update route
router.put("", function (req, res) {
    const condition = "id = " + req.params.id;

    console.log("condition", condition);

    model.update(
        {
            // Update condition
        },
        condition,
        function (result) {
            if (result.changedRows === 0) {
                // If no rows were changed, then the ID must not exist, so 404
                return res.status(404).end();
            }
            res.status(200).end();

        }
    );
});

// Export routes for server.js to use.
module.exports = router;