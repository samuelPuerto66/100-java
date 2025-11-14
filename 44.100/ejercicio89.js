//Samuel Puerto y Jonathan Bernal 3203084
function cesar(str,shift=3){ return str.replace(/[a-z]/gi,c=>String.fromCharCode((c.charCodeAt(0)+(c<='Z'?65:97)- (c<='Z'?65:97)+shift)%26 + (c<='Z'?65:97))); }
console.log(cesar("abc"));
