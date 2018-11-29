'use strict';

/**
 * Functions for managing search results data
 * @author Jason Miraglia [jason.m.miraglia@gmail.com]
 * @module SearchResults
 */
module.exports = SearchResults;

const cachedResults = require('../data/search-results.json');

/**
 *
 * @class SearchResults - fetching and returning search results
 */
function SearchResults(query) {
  let results;

  function init() {
    if (query !== null && typeof query !== 'undefined') {
      // TODO:: Add real-time querying of Google search API if we wanted to here
    } else {
      // Just use stored results for demo purposes
      results = cachedResults;
    }
  }

  /**
   * return a random search result from the data set
   *
   * @function getRandomResult
   * @returns {Promise}
   */
  this.getRandomResult = function() {
    return new Promise(function(res, rej){

      // As long as there are results, get a random result and return it
      if(results !== null) {
        const randomResultRaw = getResult(getRandomNumber(0, results.items.length));
        if(randomResultRaw !== null) {
          // Create a result object
          const result = {
            url: randomResultRaw.link,
            title: randomResultRaw.title,
            snippet: randomResultRaw.snippet
          };

          res(result);
        } else {
          rej({
            message: "There were no results to load",
            statusCode: 500
          })
        }
      } else {
        rej({
          message: "There was an error loading the search results",
          statusCode: 500
        });
      }
    });
  };

  this.clearResults = function() {
    results = null;
  };

  /**
   *  Get link based on index
   *  This would be adapted to pull data in real-time using the Google search API
   *
   * @function getResult
   * @param index - The index of the search result item to return
   * @returns {object} - search result item
   */
  function getResult(index) {
    return results.items[index];
  }

  /**
   * Generate a random integer
   *
   * @function getRandomNumber
   * @param min - minimum random number
   * @param max - maximum random number
   * @returns {int} - random integer
   */
  function getRandomNumber(min, max) {
    return Math.floor(Math.random() * max) + min;
  }

  // Self initialize
  init();
}
