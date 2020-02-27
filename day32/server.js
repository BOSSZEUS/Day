const express = require('express')
const { join } = require('path')
const app = express()


app.use(express.static(join(__dirname,'public')))
app.set('views', join(__dirname, 'views'))
app.set('view engine', 'jsx')
app.engine('jsx', require('express-react-views').createEngine())


app.get('/', (req, res) => {
  res.render('home', {name:'jordan scheftic'})
})
app.get('/contact',(req,res)=>{
  res.render('contact')
})
app.get('/count',(req,res)=>{
  res.render('count')
})

app.get('/list',(req,res)=>{
  res.render('list',{
    items: ['take out trash',
    'mow lawn',
    'dog poop',
    'do homework',
    'clean laundry']
  })
})

app.listen(3000)
