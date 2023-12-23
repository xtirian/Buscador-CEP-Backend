//CONFIGURE EXPRESS
const express = require("express");
const app = express();
const port = 8080;

// MAKE EXPRESS RETURN JSON
app.use(express.json());

//CONFIG DOT ENV
require("dotenv").config();


//STARTING APPLICATION
app.get("/", (req, res) => {
  res.send("Hello motherfucker");
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});

//ROUTES

//CEP
app.use("/api/v1/cep", require("./src/api/routes/cep.js"));

//ADDRESS
app.use("/api/v1/address", require("./src/api/routes/address.js"));


module.exports = app;