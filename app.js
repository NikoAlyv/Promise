
//TODO Task

//! Part1

// function createDelay() {
//     // create promise
//   return new Promise((resolve, reject) => {
//     // 2000 millisecond later
//     setTimeout(()=>resolve("Delay completed"), 2000);
//   });
// }

// console.log(createDelay());

//! Part2
// function createDelay() {
//   // create promise
//   const promise = new Promise((resolve, reject) => {
//     // 1000 millisecond later
//     setTimeout(() => {
//       resolve("Delay completed");
//     }, 1000);
//   });

//   promise
//     .then((response) => console.log(response))
//     .catch((err) => console.log(err));
// }

// createDelay();
//! Part3


// function createDelay(time) {
//     // create promise
// return promise = new Promise((resolve, reject) => {
//         setTimeout(()=>resolve(`Delay ${time} millisecond later`),time)  
//     }
//     )
//   }

//? method 1
// type in a promise chain to console 

//   createDelay(500)
//   .then((response)=>{
//     console.log(response);
//     return createDelay(1000)
//   })
//   .then((response)=>{
//     console.log(response);
//     return createDelay(1500)
//   })
//   .then((response)=>{
//     console.log(response);
//   })

//? method 2
// different time  in array for setTimeout

// const differTime =[500,1000,1500]
// differTime.map((time)=>createDelay(time)
// .then((response)=>{
//   console.log(response);
// }))  

//! Part4

// function createDelay() {
// // create promise
//     const promise = new Promise((resolve,reject)=>{
//         reject("Delay failed")
//     })
// // handle response and error
//     promise
//     .then((response)=>console.log(response))
//     .catch((error)=>console.log(`Error:${error}`))    
// }

// createDelay()

//! Part5
// function createDelay() {
// // create promise
//     const promise1 = new Promise((resolve,reject)=>{
//        setTimeout(()=> resolve(`Delay1 time later`),1000)
//     })
//     const promise2 = new Promise((resolve,reject)=>{
//         setTimeout(()=> resolve(`Delay2 time later`),2000)
//     })
//     const promise3 = new Promise((resolve,reject)=>{
//         setTimeout(()=> resolve(`Delay3  time later`),3000)
//     })
    
// // use Promise.all to wait for all  the promises to resolve
// Promise.all([promise1,promise2,promise3])
// .then((response)=>{
//     console.log(response);
// })
    
// }
// createDelay()