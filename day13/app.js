
// fetch('http://api.open-notify.org/astros.json')
// .then(r => r.json())
// .then(({people, number}) => {
//   document.getElementById('title').textContent=`there are ${number} people in space right now`

//   people.forEach( ({name, craft}) => { 
//     let personElem =document.createElement('li')
//     personElem.textContent = `${name} aboard the ${craft}`

//     document.getElementById('people').append(personElem)
//   });

// })
//   .catch((e)=>{
//     console.log('404')
//   })

//with jquery
// $.get('http://api.open-notify.org/astros.json')
//   .then(({ people, number }) => {
//     $('#title').text(`There are ${number} people in space right now`)

//     people.forEach(({ name, craft }) => {
//       let personElem = $(`<li>${name} aboard the ${craft}</li>`)
//       $('#people').append(personElem)
//     })

//   })
//   .catch(e => console.error(e))

// fetch('http://www.omdbapi.com/?t=Goodfellas&apikey=trilogy')
//   .then(r => r.json())
//   .then(({ Title, Year, Director, Poster, Plot }) => {
//     document.getElementById('movie').innerHTML = `
//           <img src="${Poster}" alt="${Title}">
//           <h1>${Title}</h1>
//           <h2>${Director}</h2>
//           <h3>${Year}</h3>
//           <p>${Plot}</p>
//         `
//   })
//   .catch(e => console.error(e))

// document.getElementById('searchMovie').addEventListener('click', function (event) {
//   event.preventDefault()
//   let movieTitle = document.getElementById('title').value
//   fetch(`http://www.omdbapi.com/?t=${movieTitle}&apikey=trilogy`)
//     .then(r => r.json())
//     .then(({ Title, Year, Director, Poster, Plot }) => {
//       document.getElementById('movie').innerHTML = `
//           <img src="${Poster}" alt="${Title}">
//           <h1>${Title}</h1>
//           <h2>${Director}</h2>
//           <h3>${Year}</h3>
//           <p>${Plot}</p>
//         `
//     })
//     .catch(e => console.error(e))
// })
