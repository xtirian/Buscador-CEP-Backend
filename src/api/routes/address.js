//IMPORT AND CONFIG EXPRESS
const express = require("express");
const router = express.Router();



router.get("/", async (req, res) => {
  res.send({
    message: "Get concluido"
  })
})


module.exports = router;