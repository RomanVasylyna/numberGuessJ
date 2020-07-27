


/*
1.Цикл While.
let i = 0;
while(i < 10) {
alert(i);
i++;
}

while (i) – более краткий вариант while (i != 0):


2.Цикл Do While
let i = 0;
do{
alert(i);
i++;
}
while(i < 10);

3.Цикл For
for(let i = 1; i < 11; i++) {
alert(i);
}

Выполнить начало
let i = 0;
// Если условие == true → Выполнить тело, Выполнить шаг
if (i < 3) { alert(i); i++ }
// Если условие == true → Выполнить тело, Выполнить шаг
if (i < 3) { alert(i); i++ }
// Если условие == true → Выполнить тело, Выполнить шаг
if (i < 3) { alert(i); i++ }
// ...конец, потому что теперь i == 3

break - прерываем цикл досрочно
continue - прервать текущий шаг и перейти на следующий

 1) if (i % 2 == 0) continue

 2)  if (i % 2) {
    alert( i );
  }

  Метки (для прерывания вложенных циклов)
  labelName: for (...) { - ставится перед циклом
  ...
}


let names = [];

outer : for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
    let input = prompt(`Введите имя`, '');
    if(!input) break outer;
    names.push(input);
  }
}

alert(names);



Switch Case
let a = 2 + 2;

switch (a) {
  case 3:
    alert( 'Маловато' );
    break;
  case 4:
    alert( 'В точку!' );
    break;
  case 5:
    alert( 'Перебор' );
    break;
  default:
    alert( "Нет таких значений" );
}



Функции :
Желательно сводить использование глобальных переменных к минимуму.
В современном коде обычно мало или совсем нет глобальных переменных.
Хотя они иногда полезны для хранения важнейших «общепроектовых» данных.



Если параметр не указан, то его значением становится undefined.
Мы можем указать параметр по-умолчанию
function showPizda(person, pizda = 'покажи пизду') {
alert(`${person}, ${pizda}`);
}

showPizda('Алина');

Также возможно передать в параметр функцию
function showMessage(from, text = anotherFunction()) {
  // anotherFunction() выполнится только если не передан text
  // результатом будет значение text
}

function showMessage(from, text = anotherFunction()) {
return from + ':' +text;
}


function anotherFunction() {
return 'Anus';
}

alert(showMessage('My name is', 'Igor'));



Функция – это действие. Поэтому имя функции обычно является глаголом.
Оно должно быть простым, точным и описывать действие функции, чтобы программист,
который будет читать код, получил верное представление о том, что делает функция.

Функция должна делать только то, что явно подразумевается её названием.
И это должно быть одним действием.

Функции должны быть короткими и делать только что-то одно. Если это что-то большое,
имеет смысл разбить функцию на несколько меньших. Иногда следовать этому правилу непросто, но это определённо хорошее правило.



Function Declaration :
function sayHi() {
  alert( "Привет" );
}

Function Expression :
let sayHi = function() {
  alert( "Привет" );
};

Нет необходимости в ; в конце блоков кода и синтаксических конструкций,
которые их используют, таких как if { ... }, for { }, function f { } и т.д.

Функции-«колбэки»
Ключевая идея в том, что мы передаём функцию и ожидаем, что она вызовется обратно
(от англ. «call back» – обратный вызов) когда-нибудь позже, если это будет
необходимо.

Функции стрелки
let func = (arg1, arg2, ...argN) => expression

Режим "Use Strict"
Нет никакого способа отменить use strict
Нет директивы типа "no use strict", которая возвращала бы движок к старому
поведению.

Как только мы входим в строгий режим, отменить это невозможно.

"use strict"; - должен стоят в начале кода

Выполнение кода можно также приостановить с помощью команды debugger прямо изнутри самого кода:

Debugging JS
В коде можно использовать такую штуку как debugger, это остановит выполнение кода



Объекты
Создаем объект двумя способами :
let user = new Object(); // синтаксис "конструктор объекта"
let user = {};  // синтаксис "литерал объекта"

Вместо name:name мы можем написать просто name:

Мы можем использовать только строки и символы в качестве ключей свойств.
Все другие типы данных будут автоматически преобразованы к строке.

"key" in object - проверяем есть ли такой ключ в обьекте (выдает true/false)

Цикл «for…in»
Для перебора всех свойств объекта используется цикл for..in.
Этот цикл отличается от изученного ранее цикла for(;;).

for (key in object) {
  // тело цикла выполняется для каждого свойства объекта
}

for(let key in obj) {
alert(key);
alert(obj[key]);
}

Телефонные коды идут в порядке возрастания, потому что они являются целыми числами:
1, 41, 44, 49.

Таким образом, чтобы решить нашу проблему с телефонными кодами, мы можем
схитрить, сделав коды не целочисленными свойствами. Добавления знака "+"
перед каждым кодом будет достаточно.



Сравнение объектов
Операторы равенства == и строгого равенства === для объектов работают одинаково.

Два объекта равны только в том случае, если это один и тот же объект.


«Символ» представляет собой уникальный идентификатор.
Создаются новые символы с помощью функции Symbol():

Символы гарантированно уникальны. Даже если мы создадим множество символов с
одинаковым описанием, это всё равно будут разные символы. Описание – это просто
метка, которая ни на что не влияет.

this - это сам обьект

*/

