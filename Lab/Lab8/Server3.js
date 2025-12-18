const express = require("express");
const fs = require("fs");

const app = express();

app.get("/", (req, res) => {
  fs.readFile("home.txt", (err, data) => {
    if (err) {
      res.send(err);
    }
    res.send(data.toString());
  });
});

app.get("/about", (req, res) => {
  fs.readFile("about.txt", (err, data) => {
    if (err) {
      res.send(err);
    }
    res.send(data.toString());
  });
});

app.get("/contact", (req, res) => {
  fs.readFile("contact.txt", (err, data) => {
    if (err) {
      res.send(err);
    }
    res.send(data.toString());
  });
});

app.get("/help", (req, res) => {
  fs.readFile("help.txt", (err, data) => {
    if (err) {
      res.send(err);
    }
    res.send(data.toString());
  });
});

app.use((req, res) => {
  res.status(404).send("Page not found");
});

app.listen(3003, () => {
  console.log("Server Started at 3003");
});
