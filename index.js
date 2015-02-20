function add() {
  var total = [].reduce.call(arguments, function(a, b) {
    return a + b
  })
  return total              
}

Number.prototype.value = function() {
  return this.valueOf()
};

Number.prototype.add = function() {
  var newArgs = [].slice.call(arguments);
  newArgs.push(this.valueOf());
  return(add.apply(this, newArgs));
};