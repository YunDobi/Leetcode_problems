const haystack = "hello";
const needle = "ll";
let counter = 0;

const temp = haystack.split("")
counter = temp.indexOf(needle)

console.log(counter);