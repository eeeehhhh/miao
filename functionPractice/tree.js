// 二叉树转数组
function treeToArray(root) {
  var array = []
  function valToAry (root, pos = 0) {
    if (root == null ) {
      return
    }

    array[pos] = root.val

    valToAry(root.left, pos * 2 + 1)
    valToAry(root.right, pos * 2 + 1)
  }

  valToAry(root)

  return array
}

// 将存储于array中的根节点在rootPos位置的二叉树转换为二叉链表形式
function arrayToTree(array,rootPos = 0) {
  if(array[rootPos] == null) {
    return null
  }

  var root = {
    val: array[rootPos],
    left: null,
    right: null,
  }

  var leftTree = arrayToTree (array, rootPos * 2 + 1)
  var rightTree = arrayToTree (array, rootPos * 2 + 2)

  root.left = leftTree
  if (leftTree) {
    leftTree.parent = root
  }

  root.right = rightTree
  if (rightTree) {
    rightTree.parent = rightTree
  }


  return root
}

function condensedArrayToTree(ary) {
  if (ary.length == 0) {
    return null
  }

  var root = {
    val: ary[0],
    left: null,
    right: null
  }

  var nodes = [root]

  for (let i = 0; i < ary.length; i++ ) {
    var currNode = nodes.shift() // 数组中的两个项将会挂到currNode上去

    if (ary[i] != null) {
      var node = {
        val: ary[i],
        left: null,
        right: null
      }

      currNode.left = node
      nodes.push(node)
    }

    i++

    if (ary[i] != null) {
      var node = {
        val: ary[i],
        left: null,
        right: null
      }

      currNode.left = node
      nodes.push(node)
    }
  }
  return root
}

function treeToCondensedArray(root) {
  var ary = []

  if(!root) {
    return ary
  }

  var nodes = [root]


  while (nodes.length) {
    var node = nodes.shift()

    if (node) { // 如果node不为null
      ary.push(node.val)
      nodes.push(node.left)
      nodes.push(node.right)
    } else {
      ary.push(node)
    }

  }

  return ary
}

