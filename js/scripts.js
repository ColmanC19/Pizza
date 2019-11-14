// User Logic---------
function Pizza(pizzaSize, topping1, topping2) {
  this.pizzaSize = pizzaSize;
  this.topping1 = topping1;
  this.topping2 = topping2;
  this.pieCost = 12;
}
let toppings = ["Chicken", "Bacon", "Olives", "Artichoke hearts", "Onions", "Veggie blend"];
Pizza.prototype.orderPrice = function() {
  if (this.pizzaSize.includes("XL")) {
    this.pieCost += 6;
  }
  if (toppings.includes(this.topping1)) {
    this.pieCost += 2;
  }
  if (toppings.includes(this.topping2)) {
    this.pieCost += 1;
  }
};

// business logic
$(document).ready(function() {
    $("form#pizzaOrder").submit(function(event) {
        event.preventDefault();
        var pizzaSize = $("#pizzaSize").val();
        var topping1 = $("#topping1").val();
        var topping2 = $("#topping2").val();
        var pieOrder = new Pizza(pizzaSize, topping1, topping2)
        pieOrder.orderPrice();
        $("#result").text("Thank you for your order. Your " + pieOrder.pizzaSize + " pie with " + pieOrder.topping1 + " and " + pieOrder.topping2 + " is: $" + pieOrder.pieCost + ".00");

    })
  });
