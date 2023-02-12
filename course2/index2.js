// // ARRAY AND OBJECT DESTRUCTURING
// function greetings(user) {
//     console.log(`Hello ${user.name} and age is ${user.age} from ${user.address.long},${user.address.lat}`);
// }
// const user={
//     name:'Daniel',
//     age: 40,
//     address:{
//       long:345.33,
//       lat:343.2,  
//     },
// };
// greetings(user)

// const regExp=/Daniel/;
// console.log(regExp.test('Hi am Daniel'))
// console.log(regExp)
// console.log(regExp.source);

// const str='This is my password';
// const regx=/password/;
// console.log(str.match(regx));

// javaScript manipulation
// const user={
//     name:'kazi',
//     age:40,
//     isMarried:true,
//     friends:['Daniel','Mak','June'],
//     selectColor:null,
//     calculateAge: function () {
//         console.log(`i am  ${this.age}kazi ariyan`);
//     }
// };
// user.calculateAge();

// //object mmethods
// for (let key in user) {
//      console.log(key,user[key])
        
//     }








// console.log(user)

// //add
// user.email='kazi@gmail.com'
// console.log(user);
// user.phone='0786109757'
// delete user.age;
// console.log(user);

// Cloning an object
// const user={
//     name :'kazi',
//     age:40
// };
// const jsonData=JSON.stringify(user)
// console.log(jsonData);

// Factory functions

// function user(name,age) {
//     const userObj={
//         name,
//         age,
//         walk: function(){
//             console.log("i walk everyday");
//         }
        
//     }
//     return userObj
// }
// const user1=user('Dani',40)
// const user2=user('mak',45)
// console.log(user1,user2);

const homeAdress1