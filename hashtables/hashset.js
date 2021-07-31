/* define hashset class */

class HashSet {
    constructor() {
        this.keys = []
    }

    contains(key) {
        if (this.keys.length === 0) {
            return false
        }

        for (let i=0;i<this.keys.length;i++) { 
            if (this.keys[i]===key) {
                return true
            }
            else {
                return false
            }
        }
    }

    add(key) {
        if (this.keys.indexOf(key)===-1) {
            this.keys.push(key);
        }
            return this.keys
    }

    remove(key) {
        if (this.keys.indexOf(key)!==-1) {
            this.keys.pop(key)
        }
        return this.keys
    }

    clear() {
        this.keys = [];
    }

    printKeys() {
     for(let i=0;i<this.keys.length;i++) {
         console.log(this.keys[i])
     }
    }

}

/* using the hashset */

const myHashSet = new HashSet()

myHashSet.add("karachi")
myHashSet.add("karachi")
myHashSet.remove("karachi")
myHashSet.add(2)
console.log(myHashSet.contains("karachi"))
myHashSet.clear()
myHashSet.printKeys()