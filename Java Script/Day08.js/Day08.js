const user={
    name:"Rohit",
    age:20,
    emailID:"rohitmaddheshiya316@gmail.com",
    amount:3400,
}
console.log(user);
console.log(user.age);

user.aadhar=1234;
console.log(user);

user.amount=5000;

//delete user.emailID;
//console.log(user);

console.log(user["name"]);
console.log(user.age);
console.log(user["age"]);

console.log(Object.keys(user));
console.log(Object.values(user));

for(let keys in user){
    console.log(keys,user[keys]);
}

for(let keys in user){
    console.log(keys);
}

const arr=[10,20,40,90,11]
const[first,second]=arr;
console.log(first,second);

for(let keys of Object.keys(user)){
    console.log(keys);
}

//OR
//const temparr=Object.keys(user);
//for(let keys of temparr){
//    console.log(keys);  
//}

const temparr=Object.keys(user);
console.log(temparr);

for(let keys of temparr){
    console.log(keys);
}

for(let values of Object.values(user)){
    console.log(values);
}

for(let values of Object.entries(user)){
    console.log(values);
}

const user1={
    name:"Rohit",
    age:20,
    emailID:"rohitmaddheshiya316@gmail.com",
    amount:3400,
    greeting:function(){
        console.log("Strike is coming soon");
        return 20;
    }
}
const va=user1.greeting();
console.log(va);
