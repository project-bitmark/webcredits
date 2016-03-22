#!/usr/bin/env node

var config = {};
config.storage  = 'credit.db';
config.dialect  = 'mysql';
config.host     = 'localhost';
config.database = 'webcredits';
config.username = 'root';
config.password = '';
config.wallet   = 'https://localhost/wallet/test#this';
config.currency = 'https://w3id.org/cc#mark';

module.exports = config;
