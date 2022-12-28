// Мінімум:

// 1. Виконай додавання 0,1 і 0,2 добийся математично правильної відповіді.
//  

// 2.Виконай додавання рядка "1" і цифри 2 (обидві операнди повинні бути в змінних), добийся математично правильної відповіді.

// let a1 = "1";
// let b1 = 2;
// let res1 = +a1 + +b1;
// console.log(res1);

// 3.Користувач вказує обсяг флешки в Гб. Програма повинна порахувати скільки файлів розміром в 820 Мб поміщається на флешку.

let flashInGb = document.querySelector('.flashInGb');
let fileMb = 820;
let btn = document.querySelector('.btn');
let out = document.querySelector('.out');
let out1 = document.querySelector('.out1');


btn.onclick = () => {
    let flashInMb = +(flashInGb.value * 1024);
    out.innerHTML = Math.floor (flashInMb / fileMb);
    out1.innerHTML = flashInMb - out.innerHTML * fileMb;

    flashInGb.value = '';
}

// let fleshInGb = prompt('How much Gb your flash')
// let flashInMb = fleshInGb * 1024;
// let fileMb = 820;
// let resFile = Math.floor (flashInMb / fileMb);
// console.log(resFile);


// Додаткове завдання
// let flashInGb = prompt("How Much your fleshka?");
// let fileMb = 820;
// let res1  = Math.floor(flashInGb * 1024 / fileMb);
// let res2 = flashInGb * 1024 - res1 * fileMb;

// console.log(`Файлов на флешку: ${res1} шт`);
// console.log(`Залишается Вільного місця: ${res2} МБ`);



