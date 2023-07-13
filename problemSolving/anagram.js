function validAnagram(str1,str2){
  // add whatever parameters you deem necessary - good luck!
  if(str1.length!=str2.length){
      return false
  }
  let counter1 ={};
  let counter2 ={};
  for(let i of str1){
      counter1[i] = (counter1[i]||0)+1;
      
  }
  for(let i of str2){
      counter2[i] = (counter2[i]||0)+1;
  }
  
  for(let key in counter1){
      if(!(key in counter2)){
          return false;
      }
      if(counter1[key]!=counter2[key]){
          return false;
      }
  }
  return true;
}








