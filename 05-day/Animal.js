class Animal {
  constructor(name){
    this.name = name
  }
  speak() {
    console.log(this.name, 'Animal.')
  }
  eat() {
    console.log('Eat Animals')
  }
}

class Dog extends Animal {
  speak() {
    super.eat()
    console.log(this.name, 'Dogs.')
  }
  eat() {
    console.log('Eat Dog')
  }
}

let spot = new Dog('Spot')
spot.speak()
