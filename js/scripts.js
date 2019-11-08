// User Logic---------
function Pizza(pizzaSize, topping1, topping2) {
  this.pizzaSize = pizzaSize;
  this.topping1 = topping1;
  this.topping2 = topping2;
}
  var pieCost = 12;
Pizza.prototype.orderPrice = function() {
  var pieCost = 12;
  if (this.pizzaSize === ("Large")) {
    pieCost += 3;
  }
   if (this.pizzaSize === ("XL")) {
    pieCost += 6;
  }
  if (this.topping1.includes("Chicken", "Bacon")) {
    pieCost += 2;
  }
  if (this.topping2.includes("Olives", "Artichoke hearts", "Onions")) {
    pieCost += 1;
  };


 this.pieCost = pieCost;
};


// business logic
$(document).ready(function() {
    $("form#pizzaOrder").submit(function(event) {
        event.preventDefault();
        var pizzaSize = $("#pizzaSize").text();
        var topping1 = $("#topping1").val();
        var topping2 = $("#topping2").val();
        var pieOrder = new Pizza(pizzaSize, topping1, topping2);
        pieOrder.orderPrice();
        console.log(pieCost)
        $("#result").text("Thank you for your order. Your " + pieOrder.pizzaSize + " with " + pieOrder.topping1 + " and " + pieOrder.topping2 + ". Your total is: " + pieOrder.pieCost);

    })
  });
