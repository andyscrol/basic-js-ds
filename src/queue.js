const { NotImplementedError } = require('../extensions/index.js');

const { ListNode } = require('../extensions/list-node.js');

/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 * queue.getUnderlyingList() // returns { value: 3, next: null }
 */
class Queue {
  constructor() {
    // Initialize the head and tail of the queue to null
    this.head = null;
    this.tail = null;
  }

  getUnderlyingList() {
    // Return the underlying linked list
    return this.head;
  }

  enqueue(value) {
    // Add a new value to the end of the queue
    const newNode = new ListNode(value);
    if (!this.head) {
      // If the queue is empty, set the head and tail to the new node
      this.head = newNode;
      this.tail = newNode;
    } else {
      // If the queue is not empty, add the new node to the end of the queue and update the tail
      this.tail.next = newNode;
      this.tail = newNode;
    }
  }

  dequeue() {
    // Remove and return the value from the head of the queue
    if (!this.head) return null; // If the queue is empty, return null
    const value = this.head.value; // Get the value from the head of the queue
    this.head = this.head.next; // Update the head to the next node
    if (!this.head) this.tail = null; // If the queue is now empty, set the tail to null
    return value;
  }
}

module.exports = {
  Queue
};
