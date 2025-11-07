// Samuel Puerto y jona 7/11/2025
let a20 = [5,2,9,1];
for (let i=0;i<a20.length;i++) for (let j=0;j<a20.length-1-i;j++)
  if (a20[j]>a20[j+1]) [a20[j],a20[j+1]]=[a20[j+1],a20[j]];
console.log(a20);
