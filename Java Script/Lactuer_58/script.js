// function outerFunction(){
//     let name = "Aditya";
//     function displayName(){
//         console.log(name);
//     }
//     displayName();
// }
// outerFunction();

function outerFunction(){
    let name = "Aditya";
    function displayName(){
        console.log(name);
    }
    return displayName;
}
let inner =  outerFunction();
inner();