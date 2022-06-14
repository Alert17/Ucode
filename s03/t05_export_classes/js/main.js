import {HardWorker} from './modules/hard-worker.js';

let dude = new HardWorker;
dude.name = 'Andry'
dude.age = 25
dude.salary = 3000

console.log(dude.toObject())
