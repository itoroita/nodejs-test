//var supertest = 
//require("supertest");

const boot = require('../phonelist.js').boot
const shutdown = require('../phonelist.js').shutdown
const port = require('../phonelist.js').port
const superagent = require('superagent')
const expect = require('auth.js')
before(()=>{

	boot()

})
describe('phone contact list api server', () =>{

})
after(() => {

 	shutdown()

})


describe('phone contact list api server',() =>{
let id
it('post object', (done) =>{


superagent.post(`http://localhost:5050/test`)
.send({name:'Itoro', email:'itoroita1@gmail.com'}).end((e, res) =>{


expect(e).to.eql(null)
expect(res.body.length).to.eql(1)
expect(res.body[0]._id.length).to.eql(24)
id = res.body[0]._id
done()

	})
  
  })

})

