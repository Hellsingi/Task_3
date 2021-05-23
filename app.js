const express = require("express");
const db = require("./db");
const bodyParser = require("body-parser");
const validateSession = require("./middleware/validate-session");

const app = express();
const userRouter = require("./controllers/usercontroller");
const gameRouter = require("./controllers/gamecontroller");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use("/api/auth", userRouter);
app.use("/api/game", gameRouter);
app.use(validateSession);
app.get("/health", (req, res) => res.json({ msg: "alive" }));
app.listen(4000, () => {
  db.sync();
  console.log("App is listening on 4000");
});
