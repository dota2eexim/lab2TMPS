class Details {
    constructor(data) {
        this.flyWeight = FlyWeightFactory.get(data.android, data.done);
        this.title = data.title
    }
}

class FlyWeight {
    constructor(android, done) {
        this.android = android,
        this.done = done
    }
}

const FlyWeightFactory = (() => {
    const flyWeights = {};

    const get = (android, done) => {

        if(!flyWeights[android + done]) {
            flyWeights[android + done] = new FlyWeight(android, done);
        }

        return flyWeights[android + done];
    }

    const getCount = () => {
        let count = 0;
        for(f in flyWeights) count ++;
        return count;
    }

    return {
        get: get,
        getCount: getCount
    }
})();

 
const DetailsMethod = function() {

    const details = {};
    let count = 0;

    const add = (data) => {
        details[data.title] = new Details(data);
        count++;
    }

    const get = (title) => {
        return details[title];
    }

    const getCount = (count) => {
        return count
    }

    return {
        add: add,
        get: get, 
        getCount: getCount
    }
}


module.exports = {Details, DetailsMethod, FlyWeight, FlyWeightFactory};