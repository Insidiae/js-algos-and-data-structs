//* A simple priority queue for Dijkstra's Algorithm
//? For a much better implementation of this priority queue,
//? check out the Binary Heaps section
class PriorityQueue {
  constructor() {
    this.values = [];
  }

  enqueue(value, priority) {
    this.values.push({ value, priority });
    this.sort();
  }

  dequeue() {
    return this.values.shift();
  }

  sort() {
    this.values.sort((a, b) => a.priority - b.priority);
  }
}
