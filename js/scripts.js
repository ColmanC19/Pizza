// User Logic---------
function Pizza(size, topping1, topping2) {
  this.size = size;
  this.topping1 = topping1;
  this.topping2 = topping2;
}

Pizza.prototype.orderPrice = function() {
  var pieCost = 12;
  if (this.size === "18 inches") {
    pieCost += 3;
  }
   if (this.size === "24 inches") {
    pieCost += 6;
  }
  if (this.topping1.includes("Chicken", "Bacon")) {
    pieCost += 2;
  }
  if (this.topping2.includes("Olives", "Artichoke hearts", "Onions")) {
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
        $("#result").text("Thank you for your order. Your " + pieOrder.pizzaSize + "with " + pieOrder.topping1 + " and " + pieOrder.topping2 + "Your total is: " + pieOrder.pieCost);

    })
  });
