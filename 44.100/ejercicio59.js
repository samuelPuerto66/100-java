//Samuel Puerto y Jonathan Bernal 3203084
function validarPass(p){ return typeof p==="string" && p.length>=8; }
console.log("OK?", validarPass("abc12345"));
