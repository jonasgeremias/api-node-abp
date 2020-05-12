const express = require("express");
const bodyParser = require("body-parser");

const app = express();

// parse requests of content-type: application/json
app.use(bodyParser.json());

// parse requests of content-type: application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

require("./routes/user.routes.js")(app);

// Simple route
app.get("/", (req, res) => {
  res.json({ message: "Bem vindo a API." });
});


// set port, listen for requests
app.listen(3000, () => {
  console.log("Servidor rodando na porta 3000.");
});