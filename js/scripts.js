// Back End logic

function Pizza(size, toppings, price) {
  this.size = size,
  this.toppings = toppings,
  this.price = price
}
Pizza.prototype.pizzaSize = function(pizza) {
  this.size = pizza;
}
Pizza.prototype.startPrice = function() {
  this.price = 0;
}
Pizza.prototype.startToppings = function () {
  this.toppings = 0;
}
Pizza.prototype.addSize = function (pizzaSize) {
  this.size = pizzaSize;
};
Pizza.prototype.addToppings = function(pizza) {
  this.toppings.push(pizza);
};
Pizza.prototype.sizeCheck = function (pizza) {
  this.size = pizza;
  if (this.size === "Large") {
    this.price += 15.25
  } else if (this.size === "Medium") {
    this.price += 13.25
  } else if (this.size === "Small") {
    this.price += 11.25
  }
}
Pizza.prototype.display = function () {
  return this.price
}

Pizza.prototype.addToppings = function (pizza) {
  this.toppings = pizza;
  this.topings = totalToppings
}
Pizza.prototype.toppingsTotal = function (toppings) {
  if (this.size === "Large") {
    this.toppings = (toppings * 2)
  } else if (this.size === "Medium") {
    this.toppings = (purchase.toppings * 1.5)
  } else if (this.size === "small") {
    this.toppings = (purchase.toppings * 1)
  }
}
Pizza.prototype.grandTotal = function (purchase) {
  this.price += this.toppings
}
// Front End Logic below
var purchase = new Pizza()
purchase.startPrice();
purchase.startToppings();
var displaying = function () {
  $("#cost").text(purchase.display());
};
var totalToppings = 0
var pizzaToppings = [];
$(document).ready(function () {
  $("form").submit(function (event) {
    event.preventDefault();
    var pizzaSize = $("#size").val();


    $("input:checkbox[name=toppings]:checked").each(function () {
      var toppings = parseFloat($(this).val());
      pizzaToppings.push(toppings);

    });
    purchase.sizeCheck(pizzaSize);

    for (var i = 0; i < pizzaToppings.length; i++) {
      totalToppings += pizzaToppings[i]
    }
    
    purchase.pizzaSize(pizzaSize);
    purchase.addToppings(totalToppings);
    purchase.toppingsTotal(totalToppings);
    purchase.grandTotal();
    displaying();
    $("#form-card").hide();
    $("#output").fadeIn();
  });
});