// fuctional constructors
// factory
// class

function Pet(raining,noise) {
  this.raining = raining
  this.noise = noise
  this.makeNoise = function () {
    if (this.raining){
      console.log(this.noise)
    }
  }
}
const dog = new Pet(true,'woof!')
const cat = new Pet (false, 'meow!')


// name,email,address,phone,

function Person(name,email,address,phone){
  this.name = name
  this.phone = phone
  this.email = email
  this.address = address
}
const student = new Person('john','132132131231','2021 fjkewfjwf','janedoe@wjfdf')
const teacher = new Person('jandoe','132132131231','2021 fjkewfjwf','jnedoe@wjfdf')