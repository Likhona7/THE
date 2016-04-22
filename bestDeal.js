exports.Arr = function(arr) {

  var splitpric = arr.replace(/ for R/g, " ");

  var avoArr = splitpric.split(", ");
  console.log(avoArr);
  //console.log(newArrAvo);
  return avoArr;
}
exports.avoObj = function(avoArr) {
  var avoDealArr = [];
  avoArr.forEach(function(arr) {
    var rows = arr.split(" ");
    dealObj = {
      price: rows[1],
      quantity: rows[0]
    }
    avoDealArr.push(dealObj);
  })
  console.log(avoDealArr);
  return avoDealArr;
}
exports.newArrAvo = function(avoDealArr) {
  var newArrAvo = [];
  var arr = avoDealArr.map(function(array) {
    array.pricePerAvo = Number((array.price / array.quantity).toFixed(2));
    newArrAvo.push(array);
    // console.log(newArrAvo);

  });
  console.log(newArrAvo);
  return newArrAvo;
};


exports.minPrice = function(newArrAvo) {

  var minPrice = [];

  var min = Infinity;
  var minObj = {};
  newArrAvo.forEach(function(obj) {
    if (obj.pricePerAvo < min) {
      min = obj.pricePerAvo;
      minObj = obj;
    }
    if (min === obj.pricePerAvo) {
      minPrice.push(obj)
    }

  });
  console.log(minObj)
  return minObj;

};









//////////////////////////////////////////////////////////////////////////////////
