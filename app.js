// function carEle (car, ty, len, bre){
//     return carParts = {
//         carEngine: car,
//         tyers: ty,
//         length: len,
//         breath: bre,
//         seat (){
//             return tyreTypes = {
//                 tyre1: "rubber",
//                 tyre2: "plastic",
//                 tyre3: "lohe ka"
//             }
            
//         }
       
//     }
    
// }


// let a = carEle("lembo", 8, 2 , 4)
// console.log(a.length);

// let b = carEle("altoi", 8, 9 , 4100)
// console.log(b);
// ! direct function ko bhi likh sakte hai carEle().carEngine aise krke bhi
// console.log(a.carEngine);

// ! ye function ke andar function ke object ko excess karne ka tareeka pahle parent function ko call kro fr child function ko
// console.log(carEle().seat().tyre2);
// !esko aise bhi likh sakte hai varibale main store krke
// console.log(a.seat().tyre2);




// function score (num1, num2, num3, num4, num5, num6){
//     return number = {
//         math: num1,
//         science: num2,
//         history: num3,
//         geography: num4,
//         cs: num5,
//         english: num6
//     }
// }

// let a = score(98, 65, 78, 55, 99, 42);
// console.log(score(1, 2, 3, 4, 5 ,6 ));
// // console.log(a.history);

// let b = score(22, 345, 55, 77, 22, 1);
// console.log(b.cs);


// function rectangle  (num1, num2){
    
//         this.length = num1,
//         this.breadth = num2,

//         this.draw = function(){
//             console.log('hlo');
//         }

    
// }
// let rectanglobj = new rectangle(5, 7)

// rectanglobj.color = 'yellow'
// // console.log(rectanglobj);

// delete rectanglobj.length
// console.log(rectanglobj);


//  function User (){

// this.name = "bhagwat",
// this.lastName = "dixit",
// this.mobileNum = 96654492,
// this.adress = "gohadi"

// this.draw = function (a, b){
// return a + b
// }
// }

// let userData = new User();
// // ye add krne ke liye object ko dyanamically
// userData.color = "white"
// // or ye delete karne ke liye
// delete userData.draw

// console.log(userData);
// // console.log(userData.draw(6,8));

// primitive change adress
// let a = 10;
// b = a;
// c = b;

// a++;
// console.log(a,b,c);


// refernce same adress
// let a = {
//     value: 10
// }

// b = a;
// c = a;

// a.value++;
// console.log(a.value, b.value, c.value);


// ********** this is for in loop */
//  let rectangle = {
//     length: 3,
//     breadth: 2,
// }

// for(let  key in rectangle){
//     console.log(key,rectangle[key]);
// }


// const person = {
//     name: 'John',
//     age: 30,
//     city: 'New York'
//   };
  
//   for (let key in person) {
//     console.log(`${key}: ${person[key]}`);
//   }
  
// let score = {
//     a: 10,
//     b : 20,
//     c : 28,
    
// }
// let clone = {}

// for(let key in score)
//  {
//    (clone[key]= score[key] ); 
// }
// console.log(clone)


// function cloneObject(originalObject) {
//     const clonedObject = {};
//     for (let key in originalObject) {
//       if (originalObject.hasOwnProperty(key)) {
//         clonedObject[key] = originalObject[key];
//       }
//     }
//     return clonedObject;
//   }
  
//   // Example usage:
//   const original = { a: 1, b: 2, c: 3 };
//   const cloned = cloneObject(original);
  
//   console.log(cloned); // Output: { a: 1, b: 2, c: 3 }
  



// let src = {
//     a : 10,
//     b:20,
//     c:230,

// }

// let clone = Object.assign({}, src)
// console.log(clone);

// src.a++;

// console.log(clone);

// let src = {
//     a :10,
//     b:20,
//     c : 30,
// }

// let clone = {...src};

// console.log(clone);

// src.a++

// console.log(clone);


// let age = 18;

// let status = (age > 15) ?  'i can not': 'i can';
// console.log(status);
  




// function score (num1, num2, num3, num4, num5, num6){
//     return number = {
//         math: num1,
//         science: num2,
//         history: num3,
//         geography: num4,
//         cs: num5,
//         english: num6
//     }
// }

// let a = score(98, 65, 78, 55, 99, 42);
// console.log(score(1, 2, 3, 4, 5 ,6 ));
// // console.log(a.history);

// let b = score(22, 345, 55, 77, 22, 1);
// console.log(b.cs);

