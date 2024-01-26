const express = require("express");
const fs = require("fs");
const path = require("path");
const https = require("https");
const cors = require("cors");
const morgan = require("morgan");
const mongoose = require("mongoose");
const transactionRoute = require("./routes/transactionRoute");
require("dotenv").config({
  path: "./config.env",
});

const app = express();

app.use(cors());
app.use(express.json());
app.use(morgan("dev"));

const DB = process.env.DATABASE.replace(
  "<password>",
  process.env.DATABASE_PASSWORD
);

mongoose.set("strictQuery", false);

mongoose
  .connect(DB, {
    useNewUrlParser: true,
  })
  .then((con) => {
    console.log("DB transaction connect succesfsful!");
  });

app.use("/api/v1/transaction", transactionRoute);

const options = {
  key: fs.readFileSync(path.join(__dirname, "./configs/server.key")),
  cert: fs.readFileSync(path.join(__dirname, "./configs/server.cert")),
};

// Create HTTPS server
const server = https.createServer(options, app);
const port = 8001;
server.listen(port, () => {
  console.log(`Transaction server listening on https://localhost:${port}`);
});
