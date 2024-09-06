const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const app = express();
const Schema = mongoose.Schema;
require("dotenv").config();
var bodyParser = require("body-parser");

const router = require("./router");

app.use(bodyParser.json());
const port = process.env.PORT || 8080;

app.use(cors());
router(app);

mongoose
  .connect(
    `mongodb+srv://thaiduong:${process.env.MongooDB}@cluster0.kda5elg.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`
  )
  .then(() => console.log("Connect data successfull"))
  .catch(() => console.log("fall"));

app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`);
});
