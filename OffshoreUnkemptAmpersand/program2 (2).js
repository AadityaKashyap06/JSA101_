let arr=[
  [1,2,3,4],
  [5,6,7,8],
  [9,10,11,12],
  [13,14,15,16]
];
//transposing the matrix
for(let i=0;i<=arr.length-1;i++){
  for(let j=i+1;j<arr.length;j++){
    //swapping method
  [arr[i][j],arr[j][i]]=[arr[j][i],arr[i][j]]
    
  }
}

for(let i=0;i<arr.length;i++){
  arr[i]=arr[i].reverse();
}
console.log(arr)
