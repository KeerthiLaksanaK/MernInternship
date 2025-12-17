// a=2;
// if(a%2==0){
//     console.log("Even");
// }
// else{
//     console.log("Odd");
// }
// //arithmetic operators
// var a=20;
// var b=10;
// console.log(a+b);
// console.log(a-b);
// console.log(a*b);
// console.log(a/b);
// console.log(a%b);

// var a=20;
// var b="10";
// console.log(a+b);
// console.log(a-b);
// console.log(a*b);
// console.log(a/b);
// console.log(a%b);
// //relational operator

// console.log(a>b);
// console.log(a>=b);
// console.log(a<b);
// console.log(a<=b);
// console.log(a==b);
// console.log(a!=b);
// console.log(a===b);//checks for the value and datatype
// console.log(a!==b);

// //assignment operator
// var a=20;
// console.log(a+=10);
// console.log(a-=10);
// console.log(a*=10);
// console.log(a/=10);
// console.log(a%=10);

// //logical operator
// var a=20;
// var b=10;
// var c=30;
// console.log(a>b && a>c);
// console.log(a>b || a>c);
// console.log(!(a>b));

// //for loop
// console.log("for loop");
// for(var i=0;i<10;i++){
//     console.log(i);
// }

// //while loop
// var i=0;
// console.log("while loop");
// while(i<10){
//     console.log(i);
//     i++;
// }

// var a=0;
// while(a!==5){
//     a++;
//     console.log(a);
// }

// //do while loop
// console.log("do while loop");
// var i=0;
// do{
//     console.log(i);
//     i++;
// }while(i<10);

// //conditional statement
// //if 
// var a=20;
// if(a>10){
//     console.log("a is greater than 10");
// }
// //if else
// var a=20;
// if(a>10){
//     console.log("a is greater than 10");
// }
// else{
//     console.log("a is less than 10");
// }
// //if else if
// var a=20;
// if(a>10){
//     console.log("a is greater than 10");
// }
// else if(a<10){
//     console.log("a is less than 10");
// }
// else{
//     console.log("a is equal to 10");
// }

//  //switch case
//  var day=1;
//  switch(day){
//     case 1:
//         console.log("Monday");
//         break;
//     case 2:
//         console.log("Tuesday");
//         break;
//     case 3:
//         console.log("Wednesday");
//         break;
//     case 4:
//         console.log("Thursday");
//         break;
//     case 5:
//         console.log("Friday");
//         break;
//     case 6:
//         console.log("Saturday");
//         break;
//     case 7:
//         console.log("Sunday");
//         break;
//     default:
//         console.log("Invalid day");
//  }

//  //ternary operator
//  var a=20;
//  var b=10;
//  var c=a>b?a:b;
//  console.log(c);
//  var d=(a%2===0)?"Even":"Odd";
//  console.log(d);
//  var marks=91;
//  var i=marks>=90?"A":marks>=80?"B":marks>=70?"C":marks>=60?"D":marks>=50?"E":"F";
//  console.log(i);    

//  //function
//  function add(){
//      console.log(10+20);
//  }
// add();

// //typeof
// var a=20;
// console.log(typeof(a));
// var b="20";
// console.log(typeof(b));
// var c=true;
// console.log(typeof(c));
// var d;
// console.log(typeof(d));
// var e=null;
// console.log(typeof(e));
// var f=[1,2,3,4,5];
// console.log(typeof(f));
// var g = 123456790n;
// console.log(typeof(g));
// var symbol1 = Symbol('hello');
// console.log(typeof(symbol1));

// //arrow function
// var add=(a,b)=>a+b;
// console.log(add(10,20));
// add();

// const k =[10,20,30,60];
// const l=[...k,40,50];
// console.log(k);
// console.log(l);

// const [name, age, marks1] = ["Keerthi", 19, 98];

// console.log(name);
// console.log(age);
// console.log(marks1);

// //object
// const {name1,age1,marks2} = {
//     name1: "Keerthi",
//     age1: 19,
//     marks2: 98
// };
// console.log(name1);
// console.log(age1);
// console.log(marks2);

//for in loop(index value)
// console.log("for in loop"); 
// var arr=[1,2,3,4,5];
// for(let i in arr){
//     console.log(i);
// }

// //for of loop(values)
// console.log("for of loop");
// var arr=[1,2,3,4,5];
// for(let i of arr){
//     console.log(i);
// }

// //for each loop
// console.log("for each loop");
// var arr=[1,2,3,4,5];
// arr.forEach((value, index) => {
//     console.log(value, index);
// });

//object creation
// class Person{
//     name;
//     age;
//     constructor(name, age){
//         this.name=name;
//         this.age=age;
//     }
//     display(){
//         console.log(this.name, this.age);
//     }
// }
// var person1=new Person("Keerthi", 19);
// person1.display();

// var a=10;//global scope
// if(true){
//     var b=20;//var global scope
//     console.log(a);
// }
// console.log(b);

// let a=10;//global scope
// if(true){
//     let b=20;//let block scope
//     console.log(a);
// }
// console.log(a,b);

// // //hoisting 
// //var a ; //by js
// console.log(a);
// var a =10;

// add();
// function add(){
//     console.log(10+20);
// }   

// // CallBack Function
// var demo=()=>{
//     console.log("Demo");
// }   
// var main=(callback)=>{
//     console.log("Main");
//     callback();
// }
// main(demo);

// var main = (callback) => {
//     console.log("Main");
//     callback();
// }
// main(()=>{
//     console.log("Demo");
// });

// var add = (a,b,callback) => {
//     var res=a+b;
//     callback(res);
// }

// add(10, 20, (res)=>{
//     console.log(res);
// })

var demo=()=>{
    setTimeout(()=>{
        console.log("Demo");
    }, 2000);
}
demo();