let src ={
    age:1,
    name:"John",
    lastName:"Doe",
    occupation:"Developer"

}
console.log(src);
let A = {...src};
src.age=1234;
console.log(A);
let src1 ={
    Office : "poornima",
    "Office Address" : "Bangalore",
    "Office Phone" : "1234567890",
}

let dec = Object.assign({},src,src1);
src.name = "Aditya";
console.log(dec);
console.log(src);
let b ={};
for(let key  in src){
    let newKey=key;
    let newValue=src[key];
    b[newKey]=newValue;
}
console.log(b);