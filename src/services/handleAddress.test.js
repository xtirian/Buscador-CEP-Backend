const handleAddress = require("./handleAddress");

test("Require test for CEP: 25250-415", async () => {
  expect(await handleAddress.getCep("25250415")).toEqual({
    bairro: "Mantiquira",
    cep: "25250-415",
    complemento: "",
    ddd: "21",
    gia: "",
    ibge: "3301702",
    localidade: "Duque de Caxias",
    logradouro: "Avenida Ana Dantas",
    siafi: "5833",
    uf: "RJ",
  });
});
