const backspaceStringCompare = (s, t) => {
  console.log(s, t);
  let sPointer = s.length-1;
  let tPointer = t.length-1;

  let sSkip = 0;
  let tSkip = 0;

  while (sPointer >= 0 || tPointer >= 0) {

    while (sPointer >= 0) {
      if (s[sPointer] === '#') {
        sSkip++;
        sPointer--;
      } else if (sSkip > 0) {
        sPointer--;
        sSkip--;
      } else {
        break;
      }
    }
  
    while (tPointer >= 0) {
      if (s[tPointer] === '#') {
        tSkip++;
        tPointer--;
      } else if (tSkip > 0) {
        tPointer--;
        tSkip--;
      } else {
        break;
      }
    }
  
    console.log(sPointer, s[sPointer]);
    console.log(tPointer, t[tPointer]);
    if (sPointer >= 0 && tPointer >= 0 && s[sPointer] !== t[tPointer]) {
      return false;
    }

    if ((sPointer >= 0) !== (tPointer >= 0)) {
      return false;
    }

    sPointer--;
    tPointer--;
  }

  return true;
}

console.log(backspaceStringCompare('ab#c', 'ad#c'));
// console.log(backspaceStringCompare('a##c', '#a#c'));
// console.log(backspaceStringCompare('ab##', 'c#d#'));
// console.log(backspaceStringCompare('a#c', 'b'));