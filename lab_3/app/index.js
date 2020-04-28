const express = require("express");

const port = 8080;

var app = express();

app.use(express.static("public"));

app.get("/test", (req, res) => {
  res.status(200).send("Hello, World!");
});

module.exports = app.listen(port, () => {
  process.stdout.write("Listening on port " + port);
});
