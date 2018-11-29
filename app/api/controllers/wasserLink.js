'use strict';

const SearchResults = require('../helpers/SearchResults');

/**
 * Group of functions for returning data regarding search result links
 *
 * @author Jason Miraglia [jason.m.miraglia@gmail.com]
 */
module.exports = {
  getRandomResult: getRandomResult
};

/**
 * Get a random link from search results
 *
 * @function checkLoad
 * @see {@linkplain https://localhost/docs/#!/wasserLink/getRandomLink Swagger API Documentation}
 * @param {object} req - Request
 * @param {object} res - Response
 */
function getRandomResult(req, res) {
  // Initialize search results
  let results = new SearchResults();

  // Get a random search result and return it
  results.getRandomResult()
    .then(function(link) {
      res.status(200).json(link);
    })
    .catch(function(error) {
      if (error) {
        res.status(error.statusCode).json(error.message);
      }
    })
}