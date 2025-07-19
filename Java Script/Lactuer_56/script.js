// let firstPromis = new Promise((resolve,reject)=>{
//     console.log("Aditya");
//     // resolve(1001);
//     reject(new Error("Internal server Error"));
// })
// function myname(){
//     console.log("ma bhadia tu bhi bhadia")
// }
// setTimeout(myname,10000);



// let firstPromis = new Promise((resolve,reject)=>{
   
// setTimeout(function myname(){
//     console.log("ma bhadia tu bhi bhadia")
// },10000);

// })

// let promise1 = new Promise((resolve,reject)=>{
//     let success =true;
//     if(success){
//         resolve("Promise 1 is resolved");
//     }
//     else{
//         reject("Promise 1 is rejected");
//     }
// })

// promise1.then((message)=>{
//     console.log("the ke message is "+message);
// }).catch((error)=>{
//     console.log("the ke error is "+error);
// })

// promise1.then((message)=>{ // this process is called this block channing
//     console.log("the ke first message is "+message);
//     return "promise fuilled srcond message";
// }).then((message)=>{// this ststmnt is run when the promiss is fullfiled
//     console.log("the ke  second message is "+message);
//     return "promise fuilled third message";
// }).then((message)=>{
//     console.log("the ke  third message is "+message);
// }).catch((error)=>{// catch method is called when the promise is rejected
//     console.log("the ke error is "+error);
// }).finally((message)=>{// finally method is called every time
//     console.log(" ma to final hu to thum lad te raho");
// })

let promise1 = new Promise((resolve,reject)=>{
    setTimeout(resolve,1000,"first");
})
let promise2 = new Promise((resolve,reject)=>{
    setTimeout(resolve,2000,"second");
})
let promise3 = new Promise((resolve,reject)=>{
    setTimeout(resolve,4000,"third");
})

Promise.all((promise1,promise2,promise3))// it was we consider sucessfully run when all the promises will run out sucessfully rether it wll rejected
.then((values)=>{
    console.log(values);
}).catch((error)=>{// catch method is called when the promise is rejected
    console.log("the ke ersror is "+error);
})