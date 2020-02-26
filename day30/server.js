const express = require('express')

const app = express()
app.engine('handlebars', require('express-handlebars'))
app.set('view engine', 'handlebars')


app.listen(3000)