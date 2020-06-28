// find common characters

const input = ["bella", "label", "roller"];
const output = ["e", "l", "l"];

const input2 = ["cool", "lock", "cook"];
const output2 = ["c", "o"];

const findCommonCharacters = (input) => {
  const commonChars = [];
  const aCharCode = "a".charCodeAt(0);
  const minFrequencies = new Array(26);
  minFrequencies.fill(Number.MAX_SAFE_INTEGER);
  
  input.forEach(currentString => {
    
    const charFrequencies = new Array(26);
    charFrequencies.fill(0);
    for (let i = 0; i < currentString.length; i++) {
      charFrequencies[currentString.charCodeAt(i)-aCharCode]++;
    }
    
    for (let i = 0; i < 26; i++) {
      minFrequencies[i] = Math.min(minFrequencies[i], charFrequencies[i]);
    }

  });

  for (let i = 0; i < 26; i++) {
    while (minFrequencies[i] > 0) {
      commonChars.push(String.fromCharCode(i+aCharCode));
      minFrequencies[i]--;
    }
  }

  return commonChars;
};

console.log(findCommonCharacters(input));
console.log(findCommonCharacters(input2));
