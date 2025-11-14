//Samuel Puerto y Jonathan Bernal 3203084
function esPerfecto(n){ let s=1; for(let i=2;i<=n/2;i++) if(n%i===0) s+=i; return s===n && n!==1; }
console.log("6 perfecto?", esPerfecto(6));
