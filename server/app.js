const express = require("express");
const morgan = require("morgan");
const app = express();

app.use(morgan("dev"));
app.use(express.json());

app.all("*", (req, res, next) => {
  next(new Error(`Can't find ${req.originalUrl} on this server!`, 404));
});

module.exports = app;
