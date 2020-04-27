const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");

const port = 8080;

var app = express();

app.use(express.static("public"));

// app.use(bodyParser.text({ type: "text/html" }));

app.get("/test", (req, res) => {
  res.status(200).send("Hello, World!");
});

module.exports = app.listen(port, () => {
  process.stdout.write("Listening on port " + port);
});
