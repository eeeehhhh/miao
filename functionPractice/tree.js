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
