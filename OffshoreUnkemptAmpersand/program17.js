let arr=[1,2,3,4,5];
let m=arr.sort((a,b)=>{
  return a-b;
})
let k=6;
let r=m.length-1;
let l=0;
let count=0;


while(r>l){
 let  sum=m[l]+m[r];
  if(sum<k){
  l++;
  
}else if(sum>k){
    
    r--;
}else{
    count++;
    break;
}
}
if(count==1){
  console.log(true)
}else{
  console.log(false)
}