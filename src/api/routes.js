function routes(app) {
  app.use("/api/v1/cep", require("./routes/cep.js"));

  app.use("/api/v1/addres", require("./routes/address.js"));

  return;
}

module.exports = routes;
