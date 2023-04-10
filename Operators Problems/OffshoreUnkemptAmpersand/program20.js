let arr=[1,2,3,-2];
let max=-Infinity;
let obj={};
for(let i=0;i<arr.length;i++){
  obj[-1*arr[i]]=0;
}
for(let i=0;i<arr.length;i++){
  if(max<arr[i] && obj[arr[i]]!=null){
    max=arr[i];
  }
}
console.log(max)