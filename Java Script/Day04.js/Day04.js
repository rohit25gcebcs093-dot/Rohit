//Number
let a=10;
let b=345.6821;
console.log(b.toFixed(2));
console.log(b.toFixed(1));
console.log(typeof b);

let c=new Number(20);
console.log(typeof c);
console.log(c);

let obj1={
    name:"Rohit"
}
let obj2={
    name:"Rohit"
}
console.log(obj1==obj2);

console.log(Boolean(0));
console.log(Boolean(10));
console.log(Boolean(new Number(0)));
console.log(Boolean(new Number(10)));

//Converting negative number into positive number
console.log(Math.abs(-4));

//Make a casino game of random output of 0-9 numbers
console.log(Math.floor(Math.random()*10));

//From 15-25 random numbers
console.log(Math.floor(Math.random()*10)+15);

//OTP Generation
console.log(Math.floor(Math.random()*(9999-1000+1))+1000);

//STRING
const str1="Rohit";
const str2=`Rohit Maddheshiya`;
const str3=`Strike is coming soon`;
const str4=`Rohit is
a boy`;
console.log(str1,str2,str3,str4);

const day=18;
const str5=`Strike is coming on ${day}`;
console.log(str5);

const str=`Hello Coder Army`;
console.log(str.length);
console.log(str[1]);