"use strict";


/*
function addEvent() {
let btns = document.querySelectorAll('.btn');
for(let i = 0; i < btns.length; i++) {
btns[i].addEventListener('click', changeBg);
}
}


function changeBg() {
switch (this.innerHTML) {
  case 'Green':
  document.documentElement.style.cssText = 'background-color:green';
  break;
  case 'Gray':
  document.documentElement.style.cssText = 'background-color:gray';
  break;
}
}

addEvent();

*/




/*
//Constructor
function Book(title, author, year) {
this.title = title;
this.author = author;
this.year = year;
}

//getSummary
Book.prototype.getSummary = function() {
return `${this.title} was written by
${this.author} in ${this.year}`;
}

//getAge
Book.prototype.getAge = function() {
const years = new Date().getFullYear() - this.year;
return `${this.title} is ${years} years old.`;
}

//revise/changeYear
Book.prototype.revise = function(newYear) {
this.year = newYear;
this.revise = true;
}


const book1 = new Book('Book One', 'John Doe', '2013');
const book2 = new Book('Book Two', 'Jane Doe', '2016');

console.log(book1);
book1.revise('2020');
console.log(book1);
*/


/*
//Constructor
function Book(title, author, year) {
this.title = title;
this.author = author;
this.year = year;
}

//getSummary
Book.prototype.getSummary = function() {
return `${this.title} was written by
${this.author} in ${this.year}`;
}

//Magazine Constructor
function Magazine(title, author, year, month) {
  Book.call(this, title, author, year);

  this.month = month;
}


//Inherit Prototype
Magazine.prototype = Object.create(Book.prototype);

//Instantiate Magazine Object
const mag1 = new Magazine('Mag One', 'John Doe', '2020', 'Jan');

//Use Magazine Constructor
Magazine.prototype.constructor = Magazine;


console.log(mag1);
console.log(mag1.getSummary());
*/



//Object of Protos
/*
const bookProtos = {
getSummary : function() {
  return `${this.title} was written by
  ${this.author} in ${this.year}`;
},
getAge : function() {
  const years = new Date().getFullYear() - this.year;
  return `${this.title} is
  ${years} years old.`;
}
}
*/

