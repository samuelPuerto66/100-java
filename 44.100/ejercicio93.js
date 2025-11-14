//Samuel Puerto y Jonathan Bernal 3203084
let vals=[2,4,4,4,5,5,7,9];
let mean = vals.reduce((a,b)=>a+b)/vals.length;
let varianza = vals.reduce((s,x)=>s+(x-mean)**2,0)/vals.length;
console.log("Std:", Math.sqrt(varianza));
