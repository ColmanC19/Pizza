// User Logic---------
function Pizza(size, toppings) {
  this.size = size;
  this.toppings = toppings;
}

Pizza.prototype.order = function() {
  var pieCost = 12;
  if (this.size === 1) {
    pieCost += 3;
  } else if (this.size === 2) {
    pieCost += 6;
  };
  if (this.toppings.includes("chicken")) {
    pieCost += 2;
  } else if (this.toppings.includes("bacon")) {
    pieCost += 2;
  } else if (this.toppings.inludes("Olives", "Artichoke hearts")) {
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
        var toppings = $(".check-box").join();
        var pieOrder = new Pizza(size, toppings)
        pieOrder.order();
        $("p#results").text("Thank you for your order. You're " + pieOrder.size + "with " + pieOrder.toppings + "Your total is: " + pieOrder.pieCost)
    })
  });
