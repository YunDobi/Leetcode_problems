const isValid = function(s) {
  s = s.split('');
  console.log(s);
  for (let i = 0; i < s.length; i++) {
    if (s[i] === '(') {
      if (s.includes(')')) {
        i++;
      } else {
        return false;
      }
    }
    if (s[i] === '[') {
      if (s.includes(')')) {
        return false;
      }
      else if (s.includes(']')) {
        i++;
      } else {
        return false;
      }
    }
    if (s[i] === '{') {
      
    }
    return true;
  }
};

console.log(isValid("([)]"));