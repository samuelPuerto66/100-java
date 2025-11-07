// Samuel Puerto y jona 7/11/2025
let chars="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
let pass = Array.from({length:8},()=>chars[Math.floor(Math.random()*chars.length)]).join("");
console.log("Pass:", pass);
