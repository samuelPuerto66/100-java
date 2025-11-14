//Samuel Puerto y Jonathan Bernal 3203084
let usuarios100 = [{user:"sam",pass:"1234"},{user:"ana",pass:"abcd"}];
function login(u,p){ return usuarios100.some(x=>x.user===u && x.pass===p); }
console.log("login sam/1234:", login("sam","1234"));
