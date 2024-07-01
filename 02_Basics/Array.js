const myarray=[1,2,3,4,5]
const my_second_array=[6,7,8,9,10]
const marvel_heros=["thor","ironman","spiderman"]
const dc_heros=["superman","flash","Batman"]

//myarray.push(my_second_array);
//console.log(myarray.flat(2));
//console.log(myarray);
//console.log(myarray[5][3]);


//const mynewarray=myarray.concat(my_second_array);
// spread 
//const mynewarray=[...myarray,...my_second_array]
//console.log(mynewarray);

//slice
/*console.log("Before Slice",myarray);
console.log("Slice of Myarr",myarray.slice(1,3)) //3 index is not inclusive 
console.log("After Slice",myarray);
// splice 
console.log("Before Splice",myarray);
console.log("Splice of Myarr",myarray.splice(1,3)) //3 index is  inclusive and also it would remain the leftover in the orignal array  
console.log("After Splice",myarray);*/

//is from of 
//is
const demo= "Ayan"
let s1=100
let s2=200
let s3=300

//console.log(Array.isArray("Ayan"));
//from
console.log(Array.from("Ayan"));
console.log(Array.of(s1,s2,s3));
