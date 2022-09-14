


function indexOf(array, target) {


  for (let i = 0;i < array.length ; i++) {
    let num = array[i]
    if (num === target) {
      return i
    }
  }
  return -1
}
indexOf([1, 1, 1, 3 ,5], 5)


function lastIndexOf(array, target) {
  // let j = array.length - 1

  for (let j = array.length - 1; j >= 0; j--) {
    if (array[j] === target) {
      return j
    }
  }
  return -1
}
indexOf([0, 1, 3, 1, 5], 1)

function slice(array, start, end) {
  let nArray = []
  if (end === undefined) {
    for (i = start; i < array.length; i++) {
      nArray.push(array[i])

    }
  }

  for (i = start; i < end; i++) {
    nArray.push(array[i])
  }
  return nArray
}
slice([0, 1, 3, 1, 5], 1,4)

function sliceStr(str, start, end) {
  let nStr = ''
  for (i = start; i < end; i++ ) {
     nStr += str[i]
  }
  return nStr
}
sliceStr('fhwaiufhwoeu', 3, 8)

function concat(array,) {
  let result = []
  for (let i = 0; i < array.length; i++) {
    let item = array[i]
    if (Array.isArray(item)) {
      for (let j = 0; j < item.length; j++) {
        result.push(item[j])
      }
    } else {
      result.push(array[item])
    }
  }
  return result
}
concat([1, 2 , 3 ,[6,7,8],[8, 9, 10]] )

a.splice(start, c ,replacement)
// 从a的start开始删掉c个元素，并替换为replacement,同时返回被删掉的元素组成的数组


function at (array, idx) {
  if (idx < -array.length) {
    return undefined
  } else if (idx >= -array.length && idx < 0) {
    let nIdx = idx + array.length
    for (let j = 0;j < array.length;j++ ) {
      let number = array[j]
      if (j === nIdx) {
        return number
      }
    }
  }

  for (let i = 0;i < array.length; i++) {
    let num = array[i]
    if(i === idx) {
      return num
    }
  }
}

function at (array, idx) {
  if (idx >= 0) {
    return array[idx]
  } else {
    return array[array.length + idx]
  }
}
at([1,12,4,6,6, 7, 8],-2)

function copyWithin(array, target , start, end) {

}

function fill(array,value, start, end) {
  for (let i = start; i < end; i++ ) {
    array[i] = value
  }
  return array
}


// 循环一次
function flat(array) {
  let result = []

  for (let i = 0; i < array.length; i++) {
    let item = array[i]
    if (Array.isArray(item)) {
      for (let j = 0; j < item.length;j++) {
        result.push(item[j])
      }
    } else {
      result.push(item)
    }
  }
  return result
}

// 不用担心depth传入无穷大
// 无穷大不会减少，但数组深度会减少到内部没有数组
// 就不会进if循环进行递归
function flat(array, depth = 1) {
  if (depth === 0) {
    return array.slice()
  }

  let result = []

  for (let i = 0; i < array.length; i++) {
    let item = array[i]
    if (Array.isArray(item)) {
      let falttedItem = falt(item ,depth - 1) // 深度减一
      for (let j = 0; j < falttedItem.length;j++) {
        result.push(item[j])
      }
    } else {
      result.push(item)
    }
  }
  return result
}


// 非递归版本，多次循环减少数组深度
function flat(array, depth) {
  for (let k = 0; k < depth; k++) {
    let result = []
    let hasArrayInArray = false // 标记array内是否还有数组，进入if变为真
    for (let i = 0; i < array.length; i++) {
      let item = array[i]
      if (Array.isArray(item)) {
        hasArrayInArray = true
        for (let j = 0; j < item.length;j++) {
          result.push(item[j])
        }
      } else {
        result.push(item)
      }
    }
    if (hasArrayInArray === false) { //为假，array内部无数组，结束循环
      break
    }
    array = result // 把result重新赋值给array进入循环
  }

  return result
}
flat([1,2,23,[2,9,[0],3],8,9])


// 判断是否为对象
function isPlainObject(it) {
  return !Array.isArray(it) && typeof it === 'object' && it !== null
}

function includes(array, value) {
  if (value !== value) {
    for (let i = 0; i < array.length; i++) {
      if (array[i] !== array[i]) {
        return true
      }
    }
    return false
  } else {
    for (let i = 0; i < array.length; i++) {
      if (value === array[i]) {
        return true
      }
    }
    return false
  }
}
includes([1,12,4,6,6, 7, 8])

function reverse(array) {
  let result = []
  let num = array.length - 1
  for (let i = num; i >= 0; i--) {
    result.push(array[i])
  }
  return result.slice()
}

// 就地转换
function reverse(array) {
  let stop = Math.floor(array.length / 2)
  for (let i = 0;i < stop; i++) {
    let j = array.length - i - 1
    let t = array[j] // 保留j的值
    array[j] = array[i] // j已经被i重新赋值
    array[i] = t
  }
  return array
}
reverse([1,12,4,6,6, 7, 8])

// 如果a大于b，返回正值
// 如果a小于b，返回负值
// 如果a等于吧，返回0
a.sort(     function(a,b) { return b - a}  )

function bubbleSort(ary) {

}


function isSorted(ary) {
  for (let i = 0;i < ary.length ; i++) {

  }
}

function mergeSort(ary) {
  // 拆分
  let mid = Math.floor(ary.length / 2)
  let left = ary.slice(0, mid)
  let right = ary.slice(mid)
  // 排序
  mergeSort(left)
  mergeSort(right)
  // 合并
}

// 将i与j的值互换
function swap(ary, i, j) {
  let t = ary[i]
  ary[i] = ary[j]
  ary[j] = t
}


// 对数组ary从start到end范围进行就地快排
function qSort(ary, start = 0, end = ary.length - 1) {
  if (start > end) {
    return ary
  }
  // 哨兵元素下标
  let pivotIndex = Math.floor(Math.random() * (end - start + 1) ) + start
  // 哨兵元素的值
  let pivot = ary.at(pivotIndex)

  // 将哨兵元素放到数组末尾
  swap(ary, pivotIndex, end)

  // i会停在大于哨兵值的下标处，等到j遍历到小于哨兵值时，i与j对调，i++
  let i = start
  for (let j = start;j < end; j++) {
    if(ary[j] < pivot) {
      swap(ary, i ,j)
      i++
    }
  }
  // 将哨兵返回,i位置现在是第一个大于或等于哨兵值的位置
  swap(ary, i, end)

  qSort(ary, start, i - 1)
  qSort(ary, i + 1, end)

  return ary
}
qSort([10,2,3,5,3])
