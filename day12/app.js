
// let alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p','q', 'r', 's','t', 'u', 'v', 'w', 'x', 'y', 'z']
//      // write code to reverse the array
//      alphabet.reverse()
//      console.log(alphabet)

//api's intro
// http://www.omdbapi.com/?t=goodfellas&apikey=trilogy
// fetch('http://www.omdbapi.com/?t=goodfellas&apikey=trilogy')
// .then(r => r.json())
// .then(movie => {
//   console.log(movie)

// })
// .catch(function (e){console.log('404')})

// $.get('http://www.omdbapi.com/?t=goodfellas&apikey=trilogy')
// .then(r => r.json())
// .then(movie => {
//   console.log(movie)
//   })
// .catch(function (e){console.log('404')})


myfunction(function{
  fetch('http://www.omdbapi.com/?t=troy&apikey=trilogy')
    .then(r => r.json())
    .then(movie => {
      console.log(movie)

    })
    .catch(function (e) { console.log('404') })
    
})
$('<h1>')
