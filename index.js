//To see how the final website should work, run "node solution.js".
//Make sure you have installed all the dependencies with "npm i".
//The password is ILoveProgramming

import express from "express";
import bodyParser from "body-parser";
import { dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));

function passwordCheck(req, res, next) {
  const correctPassword = "ILoveProgramming";
  const userPassword = req.body.password;

  if (userPassword === correctPassword) {
    next();
  } else {
    res.send("Incorrect password! Try again.");
  }
}

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/public/index.html");
});

app.post("/check", passwordCheck, (req, res) => {
  res.sendFile(__dirname + "/public/secret.html");
});

app.listen(port, (req, res) => {
  console.log(`Listening on port ${port}`);
});
