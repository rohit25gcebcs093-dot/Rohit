let marks=[100,50,70,80,90];
console.log(marks);
console.log(marks.length);

let arr=[100,30,"Rohit",true];
console.log(arr);
console.log(arr[2]);
console.log(typeof arr);
arr[1]=90;
console.log(arr);

arr.push(90);
arr.push("Strike");
console.log(arr);

arr.pop();
console.log(arr);

arr.unshift(10);
console.log(arr);

let arr1=[10,30,50,90,11];
for(let i=0;i<arr.length;i++){
    console.log(arr1[i]);
}
//OR
//let arr=[10,30,50,90,11];
//for(let num of arr){
//  console.log(num);
//}

let arr2=[100,30,50,90,11];
let arr3=arr2;
arr2.push(30);
console.log(arr3);

const arr4=[10,30,50,90,11];
const arr5=arr4.slice(2,4);
console.log(arr4);
console.log(arr5);
console.log(arr4.splice(1,3));

arr4.splice(1,3);
console.log(arr4);

const arr6=arr4.splice(1,3,"Rohit",19);
console.log(arr4);

const  arr7=arr4.splice(1,3,"Rohit",19);

const arr8=[10,30,50,90,11];
const arr9=["Rohit",11,true];
arr.push(arr9);
console.log(arr8);

const a=["Alica","Bob","Charlie"];
console.log(typeof a.toString());
console.log(a.toString());

console.log(a.join(" "));
console.log(a.includes("bob"));
