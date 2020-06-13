
const reverse = (number) => {
  let reverseNumber = 0;
  while(number !== 0) {
    const pop = number % 10;
    number = parseInt(number/10);
    reverseNumber = (reverseNumber * 10) + pop;
  }
  return reverseNumber;
}


const number = -123;
console.log(number, reverse(number));