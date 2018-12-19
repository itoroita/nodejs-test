const request = require("supertest");
const assert = require("assert");
const app = require("../app");

describe("Sign Up Testing", function() {
  it("should post sign up details", function(done) {
    let user = {
      email: "itoroita1@gmail.com",
      username: "ity"
      password: "ity"
      passwordConf: "ity"
    };
    request(app)
      .post("/auth/signUp")
      .send(user)
      .set("Accept", "application/json")
      .expect(201)
      .end(function(err, res) {
        if (err) return done(err);
        console.log(res.body);
        assert.equal(res.body.ops[0]._id.length, 24);
        done();
      });
  });
  it("should post login details", function(done) {
    let user = {
      username: "ity"
      password: "ity"
    };
    request(app)
      .post("/auth/login")
      .send(user)
      .set("Accept", "application/json")
      .expect(201)
      .end(function(err, res) {
        if (err) return done(err);
        console.log(res.body);
        assert.equal(res.body.ops[0]._id.length, 24);
        done();
      });
  });
});