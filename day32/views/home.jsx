const React = require('react')
const Html = require('./layouts/default.jsx')

const Home = props => {
  return (
    <Html>
      <h1>hello {props.name}</h1>
    </Html>
  )
}
module.exports = Home
