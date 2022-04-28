/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
const addBinary = function(a, b) {
  a = a.split("")
  b = b.split("")
  let shortest = "";
  let longest = ""
  
  if (a.length <= b.length) {
      shortest = a;
      longest = b;
  } else {
      shortest = b;
      longest = a;
  }
  // console.log(shortest)
  for (let i = shortest.length - 1; i >= 0; i--) {
      console.log(shortest[i], i)
      console.log(longest[i])
      if (longest[i] === "1" && shortest[i] === "1") {
          longest[i] = 0;
      }
      longest.unshift(1)
      console.log(longest)
  }
};