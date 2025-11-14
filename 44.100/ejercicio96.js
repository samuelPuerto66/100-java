//Samuel Puerto y Jonathan Bernal 3203084
function esJSON(s){ try{ JSON.parse(s); return true;}catch(e){return false;} }
console.log(esJSON('{"a":1}'))
