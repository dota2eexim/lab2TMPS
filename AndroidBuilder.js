const {Android, AndroidServices, AndroidServicesFacade} = require('./Android');

class AndroidBuilder {
    constructor(name, eyeColor = 'green', skinColor = 'white') {
        this.name = name;
        this.eyeColor = eyeColor;
        this.skinColor = skinColor;
    }

    setSex(sex) {
        this.sex = sex;
        return this;
    }

    setSpeed(speed) {
        this.speed = speed;
        return this;
    }

    setWeight(weight) {
        this.weight = weight;
        return this;
    }

    build() {
        return new Android(this);
    }
}

//Decorator

class FastAndroid {
    constructor(baseAndroid) {
        this.name = baseAndroid.name;
        this.sex = baseAndroid.sex;
        this.eyeColor = baseAndroid.eyeColor;
        this.skinColor = baseAndroid.skinColor;
        this.weight = baseAndroid.weight;
        this.speed = baseAndroid.speed + 40;
    }
}

module.exports = {AndroidBuilder, FastAndroid};