const React = require('react')
const Html = require('./layouts/default.jsx.js')
const Navbar = require('./components/navbar.jsx.js')
const Jumbotron = require('./components/jumbotron.jsx.js')
const Form = require('./components/form.jsx.js')
const List = require('./components/list.jsx.js')

const Home = props => {
  return (
    <Html>
      <Navbar />
      <Jumbotron />
      <div className='container'>
        <div className='row'>
          <div className='col-md-6'>
           <Form />
          </div>
          <div className='col-md-6'>
            <List something = {props.something} />
          </div>
        </div>
      </div>
    </Html>
  )
}

module.exports = Home
