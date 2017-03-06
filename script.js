function sumFizzBuzzFactors(maximum){
  // return the sum of the numbers between 0 and maximum that are divisible by 3 or 5
  let sum = 0;
  for (let i=o; i < maximum; i++) {
    sum += (i % 3 === 0 || i % 5 === 0) ? i : ;
  }
  return sum;
}


function genArray (maximum){
let range = []
for (var i = 0; i < maximum; i++) {
  range.push(i)
}
return range
}
