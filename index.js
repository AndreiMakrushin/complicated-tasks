
let num = ['2', '4'];
let arr = [2345, 35213, 56789, 98756, 456321, 67886, 1234567890].filter(e => num.includes(e.toString()[0]))
console.log(arr);

function isPrime(n) {
  for (let i = 2; i * i <= n; 
   i == 2 ? i++ : i += 2)
   if (n % i == 0) return false;
  return n > 1;
}
const res = [...Array(100)].reduce((a, _, i) => a.concat(isPrime(i) ? `Делители числа ${i}: 1 и ${i}` : []) , []).join('\n');
console.log(res)