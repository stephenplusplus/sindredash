var carrotdash = require("./");
var assert = require("assert");
var decamelize = require("decamelize");

describe("sindredash", function () {
	it("returns something for each module", function () {
		for (var module in carrotdash) {
			assert.deepEqual(carrotdash[module], require(decamelize(module, "-")));
		}
	});
});