/*
//Вешаем ивент на чекбокс при загрузке страницы
function addEvent() {
document.querySelector('.check').addEventListener('click', checkStatus);
}

//Проверяем чекнут ли чекбокс
function checkStatus() {
(this.checked) ? displayDivTranslit() : alert(false);
}


//Выводим в див транслит
function displayDivTranslit() {

let textarea = document.querySelector('textarea').value.split('');
  let translit = {
		'а': 'a', 'б': 'b', 'в': 'v', 'г': 'g', 'д': 'd', 'е': 'e', 'ё': 'e', 'ж': 'zh',
		'з': 'z', 'и': 'i', 'й': 'j', 'к': 'k', 'л': 'l', 'м': 'm', 'н': 'n',
		'о': 'o', 'п': 'p', 'р': 'r','с': 's', 'т': 't', 'у': 'u', 'ф': 'f', 'х': 'h',
		'ц': 'c', 'ч': 'ch', 'ш': 'sh', 'щ': 'sh','ъ': ' ',
		'ы': 'y', 'ь': ' ', 'э': 'e', 'ю': 'yu', 'я': 'ya'
	};

//Проверяем пустой ли textarea
if(document.querySelector('textarea').value != '') {
document.querySelector('#display').innerHTML = runLoopTranslit(textarea, translit);
document.querySelector('textarea').value == '';
} else {
document.querySelector('.check').checked == false;
alert('Поле не може быть пустым!');
}
}


function runLoopTranslit(textarea, translit) {
  let newArr = [];
  for(let i = 0; i < textarea.length; i++) {
    for(let key in translit) {
    if(textarea[i] == key) {
    newArr.push(translit[key]);
    }
    }
  }
  return newArr.join('');
}


/*
function displayRus() {
let div = document.querySelector('#display');
let textarea = document.querySelector('textarea');
textarea.value = div.innerHTML;
div.innerHTML = '';

//let div = document.querySelector('textarea').value.split('');
  let translit = {
		'а': 'a', 'б': 'b', 'в': 'v', 'г': 'g', 'д': 'd', 'е': 'e', 'ж': 'zh',
		'з': 'z', 'и': 'i', 'й': 'j', 'к': 'k', 'л': 'l', 'м': 'm', 'н': 'n',
		'о': 'o', 'п': 'p', 'р': 'r','с': 's', 'т': 't', 'у': 'u', 'ф': 'f', 'х': 'h',
		'ц': 'c', 'ч': 'ch', 'ш': 'sh', 'щ': 'sh','ъ': ' ',
		'ы': 'y', 'ь': ' ', 'ю': 'yu', 'я': 'ya'
	};
  //document.querySelector('textarea').value = runLoopRus(div, translit);
}




function runLoopRus(textarea, translit) {
  let newArr = [];
  for(let i = 0; i < textarea.length; i++) {
    for(let key in translit) {
    if(textarea[i] == translit[key]) {
    newArr.push(key);
    }
    }
  }
  return newArr.join('');
}
*/

let random = getRandomNum(1, 100);

function addEvent() {
runTimer();
document.querySelector('input').addEventListener('keypress', checkInput);
}

function checkInput() {
if (event.keyCode == 13) guessNum();
}

function guessNum() {
if (document.querySelector('input').value < random) {
alert('Enter Bigger Number');
} else if(document.querySelector('input').value > random) {
alert('Enter Smaller Number');
} else if (document.querySelector('input').value == random) {
youWin();
}
}

function youWin() {
let input = document.querySelector('input');
input.style.cssText = 'background-color:green;color:white';
input.disabled = true;
document.querySelector('.result').innerHTML = 'You have won!';
document.querySelector('.result').style.cssText = 'color:green;font-weight:bold';
alert('You won!');
clearTimeout(1);
}

function youLost() {
let input = document.querySelector('input');
input.style.cssText = 'background-color:red;color:white';
input.disabled = true;
document.querySelector('.result').innerHTML = 'You have lost! Time is up!';
document.querySelector('.result').style.cssText = 'color:red;font-weight:bold';
alert('You lost!');
}

function runTimer() {
setInterval(function(){
startCount();
}, 1000);
}

function startCount() {
document.querySelector('.timer').innerHTML --;
if (document.querySelector('.timer').innerHTML == 0) {
youLost();
clearTimeout(1)
};
}

function getRandomNum(min, max) {
return Math.floor(Math.random() * (max - min) + min);
}





