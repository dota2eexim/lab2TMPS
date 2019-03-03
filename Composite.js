class Composite {
    constructor(name, composite = []) {
        this.name = name;
        this.composite = composite;
    }

    showCharacter(android) {
        return console.log(JSON.stringify(android));
    }

    getWeight() {
        return this.composite.reduce((result, nextItem) => result + nextItem.getWeight(), 0);
    }
}

module.exports = Composite;