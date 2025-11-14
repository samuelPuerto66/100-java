//Samuel Puerto y Jonathan Bernal 3203084
function primosHasta(n){
  let isPrime = Array(n+1).fill(true); isPrime[0]=isPrime[1]=false;
  for(let p=2;p*p<=n;p++) if(isPrime[p]) for(let q=p*p;q<=n;q+=p) isPrime[q]=false;
  return isPrime.map((v,i)=>v?i:null).filter(Boolean);
}
console.log(primosHasta(30));
