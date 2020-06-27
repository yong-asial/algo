// self dividing numbers
const left = 1;
const right = 22;
const output = [1, 2, 3, 4, 5, 6, 7, 8, 9, 11, 12, 15, 22];

// 128 is the self-dividing number because it can be divided by 1, 2, 8
// can't contain zero digit

const isSelfDividing = (number) => {
  if (number % 10 === 0) return false;
  if (number < 10) return true;
  let temp = number;
  while (number !== 0) {
    const eachDigit = number % 10;
    const residual = temp % eachDigit;
    if (residual !== 0) return false;
    number = Math.floor(number / 10);
  }
  return true;
}

const solution = (left, right) => {
  const result = [];
  for (let i=left; i <= right; i++) {
    if (isSelfDividing(i)) result.push(i);
  }
  return result;
};

console.log(solution(left, right));