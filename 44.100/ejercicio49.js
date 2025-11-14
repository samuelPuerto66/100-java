//Samuel Puerto y Jonathan Bernal 3203084
let arr49=[-2,3,2,-1];
let maxSoFar=arr49[0], cur=0;
for(let v of arr49){ cur = Math.max(v, cur+v); maxSoFar = Math.max(maxSoFar, cur); }
console.log("Max subarray:", maxSoFar);
