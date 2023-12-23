//IMPORT AND CONFIG EXPRESS
const express = require("express");
const router = express.Router();

const handleAddress = require("../../services/handleAddress");


router.get("/", async (req, res) => {

  if (!req.body.city || !req.body.state || !req.body.street) {
    res.status(400).send({
      message: "Can't find withou all information",
    });
  } 

  res.send({
    message: "Get concluido"
  })
})


module.exports = router;