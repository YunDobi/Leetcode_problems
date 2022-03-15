
const mergeTwoLists = function(list1, list2) {
  const result = []
  console.log(list1.val)
  let longerlist = list1
  //empty lists
  if (list1.length === 0 && list2.length === 0) {
    return result;
  }
  //find longer list
  if (list2.length > list1.length) {
    longerlist = list2
  }
  console.log(list1.length)
  console.log(result)
};

mergeTwoLists([1,2,4],[1,3,4]);