//Samuel Puerto y Jonathan Bernal 3203084
function simDados(n=1000){
  let freq=[0,0,0,0,0,0];
  for(let i=0;i<n;i++) freq[Math.floor(Math.random()*6)]++;
  return freq;
}
console.log(simDados(100));
