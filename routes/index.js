module.exports = function (app) {
    app.use("/reg_user", require("./reg_user"));
    app.use("/book_flight", require("./book_flight"));
    app.use("/airport", require("./airport"));
    app.use("/booking", require("./booking"));
    app.use("/airplane_model", require("./airplane_model"));
    app.use("/airplane", require("./airplane"));
    app.use("/flight", require("./flight"));
    app.use("/gate", require("./gate"));
    app.use("/route", require("./route"));
    app.use("/seat", require("./seat"));
    app.use("/schedule", require("./schedule"));
    app.use("/admin", require("./admin"));
    app.use("/discount", require("./discount"));
    //Root route-REMOVE this
    app.use("/", (req, res) => {
        res.status(404).json({"message": "Default Route"})
    });
};