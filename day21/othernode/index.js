// const fs = require('fs')
// fs.writeFile('some.txt','hello world!', e => e ? console.log(e) : null)

// fs.appendFile('some.txt', 'goodbye world', e => e ? console.log(e) : null)

// fs.readFile('some.txt', 'utf8',(e, text) =>{
//   if (e){
//     console.log(e)

//   }
// console.log(text)
// })


// fs.writeFile('books.txt', '', e => e ? console.log(e) : null)

// fs.appendFile('books.txt', '', e => e ? console.log(e) : null))

// fs.readFile('books.txt', 'utf8',(e,text)=> {
//   if (e){
//     console.log(e)
//   }
//   console.log(text)
// })


// const chalk = require('chalk');

// console.log(chalk.blue('Hello world!'));

// const kuler = require('kuler');
// const str = kuler('foo', '#FF6600');

// console.log(kuler('red', '#F00'), 'normal');
const inquirer = require('inquirer')
const prompt = inquirer.createPromptModule()

prompt([
  {
    type: 'list',
    name: 'operator',
    message: 'What would you like to do?',
    choices: ['add', 'subtract', 'multiply', 'divide']
  },
  {
    type: 'number',
    name: 'a',
    message: 'What is the first number?'
  },
  {
    type: 'number',
    name: 'b',
    message: 'What is the second number?'
  }
])
  .then(({ operator, a, b }) => {
    switch (operator) {
      case 'add':
        console.log(a + b)
        break
      case 'subtract':
        console.log(a - b)
        break
      case 'multiply':
        console.log(a * b)
        break
      case 'divide':
        console.log(a / b)
        break
    }
  })