module.exports = (array, critic) => { 
    const result = {}
    array.map(element => {
      const value = element[critic]
      console.log(value)
    if(!result.hasOwnProperty(value)) {
      result[value] = 1
    } else {
      result[value] = result[value] + 1
    }
  })
    return result
  }  