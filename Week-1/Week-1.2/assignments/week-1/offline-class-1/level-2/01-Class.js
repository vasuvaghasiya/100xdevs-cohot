
class Animal {
  constructor(name, legCount,speaks) {
    this.name = name;
    this.legCount = legCount;
    this.speaks = speaks;
  }
  describe() {
    return `${this.name} has ${this.legCount} leg ${this.speaks}`;
  }
  //static function are class level.

  static makeSound() {
    console.log("Generic animal sound");
  }

  speak(){
    console.log("hi there " + this.speaks);
  }
}

let dog = new Animal("dog",4,"bhow bhow");
let cat = new Animal("cat",4,"meow meow");

console.log(dog.describe());
dog.speak();
console.log(cat.describe());
cat.speak();

//hear we use class name, rather than of object name
Animal.makeSound();

