class HashMap {
    constructor() {
        this.buckets = [];
    }

    hash(key) {
        let finalHash = 0;
        for(let i=0;i<key.length;i++) {
            const charCode = key.charCodeAt(i)
            finalHash += charCode;
        }
        return finalHash
    }

    set(key, value) {
        let hashedKey = this.hash(key)

        if (!this.buckets[hashedKey]) {
            this.buckets[hashedKey] = []
        }

        this.buckets[hashedKey].push([key, value])
        return hashedKey
    }

    get(key) {
        let hashedKey = this.hash(key)

        if (!this.buckets[hashedKey]) {
            return null
        }

        for (let bucket of this.buckets[hashedKey]) {
            if (bucket[0] === key) {
                return bucket[1]
            }
        }
    }

    del(key) {
        let hashedKey = this.hash(key)
        this.buckets.splice(hashedKey,1)
    }

    printBuckets() {
        for (let i=0;i<this.buckets.length;i++) {
            if (this.buckets[i]!==undefined) {
                console.log(this.buckets[i][0][0], this.buckets[i][0][1])
            }
        }
    }

}

const myHashMap = new HashMap();
myHashMap.set("bk201", "FDSS");
myHashMap.set("bk301", "FDSS");
myHashMap.set("bk401", "FBSS");
myHashMap.get("bk201");
myHashMap.del("bk201")
myHashMap.printBuckets();