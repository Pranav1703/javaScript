function sumNum(num){
  if(num==1){
    return 1;
  }
  return num + sumNum(num-1);
}
