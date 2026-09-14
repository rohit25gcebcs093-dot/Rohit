//Functions
function greeting(){
    console.log("Hello Coder Army, Strike is coming soon");
}
function addNumber(num1,num2){
    const sum=num1+num2;
    console.log(sum);
}
greeting();
addNumber(3,4);

function addNumber(num3,num4,num5=0,num6=0,num7=0){
    const sum=num3+num4+num5+num6;
    console.log(sum);
}
addNumber(6,7);
addNumber(6,7,8);
addNumber(6,7,8,9);

// function addNumber(...num){
//     console.log(num);
// }
// addNumber(6,7);
// addNumber(6,7,8,9);
// addNumber(10,12,12,13,18,19);

function addNumber(...num){
    let sum=0;
    for(let n of num){
        sum+=n;
    }
    console.log(sum);
}
addNumber(6,7);
addNumber(6,7,8,9);
addNumber(6,7,8,9,12,18);

//Rest operator
const arr=[10,20,30,40,50];
const [first,second,...num]=arr;
console.log(first,second,num);

const arr1=[10,20,30,40,50];
const arr2=[30,70,90,10];
const ans=[...arr1,...arr2];
console.log(ans);

const addNumber2=function(num1,num2){
    return num1+num2;
}
console.log(addNumber2(3,4));

const squareNumber=num=>num*num;
console.log(squareNumber(6));

const greeting1=()=>({name:"Rohit",age:20});
console.log(greeting1());

(function greeting2(){
    console.log("Hello");
})();
