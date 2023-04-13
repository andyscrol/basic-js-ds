const { NotImplementedError } = require('../extensions/index.js');

const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class BinarySearchTree {
  constructor() {
    // Initialize the root of the tree to null
    this._root = null;
  }

  root() {
    // Return the root of the tree
    return this._root;
  }

  add(data) {
    // Add a new node with the given data to the tree
    this._root = this._addNode(this._root, data);
  }

  _addNode(node, data) {
    // Helper function to recursively add a new node to the tree
    if (!node) return new Node(data);
    if (data > node.data) {
      node.right = this._addNode(node.right, data);
    } else {
      node.left = this._addNode(node.left, data);
    }
    return node;
  }

  has(data) {
    // Check if a node with the given data exists in the tree
    return this._hasNode(this._root, data);
  }

  _hasNode(node, data) {
    // Helper function to recursively check if a node with the given data exists in the tree
    if (!node) return false;
    if (node.data === data) return true;
    return data > node.data ? this._hasNode(node.right, data) : this._hasNode(node.left, data);
  }

  find(data) {
    // Find and return a node with the given data in the tree
    return this._findNode(this._root, data);
  }

  _findNode(node, data) {
    // Helper function to recursively find and return a node with the given data in the tree
    if (!node) return null;
    if (node.data === data) return node;
    return data > node.data ? this._findNode(node.right, data) : this._findNode(node.left, data);
  }

  remove(data) {
    // Remove a node with the given data from the tree
    this._root = this._removeNode(this._root, data);
  }

  _removeNode(node, data) {
    // Helper function to recursively remove a node with the given data from the tree
    if (!node) return null;
    if (data > node.data) {
      node.right = this._removeNode(node.right, data);
      return node;
    }
    if (data < node.data) {
      node.left = this._removeNode(node.left, data);
      return node;
    }

    // If we reach here, it means we have found the node to remove
    if (!node.left && !node.right) return null; // Node has no children
    if (!node.left) return node.right; // Node has only right child
    if (!node.right) return node.left; // Node has only left child

    // Node has both left and right children
    let minRight = node.right;
    while (minRight.left) minRight = minRight.left; // Find minimum value in right subtree
    node.data = minRight.data; // Replace current node's value with minimum value from right subtree
    node.right = this._removeNode(node.right, minRight.data); // Remove minimum value from right subtree
    return node;
  }

  min() {
    // Find and return the minimum value in the tree
    if (!this._root) return null;

    let current = this._root;

    while (current.left) current = current.left; // Keep going left until we reach a leaf

    return current.data;
  }

  max() {
     // Find and return the maximum value in the tree
     if (!this._root) return null;

     let current = this._root;

     while (current.right) current = current.right; // Keep going right until we reach a leaf

     return current.data;
   }
}

module.exports = {
  BinarySearchTree
};