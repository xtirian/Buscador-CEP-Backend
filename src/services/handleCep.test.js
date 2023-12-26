const handleCep = require("./handleCep");

const cep = async (req) => {
  const result = await handleCep.getAddress(req);

  return result;
};

let address = {
  state: "RJ",
  city: "Duque de Caxias",
  street: "Avenida Ana Dantas",
};
test("RJ/Duque de Caxias/Avenida Ana Dantas", async () => {
  try {
    const result = await cep(address);

    expect(result).toEqual([
      {
        "cep": "25250-415",
        "logradouro": "Avenida Ana Dantas",
        "complemento": "",
        "bairro": "Mantiquira",
        "localidade": "Duque de Caxias",
        "uf": "RJ",
        "ibge": "3301702",
        "gia": "",
        "ddd": "21",
        "siafi": "5833"
      }
    ])
    // ... outras verificações de propriedades
  } catch (error) {
    console.error("Error during test:", error);
    throw error; // Re-throw the error to fail the test
  }
});
