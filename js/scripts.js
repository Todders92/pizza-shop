// back end logic
function Pizza(size, toppings, price) {
  this.size = size,
  this.toppings = toppings,
  this.price = price
}

var purchase = new Pizza (0, 0, 10)

Pizza.prototype.sizeCheck = function(pizza) {
  this.size = pizza;
  if (this.size === 2) {
    this.price += 4
  } else if (this.size === 1) {
    this.price += 2
  }
}
Pizza.prototype.display = function() {
  return this.price + ".00"
}

Pizza.prototype.addToppings = function() {
  pizzaToppings += this.toppings 
  return this.toppings
}
var displaying = function() {
  $("#cost").text(purchase.display());
};
var totalToppings = 0
$(document).ready(function() { 
  $("form").submit(function(event) {
    event.preventDefault();
    var pizzaSize = parseInt($("#size").val());
    var pizzaToppings = [];
    
    $("input:checkbox[name=toppings]:checked").each(function() {
      var toppings = parseFloat($(this).val());
      pizzaToppings.push(toppings);
      
    });
    pizzaToppings.push(purchase.toppings);
    $("#output").show();
    purchase.sizeCheck(pizzaSize);
    displaying();
    for (var i= 0; i < pizzaToppings.length; i ++) {
      totalToppings += pizzaToppings[i]
      console.log(totalToppings);
    }
    
  })
});