var eeeehhhh = {
  chunk: function chunk(array, number) {
    let result = []
    let newArray = []
    let size =  number
    let num = 0

    for (let i = 0; i < array.length; i++) {
      num += 1
      newArray.push(array[i])
      if (num === size) {
        result.push(newArray)
        newArray = []
        num = 0
      }
    }

    if (newArray.length !== 0) {
      result.push(newArray)
    }

    return result
  },
  // chunk([1, 2, 3,4 ,5,6,7,8 ,8], 2)
  

}
