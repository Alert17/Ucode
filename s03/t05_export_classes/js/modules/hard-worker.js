export class HardWorker {
    name = null;
    age = null;
    salary = null;


    set age(value) {
        return (value > 100 || value < 0) ? this.age : value
    }

    set salary(value) {
        return (value < 100 || value >= 10000) ? this.salary : value
    }

    toObject() {
        return this
    }
}

