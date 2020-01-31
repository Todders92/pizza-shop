// back end logic
function Pizza(size, toppings, price) {
  this.size = size,
  this.toppings = toppings,
  this.price = price
}

var purchase = new Pizza (0, 0 ,10)

Pizza.prototype.sizeCheck = function (pizza) {
  this.size = pizza;
  if (this.size === 2) {
    this.price += 4
  } else if (this.size === 1) {
    this.price += 2
  }
}

// Pizza.prototype.toppingCheck = function(pizza) {
//   this.size = pizza;
//   if
// }
// front end logic