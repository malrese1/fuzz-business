//filter and reduce
function sumFizzBuzzFactors(maximum){
    let range = [...Array(maximum).keys()];
    return range
      .filter( num => (num % 3 === 0 || num % 5 === 0 ) )
      .reduce( (a,b) => a + b );
}


//recursive reduce implement
function sumFizzBuzzFactors(maximum) {
  let range = [...new Array(maximum).keys()]
  return recursiveReduceSum(0, range);
}

function recursiveReduceSum( acc, collection) {
  if (collection.length) {
    //plucks off first value of collection
    let current = collection.shift();

    let multiplier = (current % 3 === 0 || current % 5 === 0) ? 1 : 0;
    //multiply current value by 0 if not divisble by 3*5
    let addend = current * multiplier;

    let collSum = acc + addend;
    return recursiveReduceSum(collSum, collection);
  } else {
    //returns accumulator/base if collection has been emptied
    return acc;
  }
}
