//Sorting
const names=["Alice","Rohit","Bob","Mohit","Charlie"];
names.sort();
console.log(names);

names.reverse();
console.log(names);

//For making descending order
names.sort();
names.reverse();
console.log(names);

const a=["101","90","80","32","91"];
a.sort();
console.log(a);

a.sort((a,b)=>a-b);
console.log(a);

const arr=[10,30,50,[40,90,11],80];
console.log(arr[3]);

console.log(arr[3][0]);
console.log(arr[3][2]);

const arr1=[10,30,50,[40,90,[60,19,99],11],80];
console.log(arr1[3][2][1]);

const arr2=[10,30,50,[40,90,[60,19,99],11],80];
const b=arr2.flat();
console.log(b);

const c=arr2.flat(Infinity);
console.log(c);

