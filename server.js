const express = require("express");
const studentRoutes = require("./src/student/routes");
const port = 3000;
const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.status(400).json({
    status: "success",
    message: "Hello world from server",
  });
});

app.use("/api/v1/student", studentRoutes);

app.listen(port, () => {
  console.log("App listening");
});
