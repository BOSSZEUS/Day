const express = require('express')
const {join} = require('path')
const app = express()

app.engine('.hbs', require('express-handlebars')({ extname: '.hbs'}))
app.set('view engine', '.hbs')

app.use(express.static(join(__dirname, 'public')))


app.get('/movies',(req,res)=>{
  res.render('movies', {
    movies: [
      'superman',
      'goodfellas',
      'batman',
      'dragonball z'
    ]
  })
})
app.get('/books', (req, res) => {
  res.render('books', {
    books: [
      'eragon',
      'the power within',
      'mocking jay',
      ' the 5 agreements'
    ]
  })
})
app.get('/foods', (req, res) => {
  res.render('foods', {
    foods: [
      'pizza',
      'pasta',
      'cookies',
      'steak'
    ]
  })
})
app.get('/songs', (req, res) => {
  res.render('songs', {
    songs: [
      'acdc',
      'iron man',
      'green day',
      'jack johnson'
    ]
  })
})
app.listen(3000)