let LLData = require('./LLData');

module.exports.LList = class LList {
  constructor() {
    this.head = null
    this.length = 0
  }
  
  getFirst() {
    return this.head
  }
  
  getLast() {
    let curr = this.head
    while (curr) {
      if (!curr.next)
        return curr
      
      curr = curr.next
      }
    return null;
  }
  
  add(value) {
    let node = new LLData(value)

    if (!this.length) 
      this.head = node
    else {
      let curr = this.head
      while (curr.next) 
        curr = curr.next
            
      curr.next = new LLData(value)
    }
    
    this.length++
  }
  
  addFromArray(arrayOfData) {
    arrayOfData.forEach(element => this.add(element))
  }
  
  remove(value) {
    let curr = this.head
    while (curr.next) {
      if (curr.next.data === value) {
        curr.next = curr.next.next
        this.length--
        return
      }
      curr = curr.next
    }
  }

  removeAll(value) {
    let curr = this.head
    while (curr) {
      if (curr.next.value === value) {
        curr.next = curr.next.next
        this.length--
      }
    } 
  }

  contains(value) {
    return [...this].includes(value)
  }

  clear() {
    this.head = null
    this.length = 0
  }

  count() {
    return this.length
  }

  toString() {
    return [...this].join(", ")
  }

  [Symbol.iterator] = function* () {
    for (let q = this.head; q; q = q.next) 
      yield q.value
  }
  
  filter(callback) {
    return [...this].filter(callback);
  }

}
