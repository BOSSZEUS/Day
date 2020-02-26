// factory functions - a function that returns a object

const Product = (name, category, quantity, price) => ({
  name,
  category,
  quantity,
  price
})

const Food = (name, category, quantity, price, calories, fat, carbs, protein) => ({
  ...Product(name, category, quantity, price),
  calories,
  fat,
  carbs,
  protein
})

const videoGames = (name, category, quantity ,price,type) =>({
 ...Product(name,category, quantity, price,),
 type

})
const pizza = Food('Frozen Pepperoni Pizza', 'food', 1000, 8.99, 1000, 100, 10, 1, 'call of duty', 69)
console.log(pizza)
const game = videoGames('call of duty','shoot', 2,69.99,'bloody')
console.log(game)

// class product {
//   constructor (name, category, quantity, price){
//     this.name = name
//     this.category = category
//     this.quantity = quantity
//     this.price = price

//   }
// }

// class food extends product {
//   constructor(name, category, quantity, price, calories,fat, carbs, protien ){
//   super()
//   this.calories = calories
//   this.fat = fat 
//   this.carbs = carbs
//   this.protien = protien
//   }
// }

// const pizza = new food('frozen pepperoni pizza', 'food', 1000, 8.99, 500, '25grams', 30, '24 grams')

// console.log(pizza)



class product {
  constructor (name, category, quantity, price){
    this.name = name
    this.category = category
    this.quantity = quantity
    this.price = price

  }
}
class cleaningSuply extends product{
  constructor(name, category, quantity, price,type,){
    super(name, category, quantity, price)
    this.type = type
  }

}
const broom = new cleaningSuply('super broom','cleaning','5000',14.99,'hand-held')
console.log(broom)
