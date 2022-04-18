//this is O(n)
const isPalindrome = function(x) {
  let array_item = Array.from(String(x), Number);
  let reversed_array = [];
  for (let i = array_item.length - 1; i >= 0; i--) {
    reversed_array.push(array_item[i]);
  }
  if (array_item.join('') === reversed_array.join('')) {
    return true;
  } else {
    return false;
  }
  


};

console.log(isPalindrome(121));