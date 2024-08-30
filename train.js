

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

  // B- TASK

  /*function countnumber(str) {
    let count = 0;
    for (let i = 0; i < str.length; i++) {
      if (!isNaN(str[i])) {
        count++;
      }
    }
    return count;
  }
  
  console.log(countnumber("jvr23sn070t"));*/

  // C-- TASK

  //C-TASK

/*const moment = require("moment");
const time = moment().format("HH:mm");

console.log("Bizda non, pamidor, suv bor");

class shop {
  non;
  pamidor;
  suv;
  constructor(non, pamidor, suv) {
    this.non = non;
    this.pamidor = pamidor;
    this.suv = suv;
  }

  qoldiq() {
    return ` Hozir ${time} da sizda ${this.non} ta non va ${this.pamidor} ta pamidor va ${this.suv} ta suv bor;`
  }

  sotish(nomi, soni) {
    if (nomi === "non") {
      if (this.non === 0) {
        return "Non qolmadi";
      } else if (this.non >= soni) {
        this.non -= soni;
        return `Hozir ${time} da  ${soni} non oldingiz!;`
      } else {
        return "Bunday miqdorda non yoq ";
      }
    } else if (nomi === "pamidor") {
      if (this.pamidor === 0) {
        return "Pamidor qolmadi";
      } else if (this.pamidor >= soni) {
        this.pamidor -= soni;
        return `Hozir ${time} da  ${soni} pamidor oldingiz!;`
      } else {
        return "Bunday miqdorda pamidor yoq";
      }
    } else if (nomi === "suv") {
      if (this.suv === 0) {
        return "Suv qolmadi";
      } else if (this.suv >= soni) {
        this.suv -= soni;
        return `Hozir ${time} da  ${soni} suv oldingiz!;`
      } else {
        return "Bunday miqdorda suv yoq ";
      }
    } 
  }

  qabul(nomi, soni) {
    if (nomi === "non") {
      this.non += soni;
      return `Hozir ${time} da  ${soni} non oldingiz!;`
    } else if (nomi === "pamidor") {
      this.pamidor += soni;
      return `Hozir ${time} da  ${soni} pamidor oldingiz!;`
    } else if (nomi === "suv") {
      this.suv += soni;
      return `Hozir ${time} da  ${soni} suv oldingiz!;`
    } else {
      return "Mahsulot mavjud emas";
    }
  }
}

const story = new shop(15, 25, 10);
console.log(story.qoldiq());
console.log(story.qabul("pamidor", 10));
console.log(story.qoldiq());*/


//D-TASK

// TASK D

/*function checkContent(a, b) {
  let test1 = a.split("").sort().join("");
  let test2= b.split("").sort().join("");
  if (test1 === test2) {
    return true;
  }
  return false;
}

console.log(checkContent("javokhir", "rikhovaj"));*/

// TASK E

/*function checkContent(a) {
  let test = a.split("").reverse().join("");
    return test;
  }

console.log(checkContent("nothing"));*/
  
  
  // TASK F

  function findDoublers(text) {
    const finder = text.split("");
    const findeResult = finder.some((double, index) => {
      console.log(`${finder.indexOf(double)} !== ${index}`);

      return finder.indexOf(double) !== index;

    });

    return findeResult;
  }

  console.log(findDoublers("tomorrow"));