const express = require("express");
require("dotenv").config();
const bodyParser = require("body-parser");
const db = require("./services/database");
const eventRouter = require("./routes/events.routes");

const app = express();
app.use(bodyParser.json());
//Database
db.init();
//Routers
app.use("/events", eventRouter);

app.get("/", (req, res, next) => {
  res.json({ msg: "success" });
});

app.listen(process.env.PORT, () => {
  console.log(`Server is listen to the port ${process.env.PORT}`);
});
