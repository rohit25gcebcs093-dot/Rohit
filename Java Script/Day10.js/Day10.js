function greet(){
    console.log("Hello Everyone");
}

function meet(){
    console.log("I am going to meet");
}
meet(greet());

let a=10;
const b=20;
const addNumber=function(num1,num2){
    const sum=num1+num2;
    return sum;
}
const result=addNumber(a,b);
console.log(result);

let c=10;
const d=20;
if(true){
    let e=30;
    console.log(d);
}
function greet(){
    let f=30;
}
greet();

function createCounter(){
    function increment(){
        console.log("I am increment function.");
        return 20;
    }
    return increment();
}
const count=createCounter();
console.log(count);

//Closure
function createCounter(){
    let count=0;
    function increment(){
        count++;
        return count;
    }
    return increment;
}
console.log(count);
const counter=createCounter();
console.log(counter());
console.log(counter());
console.log(counter());