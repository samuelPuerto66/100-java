//Samuel Puerto y Jonathan Bernal 3203084
let notas=[{v:5,w:2},{v:4,w:1}];
let totalW = notas.reduce((s,n)=>s+n.w,0);
let promedio = notas.reduce((s,n)=>s + n.v*n.w,0)/totalW;
console.log(promedio);
