const app = require("./app");
const dotenv = require("dotenv");
const mongoose = require("mongoose");

dotenv.config({ path: "./config.env" });
process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";

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
    console.log("DB connect succesfsful!");
  });

const port = process.env.PORT || 3000;
const server = app.listen(port, () => {
  console.log(`App running on port ${port}...`);
});
/* process.on("unhandledRejection", (err) => {
  console.log(err.name, err.message);
  console.log("Unhandled rejection, shutting down...");
  server.close(() => process.exit(1));
});

process.on("uncaughtException", () => {
  console.log(err.name, err.message);
  console.log("Uncaught Exception, shutting down...");
  server.close(() => {
    process.exit(1);
  });
}); */
