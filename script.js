// Solution: .forEach
function sumFizzBuzzFactors(maximum, arr=genArray(maximum)){
  let sum = 0
  arr.forEach(num => {
    if(!(num % 3) || !(num % 5)){
      sum += num
    }
  })
  return sum
}

// Solution: .reduce
function sumFizzBuzzFactors(maximum, arr=genArray(maximum)){
  return arr.reduce((acc, curr) => {
    return !(curr % 3) || !(curr % 5)
      ? acc + curr
      : acc
  }, 0)
}

// Creates array using max number. Used in previous two solutions.
function genArray(num, arr=[]){
  for(let i=0; i<num; i++){
    arr.push(i)
  }
  return arr
}

// Solution: recursion
function sumFizzBuzzFactors(maximum, current=1, sum=0){
  let updatedSum = !(current % 3) || !(current % 5) ? sum + current : sum
  return current === maximum ? sum : sumFizzBuzzFactors(maximum, current + 1, updatedSum)
}
