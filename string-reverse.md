let str = 'i love javascript';

let fStr = '';
for(let i=str.length-1;i>=0;i--){
fStr = fStr+ str[i];
}

console.log(str.split('').reverse().join(''));
console.log(fStr)
fStr = ''
var s = str.split(' ');
for(let i=s.length-1;i >=0;i--){
    fStr = fStr+ s[i] + ' ';
}

console.log(fStr.trim())