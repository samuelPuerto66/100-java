// Samuel Puerto y jona 7/11/2025
function validarEmail(e){ return typeof e==="string" && e.includes("@"); }
console.log("valido?", validarEmail("user@dom.com"));
