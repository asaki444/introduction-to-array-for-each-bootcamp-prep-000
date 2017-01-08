var evens = [0, 2, 4, 6, 8, 10];

function doToElementsInArray(array, callback) {
  array.forEach(callback)
}
evens.forEach(even => {
  debugger;
  console.log(`${even} is not odd!`)
})

function doToEvens(array,callback) {
  array.forEach(callback)
}
function changeCompletely(element,index,array){
  array[index] =(Math.random() * 100).toString() + '!!!'
  }
var animals = ["dog", "fish", "cat"]
