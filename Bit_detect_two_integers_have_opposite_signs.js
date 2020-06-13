/*
The XOR of x and y will be negative if they have different signs,
otherwise it will be positive

1 ^ 1 > 0
-1 ^ -1 > 0
-1 ^ 1 < 0
*/

const hasDifferentSigns = (x, y) => {
  return ((x^y) < 0)
}

console.log(hasDifferentSigns(1,1));
console.log(hasDifferentSigns(-1,-1));
console.log(hasDifferentSigns(-1,1));
