const array = [2, 7, 0, 'hello', null, 4, 5, 8, -2, 'test', undefined]; 

let evenCount = 0; 
let oddCount = 0; 
let zeroCount = 0; 

array.forEach(function(item, index, array) {
  if (typeof item === 'number') { 
    if (item === 0) {
      zeroCount++; 
    } else if (item % 2 === 0) {
      evenCount++; 
    } else {
      oddCount++; 
    }
  }
});


console.log(`evenCount: ${evenCount}`);
console.log(`oddCount: ${oddCount}`);
console.log(`zeroCount: ${zeroCount}`);