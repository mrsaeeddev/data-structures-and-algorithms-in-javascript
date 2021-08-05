class Tree {
    constructor(value) {
        this.value = value
        this.descendants = []
        this.level = 0;
    }

    push(...nodes) {
        this.level += 1;
        this.descendants.push(...nodes);
    }

}

const city = new Tree('City')
const karachi = new Tree('Karachi')
const lahore = new Tree('Lahore')
const pesh = new Tree('Peshawar')

city.push(karachi, lahore, pesh)

const namakMandi = new Tree('NamakMandi')
const saddar = new Tree('Saddar')

pesh.push(saddar, namakMandi)
console.log(city)
