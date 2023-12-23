//IMPORT AND CONFIG EXPRESS
const express = require("express");
const router = express.Router();

const handleCep = require("../../services/handleCep");


router.post("/", async (req, res) => {

  if (!req.body.address) {
    res.status(400).send({
      message: "Can't find withou all information",
    });
  }

  if(req.body.address){   

    const cep = async () =>{
      try{
        const result = await handleCep.getAddress(req.body.address);

        res.status(200).send(result)

      } catch(err){
        res.status(500).send({
          message: `Couldn't get the info. Please try again later. Error ${err}`
        });
      }
    }

    cep()

    
  }


})


module.exports = router;