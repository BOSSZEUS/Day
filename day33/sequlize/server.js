const express = require('express')
const sequelize = require('./config')

const app = express()

app.use(express.urlencoded({ extended: true }))
app.use(express.json())

app.use(require('./routes'))

sequelize.sync()
  .then(() => app.listen(3000))
  .catch(e => console.error(e))
