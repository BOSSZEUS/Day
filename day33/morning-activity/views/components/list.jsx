const React = require('react')

const List = props => {
  return (
    <ul class='list-group'>
      <li class='list-group-item'>{props.something}</li>
      <li class='list-group-item'>{props.something}</li>
      <li class='list-group-item'>{props.something}</li>
      <li class='list-group-item'>{props.something}</li>
      <li class='list-group-item'>{props.something}</li>
    </ul>
  )
}


module.exports = List