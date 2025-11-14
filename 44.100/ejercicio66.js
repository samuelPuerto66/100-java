//Samuel Puerto y Jonathan Bernal 3203084
function shuffle(a){
  for(let i=a.length-1;i>0;i--){ let j=Math.floor(Math.random()*(i+1)); [a[i],a[j]]=[a[j],a[i]]; }
}
let arr67=[1,2,3,4]; shuffle(arr67); console.log(arr67);
