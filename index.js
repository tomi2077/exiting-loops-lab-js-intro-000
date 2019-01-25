var breakOut = (array, changeValue, stopValue) => {
  for(let i=0; i<array.length; i++) {
    if (array[i] !== changeValue){
      return array[changeValue]
      if (array[changeValue]){
        break;
      }
    }
  }
}


function firstNotEqual(array, value) {
  for (let i = 0; i < array.length; i++) {
    debugger
    if (array[i] !== value) {
      return array[i]
    }
  }
}