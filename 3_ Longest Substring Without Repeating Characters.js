//window sliding
let lengthOfLongestSubstring = function(s) {
  let set = new Set();
  let left = 0;
  let counter = 0;

  for (let i = 0; i < s.length; i++) {
    while (set.has(s[i])) {
      set.delete(s[left]);
      left++;
    }
    set.add(s[i]);
    counter = Math.max(counter, i - left + 1);
  }
  return counter;
};
