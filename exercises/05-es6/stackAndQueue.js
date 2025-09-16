class Stack {
  constructor() {
    this.items = [];
    this.count = 0;
  }

  //add element to top
  push(element) {
    this.items.push(element);
    console.log(`${element} has been added to ${this.count}`);
    this.count++;
    return this.count - 1;
  }

  //remove element from top
  pop() {
    if (this.count == 0) return undefined;
    let deleteItem = this.items.pop();
    this.count--;
    console.log(`${deleteItem} removed`);
    return deleteItem;
  }
}

class Queue {
  constructor() {
    this.items = [];
    this.count = 0;
  }

  // add element to the queue
  enqueue(element) {
    this.items.push(element);
    this.count++;
  }

  // remove element from the queue
  dequeue() {
    let deleteItem = this.items.shift();
    this.count--;
    return deleteItem;
  }
}

let stack = new Stack();

stack.push(100);
stack.push(200);
stack.push(300);
console.log(stack);

stack.pop();
// stack.pop();
console.log(stack);

// let queue = new Queue();

// queue.enqueue("Leslie");
// queue.enqueue("Arnold");
// queue.enqueue("Vincent");
// queue.enqueue("Chu");
// console.log(queue);

// queue.dequeue();
// console.log(queue);
