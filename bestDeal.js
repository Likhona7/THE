exports.Arr = function(arr) {

var splitpric = arr.replace(/ for R/g, " ");

var avoArr = splitpric.split(", ");




console.log(avoArr);
//console.log(newArrAvo);
return avoArr;

}
 exports.avoObj = function(avoArr){
   var avoDealArr =[];
   avoArr.forEach(function(arr){
     var rows = arr.split(" ");
    //  var quantity = rows[0];
    //  var price = rows[1];

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
avoDealArr.forEach(function(arr){

//console.log(arr);
var pricePerAvo = 0;
var pricePerAvo = Number(pricePerAvo + arr.price / arr.quantity).toFixed(2);
console.log(arr);
console.log(pricePerAvo);



})
//console.log(arr);
 }
