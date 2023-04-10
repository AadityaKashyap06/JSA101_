
//brut force approach:-
let arr=[1,2,3,2,3,3,2];
let m;
for(let i=0;i<arr.length;i++){
  let count=0;
  for(let j=i;j<arr.length;j++){
    if(arr[i]==arr[j]){
      count++;
    }
  }
  if(count==Math.floor(arr.length/2)){
    m=arr[i];
    break; // withou break it will be 3 ie=Latter else first number that has frequency ==Math.floor(N/2)
  }
}
console.log(m)