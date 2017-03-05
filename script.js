// Solution: .reduce
function sumFizzBuzzFactors(maximum, arr=genArray(maximum)){
  return arr.reduce((acc, curr) => {
    return !(curr % 3) || !(curr % 5)
      ? acc + curr
      : acc
  }, 0)
}

// Creates array using max number
function genArray(num, arr=[]){
  for(let i=0; i<num; i++){
    arr.push(i)
  }
  return arr

}
