/*
  You have 10$ and wanna buy 2 "different" flavors of icecream
  Icecream
  - Strawberry:   $2
  - Blueberry:    $7
  - Nutella:      $13
  - Vanilla:      $5
  - Banana:       $4
  - Bubblegum:    $13
  - Chocolate:    $5

  Input: [2,7,13,5,4,13,5]
  Output: [3,6]
*/

const icecreams = [2,7,13,5,4,13,5];
const money = 10;

const bruteforce = (icecreams, money) => {
  for (let i = 0; i < icecreams.length - 1; i++) {
    const first = icecreams[i];
    for (let j = i+1; j < icecreams.length; j++) {
      const second = icecreams[j];
      if (first + second === money) return [i, j];
    }
  }
}

const hashMap = (icecreams, money) => {
  const map = new Map();
  for (let i = 0; i < icecreams.length; i++) {
    map.set(money - icecreams[i], i); // it will replace the same complement with the latest index
  }

  for (let i = 0; i < icecreams.length; i++) {
    const first = icecreams[i];
    if (map.has(first)) {
      return [i, map.get(first)];
    }
  }
}

console.log(bruteforce(icecreams, money));
console.log(hashMap(icecreams, money));