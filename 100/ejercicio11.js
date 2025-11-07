// Samuel Puerto y jona 7/11/2025
function esPrimo(n) {
  if (n < 2) return false;
  for (let i = 2; i <= Math.sqrt(n); i++) if (n % i === 0) return false;
  return true;
}
console.log("7 es primo?", esPrimo(7));
