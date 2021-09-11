class Queue{
    constructor() {
        this.items = [];
    }

    enqueue(item) {
        this.items.push(item);
    }

    dequeue() {
        this.items.shift();
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
myQueue.enqueue('Banana');
myQueue.enqueue('Mango');
myQueue.enqueue('Kiwi');
myQueue.dequeue();
myQueue.printQueue();
console.log(myQueue.size());
console.log(myQueue.isEmpty());