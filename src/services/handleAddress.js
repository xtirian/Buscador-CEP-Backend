require("dotenv").config();

// get the cep e return the address

class handleAddress {
  static async getCep(cep) {
    if (!cep) {
      return;
    }

    const URL = `https://viacep.com.br/ws/${cep}/json`;

    try {
      const response = await fetch(URL);

      if (!response.ok) {
        throw new Error(
          `Failed to fetch address data. Status: ${response.status}`
        );
      }

      const data = await response.json();

      return data;
    } catch (err) {
      console.error(`Error ${err.message}`);
      throw err;
    }
  }
}

module.exports = handleAddress;
