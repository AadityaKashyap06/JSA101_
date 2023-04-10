let arr=[
  [1,2,3,4],
  [5,1,2,3],
  [9,5,1,2]
];//toplitz matrix or not
flag=false;
for(let i=0;i<arr.length-1;i++){
  for(let j=0;j<arr[0].length-1;j++){
    if(arr[i][j]!==arr[i+1][j+1]){
      flag=true;
      break;
    }
  }
  if(flag){
    break;
  }
}
console.log(flag==false?"Yes":"No")
