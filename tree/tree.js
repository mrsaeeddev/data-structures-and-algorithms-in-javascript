class Tree {
    constructor(value) {
        this.value = value
        this.descendants = []
    }

    push(...nodes) {
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
pesh.push(namakMandi, saddar)
