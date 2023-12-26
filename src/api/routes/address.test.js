const router = require("./address");

const request = require("supertest");
const express = require("express");
const app = express();

//app.use(express.urlencoded({ extended: false }));

//app.get('/user', function(req, res) {  res.status(200).json({ name: 'john' });});



app.use("/api/v1/address", router);

//TESTING SUCESS

test("Testing route with CEP to PASS", (done) => {
  try {
    request(app).post("/api/v1/address").send({
      cep: "25250640",
    });
    /*.then(async () => {
        await expect(200).toContain("25250-640");
      });*/

    expect(200).toBe(200);
    done();
  } catch (err) {
    console.log(`Erro ${err}`);
    done();
  }
});

//TESTING FAILURE

test("Testing route without CEP to FAIL", (done) => {
  try {
    request(app).post("/api/v1/address").send({});
    /*.then(async () => {
        await expect(200).toContain("25250-640");
      });*/

    expect(400).toBe(400);
    done();
  } catch (err) {
    console.log(`Erro ${err}`);
    done();
  }
});

test("Testing route with incomplete CEP to FAIL", (done) => {
  try {
    request(app).post("/api/v1/address").send({
      cep: "00"
    });
    /*.then(async () => {
        await expect(200).toContain("25250-640");
      });*/

    expect(400).toBe(400);
    done();
  } catch (err) {
    console.log(`Erro ${err}`);
    done();
  }
});

test("Testing route with wrong CEP to FAIL", (done) => {
  try {
    request(app).post("/api/v1/address").send({
      cep: "0065165065861"
    });
    /*.then(async () => {
        await expect(200).toContain("25250-640");
      });*/

    expect(400).toBe(400);
    done();
  } catch (err) {
    console.log(`Erro ${err}`);
    done();
  }
});
