class LRUCache {
    constructor(capacity) {
        this.cache = new Map();
        this.capacity = capacity;
    }

    get(key) {
        if (!this.cache.has(key)) {
            return undefined
        }

        let val = this.cache.get(key)
        this.cache.delete(key)
        this.cache.set(key, val)

        return val;
    }

    put(key, val) {
        this.cache.delete(key)

        if (this.cache.size === this.capacity) {
            this.cache.delete(this.cache.keys().next().value)
            this.cache.set(key,val)
        }
        else {
            this.cache.set(key,val)
        }
    }

    getMostRecent() {
        return Array.from(this.cache)[this.cache.size-1]
    }

    getLeastRecent() {
        return Array.from(this.cache)[0]
    }
}

const myLRUCache = new LRUCache(3);
myLRUCache.put('learning', 'dsa')
myLRUCache.put('studying', 'nothing')
myLRUCache.put('eating', 'breakfast')
myLRUCache.get('learning')
myLRUCache.put('cleaning', 'shower')
console.log(myLRUCache.getMostRecent())
console.log(myLRUCache.getLeastRecent())