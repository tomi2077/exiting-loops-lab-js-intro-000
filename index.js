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
    if(array[i] !== skipvalue){
      continue;
    }
    array[i] = changeValue
  }
  return array
}
