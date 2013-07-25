#!/usr/bin/env node

var http = require('http'),
httpProxy = require('http-proxy');

var options = {
  pathnameOnly:true,
  router: {
    '/camera': '10.0.0.11:8080/?action=stream',
    '': 'localhost:9999'
  }
};
//
// Create your proxy server
//
httpProxy.createServer(options).listen(8000);
