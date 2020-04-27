var assert = require("assert");

var chai = require("chai");
var chaiHttp = require("chai-http");

// Implicitly starts the server
var server = require("..");

var should = chai.should();

chai.use(chaiHttp);

const expectedResponseText = "Hello, World!";

describe("API test", function () {
  it("should returns '" + expectedResponseText + "'", (done) => {
    chai
      .request(server)
      .get("/test")
      .send()
      .end((err, res) => {
        should.not.exist(err);
        res.should.have.status(200);
        res.text.should.equal(expectedResponseText);
        done();
      });
  });
});

// Close the server
server.close();
