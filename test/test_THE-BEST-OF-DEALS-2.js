var bestDeal = require("../bestDeal");
var assert = require("assert");



var strAvo = "1 for R3, 2 for R7, 3 for R10, 5 for R14.50.";



describe('test for bestDeal Avo function', function() {
  it('should give every total of Cape Town trippin taxi', function() {
    var result = bestDeal(strAvo);
    assert.equal(result, [ '1 3', '2 7', '3 10', '5 14.50' ]);


}
  });
