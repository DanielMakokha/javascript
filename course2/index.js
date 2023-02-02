let num1=10;
let num2=num1;
num1+=1;
num2++;
console.log(num1)
console.log(num2)

// Comparison operators
let price =200;
console.log(price>300);

// logical operators

let price=10;
console.log(price>50 && price<15)

// Equality operators
let price=10;
console.log(price===10);
console.log(price !==10);

Swap two numbers
let apple=10;
let orange=20;

// Swap these values
let temp=apple;
apple=orange;
orange=temp;
console.log(apple,orange);

conditional statements

let number=0;

if (number>0) {
    console.log('This is a positive number')
}else if (number<0) {
    console.log('This a negative number')
} else {
    console.log('This  a zero number')
    
}

switch case statement
let color='black'

switch (color) {
    case "black":
        console.log('This is black')
        break;
    case "white":
        console.log('This is white')
        break;

    default:
        console.log('Wrong color')
        break;
}

Loops in javascript
for (let i = 1; i <=10; i++) {
    console.log('Hae Daniel',i)
    
}

let index=1;
do {
    console.log('Hi Daniel');
    index++
} while (index<5);
console.log('hello')


let numbers=[1,2,3,4,5,6];
console.log(numbers);
for (let index in numbers) {
    // if (Object.hasOwnProperty.call(oblet index)) {
    //     const element = olet index];
        
    // }
    console.log(index,numbers[index])
}

String Basics

let country='kenya'
console.log(country);
console.log(typeof country)
console.log(country[4])
console.log(country.substring(2,3))

let message='Hi my name is Daniel'
console.log(message)
console.log(message.toLowerCase())
console.log(message.includes('Daniel'))
console.log(message.startsWith('Hi'))

let name='kazi'
let age=40;
let hobby='Reading'

const usr={
    name:'kazi',
    age:40,
    hobby:'reading',
    calculateAge: function() {
        console.log('I am kazi ariyan')
    }
}
usr.email='danielmakok@gmail'
usr['phone']='0797283283'
console.log(usr.calculateAge())

// console.log(usr) 

Traversing object

const usr={
    name:'Daniel',
    age:40,
    ismarried:true,
    phone:'99999',
    gender:'male'
}
for (const key in usr) {
    console.log(key,usr[key])
        
}

Exercise
const salaries={
    kazi:2000,
    jackma:3000,
    jon:4000,
    ariyan:5000,
    raju:50,
}
let sum=0;
for(let key in salaries){
    sum=sum+salaries[key]
}
console.log(sum);

object destructuring

const usr={
    name:'makokha',
    age:40,
    favBook:{
        bookname:'Thick and Rich',
        bookauthor:'Keila'
    },
};
console.log(usr.name)
console.log(usr.favBook)

Cloning an object
const usr={
    name:'Dan',
    age:40,
}
const copiedusr={}
copiedusr.name=usr.name;
copiedusr.age=usr.age;
console.log(copiedusr);

Math object
console.log(Math.PI)
console.log(Math.random())

json data
const usr={
    name:'Danny',
    age:40,
}
const jsondata=JSON.stringify(usr)
console.log(jsondata); 

Arrow function
const calSum=(number1,number2)=>number1+number2;
console.log(calSum(50,50));

Rest parameter

function multiply(num1,num2,num3) {
    return num1*num2*num3;
}
console.log(multiply(2,4,5));