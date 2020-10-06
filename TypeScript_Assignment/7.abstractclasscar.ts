abstract class car{
    constructor(private car_color:String,public Engine_Capacity:number,private Noofcylinders:number){}
    Accelarate=()=>{
        return `The car is accelerating with an Engine Capacity of ${this.Engine_Capacity}CC`;
    }
    OpenCarLock=()=>{
        return "Opened the car door";
    }
    CloseCarLock=()=>{
        return "Closed the car door";
    }
    abstract startcar(): string;

    abstract stopcar(): string;
}
 
class suv extends car {
    private carname:String;
    constructor(carname:String,car_color:String,Engine_Capacity:number,Noofcylinders:number){
          super(car_color,Engine_Capacity,Noofcylinders);
          this.carname=carname;
    }
    startcar():string{
        return `The ${this.carname} is started`;
    }
 
    stopcar(): string{
        return `The ${this.carname} is stopped`;
    }

}
class sedan extends car{
    private carname:String;
    constructor(carname:String,car_color:String,Engine_Capacity:number,Noofcylinders:number){
          super(car_color,Engine_Capacity,Noofcylinders);
          this.carname=carname;
    }
    startcar():string{
        return `The ${this.carname} is started`;
    }
 
    stopcar(): string{
        return `The ${this.carname} is stopped`;
    }
}
class Hatchback extends car{
    private carname:String;
    constructor(carname:String,car_color:String,Engine_Capacity:number,Noofcylinders:number){
          super(car_color,Engine_Capacity,Noofcylinders);
          this.carname=carname;
    }
    startcar():string{
        return `The ${this.carname} is started`;
    }
 
    stopcar(): string{
        return `The ${this.carname} is stopped`;
    }
}
 
let Car1:car = new suv("SUV","Grey",1000,9);
console.log(Car1.OpenCarLock());
console.log(Car1.startcar());
console.log(Car1.Accelarate());
console.log(Car1.stopcar());
console.log(Car1.CloseCarLock());
console.log('-------------------------');
let Car2:car = new sedan("sedan","white",1500,9);
console.log(Car2.OpenCarLock());
console.log(Car2.startcar());
console.log(Car2.Accelarate());
console.log(Car2.stopcar());
console.log(Car2.CloseCarLock());
console.log('-------------------------');
let Car3:car = new Hatchback("Hatchback","Black",2000,9);
console.log(Car3.OpenCarLock());
console.log(Car3.startcar());
console.log(Car3.Accelarate());
console.log(Car3.stopcar());
console.log(Car3.CloseCarLock());


/*

Opened the car door
The SUV is started
The car is accelerating with an Engine Capacity of 1000CC
The SUV is stopped
Closed the car door
-------------------------
Opened the car door
The sedan is started
The car is accelerating with an Engine Capacity of 1500CC
The sedan is stopped
Closed the car door
-------------------------
Opened the car door
The Hatchback is started
The car is accelerating with an Engine Capacity of 2000CC
The Hatchback is stopped
Closed the car door

*/