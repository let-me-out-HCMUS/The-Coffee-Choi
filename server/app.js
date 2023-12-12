const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const userRouter = require("./routes/userRoute");
const categoryRouter = require("./routes/categoryRoute");
const productRouter = require("./routes/productRoute");
const errorController = require("./controllers/errorController");
const AppError = require("./utils/appError");

const app = express();
app.use(cors());
app.use(morgan("dev"));
app.use(express.json());

app.use("/api/v1/users", userRouter);
app.use("/api/v1/products", productRouter);
app.use("/api/v1/categories", categoryRouter);

app.all("*", (req, res, next) => {
  next(new AppError(`Can't find ${req.originalUrl} on this server!`, 404));
});

app.use(errorController);

module.exports = app;
