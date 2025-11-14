//Samuel Puerto y Jonathan Bernal 3203084

let A=[[1,2],[3,4]], B=[[2,1],[0,5]];
let C = A.map((row,i)=>row.map((v,j)=>v+B[i][j]));
console.log(C);
