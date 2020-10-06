export enum Days {
    Sunday = "Poori",
    Monday = "Idly",
    Tuesday = "Boonda",
    Wednesday = "Dosa",
    Thrusady = "Vada",
    Friday = "Chapati",
    Saturday = "Sambar Idly",
}
export class Tiffins{
    tiffin=(Day:String)=>{
         for(var d in Days){
            if(Day==d)
                console.log(Days[d]+" is "+d+"'s tiffin");
            
         }
    }

}
let t:Tiffins = new Tiffins();
t.tiffin("Sunday");

//Poori is Sunday's tiffin