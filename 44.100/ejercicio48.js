//Samuel Puerto y Jonathan Bernal 3203084
let nums48=[1,2,3,4,5], K=6;
let pares=[];
for(let i=0;i<nums48.length;i++) for(let j=i+1;j<nums48.length;j++) if(nums48[i]+nums48[j]===K) pares.push([nums48[i],nums48[j]]);
console.log(pares);
