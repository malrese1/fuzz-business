function sumFizzBuzzFactors(maximum){
    let range = [...Array(maximum).keys()];
    return range
      .filter( num => (num % 3 === 0 || num % 5 === 0 ) )
      .reduce( (a,b) => a + b );
}
