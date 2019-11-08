// User Logic---------
function Pizza(size, toppings) {
  this.size = size;
  this.toppings = toppings;
}

Pizza.prototype.order = function {
  var pieCost = 12;
  if (this.toppings.includes("chicken")) {
    pieCost += 2;
  };
  if (this.toppings.includes("bacon")) {
    pieCost += 2;
  };
  if (this.toppings.inludes("Olives", "Artichoke hearts")) {
    pieCost += 1;
  };
  if (this.size === 1) {
    pieCost += 3;

  }

}






















// business logic
$(document).ready(function() {
    $("form#pizzaOrder").submit(function(event) {
        event.preventDefault();

    })
  });
