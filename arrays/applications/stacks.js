class Stack {
    constructor() {
        this.items = [];
    }

    push(item) {
        this.items.push(item);
    }

    pop() {
        this.items.pop();
    }

    isEmpty() {
        return this.items.length === 0;
    }

    size() {
        return this.items.length;
    }

    printStack() {
        for (let i=0;i<this.items.length;i++) {
            console.log(this.items[i]);
        }
    }
}

let myStack = new Stack();
myStack.push('Banana');
