const express = require("express");
const morgan = require("morgan");
const app = express();
const userRouter = require("./routes/userRoute");
app.use(morgan("dev"));
app.use(express.json());

app.use("/api/v1/users", userRouter);

app.all("*", (req, res, next) => {
  next(new Error(`Can't find ${req.originalUrl} on this server!`, 404));
});

module.exports = app;
