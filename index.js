const express = require("express");

const app = express();

app.get("/hello", function (request, response) {
  response.send("Hello");
});

app.listen(3000, function () {
  console.log("server is okay");
});
