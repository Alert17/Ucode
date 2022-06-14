module.exports = class StrFrequency {
  constructor(str) {
    this.str = str;
  }

      letterFrequencies() {
        if (!this.str) 
          return ''
        
        let result = {}
        let buf = this.str.toUpperCase().split('')

        buf = buf.filter(element => element.match(/[A-Z]/g))
      
        buf.forEach(element => {
          result[element] = (result[element] || 0) + 1
        })
      
        return result
    }


    wordFrequencies() {
      if (this.str === '') 
        return {'':1}
      
      let result = {};
      let buf = this.str.toUpperCase().split(/[^A-Z]+/g)
          
      buf = buf.filter(f => f !== '')
        
      buf.forEach(element => {
          result[element] = (result[element] || 0) + 1
      })

      return result
    }

    reverseString() {
      if (!this.str) 
        return ''
     
      let buf = this.str.split('')
      buf = buf.reverse().join('')
      return buf
    }

}


