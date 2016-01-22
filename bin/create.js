#!/usr/bin/env node

// requires
var webcredits = require('../lib/webcredits.js');
var program    = require('commander');


/**
 * version as a command
 */
function bin(argv) {
  // setup config
  var config = require('./dbconfig.js');

  program
  .option('-d, --database <database>', 'Port')
  .parse(argv);

  var defaultDatabase = 'webcredits';

  var database = program.database || defaultDatabase;

  config.database = program.database || config.database || defaultDatabase;

  webcredits.createDB(config);
}

// If one import this file, this is a module, otherwise a library
if (require.main === module) {
  bin(process.argv);
}

module.exports = bin;
