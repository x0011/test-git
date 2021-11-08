"use strict";

let resArray = {};

resArray.name = prompt('Введите ваше имя', '');
resArray.phone = prompt('Введите ваш номер телефона', '');
resArray.age = Number(prompt('Введите ваш возраст', ''));

if(resArray.age < 18) {
    alert('Извините, вам запрещен доступ к сайту');
}else{
    alert('Добро пожаловать на сайт');
    document.write("Привет, "+ resArray.name + "!");
    console.log(typeof(resArray.age));
}

//Добавил комментарий sdsad