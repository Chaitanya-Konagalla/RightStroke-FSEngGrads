export class Car{
    constructor(private car_color:String,private Engine_Capacity:number,private Noofcylinders:number){}
    StartCar=()=>{
        return "car is started";
    }
    StopCar=()=>{
        return "car is stopped";
    }
    Accelarate=()=>{
        return "car is accelerated";
    }
    OpenCarLock=()=>{
        return "Opened the car door";
    }
    CloseCarLock=()=>{
        return "closed the car door";
    }
}
let benz:Car = new Car("Black",1991,4);
console.log(benz.OpenCarLock())
console.log(benz.StartCar());
console.log(benz.Accelarate());
console.log(benz.StopCar());
console.log(benz.CloseCarLock());


/*

Opened the car door
car is started
car is accelerated
car is stopped
closed the car door

*/