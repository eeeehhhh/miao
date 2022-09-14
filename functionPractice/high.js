function parse(str) {

}


// 对象转JSON格式
function stringify(obj) { // {a: 1, b: 2}     "  {"a": 1, "b": 2} "
  if (obj && typeof obj == 'object') {
    if (Array.isArray(obj)) {
      let result = '{'
      for (let i = 0; i < obj.length; i++) {
        result += stringify(obj[i])
        if ( i < obj.length) {
          result += ','
        }
      }
      result += '}'
      return result
    } else {
      let result = '{'

      for (let key in obj) {
        let val = obj[key]
        result += '"' + key + '":' + stringify(val) + ','
      }

      result += '}'
      result = result.slice(0, -1) // 消除最后一个逗号
      return result
    }
  } else {
    if (typeof obj == 'string') {
      return '"' + obj + '"'
    } else {
      return String(obj)

    }
  }

}

function forEach(ary, action) {
  for (let i = 0; i < ary.length; i++) {
    let current = ary[i]
    action(current)
  }
}

// 遍历
forEach([1, 3, 4, 5, 6, 8], function(item) { console.log(item)})


// 过滤
function filter(array, test) {
    let result = []
    for (let i = 0; i < array.length; i++) {
      let item = array[i]
      if (test(item, idx, array)) {
        result.push(item)
      }
    }
    return result
}


filter([1, 3, 4, 5, 6, 8],function(item, idx) {
  return item > 3
} )


// map 转换
function map(array, transfrom) {
  let result = []
  for (let i = 0; i < array.length; i++) {
    let item = array[i]
    result.push(transfrom(item, i, array))
  }
  return result
}

ancestry
   .filter(function(p) {return p.died - p.born > 90})

// 当一个箭头函数的函数体有且仅有一句 return 表达式 语句时，return和函数体的花括号都可以去掉
// 当一个箭头函数有且仅有一个参数时，参数列表的小括号也可以去掉

ancestry
   .filter(p => p.died - p.born > 90)



let ary = []
let result =  0
let max = 0

for (let i = 0; i < ary.length; i++) {
  if(ary[i] > max) {
    max = ary[i]
  }
}
return max


// 累加运算
function reduce(ary, reducer, initialValue) {
  let result = initialValue
  let start = 0

  if(initialValue === undefined) {
    result = ary[0]
    start =  1
  }

  for (let i = start; i < ary.length; i++) {
    result = reducer(result, ary[i], i, ary)
  }
  return result
}

 reduce([1, 3, 4, 5, 6, 8], (result , it) => {
  return result + it
 }, 0)

 reduce([1, 3, 4, 5, 6, 8], (result , it, idx) => {
  return (result[it] = idx, result)
 }, {}) 

function every(ary, predicate) {
  for(let i = 0; i < ary.length; i++) {
    if(predicate(ary[i]) === false) {
      return false
    }
  }
  return true
}


function some(ary, predicate) {
  for(let i = 0; i < ary.length; i++) {
    if(predicate(ary[i]) === true) {
      return true
    }
  }
  return false
}


function find(ary, predicate) {
  for(let i = 0; i < ary.length; i++) {
    if(predicat(ary[i]) ) {
      return ary[i]
    }
  }
  return false
}

function predicate()