/*
Найти совпадение текстареа и русского массива а потом русский поменять на англ
Трепачев Задачи :

Дан textarea. Пусть в него вводится текст.
Сделайте так, чтобы по потери фокуса под текстареа вывелось сообщение о том,
сколько в этом тексте слов/символов/пробелов. По клику на чекбокс показывать
либо скок символов либо скок слов.

addEventText();
addEventCheck();

function addEventCheck() {
let checkboxes = document.querySelectorAll('input');
for(let i = 0; i < checkboxes.length; i++) {
checkboxes[i].addEventListener('click', displayStats);
}
}

function displayStats() {
(this.checked && this.classList == "checkboxOne") ? document.querySelector('.pOne').classList.remove('d-none') : document.querySelector('.pOne').classList.add('d-none');
(this.checked && this.classList == "checkboxTwo") ? document.querySelector('.pTwo').classList.remove('d-none') : document.querySelector('.pTwo').classList.add('d-none');
(this.checked && this.classList == "checkboxThree") ? document.querySelector('.pThree').classList.remove('d-none') : document.querySelector('.pThree').classList.add('d-none');
}

function addEventText() {
let textarea = document.querySelector('textarea');
textarea.addEventListener('blur', howManyWords);
}

function howManyWords() {
let regEx = this.value.match(/[a-zA-Z]+/g);
let span = document.querySelector('.one');
(regEx != null) ? span.innerHTML = regEx.length : span.innerHTML = 0;
howManySymbols(this);
howManySpaces(this);
}

function howManySymbols(str) {
let regEx = str.value.match(/\w/g);
let span = document.querySelector('.two');
(regEx != null) ? span.innerHTML = regEx.length : span.innerHTML = 0;
}

function howManySpaces(str) {
let spaces = str.value.match(/\s/g);
let span = document.querySelector('.three');
(spaces != null) ? span.innerHTML = spaces.length : span.innerHTML = 0;
}



Пусть даны два textarea.
Пусть в первый текстареа вводится текст на русском языке.
Сделайте так, чтобы по потери фокуса этот текст преобразовался в транслит
и вывелся во втором текстареа.


addEvent();

function addEvent() {
document.querySelector('#rus').addEventListener('blur', displayTranslit);
document.querySelector('#eng').addEventListener('blur', displayRus);
}

function displayTranslit() {
let textarea = this.value.split(''); //привет
  var translit = {
		'а': 'a', 'б': 'b', 'в': 'v', 'г': 'g', 'д': 'd', 'е': 'e', 'ё': 'e', 'ж': 'zh',
		'з': 'z', 'и': 'i', 'й': 'j', 'к': 'k', 'л': 'l', 'м': 'm', 'н': 'n',
		'о': 'o', 'п': 'p', 'р': 'r','с': 's', 'т': 't', 'у': 'u', 'ф': 'f', 'х': 'h',
		'ц': 'c', 'ч': 'ch', 'ш': 'sh', 'щ': 'sh','ъ': ' ',
		'ы': 'y', 'ь': ' ', 'э': 'e', 'ю': 'yu', 'я': 'ya'
	};
  (this.value != '') ? document.querySelector('#eng').value = runLoopTranslit(textarea, translit) : alert('Поле не може быть пустым!');
}

function displayRus() {
let textarea = this.value.split(''); //privet
  var translit = {
		'а': 'a', 'б': 'b', 'в': 'v', 'г': 'g', 'д': 'd', 'е': 'e', 'ж': 'zh',
		'з': 'z', 'и': 'i', 'й': 'j', 'к': 'k', 'л': 'l', 'м': 'm', 'н': 'n',
		'о': 'o', 'п': 'p', 'р': 'r','с': 's', 'т': 't', 'у': 'u', 'ф': 'f', 'х': 'h',
		'ц': 'c', 'ч': 'ch', 'ш': 'sh', 'щ': 'sh','ъ': ' ',
		'ы': 'y', 'ь': ' ', 'ю': 'yu', 'я': 'ya'
	};
  (this.value != '') ? document.querySelector('#rus').value = runLoopRus(textarea, translit) : alert('Поле не може быть пустым!');
}



function runLoopTranslit(textarea, translit) {
  let newArr = [];
  for(let i = 0; i < textarea.length; i++) {
    for(let key in translit) {
    if(textarea[i] == key) {
    newArr.push(translit[key]);
    }
    }
  }
  return newArr.join('');
}


function runLoopRus(textarea, translit) {
  let newArr = [];
  for(let i = 0; i < textarea.length; i++) {
    for(let key in translit) {
    if(textarea[i] == translit[key]) {
    newArr.push(key);
    }
    }
  }
  return newArr.join('');
}


*/
