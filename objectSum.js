module.exports = (array ,critic, value) => { 
  const result = {}
  array.map(member => {
    if(!result.hasOwnProperty(member[critic])) {
      result[member[critic]] = member[value]
    } else {
       result[member[critic]] = result[member[critic]] + member[value] 
    }
  })
  return result
}