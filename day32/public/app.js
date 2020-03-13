console.log('ping')
let counter = 0

document.getElementById('mybtn').addEventListener('click',
  function () {
    document.getElementById('myh1').textContent = counter
    counter++

  })


document.getElementById('mybtn2').addEventListener('click',
  function () {
    document.getElementById('myh1').textContent = counter
    counter--

  })
document.getElementById('reset').addEventListener('click',
  function () {

    counter = 0
    document.getElementById('myh1').textContent = counter
  }) 

  //list activity 

