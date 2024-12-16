require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const cors = require("cors");
const mongoConnection = require("./connections/mongoConnection");

const port = process.env.PORT || 5000;

const app = express();
app.use(cors());
app.use(express.json());

app.use("/api/", require("./routes/user"));
app.use("/api/", require("./routes/food"));
app.use("/api/", require("./routes/cart"));
app.use("/api/", require("./routes/order"));

app.get("/api/", (req, res) => {
  res.send("Hello");
});

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});
