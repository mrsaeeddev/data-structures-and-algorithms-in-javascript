class Queue{
    constructor() {
        this.items = [];
    }

    enqueue(item) {
        this.items.push(item);
    }

    dequeue() {
        this.items.pop();
    }

    size() {
        return this.items.length;
    }

    isEmpty() {
        return this.items.length === 0
    }

    printQueue() {
        for (let i=0;i<this.items.length;i++) {
            console.log(this.items[i]);
        }
    }
}

let myQueue = new Queue();
myQueue.enqueue('Saeed');
myQueue.printQueue();
myQueue.dequeue();
console.log(myQueue.size());
console.log(myQueue.isEmpty());