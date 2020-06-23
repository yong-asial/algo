const words = ["hello","leetcode"];
const order = "hlabcdefgijkmnopqrstuvwxyz";
const output = true;


const isAlienDictionary = (words, order) => {
  const charMap = new Array(26);
  const base = 'a'.charCodeAt(0);
  for (let i=0; i < order.length; i++) {
    charMap[order.charCodeAt(i)-base] = i;
  }

  for (let i=1; i < words.length; i++) {
    if (compare(words[i-1], words[i], charMap) > 0) return false;
  }

  return true;
};

const compare = (word1, word2, charMap) => {
  let i = 0;
  let j = 0;
  let charCompareVal = 0;
  const base = 'a'.charCodeAt(0);

  while (
    i < word1.length &&
    j < word2.length &&
    charCompareVal === 0
  ) {
    charCompareVal = charMap[word1.charCodeAt(i) - base] - charMap[word2.charCodeAt(j) - base];
    i++;
    j++;
  }

  if (charCompareVal === 0) {
    return word1.length - word2.length;
  } else {
    return charCompareVal;
  }
};

console.log(isAlienDictionary(words, order));