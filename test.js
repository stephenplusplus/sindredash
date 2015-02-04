var carrotdash = require("./")
var assert = require("assert")

describe("sindredash", function () {
  it("returns something for each module", function () {
    for (var module in carrotdash) assert(typeof carrotdash[module] !== "undefined")
  })
})