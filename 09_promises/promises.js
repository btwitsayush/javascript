// promise is a object
// in promise we have 2 parameters 1) resolve 2) reject it's simple means either promise is going to be fullfiled or rejected

// 1st way to use promise
const promisOne = new Promise(function (resolve, reject) {
    // we can perfom Database call
    // do async task
    setTimeout(() => {
      console.log("Async task is complete");
      resolve();
    }, 1000);
  });
  
  // consuming promise
  
  // ye part tb run krega jb hum promise ko resolve krlenge
  promisOne.then(function () {
    console.log("Promise consumed");
  });
  
  // 2nd
  
  // if we are not holding promise in any varibale than we can apply than directly to promise
  
  new Promise(function (resolve, reject) {
    setTimeout(() => {
      console.log("Inside promise 2nd method");
  
      resolve();
    }, 1000);
  }).then(function () {
    console.log(`inside then of 2nd method`);
  });
  
  // promise ke 3 methods bhi hai 1)then ye tb run krta hai jb promise successfull ho 2) catch ye tb run krta hai jb koi error ho 3) ye hmeshaa run krta hai
  
  // data connsumption
  const promiseThree = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({ userName: "Ayush Srivastava", email: "ayush@123.com" });
    }, 1000);
  }).then((user) => {
    console.log(user);
  });
  
  // resolve then ko connect krta hai
  // reject catch ko connect krta hai
  
  const promiseFour = new Promise((resolve, reject) => {
    setTimeout(() => {
      let error = true;
      if (!error) resolve({ firstName: "Ayush", lastName: "Srivastava" });
      else reject(`Error something is wrong`);
    }, 1000);
  });
  
  // then chaining basically upr wale then sai jo value ayege wo niche wale then ko pass ho jayege
  
  promiseFour
    .then((user) => {
      console.log(user);
      return user.firstName;
    })
    .then((userName) => {
      console.log(userName);
    })
    .catch((error) => {
      console.log(error);
    }).finally(()=>{
      console.log(`finally promises completed it either resolved or rejected `);
    })
  
  
    // Using asyncAwait
    const promiseFive=new Promise(function(resolve,reject){
  
      setTimeout(()=>{
  
      let error = true;
      if (!error) {
      resolve({ langName: "javaScript", password: "123" });
    }
      else {
      reject(`Error javaScript is wrong`);
    }
  
  
      },1000)
  
    })
    
    // async eroor handle nhi krta hai directly hme try catch block use krke usko handle krna padta hai
  
  async function consumePromiseFive(){
  try{
     const response= await promiseFive;
     console.log(response);
  }
  catch(error){
    console.log(error);
  }
    }
    consumePromiseFive();
  
  
  
  // tyring to access data through api using fetch 
  
  // await tb use krte hai jb hme pta ho ke ye kam hone mai time lgega
  // fetch use krke hum data layenge aur fetch hmesha url contain krta hai
  // fetch promise return krta hai 
  
  // async function getGitHubDAta(){
  
  //   try {
  //     // fetch ko variable mai issilye store kr rhe q ki hme pta hai ki data ko convert krna hai
  //     const response = await fetch('https://api.github.com/users/btwitsayush')
  //     // json mai convert krne ke liye hi time lgegega issilye await use kr rhe
  
  //     const data= await response.json();
  //     console.log(data);
  
  //   }
  //    catch (error) {
  //     console.log('Error is : ', error);
      
  //   }
  
  // }
  // getGitHubDAta();
  
  fetch('https://api.github.com/users/btwitsayush')
  .then((response)=>{
  return response.json();
  })
  .then((data)=>{
    console.log(data);
  })
  .catch((error)=>{
    console.log(error);
  
  })
  
  