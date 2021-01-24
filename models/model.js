// Require local depenancies
const orm = require("../config/orm");

// Update 'table_name' on Lines 8, 14, and 19.

let model = {
    all: function (cb) {
        orm.all("table_name", function (res) {
            cb(res);
        });
    },
    // The variables cols and vals are arrays.
    create: function (cols, vals, cb) {
        orm.create("table_name", cols, vals, function (res) {
            cb(res);
        });
    },
    update: function (objColVals, condition, cb) {
        orm.update("table_name", objColVals, condition, function (res) {
            cb(res);
        });
    }
};

// Export the database functions for the controller
module.exports = model;