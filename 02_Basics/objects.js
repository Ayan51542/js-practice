// 2 types of Objects singleton and normal objects 
//singleton is just like a constructor 

//singleton objects 
const myobj = new Object()
myobj.email="ayan@gmail.com"
myobj.name="Ayan"
myobj.age=20
myobj.location="Karachi"
//console.log(myobj);
// normal
const myobj2=
    {
        name:"Ayan Zakriya",
        email:" ayanhehe@gmail.com",
        age:20,
        location:"Karachi"
    }
    const myobj4=
    {
        name:"Rayan",
        email:" Rayanhehe@gmail.com",
        age:19,
        location:"Karachi"
    }
//console.log(myobj2);
//if i wanna contaignate both of the b=objects we'll simply spread 
const myobj3={...myobj4,...myobj2}
//console.log(myobj3);
//or
const obj5=Object.assign({},myobj,myobj2,myobj4)
//console.log(obj5);
//if the array of objects arises lets suppose we have users name array an in which all the contents are objects so we'll do Object Users[1].email="hehe@gmail.com"
console.log(Object.keys(myobj4));
console.log(myobj4.hasOwnProperty("Karachi"));