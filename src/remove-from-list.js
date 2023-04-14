const { NotImplementedError } = require('../extensions/index.js');

const { ListNode } = require('../extensions/list-node.js');

/**
 * Given a singly linked list of integers l and an integer k,
 * remove all elements from list l that have a value equal to k.
 *
 * @param {List} l
 * @param {Number} k
 * @return {List}
 *
 * @example
 * For l = [3, 1, 2, 3, 4, 5] and k = 3,
 * the output should be [1, 2, 4, 5]
 *
 * Singly - linked lists are already defined using interface
 * class ListNode {
 *   constructor(x) {
 *     this.value = x;
 *     this.next = null;
 *   }
 * }
 */
function removeKFromList(l, k) {
  // If the list is empty, return null
  if (!l) {
    return null;
  }

  // If the current node's value is equal to k
  if (l.value === k) {
    // Recursively call the function on the next node
    return removeKFromList(l.next, k);
  } else {
    // Otherwise, set the next node to the result of recursively calling the function on the next node
    l.next = removeKFromList(l.next, k);
  }

  // Return the updated list
  return l;
}

module.exports = {
  removeKFromList
};
