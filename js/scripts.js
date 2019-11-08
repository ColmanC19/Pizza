// User Logic---------
function Pizza(size, toppings) {
  this.size = size;
  this.toppings = toppings;
}

Pizza.prototype.orderPrice = function() {
  var pieCost = 12;
  if (this.size === "L") {
    pieCost += 3;
  }
   if (this.size === "XL") {
    pieCost += 6;
  }
  if (this.toppings.includes("Chicken", "Bacon")) {
    pieCost += 2;
  }

  if (this.toppings.inludes("Olives", "Artichoke hearts", "Onions")) {
    pieCost += 1;
  };

 // return pieCost;
 this.pieCost = pieCost;
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
        $("p#result").text("Thank you for your order. Your " + pieOrder.pizzaSize + "with " + pieOrder.topping1 + pieOrder.topping2 + "Your total is: " + pieOrder.pieCost)
    })
  });
