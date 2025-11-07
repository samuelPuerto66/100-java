// Samuel Puerto y jona 7/11/2025
let items = ["a","b","a","c"];
let freq = {};
items.forEach(i => freq[i] = (freq[i]||0)+1);
console.log(freq);
