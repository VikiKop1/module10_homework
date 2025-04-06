const arr = [1, 1, 1, 1]; 

let allEqual = true; 

arr.forEach(function(item, index, array) {
 if (item !== array[0]) {
   allEqual = false;
  }
});

console.log(allEqual); 