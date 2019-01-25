var breakOut = (array, changeValue, stopValue) => {
  for(let i=0; i<array.length; i++) {
    if (array[i] === stopValue){
      break;
    }
    array[i] = changeValue
  }
  return array
}

var keepGoing = (array, changeValue, skipValue) => {
  for (let i =0; i < array.length; i++) {
    if(array[i] === skipValue){
      continue;
    }
    array[i] = changeValue
  }
  return array
}

var findBy = (array,findFn) => {
 for (let i = 0; i < array.length; i++) {
   if(array[i] == findFn){
     break
   }
   return array[i]
  }

function find(array, criteriaFunc) {
  for (let i = 0; i < array.length; i++) {
    if (criteriaFunc(array[i])) {
      return array[i]
    }
  }
}