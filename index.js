function stray(numbers) {
  let dic = {}
  for (let i = 0; i < numbers.length; i++ ) {
    if (!dic[numbers[i]]) {
      dic[numbers[i]] = 1
    } else {
      dic[numbers[i]] += 1
    }
    
  }
  for (const key in dic) {
    if (dic[key] === 1) {
      return Number(key)
    }
  }
  
}