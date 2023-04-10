let arr=[1,2,3,2,1];
let sum=0;
for(let i=0;i<arr.length;i++){
  sum^=arr[i];
}
console.log(sum)