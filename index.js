
const isNumber = function (num) {
  return !isNaN(parseFloat(num)) && isFinite(num)  
}
do {
  screenPrice = +prompt('Сколько будет стоить данная работа?');
} while (!isNumber(screenPrice));

console.log(screenPrice);

