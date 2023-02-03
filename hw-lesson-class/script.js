
// 1) Реалізуй клас, що описує коло. У класі повинні бути такі компоненти:

// поле, що зберігає радіус кола;
// get-властивість, яке повертає радіус кола;
// set-властивість, що встановлює радіус кола;
// get-властивість, яке повертає діаметр кола;
// метод, що обчислює площу кола;
// метод, що обчислює довжину кола.
// Продемонструй роботу властивостей і методів.

let out = document.querySelector('.out');

class Circle  {
    constructor(option){
        this.radius = option.radius
    }

    get radiusCircle(){
        this.radius;
    }

    set radiusCircle(newRadius){
        this.radius = newRadius;
    }

    get diametrCircle(){
        return 2 * this.radius;

    }

    area(){
        return 3.14 * Math.pow(this.radius, 2);
    }

    length(){
        return Math.round(2 * 3.14 * this.radius) 
    }
}

newCircle = new Circle({
    radius: 10
})


console.log(newCircle.diametrCircle);


// out.innerHTML = newCircle.area()
out.innerHTML = newCircle.length()