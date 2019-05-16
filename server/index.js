const express = require("express");
const bodyParser = require("body-parser");
const pino = require("express-pino-logger")();
var cors = require("cors");

const app = express();
app.use(bodyParser.json());
app.use(pino);
app.use(cors());

const mockResponse = {
  headers: ["Name", "Age", "Job"],
  rows: [
    ["James", 24, "Engineer"],
    ["Jill", 89, "Engineer"],
    ["Elyse", 76, "Designer"]
  ]
};

app.post("/api/query", (req, res) => {
  const query = req.body.query;
  let result = null;
  let success = false;

  if (query) {
    success = true;
    result = mockResponse;
  }

  res.setHeader("Content-Type", "application/json");
  res.send(JSON.stringify({ success, result }));
});

app.listen(3001, () =>
  console.log("Express server is running on localhost:3001")
);
