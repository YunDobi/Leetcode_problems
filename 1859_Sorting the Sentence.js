/**
 * @param {string} s
 * @return {string}
 */
let sortSentence = function (s) {
  let sliced = s.split(' ');
  let result = '';
  console.log(sliced);

  for (let i = 1; i < sliced.length; i++) {
    let current = sliced[i][sliced[i].length - 1];

    if (current < sliced[i - 1][sliced[i - 1].length - 1]) {
      let temp = sliced[i - 1];
      sliced.splice(i - 1, 1);
      sliced.splice(i, 0, temp);
      i = i - 2;

      if (i < 0) {
        i = 0;
      }
    }
  }
  for (let i = 0; i < sliced.length; i++) {
    let word = sliced[i].slice(0, sliced[i].length - 1);
    sliced[i] = word;
  }
  console.log(sliced);
  result = sliced.join(' ');
  return result;
};
