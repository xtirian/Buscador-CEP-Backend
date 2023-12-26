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

test("Require test for CEP: 01001-000", async () => {
  expect(await handleAddress.getCep("01001000")).toEqual({
    cep: "01001-000",
    logradouro: "Praça da Sé",
    complemento: "lado ímpar",
    bairro: "Sé",
    localidade: "São Paulo",
    uf: "SP",
    ibge: "3550308",
    gia: "1004",
    ddd: "11",
    siafi: "7107",
  });
});


