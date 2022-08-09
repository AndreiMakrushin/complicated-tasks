const days = [
  'Воскресенье',
  'Понедельник',
  'Вторник',
  'Среда',
  'Четверг',
  'Пятница',
  'Суббота'
]
const mon = [
  'Января', 'Февраля', 'Марта', 'Апреля', 'Майя', 'Июня', 'Июля', 'Августа', 'Сентября', 'Октября', 'Нояюря', 'Декабря'
]
function date(){
  let date = new Date()
  let day = date.getDay()  
  let numberDay = date.getDate()
  let month = date.getMonth()
  let year = date.getFullYear()
  let hour = date.getHours()
  let minutes = date.getMinutes()
  let second = date.getSeconds()

function nul(){
  if (hour < 10) {
    hour = '0' + hour
  }
  if (minutes < 10) {
    minutes = '0' + minutes
  }
  if (second < 10) {
    second = '0' + second
  }
  if (numberDay < 10) {
    numberDay = '0' + numberDay
  }
}
 nul()
 function numToStr(num, arrText) {
  if (num % 10 === 1 && num % 100 !== 11) { 
    return arrText[0];
  } else if (num % 10 >= 2 && num % 10 <= 4 && (num % 100 < 10 || num % 100 >= 20)) {
    return arrText[1];            
  }
  return arrText[2];
}
  document.querySelector('.time').innerHTML = numberDay + '.' + '0'+(month + 1) + '.' + year + '-' + hour +':'+ minutes +':'+ second
  document.querySelector('.times').innerHTML = 'Сегодня ' +days[day] + ' ' +numberDay + ' ' + 
  mon[month] + ' ' + year + ' Года' + ' ' + hour + numToStr(hour, [' час', ' часов', ' часа']) + ' ' + minutes + numToStr(minutes, [' минута', ' минуты', ' минут']) + ' ' + second +numToStr(second, [' секунда', ' секунды', ' секунд'])
}
setInterval(date, 1000);


