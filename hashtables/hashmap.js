class HashMap {
    constructor() {
        this.members = []
    }

    put(key, value) {
        if (this.members.length === 0) {
            this.members.push([key, value]);
        }
        else {
            for (let i=0;i<this.members.length;i++) {
                if (this.members[i][0] === key && this.members[i][1] !== value) {
                    this.members[i][1] = value;
                }
                else if (this.members[i][0] !== key && this.members[i][1] !== value) {
                    this.members.push([key, value]);
                }
            }
        }
     
    }

    get(key) {
        for (let i=0;i<this.members.length;i++) {
            if (this.members[i][0]===key) {
                return this.members[i][1]
            }
            else {
                return -1
            }
        }
    }

    
    remove(key) {
        this.members = this.members.filter((member) => member[0]!==key)
    }

    printMembers() {    
        for (let i=0;i<this.members.length;i++) {
            console.log(this.members[i][0], this.members[i][1]);
        }
    }
}


/* using the hashmap */

const myHashMap = new HashMap()
myHashMap.put(1,2)
myHashMap.put(1,10)
myHashMap.put(2,3)
myHashMap.remove(1)
myHashMap.printMembers()