//IMPORT AND CONFIG EXPRESS
const express = require("express");
const router = express.Router();

const handleAddress = require("../../services/handleAddress");

router.get("/", async (req, res) => {
  if (!req.body.cep) {
    res.status(400).send({
      message: "please insert a CEP",
    });
  }

  //get CEP

  if (req.body.cep) {
    let address = async () => {
      try {
        const result = await handleAddress.getCep(req.body.cep);
        res.status(200).send(result);
      } catch (err) {
        res.status(500).send({
          message: "Couldn't get the info. Please try again later"
        })
      }
    };

    address();
  }
});

module.exports = router;
