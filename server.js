const express = require("express");
const port = 3000;
const app = express();

app.get("/");

app.listen(port, () => {
  console.log("App listening");
});
