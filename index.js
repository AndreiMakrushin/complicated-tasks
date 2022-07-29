//1 задание
const num = 266219; 

//2 задание
const convert = num.toString().split("");          
const multiply = convert.reduce((acc, rec) => acc * rec);

//3 задание
const degree = multiply ** 3;    

//4 задание
const first2 =degree.toString().split("");
const arr = first2.slice(0,2);
const last = Number(arr.join(''));

//консоль
console.log(multiply, degree, last)
