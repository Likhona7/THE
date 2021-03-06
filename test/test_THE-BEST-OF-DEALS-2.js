var bestDeal = require("../bestDeal");
var assert = require("assert");



var strAvo = "1 for R3, 2 for R7, 3 for R10, 5 for R14.50";



describe('test for bestDeal Avo function', function() {

  it('should give an array', function() {
    var vee = ['1 3', '2 7', '3 10', '5 14.50'];
    var result = bestDeal.Arr(strAvo);
    assert.deepEqual(result, vee);


  })

  it("should give  array object ", function() {
    var vee = ['1 3', '2 7', '3 10', '5 14.50'];
    var vee2 = [{
      quantity: '1',
      price: '3'
    }, {
      quantity: '2',
      price: '7'
    }, {
      quantity: '3',
      price: '10'
    }, {
      quantity: '5',
      price: '14.50'
    }];
    var result = bestDeal.avoObj(vee);
    assert.deepEqual(result, vee2);

  })
  it("should give a price of each avo price and push to Object", function() {
    var vee2 = [{
      quantity: '1',
      price: '3'
    }, {
      quantity: '2',
      price: '7'
    }, {
      quantity: '3',
      price: '10'
    }, {
      quantity: '5',
      price: '14.50'
    }];
    ///////////////////////////////////////////////////////////////////////
    var vee3 = [{
      quantity: 1,
      price: 3,
      pricePerAvo: 3
    }, {
      quantity: 2,
      price: 7,
      pricePerAvo: 3.5
    }, {
      quantity: 3,
      price: 10,
      pricePerAvo: 3.33
    }, {
      quantity: 5,
      price: 14.50,
      pricePerAvo: 2.9
    }];
    var result = bestDeal.newArrAvo(vee2);
    assert.deepEqual(result, vee3);

  })
  it("should find the cheapest deal", function() {
    var vee3 = [{
      quantity: 1,
      price: 3,
      pricePerAvo: 3
    }, {
      quantity: 2,
      price: 7,
      pricePerAvo: 3.5
    }, {
      quantity: 3,
      price: 10,
      pricePerAvo: 3.33
    }, {
      quantity: 5,
      price: 14.50,
      pricePerAvo: 2.9
    }];

    var vee4 = {
      quantity: 5,
      price: 14.50,
      pricePerAvo: 2.9
    };



    var result = bestDeal.minPrice(vee3);
    assert.deepEqual(result, vee4);
  })
  it("should find the expensive deal", function(){

    var vee5 = [{
      quantity: 1,
      price: 3,
      pricePerAvo: 3
    }, {
      quantity: 2,
      price: 7,
      pricePerAvo: 3.5
    }, {
      quantity: 3,
      price: 10,
      pricePerAvo: 3.33
    }, {
      quantity: 5,
      price: 14.50,
      pricePerAvo: 2.9
    }];

    var vee6 =    {
          quantity: 2,
          price: 7,
          pricePerAvo: 3.5
        }
var result = bestDeal.maxPrice(vee5)
assert.deepEqual(result, vee6)
  })
  it("should find the average deal", function(){

    var vee7 = [{
      quantity: 1,
      price: 3,
      pricePerAvo: 3
    }, {
      quantity: 2,
      price: 7,
      pricePerAvo: 3.5
    }, {
      quantity: 3,
      price: 10,
      pricePerAvo: 3.33
    }, {
      quantity: 5,
      price: 14.50,
      pricePerAvo: 2.9
    }];

var result = bestDeal.average(vee7)
assert.deepEqual(result, 3.18)
  })

});
