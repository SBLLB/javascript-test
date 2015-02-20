function add() {
  var total = [].reduce.call(arguments, function(a, b) {
    return a + b
  })
  return total              
}