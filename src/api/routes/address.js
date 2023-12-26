//IMPORT AND CONFIG EXPRESS
const express = require("express");
const router = express.Router();

const handleAddress = require("../../services/handleAddress");

router.post("/", async (req, res) => {
  /*if (req.body.cep === undefined) {
    res.status(400).send({
      message: "CEP is undefined",
    });
  }*/

  /*if(req.body.cep === undefined || req.body.cep === null){
    res.send(400)
  }*/
  if (!req.body.cep) {
    res.status(400).send({
      message: "Please insert a CEP",
    });
  }

  if (req.body.cep !== undefined) {
    if (req.body.cep.length < 8 || req.body.cep.length > 8) {
      res.status(401).send({
        message: "The CEP is wrong, check out the CEP number and try again",
      });
    }
  }

  //get CEP

  if (req.body.cep && req.body.cep.length === 8) {
    let address = async () => {
      try {
        const result = await handleAddress.getCep(req.body.cep);
        res.status(200).send(result);
      } catch (err) {
        res.status(500).send({
          message: `Couldn't get the info. Please try again later. Error ${err}`
        });
      }
    };
    address();
  }

  
});

module.exports = router;
