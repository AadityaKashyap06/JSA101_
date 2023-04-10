let n=3;
if(n==1){
  consoe.log("true")
}else{
  while(n!=0){
    n=n/2;
    console.log(n)
    if(n==1){
      break;
    }
  }
  console.log(n==1?"True":"False");
}