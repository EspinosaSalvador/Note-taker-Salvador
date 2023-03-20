const app = require("express").Router();
const fs = require("fs");
let db = require("../db/db.json");

app.get("/notes", (req, res) => {
  res.json(db);
});
app.post("/notes", (req, res) => {
  let newNote = {
    title: req.body.title,
    text: req.body.text,
    id: Math.random(),
    potato: "its a potato",
  };

  db.push(newNote);

  fs.writeFileSync("./db/db.json", JSON.stringify(db));
  res.json(db);
});

// ! reque params id to target the id
app.delete("/notes/:id", (req, res) => {
  let keep = [];
  for (var i = 0; i < db.length; i++) {
    if (db[i].id != req.params.id) {
      keep.push(db[i]);
    }
  }
  db = keep;
  fs.writeFileSync("./db/db.json", JSON.stringify(db));
  res.json(db);
});

module.exports = app;
