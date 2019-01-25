var breakOut = (array, changeValue, stopValue) => {
  for(let i=0; i<array.length; i++) {
    if (array[i] === stopValue){
      break
    }
    array[i] !== changeValue
  }
      return array[changeValue]
      if (array[changeValue]){
        break;
      }
    }
  }
}


function breakOut(array, changeValue, stopValue) {
  for (let i = 0, l = array.length; i < l; i++) {
    if (array[i] === stopValue) {
      break
    }

    array[i] = changeValue
  }

  return array
}
