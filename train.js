console.log("Jack Ma maslahatlari");
const list = [
    "yosh talaba bo'ling",// 0-20
    "tog boshliq tanlang va koproq xato qiling", // 20-30
    "uzingizga ishlashni boshlang", // 30-40
    "siz kuchli bo'lgan narsani qiling", // 40-50
    "yoshlarga investitsiya qiling" ,// 50-60
    "endi dam oling, foydasi yoq", //60
];

// Callback functionlar
/*function helpme (a,callback) {
    if(typeof a !== "number") callback("insert a number",null);
    else if(a <= 20) callback (null, list[0]);
    else if(a > 20 && a <= 30) callback (null, list[1]);
    else if(a > 30 && a <= 40) callback (null, list[2]);
    else if(a > 40 && a <= 50) callback (null, list[3]);
    else if(a > 50 && a <= 60) callback (null, list[4]);
    else {
       setInterval(function () {
        callback(null, list[5]);
       }, 3000);   
    }
}*/

// ASYNC FUNCTION lar 
 async function helpme (a) {
    if(typeof a !== "number") throw new Error("insert a number");
    else if(a <= 20) return list[0];
    else if(a > 20 && a <= 30) return  list[1];
    else if(a > 30 && a <= 40) return  list[2];
    else if(a > 40 && a <= 50) return  list[3];
    else if(a > 50 && a <= 60) return  list[4];
    else {
       //return new Promise((resolve, reject) => {
        //setInterval(() =>   
         //{
          //  resolve(list[5]);
       // }, 2000);
      // });
        setTimeout(function () {
        return list[5];
       }, 5000);   
    }
}

/*console.log("passed here 0");
helpme(50, (err, data) => {
    if(err) console.log("ERROR", err);
    else {
        console.log("answer:", data)
    }
});
console.log("passed here 1");*/

//Then Catch uslubi
/*console.log("passed here 0");
helpme(60)
.then(data => {
console.log("answer:", data);
})
.catch(err => {
console.log("ERROR:", err);
});
console.log("passed here 1");*/

// Async/await
async function run() {
    let answer = await helpme(60);
    console.log(answer);
   //answer = await helpme(35);
    //console.log(answer);
    //answer = await helpme(20)
    //console.log(answer);
}
run();


// A-TASK

/*function atask(e, word) {
    let hisob = 0;
  
    for (let i = 0; i < word.length; i++) {
      if (word[i] === e) {
       
        hisob++;
      }
    }
    
    return hisob;
  }
  
  console.log(atask("e", "engineer"));*/