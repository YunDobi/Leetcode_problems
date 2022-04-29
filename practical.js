const ThreeSum = (arr) => {

  // code goes here  
  let target = arr[0];
  let secTarget = ""

  for (let i = 1; i < arr.length; i++) {
    secTarget = target - arr[i]
      for (let j = i + 1; j < arr.length; j++) {
        // console.log("target:",target, "secTarget:", secTarget, arr[i], arr[j], secTarget - arr[j])
        if (arr.includes(secTarget - arr[j])) {
          return true
        }
      }
      return false
  }


  return arr; 

}
   
// keep this function call here 