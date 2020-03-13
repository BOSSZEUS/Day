const React = require('react')
const Html = require('./layouts/default.jsx')

const Count = () => {
  return (
    <Html>
      <div id='mydiv'>
      <h1 id="myh1">0</h1>
      </div>
      <button id='mybtn' className="btn btn-primary">+</button>
      <button id='mybtn2' className="btn btn-secondary">-</button>
      <button id='reset' className="btn btn-danger">reset</button>
    </Html>
  )
}

module.exports = Count