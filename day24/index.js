
// morning activity
// const character = (name,level,hp,mana,type,money)({
//   name,
//   level,
//   hp,
//   mana,
//   type,
//   money,
// })

// const mage =(name,level,hp,type,money,favSpell,staff,robes) => ({
//   ...character(name,level,hp,type,money),
//   favSpell,
//   staff,
//   robes
// })

// const characterMage = mage('merlin',138,99,'mage', '1bil','barrage','acient staff','arims robes' )
// console.log(characterMage)

// axios info ~~~~~~~~~~~~~~~~~~~~~~~~~~~ promise base function 

// const axios = require('axios')
// axios.get ('')
// .then(response => {

// })
// .catch(e => console.log(e))

//promis constructor with async and await function.~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

// async function adder = (a,b) {
//   let response = await new Promise((resolve,reject)=>{
//     if (typeof a === 'string' || typeof b === 'string'){

//       reject(new Error('no strings!!!'))
//     }else {
//       resolve (a + b)
//     }
//   })
//   return response
// }



// adder(5, 7)
//   .then(sum =>{
//     console.log(sum)
//   })
// .catch(e => console.log(e))


// async function sub = (a,b ){
//   let response = await new Promise((resolve,reject)=>{
//     if (typeof a === 'string' || typeof b === 'string'){
//       reject(new Error('no string'))
//     }else{
//       resolve (a - b)
//     }
//   })
//   return response 
// }

// sub(5,7)
//   .then(sum =>{
//     console.log(sum)
//   })
// .catch(e => console.log(e))

// async with an api ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~`
// const prompt = require('inquirer').createPromptModule()
// const axios = require('axios')

// async function getMovie() {
//   try {
//     const { title } = await prompt({
//       type: 'input',
//       name: 'title',
//       message: 'What movie are you looking for?'
//     })

//     const { data } = await axios.get(`http://omdbapi.com/?t=${title}&apikey=trilogy`)

//     console.log(data)
//   } catch (e) {
//     console.error(e)
//   }
// }

// getMovie()




