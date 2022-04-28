const reverseString = function(s) {
  for (let i = 0; i < s.length / 2; i++) {
      //replace the first and last words
      [s[i], s[s.length - i -1]] = [s[s.length - i - 1], s[i]]
  }
  return s;
};