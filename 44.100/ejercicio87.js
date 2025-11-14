//Samuel Puerto y Jonathan Bernal 3203084
function titleCase(s){ return s.split(" ").map(w=>w.charAt(0).toUpperCase()+w.slice(1)).join(" "); }
console.log(titleCase("hola mundo"));
