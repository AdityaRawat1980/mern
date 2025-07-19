// function changeText(){
//     console.log(event);
//     let fpara = document.getElementById("fpara");
//     fpara.textContent = "hellow aditya kya kar raha hi ";
// }




// let fpara = document.getElementById("fpara");
// fpara.addEventListener("click", changeText);
// fpara.removeEventListener("click",changeText);
// let ancorElement = document.getElementById("fancor");
// ancorElement.addEventListener("click", function(){
//     event.preventDefault();
//     ancorElement.textContent = 'click done bhai;'
// });




// let paras = document.querySelectorAll("p");
function alartpara(){
    if(event.target.nodeName === 'SPAN'){
        alert("you have click on para :- "+event.target.textContent);
    }
    }
// for(let i=0;i<paras.length;i++){
//     let para =paras[i];
//     para.addEventListener("click",alartpara)
// }



let myDiv = document.getElementsByClassName("con");
document.addEventListener("click",alartpara);