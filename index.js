function add() {
  var total = [].reduce.call(arguments, function(a, b) {
    return a + b
  })
  return total              
}

Number.prototype.value = function() {
  return this.valueOf()
};