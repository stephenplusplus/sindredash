'use strict';

var camelcase = require('camelcase');
var modules = Object.keys(require('./package.json').dependencies);

module.exports = modules.reduce(function (acc, dependency) {
	acc[camelcase(dependency)] = require(dependency);
	return acc;
}, {});
