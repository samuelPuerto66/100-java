//Samuel Puerto y Jonathan Bernal 3203084
function luhnCheck(num){
  let arr = String(num).split("").reverse().map(Number);
  let sum = arr.reduce((s,d,i)=> s + (i%2? ((d*2>9)?d*2-9:d*2) : d), 0);
  return sum%10===0;
}
console.log(luhnCheck("4532015112830366"));
