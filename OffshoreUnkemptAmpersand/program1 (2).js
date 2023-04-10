arr=[[1,1,1],
    [1,0,1],
    [1,1,1]];
let n=arr.length;
let m=arr[0].length;
let colo=1;
for(let i=0;i<n;i++){
  for(let j=0;j<m;j++){
    if(arr[i][j]==0){
      arr[i][0]=0;
      if(j!=0){
        arr[0][j]=0;
      }else{
        colo=0;
      }
        
    }
  }
}
for(let i=1;i<n;i++){
  for(let j=1;j<m;j++){
    if(arr[i][j]!=0){
      if(arr[0][j]==0 || arr[i][0]==0){
        arr[i][j]=0;
      }
    }
  }
}
if(arr[0][0]==0){
  for(let i=0;i<m;i++){
    arr[0][i]=0;
  }
}
if(colo==0){
  for(let i=0;i<n;i++){
    arr[i][0]=0;
  }
}
console.log(arr);