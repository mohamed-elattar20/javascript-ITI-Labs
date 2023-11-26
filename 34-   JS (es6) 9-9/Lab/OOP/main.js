class vehicle {
  constructor(wheels, speed) {
    this.wheels = wheels;
    this.speed = speed;
  }
}

class Bike extends vehicle {
  static bikesCreated = 0;
  constructor(wheels, speed) {
    super(wheels, speed);
    this.wheels = 2;
    this.speed = "fast enough";
    Bike.bikesCreated++;
  }

  static getNumberOfBikesCreated() {
    return Bike.bikesCreated;
  }
}

let b1 = new Bike();
let b2 = new Bike();
let b3 = new Bike();
let b4 = new Bike();

console.log(Bike.getNumberOfBikesCreated());
