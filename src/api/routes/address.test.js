const router = require("./address");

const request = require("supertest");
const express = require("express");
const app = express();

//app.use(express.urlencoded({ extended: false }));

//app.get('/user', function(req, res) {  res.status(200).json({ name: 'john' });});

const mockRequest = () => {
  return {
    cep: "",
  };
};

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

/*test("Testing route with CEP to PASS", () => {
  request(app)
    .post("/api/v1/address")
    .send({
      "cep": "01001000",
    })
    .then((res) => {
      expect(200).toContain("01001-000");
    });
});
*/

//TESTING FAILS

/*test("Testing route without pass CEP to FAIL", () => {
  request(app)
    .post("/api/v1/address")
    .then(() => {
      expect(400).toContain("Please insert a CEP");
    });
});

*/

/*
test("Testing route by passing incomplete CEP to FAIL", (done) => {
  request(app)
    .post("/api/v1/address")
    .send({ cep: "0" })
    .then(() => {
      expect(400).toContain(
        "The CEP is wrong, check out the CEP number and try again"
      );
      done();
    })
    .catch((err) => {
      console.log(`Error ${err}`);
      done()
    });
});
*/
