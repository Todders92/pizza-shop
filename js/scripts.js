// Back End logic
function Pizza() {
  this.size = 0,
  this.toppings = [],
  this.price = 0
}


Pizza.prototype.setSize = function (pizzaSize) {
  this.size = pizzaSize;
};

Pizza.prototype.addTopping = function (topping) {
  this.toppings.push(topping)
}

Pizza.prototype.addPrice = function (price) {
  this.price += price
}

$(document).ready(function () {
  $("form").submit(function (event) {
    event.preventDefault();

    var pizza = new Pizza(0, [], 0)
    var toppingModifier = 1;
    var basePrice = 11.25;

    pizza.setSize($("#size").val());
    
    $("input:checkbox[name=toppings]:checked").each(function () {
      var topping = parseInt($(this).val());
      pizza.addTopping(topping);
    });

    console.log(pizza)
    if (pizza.size === "Medium") {
      toppingModifier = 1.5;
      basePrice = 13.25;
    } else if (pizza.size === "Large") {
      toppingModifier = 2;
      basePrice = 15.25;
    }

    pizza.addPrice(basePrice + pizza.toppings.length * toppingModifier)

    $("#cost").text(pizza.price);
    $("#form-card").hide();
    $("#output").fadeIn();
  });
});