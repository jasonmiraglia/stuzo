'use strict';

var helper = require('../helpers/test-support')();
var chai = helper.chai;
var should = helper.should;

describe('Checks', function(){
  /*
   * Start /check tests
   */
  describe('GET /check', function(){
    it('returns static message', function(done){
      chai.request(helper.server)
        .get('/check')
        .end(function(err, res) {
          res.status.should.equal(200);
          res.body.should.be.a('object');
          res.body.should.have.property('message');
          res.body.message.should.be.eql('node running');
          res.body.message.should.not.be.eql('wrong-string');
          done();
        });
    });
  });
  // End /check tests
});
