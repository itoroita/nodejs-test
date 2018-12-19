const request = require("supertest");
const assert = require("assert");
const app = require("../app");

describe("Contact list test", function() {
  it("should post a contact detail", function(done) {
    let contact = {
      name: "Itoro",
      phone_number: "08060365304"
    };
    request(app)
      .post("/contact")
      .send(contact)
      .set("Accept", "application/json")
      .expect(201)
      .end(function(err, res) {
        if (err) return done(err);
        console.log(res.body);
        assert.equal(res.body.ops[0]._id.length, 24);
        done();
      });
  });
  it("should update a contact by id", function(done) {
    let contact = {
        name: "Hauwa Lawal",
        phone_number: "09050003445"
    };
    request(app)
      .put("/contact")
      .send(contact)
      .set("Accept", "application/json")
      .expect(201)
      .end(function(err, res) {
        if (err) return done(err);
        console.log(res.body);
        assert.equal(res.body.ops[0]._id.length, 24);
        done();
      });
  });

  it("should delete a contact by id", function(done) {
    let contact = {
        name: "Hauwa Lawal",
        phone_number: "09050003445"
    };
    request(app)
      .delete("/contact")
      .send(contact)
      .set("Accept", "application/json")
      .expect(201)
      .end(function(err, res) {
        if (err) return done(err);
        console.log(res.body);
        assert.equal(res.body.ops[0]._id.length, 24);
        done();
      });

   it("should read a contact by id", function(done) {
    let contact = {
        name: "Hauwa Lawal",
        phone_number: "09050003445"
    };
    request(app)
      .read("/contact")
      .send(contact)
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
