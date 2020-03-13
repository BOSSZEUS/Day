const React = require('react')
const Html = require('./layouts/default.jsx')

const List = props => {
  return (
    <Html>
      <ul className="list-group">
        {props.items.map(items => <li className='list-group-item list-group-item-dark d-flex justify-content-between align-items-center'>{items} <button className="btn btn-warning">Click Me</button></li>)}
      </ul>
       
    </Html>
  )
}

module.exports = List

  // < div >
  // <input type="text" />
  // <button id='addbtn' class='btn btn-primary'> Add To List</button>
  // <button id='subbtbn' class='btn btn-warning'>Remove From List</button>
  //     </div >


  // <ul class="list-group">
  //   <li class="list-group-item">Dapibus ac facilisis in</li>

  //   <li class="list-group-item list-group-item-primary"></li>
  //   <li class="list-group-item list-group-item-secondary"></li>
  //   <li class="list-group-item list-group-item-success"></li>
  //   <li class="list-group-item list-group-item-danger"></li>
  //   <li class="list-group-item list-group-item-warning"></li>
  //   <li class="list-group-item list-group-item-info"></li>
  //   <li class="list-group-item list-group-item-light"></li>
  //   <li class="list-group-item list-group-item-dark"></li>
  // </ul>