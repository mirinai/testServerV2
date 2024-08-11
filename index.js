const express = require("express");
const bodyParser = require("body-parser");
const app = express();
app.use(bodyParser.json());
const port = process.env.PORT || 3000;
app.listen(port);

app.get("/api/lunch", (req, res) =>
  res.json({ menu: "topoki", store: "asdf", price: 10000 })
);
app.get("/api/dinner", (req, res) =>
  res.json({ menu: "galbi", store: "qwer", price: 11000 })
);
