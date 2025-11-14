//Samuel Puerto y Jonathan Bernal 3203084
let usuarios91=[{name:"Samuel"},{name:"Puerto"}];
usuarios91.map(u=>u.name==="Samuel"?{...u,name:"Puerto"}:u);
console.log(usuarios91);
