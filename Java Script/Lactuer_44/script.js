let obj = {
    nam : "aditya",
    age : 45,
    address : "bangalore",
    occupation : "software engineer",
    greet : function(){
        console.log("hello");
    }

};
console.log(obj);
obj.greet()
console.log(obj.greet());
console.log(typeof(obj));

let arr = [1,2,3,4,,5,"aditya"];
console.log(arr);
console.log(typeof(arr));
// arry creation with the help of constructer
let arr1 = new Array(1,2,3,4,5);
console.log(arr1);
console.log(typeof(arr1));
arr1.push("aditya");
console.log(arr1);
arr1.shift();
console.log(arr1);
arr1.unshift("ar");
console.log(arr1);
arr1.slice(2,4);
console.log(arr1);
arr1.splice(1,2,"adi");
console.log(arr1);
brr =arr.map((number)=>{
    return number*number;
});
console.log(brr);
brr1 = arr.filter((number)=>{
    if(number%3==0){
        return true;
    }
    else{
        return false;
    }
});
console.log(brr1);
// reduce
brr2 = arr.reduce((acc,cur)=>{
    return acc+cur;

},0);
console.log(brr2);
brr2.sort();
let arr2 =[1,3,4,5,67,];
arr2.forEach((values,index)=>{
    console.log(values,index);
});
for(let key in obj){
    console.log(key," ",obj[key]);
}
for(val of arr2){
    console.log(val);
}
function getsum(arr){
    let len =arr.length;
    let sum =0;
    for(let i =0;i<=len;i++){
        sum+=arr[i];
    }
    return sum;
}
let t =getsum(arr2);
console.log(t);