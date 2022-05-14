// /**
//  * @param {string} a
//  * @param {string} b
//  * @return {string}
//  */
// const addBinary = function(a, b) {
//   a = a.split("")
//   b = b.split("")
//   let shortest = "";
//   let longest = ""
  
//   if (a.length <= b.length) {
//       shortest = a;
//       longest = b;
//   } else {
//       shortest = b;
//       longest = a;
//   }
//   // console.log(shortest)
//   for (let i = shortest.length - 1; i >= 0; i--) {
//       console.log(shortest[i], i)
//       console.log(longest[i])
//       if (longest[i] === "1" && shortest[i] === "1") {
//           longest[i] = 0;
//       }
//       longest.unshift(1)
//       console.log(longest)
//   }
// };

//solution from the discussion
const arrA = a.split("").reverse();
const arrB = b.split("").reverse();
let carry = 0;
let answer = [];
let idx = 0;
const len = a.length > b.length ? a.length : b.length;

while (idx < len) {
  const x = arrA[idx] ? +arrA[idx] : 0;
  const y = arrB[idx] ? +arrB[idx] : 0;
  const sum = carry + x + y;
  carry = Math.floor(sum / 2);
  answer.unshift(sum % 2);
  idx++;
}

if (carry > 0) answer.unshift(carry);

return answer.join("");