//Samuel Puerto y Jonathan Bernal 3203084
function memoFib(){ const cache={0:0,1:1}; return n=>cache[n] ?? (cache[n]=memoFib()(n-1)+memoFib()(n-2)); } 
