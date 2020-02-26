const fs = require('fs')

const action = process.argv[2];
const value = process.argv[3];

switch (action) {
  case 'total':
    total()
    break
  case 'deposit':
    deposit()
    break
  case 'withdraw':
    withdraw()
    break
  case 'lotto':
    lotto()
    break
}

total() => {
  fs.readFile('bank.txt', 'utf8', (err, data) => {
    if (e) {
      console.log(err)
    }

    data = data.split(', ')
    let result = 0

    for (let i = 0; i < data.length; i++) {
      if (parseFloat(data[i])) {
        result += parseFloat(data[i])
      }
    }

    console.log('you have a total of' + result.toFixed(2))
  })

}

deposit() => {
  fs.readFile('bank.txt', ', -' + value, (e, data) => {
    if (e) {
      console.log(e)
    }
    console.log('withdrew' + value + '.')
  }

lotto() => {
    fs.appendFile("bank.txt", ", -.25", (e) => {
      if (e) {
        return console.log(e)
      }
    })
  const chance = math.floor((math.random() * 10) + 1)

  if(chance === 1){
    fs.appendFile("bank.txt", ", 2", function (err) {
      if (err) {
        return console.log(err)
      }
    })
    console.log('congrats you won the lottery!!!!')
  } else {
    console.log('sorry try again, thanks for the money!')
  }
}