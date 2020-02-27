const React = require('react')
const Html = require('./layouts/default.jsx')

const Contact = () => {
  return (
    <Html>
      <div class="container">
        <form action="/action_page.php">
          <div>
            <label for="fname">First Name</label>
            <input type="text" id="fname" name="firstname" placeholder="Your name.." />
          </div>
          <div>
            <label for="lname">Last Name</label>
            <input type="text" id="lname" name="lastname" placeholder="Your last name.." />
          </div>
        </form>
      </div>

    </Html>
  )
}

module.exports = Contact