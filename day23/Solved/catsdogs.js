const dogs = {
  raining: true,
  noise: 'woof!',
  makenoise: function (){
    if (this.raining === true)
    console.log(this.noise)
  }

}

const cats ={
  raining: false,
  noise: 'meow',
  makenoise: function(){
    if(this.raining === true)
    console.log(this.noise)
  }
}

dogs.makenoise()
cats.raining = true
cats.makenoise()

const massHysteria = function (dogs, cats) {
  if (dogs.raining === true && cats.raining === true) {
    console.log("DOGS AND CATS LIVING TOGETHER! MASS HYSTERIA!");
  }
};

massHysteria(dogs, cats);




