// ES2020 (ES11)

// 1) Dynamic Import

let addFunction
// if (false) {
//  const { add } = await import('./module.js');
//  addFunction = add;
// } else {
//   addFunction = (a, b) => a * b;
// }
// console.log(addFunction(1,2));

// 2) Big Int
const bigInt1 = 123n;
const bigInt2 = BigInt(123);
console.log(bigInt1 + bigInt2);

// 3) Nullish coalescing operator
const printScore = (score) => console.log(score || 'No Score');
const printRealScore = (score) => console.log(score ?? 'No Score');
printScore(null);
printScore(undefined);
printScore(0);
printRealScore(null);
printRealScore(undefined);
printRealScore(0);

// 4) optional chaining
const student = {
  profile: {
    school: {
      name: 'RUPP'
    }
  }
};
const student2 = {
  profile: null
};
console.log(student.profile?.school.name);
console.log(student2.profile?.school.name); // undefined
console.log(student2.profile.school.name); // error