// import Queue from '../queue/queue'

class Node {
  constructor(value) {
    this.value = value
    this.left = null
    this.right = null
  }
}

class BST {
  constructor() {
    this.root = null
    this.size = 0
  }
  getSize() {
    return this.size
  }
  isEmpty() {
    return this.size === 0
  }
  addNode(v) {
    this.root = this._addChild(this.root, v)
  }
  _addChild(node, v) {
    if (!node) {
      this.size++
      return new Node(v)
    }
    if (node.value > v) {
      node.left = this._addChild(node.left, v)
    } else if (node.value < v) {
      node.right = this._addChild(node.right, v)
    }
    return node
  }
  preTraversal() {
    this._pre(this.root)
  }
  _pre(node) {
    if (node) {
      console.log(node.value)
      this._pre(node.left)
      this._pre(node.right)
    }
  }
  midTraversal() {
    this._mid(this.root)
  }
  _mid(node) {
    if (node) {
      this._mid(node.left)
      console.log(node.value)
      this._mid(node.right)
    }
  }
  backTraversal() {
    this._back(this.root)
  }
  _back(node) {
    if (node) {
      this._back(node.left)
      this._back(node.right)
      console.log(node.value)
    }
  }
  breadthTraversal() {
    if (!this.root) return null
    let q = new Queue()
    q.enQueue(this.root)
    while (!q.isEmpty()) {
      let n = q.deQueue()
      console.log(n.value)
      if (n.left) q.enQueue(n.left)
      if (n.right) q.enQueue(n.right)
    }
  }
  remove(v) {
    if (!this.root) return
  }
  _remove(node, v) {
    if (node.value > v) {
    }
  }
  getMin() {
    return this._getMin(this.root).value
  }
  _getMin(node) {
    if (!node.left) return node
    return this._getMin(node.left)
  }
  getMax() {
    return this._getMax(this.root).value
  }
  _getMax(node) {
    if (!node.right) return node
    return this._getMin(node.right)
  }
  floor(v) {
    if (!this.root) return null
    let node = this._floor(this.root, v)
    return node ? node.value : null
  }
  _floor(node, v) {
    if (!node) return null
    if (node.value === v) return v
    if (node.value > v) {
      return this._floor(node.left, v)
    }
    let right = this._floor(node.right, v)
    if (right) return right
    return node
  }
  ceil(v) {
    if (!this.root) return null
    let node = this._ceil(this.root, v)
    return node ? node.value : null
  }
  _ceil(node, v) {
    if (!node) return null
    if (node.value === v) return v
    if (node.value < v) {
      return this._ceil(node.right, v)
    }
    let left = this._ceil(node.left, v)
    if (left) return left
    return node
  }
}

let t = new BST()
t.addNode(1)
t.addNode(11)
t.addNode(10)
console.log(t.ceil(9))
