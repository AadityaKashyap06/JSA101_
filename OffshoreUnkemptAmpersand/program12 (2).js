let obj={};
let n=29;
let val;
let index;
while(1){
  val=0;
  while(n>0){
    index=n%10;
    val+=index*index;
    n=Math.floor(n/10);
  }
  if(obj[val]!=null){
    break;
  }else{
    obj[val]=0;
    n=val;
  }
}
console.log(val==1?"Yes":"No")