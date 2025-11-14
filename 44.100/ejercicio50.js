//Samuel Puerto y Jonathan Bernal 3203084
function fib(n){ let a=0,b=1; while(--n){ [a,b]=[b,a+b]; } return b; }
console.log(fib(8)); // 21
