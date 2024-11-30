const customerDrink = {
  name: "latte",
  sugars: 3,
  orderReady: false,
};

console.log(customerDrink.name);
console.log(customerDrink.sugars);

if (customerDrink.orderReady) {
  console.log("Ready for pick-up");
} else {
  console.log("Still in order queue");
}
