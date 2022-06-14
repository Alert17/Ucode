module.exports.checkDivision = (low = 1, up = 60) => {
  
  let res;
  for (let i = low; i <= up; i++) {
    res += 'The number ' + i + ' '

    if (!(i % 2)) {
      res += 'is divisible by 2'
    }

    if (!(i % 3)) {
      if (res.length > 20)
        res += ', '
      res += 'is divisible by 3'
    }
    
    if (!(i % 10)) {
      if (res.length > 20)
        res += ', '
      res += 'is divisible by 10'
    }

    let check = 'The number ' + i + ' ' 
    if (res === check)
      res += '-'
    

    console.log(res);
    res =""
  }
}