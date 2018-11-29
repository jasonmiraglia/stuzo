'use strict';

/**
 * A set of helper functions for doing repetitive tests
 * @author Jason Miraglia [jason.m.miraglia@gmail.com]
 * @module testHelpers
 * @requires chai
 * @requires chai-http
 * @requires chai-things
 * @requires app
 * @requires chai.should
 */
module.exports = function (){
  var module = {};

  var chai = require('chai');
  var server = require('../../../server');
  var should = chai.should();

  chai.use(require('chai-http'));
  chai.use(require('chai-things'));

  module.chai = chai;
  module.server = server;
  module.should = should;

  // Remove all search results stored
  module.clearSearchResults = function(callback){
    console.log('test');
  }

  return module;
};
