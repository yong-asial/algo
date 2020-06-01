const stack = [];

const string1 = '{}()[{}]';
const string2 = '[({)}]';
const st3 = '[({})]';
const st4 = '({[})';
const st5 = '({[]})';
const st6 = '()}[]';

const opening = ['{','[','('];
const closing = {
  '}': '{',
  ']': '[',
  ')': '(',
};

const isStringBalance = (st) => {
  if (!st || !st.length || (st.length%2)) return false;
  const tested = [];
  for (let i=0; i<st.length; i++) {
    const ch = st[i];
    if (opening.indexOf(ch) >= 0) {
      tested.push(ch);
    } else {
      const temp = tested.pop();
      if (temp !== closing[ch]) return false;
    }
  }
  return true;
}

console.log(string1, isStringBalance(string1));
console.log(string2, isStringBalance(string2));
console.log(st3, isStringBalance(st3));
console.log(st4, isStringBalance(st4));
console.log(st5, isStringBalance(st5));
console.log(st6, isStringBalance(st6));