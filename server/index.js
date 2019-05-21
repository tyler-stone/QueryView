const express = require("express");
const bodyParser = require("body-parser");
const pino = require("express-pino-logger")();
const cors = require("cors");

const db = require("./connections");

const app = express();
app.use(bodyParser.json());
app.use(pino);
app.use(cors());

const mockQueryResponse = {
  headers: ["Name", "Age", "Job"],
  rows: [
    ["James", 24, "Engineer"],
    ["Jill", 89, "Engineer"],
    ["Elyse", 76, "Designer"]
  ]
};

const connectionsResponse = {
  connections: ["PrestoDB", "MSSQL"]
};

app.get("/api/connections", (req, res) => {
  let success = true;
  let result = connectionsResponse;

  res.setHeader("Content-Type", "application/json");
  res.send(JSON.stringify({ success, result }));
});

app.post("/api/query", (req, res) => {
  const query = req.body.query;
  const queryEngine = req.body.queryEngine;

  let result = null;
  let success = false;

  if (query) {
    success = true;
    result = mockQueryResponse;
  }

  res.setHeader("Content-Type", "application/json");
  res.send(JSON.stringify({ success, result }));
});

app.listen(3001, () =>
  console.log("Express server is running on localhost:3001")
);
