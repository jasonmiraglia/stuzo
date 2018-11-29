'use strict';

/**
 * Main node application
 * @module app
 */
let SwaggerExpress = require('swagger-express-mw'),
  SwaggerUi = require('swagger-ui-express'),
  fs = require('fs'),
  yaml = require('js-yaml'),
  swagger_document = yaml.load(fs.readFileSync('./api/swagger/swagger.yaml')),
  app = require('express')(),
  PORT = 5000;

// Serve the swagger documentation in the swagger ui
app.use('/docs', SwaggerUi.serve, SwaggerUi.setup(swagger_document));

let config = {
  appRoot: __dirname,
};

/**
 * Start listening on defined PORT number
 *
 * @function startListening
 */
function startListening() {
  // Don't add another listener if module.parent exists, indicating unit tests
  if(!module.parent){
    app.listen(PORT, function () {
      console.log('Express server listening on port ' + PORT);
    });
  }
}

SwaggerExpress.create(config, function (err, swaggerExpress) {
  if (err) { throw err; }
  // register swagger middleware
  swaggerExpress.register(app);

  startListening();
});

module.exports = app; // for testing
