const {AndroidBuilder, FastAndroid} = require('./AndroidBuilder');
const {AndroidServicesFacade} = require('./Android');
const Composite = require('./Composite');
const {DetailsMethod} = require('./Details');

const initMem = process.memoryUsage().heapUsed;

const androidJim = new AndroidBuilder('Jim').build();
androidJim.showCharacter(androidJim);

//Decorator
console.log('----------------------------------------------');
console.log('Decorator');
let jim = new FastAndroid(androidJim);
androidJim.showCharacter(jim);

//Composite
console.log('----------------------------------------------');
console.log('Composite');
const androidEric = new AndroidBuilder('Eric').setWeight(55).build();
const androidValery = new AndroidBuilder('Valery').build();

const packOfAndroids = new Composite('group_A', [androidEric, androidValery, androidJim]);
console.log(packOfAndroids.getWeight());

//Facade
console.log('----------------------------------------------');
console.log('Facade');

AndroidServicesFacade.ChangeMethod(androidJim);
androidJim.showCharacter(androidJim);

//Flyweight
console.log('----------------------------------------------');
console.log('Flyweight');
const androids = ['Jim', 'Bim', 'Olaf', 'John'];
const done = [true, false];
const numDetails = 1000000;
const details = new DetailsMethod;

for(let i= 0; i < numDetails; i++) {
    details.add({
        title: i + 'Detail',
        android: androids[Math.floor((Math.random() * 4))],
        done: done[Math.floor((Math.random() * 2))]
    });
}

const finalMem = process.memoryUsage().heapUsed;

const usedMem = ((finalMem - initMem) / 1000000).toFixed(2);

console.log('Used memory: ' + usedMem + ' MB');



