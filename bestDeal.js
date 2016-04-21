module.exports = function(arr) {

var splitpric = arr.replace(/ for R/g, " ");

var avoArr = splitpric.split(", ");

console.log(avoArr);


}
