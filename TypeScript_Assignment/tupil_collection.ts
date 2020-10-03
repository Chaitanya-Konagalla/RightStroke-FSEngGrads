var customer_records:[String,number,String,String][];
var i:number=1;
customer_records=[["Chaitu",60000,"Male","Hydrabad"],["Sanjay",80000,"Male","Vijayawada"],["Harshita",40000,"Female","Rajahmundry"]];
customer_records.pop();
customer_records.push(["Jyothi",70000,"Female","Vizag"]);
for(var record of customer_records)
{
    console.log("Customer:"+i+" name is "+record[0]+"("+record[2]+") getting a salary of Rs."+record[1]+"/-, living in "+record[3]);
    i+=1;
}


/*
Output:

Customer:1 name is Chaitu(Male) getting a salary of Rs.60000/-, living in Hydrabad
Customer:2 name is Sanjay(Male) getting a salary of Rs.80000/-, living in Vijayawada
Customer:3 name is Jyothi(Female) getting a salary of Rs.70000/-, living in Vizag

*/