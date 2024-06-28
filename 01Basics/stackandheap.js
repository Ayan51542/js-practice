/*premitive data types
it would be pass by value */ 

let number1=50
let number2=number1;

//number2=100

//heap pass by refrence 
let myob1={
    email:"Ayan@gmail.com",
    age : 22
}
let myob2=myob1;
console.log("Value of ob1 = ",myob1);
console.log("Value of ob2 = ",myob2);
myob2.age=45;
console.table([myob1,myob2]);
 