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
  }
  // chunk([1, 2, 3,4 ,5,6,7,8 ,8], 2)
  ,

  compact: function compact(array) {
    let result = []
    for (let i = 0; i < array.length; i++) {
      if (array[i] == null) {
      } else
        if ((array[i] > 0 && typeof array[i] === 'number') ||
            typeof array[i] === 'object') {
            result.push(array[i])
         }
    }
    return result
  }
  // compact([false, NaN, 0,null,undefined ,5,7,'' ,{}])
  ,

  fill: function fill(ary, val, start = 0, end = ary.length) {
    for (let i = start; i < end; i++) {
      ary[i] = val
    }
    return ary
  }
  // fill([4, 6, 8, 10], '*', 1, 3)
  // fill([4, 6, 8, 10], '*')
  // fill(Array(3), '*')
  ,

  drop: function drop(ary, n = 0) {
    let  result = []
    for(let i = n; i < ary.length; i++) {
      result.push(ary[i])
    }
    return result
  }
  ,

  findIndex: function findIndex(array, predicate) {
    for(let i = 0; i < array.length; i++ ) {
      if (array[i] === predicate) {
        return i
      }
    }
    return -1
  }
  ,

  findLastIndex: function findLastIndex(array, predicate) {
    for(let i = array.length - 1; i >= 0; i-- ) {
      if (array[i] === predicate) {
        return i
      }
    }
    return -1
  }
  ,

  flatten: function flatten(array) {
    let result = []
    for(let i = 0; i < array.length; i++) {
      if(Array.isArray(array[i])) {
        let ary = array[i]
        for(let j = 0; j < ary.length; j++ ) {
          result.push(ary[i])
        }
      }
      result.push(array[i])
    }
    return result
  }
}


