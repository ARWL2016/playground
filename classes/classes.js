class Food {

  constructor(name, type) {
    this.name = name; 
    this.type  = type; 
  }

  print() {
    console.log(this); 
  }
}

let apple = new Food('apple', 'fruit'); 

class Fruit extends Food {

  constructor(name, type, climate) {
    super(name, type); 
    this.climate = climate; 
  }
}

let banana = new Fruit('banana', 'fruit', 'topical' ); 

banana.print(); 
