// const guess = function(){
//   let number = prompt('enter a number')
//    if (number % 2 === 0) {
//      alert('is even')}
//      else {(number % 2 !=== 0)
//      alert('is odd')}

//   return guess 
// }
// const iseven =  x => !(x % 2)

// console.log(iseven(13))
// console.log(iseven(14)) // simple function

// {
//   email: 'jordanscheftic@yahoo.com' , 
//   name: 'john doe',
//   user: 'key value pairs',                // <==== an object
//   age: 50,
//   isSignedIn: true,
//   children: ['john', 'jim', 'jan']
//   dog:{
//     name: 'beef',
//     breed: 'boxer',

//   }
// }

// [1,2,3,4,5{object:'name'}]    <==== object inside of an array


// let person = {
//   email: 'johndoe@gmail.com',
//   name: 'john doe',
//   age:50,
// }

// console.log(person.name)  // <==== dot notation 

// activity for joan of arch , learning about objects and this

// var joanOfArcInfoParts = ["Real Name", "Grew Up Where", "Known For", "Scars", "Symbolism"];

// // Values for Joan's "properties".
// var joanOfArcInfoValues = [
//   "Jehanne la Pucelle.",
//   "Domremy, a village in northeastern France.",
//   "Peasant girl, daughter of a farmer, who rose to become Commander of the French army.",
//   "Took an arrow to the shoulder and a crossbow bolt to the thigh while trying to liberate Paris.",
//   "Stands for French unity and nationalism."
// ];

// let obj = {
//   Name: "Jehanne la Pucelle",
//   Born: "Domremy, a village in northeastern France.",
//   About: "Peasant girl, daughter of a farmer, who rose to become Commander of the French army.",
//   Accomplishments: "Took an arrow to the shoulder and a crossbow bolt to the thigh while trying to liberate Paris.",
//   Beliefs: "Stands for French unity and nationalism.",

//   battlecry() {
//     console.log(this.Name)
//     console.log(`AAAAAAAAAAAAAAAAA!!!!!!!!! my name is ${this.Name}`)

//   }
// }
// console.log(obj)
// obj.battlecry()

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
                                // dom maulipunation



// console.log(document)
// document.getElementById('mydiv').innerHTML = 'hello'<====how to connect tags with html and java

// document.getElementById('mydiv').innerHTML = `
//   <h1>About</h1>
//   <img class="myImg" 
//   src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fpmcvariety.files.wordpress.com%2F2019%2F03%2Fspongebob.jpg%3Fw%3D1000%26h%3D563%26crop%3D1&f=1&nofb=1">
//   <p>  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laudantium minima at, nobis inventore, quisquam harum cum expedita quo itaque odio distinctio cumque rem facere sequi. Excepturi aut recusandae consequuntur quaerat.Qui odio eos adipisci quae. Eos facere quibusdam praesentium excepturi accusamus laudantium quas blanditiis et veritatis ratione laborum quasi magni maiores sint voluptatibus impedit ducimus soluta explicabo quo, atque harum.</p>
// `


// let users = [
//   {
//     username: 'johndoe',
//     password: '1234'
//   },
//   {
//     username: 'janedoe',
//     password: '4321'
//   },
//   {
//     username: 'jackdoe',
//     password: '1423'
//   },
//   {
//     username: 'jerrydoe',
//     password: '2314'
//   }
// ]
  
// for (let i = 0; i < users.length; i++) {
//   console.log(users[i])
//   let userDiv = document.createElement('div')
//   userDiv.className ='card'
//   userDiv.innerHTML = `
//     <div class="card-body">
//       <h5> class="card-title">${users[i].username}<h5>
//       ${users[i].password}
//   `
//   document.getElementById('myDiv').append(userDiv)
// }


// const myfunction = function (value) {
//   value()
  
// }




// const otherfunction = function () {
//   console.log('hi')
// }
// myfunction(otherfunction)




let counter = 0

document.getElementById('mybtn').addEventListener('click', 
function () {
  document.getElementById('myh1').textContent = counter
  counter ++
 
}) 


document.getElementById('mybtn2').addEventListener('click', 
function () {
  document.getElementById('myh1').textContent = counter
  counter --
 
}) 
document.getElementById('reset').addEventListener('click', 
function () {
  
  counter = 0
  document.getElementById('myh1').textContent = counter
}) 

