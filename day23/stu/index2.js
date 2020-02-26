function Product(name, category, quantity, price) {
  this.name = name
  this.category = category
  this.quantity = quantity
  this.price = price
}

function Food(name, category, quantity, price, calories, fat, carbs, protein) {
  Product.call(this, name, category, quantity, price)
  this.calories = calories
  this.fat = fat
  this.carbs = carbs
  this.protein = protein
}
function Videogame(name, price, category) {
  this.name = name
  this.price = price
  this.category = category
}
const pizza = new Product('frozen pepperoni pizza', 'food', 1000, 8.99)
const game = new Videogame('call of booty', '59.99', 'bloody')

console.log(pizza)
console.log(game)