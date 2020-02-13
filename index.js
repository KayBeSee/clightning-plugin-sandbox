#!/usr/bin/env node
const Plugin = require('clightningjs');

const helloPlugin = new Plugin();

function sayHello(params) {
  if (!params || params.length === 0) {
    return 'Hello world';
  } else {
    return 'Hello ' + params[0];
  }
}

helloPlugin.addMethod('hello', sayHello, 'name', 'If you launch me, I\'ll great you !');
helloPlugin.start();