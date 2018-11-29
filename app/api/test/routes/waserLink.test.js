'use strict';

const helper = require('../helpers/test-support')();
const chai = helper.chai;
const should = helper.should;
const fs = require('fs');
const searchResults = require('../../helpers/SearchResults');

describe('Search Results', function(){
  /*
   * Start /wasserLink tests
   */
  describe('GET /wasserLink', function(){
    it('returns a random search result containing at least URL, title, and snippet', function(done){
      chai.request(helper.server)
        .get('/wasserLink')
        .end(function(err, res) {
          res.status.should.equal(200);
          res.body.should.be.a('object');
          res.body.should.have.property('url');
          res.body.should.have.property('title');
          res.body.should.have.property('snippet');
          done();
        });
    });
  });

  // Clear the search results data
  let searchResult = new searchResults();
  let testResult;

  before(function(done) {
    searchResult.clearResults();

    searchResult.getRandomResult()
      .then(function(link) {
        testResult = link;
        done();
      })
      .catch(function(error) {
        if (error) {
          testResult = error;
        }
        done();
      });
  });


  describe('SearchResult class', function(){
    it('returns an error due to search results not existing', function(done){
      testResult.should.be.a('object');
      testResult.should.have.property('statusCode');
      testResult.should.have.property('message');
      testResult.statusCode.should.eql(500);
      done();
    });
  });
  // End /wasserLink tests
});