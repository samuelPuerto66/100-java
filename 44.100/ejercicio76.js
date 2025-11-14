//Samuel Puerto y Jonathan Bernal 3203084
function mcd(a,b){ while(b){ [a,b]=[b,a%b]; } return Math.abs(a); }
console.log(mcd(48,18));
