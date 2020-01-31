// Back End logic

function Pizza(size, toppings, price) {
  this.size = size,
  this.toppings = toppings,
  this.price = price
}

var purchase = new Pizza (0, 0, 11.25)

Pizza.prototype.sizeCheck = function(pizza) {
  this.size = pizza;
  if (this.size === "Large") {
    this.price += 4
  } else if (this.size === "Medium") {
    this.price += 2
  } else if (this.size === "Small") {
    this.price += 0
  }
}
Pizza.prototype.display = function() {
  return this.price
}

Pizza.prototype.addToppings = function(pizza) {
  this.toppings = pizza;
  this.topings = totalToppings
}
Pizza.prototype.toppingsTotal = function(toppings) {
  if (this.size === "Large") {
  this.toppings = (toppings * 2)
} else if (this.size === "Medium") {
  purchase.toppings = (purchase.toppings * 1.5)
} else if (this.size === "small") {
  purchase.toppings = (purchase.toppings * 1)
}
  console.log(this.toppings)
}
Pizza.prototype.grandTotal = function(purchase) {
  this.price += this.toppings
}
// Front End Logic below

var displaying = function() {
  $("#cost").text(purchase.display());
};
var totalToppings = 0
var pizzaToppings = [];
$(document).ready(function() { 
  $("form").submit(function(event) {
    event.preventDefault();
    var pizzaSize = $("#size").val();
    
    
    $("input:checkbox[name=toppings]:checked").each(function() {
      var toppings = parseFloat($(this).val());
      pizzaToppings.push(toppings);
      
    });
    purchase.sizeCheck(pizzaSize);
    
    for (var i= 0; i < pizzaToppings.length; i ++) {
      totalToppings += pizzaToppings[i]
      console.log(totalToppings);
    }
    purchase.addToppings(totalToppings);
    purchase.toppingsTotal(totalToppings);
    purchase.grandTotal();
    displaying();
    $("#output").show()
  });
});