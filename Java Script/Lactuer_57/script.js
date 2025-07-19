// async function getData(){
//     setTimeout(function(){
//         console.log('Data received');
//     },3000);
// }
   
// let output= getData();

//await --?

// faatch API

// async function getData() {
//     let response = fetch("https://josonplaceholder.typicode.com/todos/1");
//     console.log(response);
// }
// console.log("ar");


// async function getData() {
//     let response = await fetch('https://jsonplaceholder.typicode.com//comments?postId=1');
//     let data  = await response.json();
//     console.log(data);
// }
// getData();
// let out =getData();
// console.log(out);


// const myHeaders = new Headers();
// myHeaders.append("Content-Type", "application/json");

// const url = "https://jsonplaceholder.typicode.com/posts" ;
// const options = {
//   method: "POST",
//   body: JSON.stringify({ username: "Adi Ra" }),
//   headers: myHeaders,
// };
// async function postData(){
//    let response = await fetch('https://dummyjson.com/posts/add', {
//   method: 'POST',
//   headers: { 'Content-Type': 'application/json' },
//   body: JSON.stringify({
//     title: 'I am in love with someone.',
//     userId: 5,
//     /* other post data */
//   })
// })
//     let data = await response.json();
//     console.log("post data response :- ",data);
// }


// async function getData(){
//     const url = 'https://dummyjson.com/posts' ;
//     const response =await fetch('https://dummyjson.com/posts/user/252');
//     let data = await response.json();
//     console.log("get data reaponse :-  ",data)
// }

// async function processData(){
//     await postData();
//     await getData();
// }
// processData();