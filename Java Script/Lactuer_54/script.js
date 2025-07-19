// // code 1
// const t1 =performance.now();
// for(let i =0;i<100;i++){
//     let para = document.createElement("p");
//     para.textContent = "this is para :- "+(i+1);
//     document.body.appendChild(para);
// }
// const t2 =performance.now();
// console.log(" the total time taken by code 1 is "+(t2-t1));



// // code 2

// let myDiv = document.createElement("div");

// const t3 =performance.now();
// for(let i =0;i<100;i++){
//     let para = document.createElement("p");
//     para.textContent = "this is para :- "+(i+1);
//     myDiv.appendChild(para);
// }
// document.body.appendChild(myDiv);
// const t4 =performance.now();
// console.log(" the total time taken by code 2 is "+(t4-t3));


//best code 


let fragment = document.createDocumentFragment();
const t5 =performance.now();
for(let i =0;i<100;i++){
    let para = document.createElement("p");
    para.textContent = "this is para :- "+(i+1);
    fragment.appendChild(para);
}
document.body.appendChild(fragment);
const t6 =performance.now();
console.log(" the total time taken by code 3 is "+(t6-t5));
