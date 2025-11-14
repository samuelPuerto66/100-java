//Samuel Puerto y Jonathan Bernal 3203084
let mat=[[1,2,3],[4,5,6],[7,8,9]];
let diag = mat.reduce((s,r,i)=>s + r[i],0);
console.log("Diagonal:", diag);
