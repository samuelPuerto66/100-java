//Samuel Puerto y Jonathan Bernal 3203084
function estaOrdenado(a){ for(let i=1;i<a.length;i++) if(a[i]<a[i-1]) return false; return true; }
console.log(estaOrdenado([1,2,3]));
