let arr=[1,2,3,4,4,6,7];
let repeating="";
let sum=0;
for(let i=0;i<arr.length;i++){
  sum^=arr[i];
  if(sum==0){
    repeating=arr[i];
  }
}
console.log(repeating);