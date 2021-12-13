class Queue {
  constructor(capacity) {
    this.queue = new Array(capacity + 1);
    this.head = 0;
    this.tail = 0;
  }
  
  offer(ele) {
    if (this.isFull()) throw Error("Queue is full");

    this.queue[this.tail] = ele;
    this.tail = (this.tail + 1) % this.queue.length;
  }

  poll() {
    if (this.isEmpty()) throw Error("Queue is empty.");

    let e = this.queue[this.head];
    this.head = (this.head + 1) % this.queue.length;

    return e;
  }

  peek() {
    if (this.isEmpty()) throw Error("Queue is empty.");

    return this.queue[this.head];
  }

  isFull() {
    return (this.tail + 1) % this.queue.length === this.head;
  }

  isEmpty() {
    return this.head === this.tail;
  }
}
