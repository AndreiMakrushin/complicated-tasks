// задание 1
const lang = (key, lan) => ({
    en: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
    ru:['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье'],
})[lan][key % 7];

console.log(lang(2,'en'));
console.log(lang(2, 'ru'));

//------------------------------------------------------------------------------------------------------------------

const lang1 = 'en';
if (lang1 == 'ru') {
    console.log(lang(2, 'ru'));
}else if (lang1 == 'en') {
    console.log(lang(2,'en'));
}


//-----------------------------------------------------------------------------------------------------------------------------

let lang2 = 'en';
switch (lang2) {
    case lang2 = "ru":
        console.log(lang(2,'ru'));
        break;
    case lang2 = "en":
        console.log(lang(2,'en'));
        break;

    default:
        console.log('ошибка');
        break;
}

// задание 2
const namePerson = 'Александр';
const result = namePerson == 'Артем' ? 'директор' : 'Александр' ? 'преподаватель' : 'Студент'
console.log(result);