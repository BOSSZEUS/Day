const prompt = require('inquirer').createPromptModule()
// contest get name

async function contestantName(){
  try{
    const {name} = await prompt({
      type: 'input',
      name: 'name',
      message:'enter your name'
    })
    console.log(name)
  }
  catch (e) {
    console.error(e)
  }
  
}
const contest = contestantName()
console.log(contest)


//how many players

Async function players(){
  try{
    const {name} = await prompt({
      type: 'input',
      name: 'name',
      message: 'how many players'
    })
  }
  prompt.get(name, function (err, result) {
    if (result === 4) {

  }
    
  }


//player names


//questions


//if match count up

//display result of how many matches between players

//declare winner

