require("dotenv").config();

/*
CEPBASEURL:"https://viacep.com.br/ws/",
 * 
CEPBASEURLFINAL: "json", 
*/

class handleAddress {
  static async getCep(cep) {
    try {
      const response = await fetch(`https://viacep.com.br/ws/${cep}/json`);

      const data = await response.json();

      return data;
    } catch (err) {
      console.error(err);
      return;
    }
  }
}

handleAddress.getCep("01001000");

//console.log(handleAddress.getCep("01001000"));

module.exports = handleAddress;
