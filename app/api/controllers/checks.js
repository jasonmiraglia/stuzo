'use strict';

/**
 * Group of functions for checking status of application for integration testing
 *
 * @author Jason Miraglia [jason.m.miraglia@gmail.com]
 * @module check
 */
module.exports = {
  checkLoad: checkLoad
};

/**
 * Module to send static text used for integration testing to make sure node is up and serving request
 *
 * @function checkLoad
 * @see {@linkplain https://localhost/docs/#!/Checks/checkLoad Swagger API Documentation}
 * @param {object} req - Request
 * @param {object} res - Response
 */
function checkLoad(req, res) {
  res.status(200).json({
    message: "node running"
  });
}
