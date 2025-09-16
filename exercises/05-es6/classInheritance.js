class Vehicle {
  constructor(brand) {
    this.brand = brand;
  }
  brake() {
    console.log("You stepped on the brakes");
  }
  accelerate() {
    console.log("You stepped on the accelerator");
  }
}

class Model extends Vehicle {
  constructor(brand, model) {
    super(brand);
    this.model = model;
  }
}

const car = new Model("Toyota", "Yaris");
console.log(car);
