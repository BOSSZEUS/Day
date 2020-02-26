// const isEven = x =>{
//   return x % 2 ===0

// }
// console.log(isEven(12))
// console.log(isEven(13))


// const [, , operator, x, y] = process.argv

// let result = 0
// const a = parseInt(x)
// const b = parseInt(y)

// switch (operator) {
//   case 'add':
//     result = a + b
//   break
//   case 'subtract':
//     result = a - b
//   break
//   case 'multiply':
//     result = a * b
//   break
//   case 'divide' :
//     result = a / b
//   break
//   case 'exponent' :
//     result = a ** b
//   break
//   case 'remain' :
//     result = a % b
//   break
// }
// console.log(result)

// node index.js add 5 7
// node index.js subtract 12 3
// node index.js multiply 9 8
// node index.js divide 12 6
// connecting files together
// const songs = require('./songs.js')
// const books = require('./books.js')
// const movies = require('./movies.js')
// const shows = require('./shows.js')

// console.log(songs)
// console.log(movies)
// console.log(books)
// console.log(shows)


// const myfunction = require('./file.js')
// myfunction()
const add = require('./add.js')
const subtract = require('./subtract.js')
const multiply = require('./multiply')
const divide = require('./divide.js')
const [, , operator, x, y] = process.argv

let result = 0
const a = parseInt(x)
const b = parseInt(y)

switch (operator) {
  case 'add':
    result = add(a,b)
  break
  case 'subtract':
    result = subtract(a,b)
  break
  case 'multiply':
    result = multiply(a,b)
  break
  case 'divide' :
    result = divide(a,b)
  break
  
}
console.log(`here are the results ${result}`)
