const str="Hello Coder Army Coder";
console.log(str.toUpperCase());
console.log(str.indexOf('Cod'));
console.log(str.indexOf('Cer'));
console.log(str.lastIndexOf('Cod'));
console.log(str.includes('cod'));

const str1='Hello Coder Army Coder';
console.log(str1.slice(2,7));
console.log(str1.slice(3));
console.log(str1.slice(-4));
console.log(str1.slice(-5,2));
console.log(str.substring(2,5));

const a="Rohit";
const b="Maddheshiya";
const c=a+" "+b;
console.log(c);

console.log(24+"Rohit");
console.log(24+"Rohit"+10);
console.log(24+30+"Rohit");

console.log(str.replaceAll("ode",'iam'));

const user=" Rohit ";
console.log(user.trim());

const names="Rohit,Mohit,Suraj,Rohan,Anjali";
console.log(names.split(","));

const now=new Date();
console.log(now);

console.log(now.toString());

console.log(now.toLocaleString());

console.log(now.getDay());
console.log(now.getDate());
console.log(now.getFullYear());
console.log(now.getMonth());
