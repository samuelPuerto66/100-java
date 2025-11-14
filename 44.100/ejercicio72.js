//Samuel Puerto y Jonathan Bernal 3203084
let A73=[[1,2,3],[4,5,6],[7,8,9]];
let B73=[[9,8,7],[6,5,4],[3,2,1]];
let C73=A73.map((r,i)=>r.map((v,j)=>v+B73[i][j]));
console.log(C73);
