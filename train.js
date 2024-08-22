

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

  function countnumber(str) {
    let count = 0;
    for (let i = 0; i < str.length; i++) {
      if (!isNaN(str[i])) {
        count++;
      }
    }
    return count;
  }
  
  console.log(countnumber("jvr23sn070t"));
  
  
  