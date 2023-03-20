const express = require("express");
const path = require("path");
const PORT = process.env.PORT || 3001;
const apiRoutes = require("./api/api-routes");
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// ! req request and res response
app.use(express.static("public"));
app.get("/", (req, res) =>
  res.sendFile(path.join(__dirname, "./public/index.html"))
);
app.get("/notes", (req, res) =>
  // res.sendFile(path.join(__dirname, "./Develop/public/index.html"))
  res.sendFile(path.join(__dirname, "./public/notes.html"))
);
app.use("/potato", apiRoutes);
app.listen(PORT, () =>
  console.log(`App listening at http://localhost:${PORT} 🚀`)
);

// ! restart server automatically "nodemon"
