function vehicle(brand,model,speed,fuelType){
    this.brand=brand,
    this.model=model,
    this.speed=speed,
    this.fuelType=fuelType
}
vehicle.prototype.accelerate=function(){
    this.speed+=10;
}
vehicle.prototype.brake=function(){
    this.speed-=10;
}
vehicle.prototype.reFule=function(){
    console.log("Please reFule");
}

function car(brand,model,speed,fuelType,noOfvehicle){
    vehicle.call(this,brand,model,speed,fuelType);
    this.noOfvehicle=noOfvehicle;
}
car.prototype.honk=function(){
    console.log("honking sound");
}
Object.setPrototypeOf(car.prototype,vehicle.prototype);

function Airplane(brand,model,speed,fuelType,noOfengine,hasLandingGear){
    vehicle.call(this,brand,model,speed,fuelType,noOfengine,hasLandingGear);
    this.noOfengine=noOfengine;
    this.hasLandingGear=hasLandingGear;
}
Airplane.prototype.takeOff=function(){
    console.log("Airplane is taking off");
}
Object.setPrototypeOf(Airplane.prototype,vehicle.prototype);
let car1=new car("TATA",2023,0,"Diesel",4);
let air1=new Airplane("Indigo",2023,0,"Diesel",6,"Yes");
console.log(air1);
air1.reFule();
air1.takeOff();
console.log(car1);
car1.reFule();
car1.honk();
