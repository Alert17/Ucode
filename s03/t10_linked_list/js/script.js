class List {
    constructor(value) {
        this.data = value;
        this.next = null;
    }
}

class LinkedList {

    constructor() {
        this.head = null;
        this.len = 0;
    }

    add(value) {
        let list = new List(value);
        if (this.len === 0)
            this.head = list;
        else {
            let elem = this.head;

            while(elem.next)
                elem = elem.next;

            elem.next = new List(value);
        }
        this.len++;
    }

    remove(value) {
        if (this.head.data === value) {
            this.head = this.head.next;
            this.len--;
            return true;
        } else {
            for (let i = this.head; i.next; i = i.next) {
                if (i.next.data === value) {
                    i.next = i.next.next;
                    this.len--;
                    return true;
                }
            }
        }
        return false;
    }

    contains(value) {
        for (let i = this.head; i; i = i.next)
            if (i.data === value)
                return true;

        return false;
    }


    [Symbol.iterator] = function() {
        let curr = this.head;
        return {
            next() {
                if (curr) {
                    let value = curr.data;
                    curr = curr.next;
                    return {value: value, done: false};
                }
                return {done: true};
            }
        };
    };


    clear() {
        this.head = null;
    }

    count() {
        return this.len;
    }

    log() {
        let res = '';
        for (let i = this.head; i; i = i.next) {
            res += i.data;
            if (i.next)
                res += ', ';
        }
        console.log(res);
    }

}
