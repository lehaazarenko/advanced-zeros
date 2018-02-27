module.exports = function getZerosCount(number, base) {
  // your implementation
  let result = 0, k = 1, five;
  
  function findFive(b) {
    let x, d = 2;
    while (b > d) {
      if (b % d === 0) {
        b = b / d;
        k++;
      } else {
        d++;
        k = 1;
      }
    }
    if (b > d) {
      return b;
    } else {
      return d;
    }
    
  }

  function calc(num, x) {
    return Math.floor(num / x);
  } 
  
  five = findFive(base);
  for (let i = 1; i < 11; i++) {
  	let temp = Math.pow(five, i);
  	if (number >= temp) {
  	  result += calc(number, temp);
  	} else {
  	  break;
  	}
  }
  result = Math.floor(result / k);
  return result;
}