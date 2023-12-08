const app = require("./app");
const dotenv = require("dotenv");

dotenv.config({ path: "./config.env" });
const port = process.env.PORT || 3000;
const server = app.listen(port, () => {
  console.log(`App running on port ${port}...`);
});
process.on("unhandledRejection", (err) => {
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
});
