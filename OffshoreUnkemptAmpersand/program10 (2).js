let a=3;
let b=4;
let c=1;
console.log(a>b && a>c?"a is greatest":b>c&&b>a?"b is greatest":c>a&&c>b?"c is greatest":'all are same');
// alternate way
// console.log(Math.max(a,b,c))