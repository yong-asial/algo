/*
Input: arr[] = {12, 1, 12, 3, 12, 1, 1, 2, 3, 3}
Output: 2
In the given array all element appear three times except 2 which appears once.

Input: arr[] = {10, 20, 10, 30, 10, 30, 30}
Output: 20
In the given array all element appear three times except 20 which appears once.
*/

const arr = [12, 1, 12, 3, 12, 1, 1, 2, 3, 3];

// bruteforce
const solution = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    let count = 0;
    for (let j=0; j < arr.length; j++) {
      if (i === j) continue;
      if (arr[i] === arr[j]) ++count;
    }
    if (count === 0) return arr[i];
  }
};

const solution2 = (arr) => {
  let m = new Map();
  let result = -1;
  for (let i = 0; i < arr.length; ++i) {
    const element = arr[i];
    const count = m.get(element) ? m.get(element)+1 : 1;
    if (count === 1) result = element;
    m.set(element, count);
  }
  return result;
};

const solution3 = (arr) => {
  let ones = 0, twos = 0; 
  let common_bit_mask; 
  let n = arr.length;
  for(let i=0; i<n; i++ ) 
  { 
    console.log('');
    console.log(`step ${i}`);
    console.log("================================");
      /*"one & arr[i]" gives the bits that are there in 
      both 'ones' and new element from arr[]. We 
      add these bits to 'twos' using bitwise OR*/
      console.log(`arr: ${arr.slice(0,i+1)}`);
      console.log(`arr[i]: ${arr[i]}`);
      console.log(`ones: ${ones}`);
      console.log(`twos: ${twos}`);
      console.log(`ones & ${arr[i]}: ${ones & arr[i]}`)
      twos = twos | (ones & arr[i]); 

      /*"one & arr[i]" gives the bits that are 
      there in both 'ones' and new element from arr[]. 
      We add these bits to 'twos' using bitwise OR*/
      console.log(`ones ^ ${arr[i]}: ${ones ^ arr[i]}`)
      ones = ones ^ arr[i]; 
      console.log(`ones: ${ones}`);

      /* The common bits are those bits which appear third time 
      So these bits should not be there in both 'ones' and 'twos'. 
      common_bit_mask contains all these bits as 0, so that the bits can  
      be removed from 'ones' and 'twos'*/
      console.log(`common_bit_mask(${ones} & ${twos}): ${ones & twos}`)
      common_bit_mask = ~(ones & twos); 
                    
      /*Remove common bits (the bits that appear third time) from 'ones'*/
      ones &= common_bit_mask; 
                    
      /*Remove common bits (the bits that appear third time) from 'twos'*/
      twos &= common_bit_mask; 
      console.log(`ones: ${ones}`);
      console.log(`twos: ${twos}`);
  } 
  return ones; 
}

// console.log(solution(arr));
// console.log(solution2(arr));
console.log(solution3(arr));