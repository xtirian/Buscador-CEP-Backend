/*
CEPBASEURL:"https://viacep.com.br/ws/",
 * 
CEPBASEURLFINAL: "json", 
*/

class handleCep {
  static async getAddress(address) {
    if (!address) {
      return "Access with a address";
    }

    const URL = `https://viacep.com.br/ws/${address.state}/${address.city}/${address.street}/json`;

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

module.exports = handleCep;
