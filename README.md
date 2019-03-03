# Lab 2 TMPS
## NodeJs
Adapter, Bridge, Facade, Flyweight, Proxy.

It is a laboratory work by number 2. In this work I use 5 patterns. 
The conception of the project: We have an androidBuilder where we implements 5 structural patterns. 
Decorator is like mechanic that repair our android )
Facade is feature, that hide our code from client) 
For saving resources I used Flyweight. Its helps us to save resources. 
### Work

We simply create androids by builder and change some of them by Decorator

```js
const androidJim = new AndroidBuilder('Jim').build();
let jim = new FastAndroid(androidJim);
```
Decorator
``` js
class FastAndroid {
    constructor(baseAndroid) {
        this.name = baseAndroid.name;
        this.sex = baseAndroid.sex;
        this.eyeColor = baseAndroid.eyeColor;
        this.skinColor = baseAndroid.skinColor;
        this.weight = baseAndroid.weight;
        this.speed = baseAndroid.speed + 40;   //this line is changed
    }
}

```
So if we want to get total weight of our androids we can use Composite.
It's realy helpful solution for us

```js
const packOfAndroids = new Composite('group_A', [androidEric, androidValery, androidJim]);
```
Composite

```js
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
```

Facade

Now I tell about Facade.
I use it to hide a huge code from client side.

Client see just it:
```js
AndroidServicesFacade.ChangeMethod(androidJim);
```
but how it's look like:
```js
const AndroidServices = (
    () => {
        return{
            changeSkinColor: (Android) => {
                Android.skinColor = 'violet';
                console.log(Android.name + ' skin color changing...');
            },
            save: (Android) => {
                console.log('New skin color saved');
            }
        }
    }
)();

const AndroidServicesFacade = (
    (Android) => {
        const Changed = (Android) => {
            AndroidServices.changeSkinColor(Android);
            if(Android.skinColor != 'white') {
                AndroidServices.save(Android);
            }
        }

        return {
            ChangeMethod: Changed
        }
    }
)();
```

Flyweight can help use to save some part of our RAM)
In my project I have Details fabric. It fabric produce many details for our android so in Datails class I use flyweight and it's give me 9 mb of free RAM.
Yeah it is very small size but in big project it can save more mb =/

```js
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
```

Now I want to create new android with some new parameters, but consumer dont know how to work with them.
It's my newAndroid class
```js
class NewAndroid {
    constructor(name, sex, eyeColor, skinColor, weight, speed) {
        this.name = name || 'Jack';
        this.sex = sex || 'male';
        this.eyeColor = eyeColor || 'green';
        this.skinColor = skinColor || 'white';
        this.weight = weight || 45
        this.speed = speed || 15
    }

    showCharacter(android) {
        return console.log(JSON.stringify(android));
    }

    setWeightBlock(blocks) {
        this.blocks = blocks;
        return this;
    }

    getWeight() {
        return this.weight + this.blocks;
    }

}

```
So I use Adapter:
```js
const AndroidAdapter = function(blocks) {
    let android = new NewAndroid();

    android.setWeightBlock(blocks);

    return {
        getWeight: function() {
            return android.getWeight();
        }
    } 

}
```

Now I can easy do this thing:
```js
let adapter = new AndroidAdapter(10);
let weight = adapter.getWeight();
```

# So, this is my realisation of 5 Structural patterns with Builder from Creational patterns.
