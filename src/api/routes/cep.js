//IMPORT AND CONFIG EXPRESS
const express = require("express");
const router = express.Router();

const handleCep = require("../../services/handleCep");


router.post("/", async (req, res) => {

  if (!req.body.city || !req.body.state || !req.body.street) {
    res.status(400).send({
      message: "Can't find withou all information",
    });
  }   
})


module.exports = router;