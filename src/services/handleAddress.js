require("dotenv").config();




// get the cep e return the address

class handleAddress {
  static async getCep(cep) {
    if(!cep){
      return;
    }
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


module.exports = handleAddress;
