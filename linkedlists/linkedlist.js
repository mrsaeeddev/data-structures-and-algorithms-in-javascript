class Node {
    constructor(data, next = null) {
        this.data = data;
        this.next = next;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
        this.size = 0;
    }

    add(data) {
        const newNode = new Node(data);
        if (!this.head) {
            this.head = newNode;
        }
        else {
            let current = this.head;
            while (current.next) {
                current = current.next;
            }
            current.next = newNode;
        }
        this.size++;
    }

    insert(data,index) {
        if (index < 0 || index > this.size) {
            return;
        }
        if (index == 0) {
            this.head = new Node(data, this.head)
        }
        else {
            let current, prev;
            current = this.head;
            let i=0;
            while(i<index) {
                prev = current;
                current = current.next;
                i++;
            }
        }
        this.size++;
    }

    remove(index) {
        if (index < 0 || index > this.size) {
            return;
        } 
        let current, prev;
        current = this.head;
        let i=0;   
        if (index == 0) {
            this.head = current.next;
        }
        else {
            while (i<index) {
                prev = current;
                i++;
                current = current.next;
            }
            prev.next = current.next;
        }
        this.size--;
    }

    clearList() {
        this.head = null;
        this.size = 0;
    }

    printList() {
        let current = this.head;
        while(current) {
            console.log(current.data,'current');
            current = current.next;
        }
    }
}

let myLinkedList = new LinkedList()
myLinkedList.add('Mango');
myLinkedList.add('Apple')
myLinkedList.insert('Peach',0);
myLinkedList.remove(1);
myLinkedList.printList()
console.log(myLinkedList)