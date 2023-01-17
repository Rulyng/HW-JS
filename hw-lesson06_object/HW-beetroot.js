let inp1 = document.querySelector('.inp1');
let inp2 = document.querySelector('.inp2'); 
let inp3 = document.querySelector('.inp3'); 
let out = document.querySelector('.out');
let out1 = document.querySelector('.out1');
let out2 = document.querySelector('.out2');
let out3 = document.querySelector('.out3');
let btn = document.querySelector('.btn');
let btn1 = document.querySelector('.btn1');
let btn2 = document.querySelector('.btn2');
let btn3 = document.querySelector('.btn3');

let car = {
    producer: 'BMW',
    model: 'Audi',
    graduationYear: 2016,
    averageSpeed: 120, 
    volumeTank: 50,
    fuelPer100km: 7,
    driver: [],
    aboutСar: function() {
return `
Producer: ${this.producer} <br>
model: ${this.model} <br>
graduation year: ${this.graduationYear} <br>
averageSpeed: ${this.averageSpeed} <br>
volumeTank: ${this.volumeTank} <br>
fuelPer100km: ${this.fuelPer100km} <br>
driver: ${this.driver} <br>

`
},
    addDriver: function(name){
        this.driver.push(name);
        
    },

 checkDriver: function(name){
    for(key in this.driver){
        if(this.driver[key].toLowerCase() == name.toLowerCase())
        return "Yes, driver exist";
    }
    return "Not exist";
},
}
// 2ver
    // checkDriver: function(name){
    //     if(this.driver.includes(name)){
    //         return "Yes, driver exist";
    //     }else{
    //                 return "Not exist";
    //             }
   
btn.onclick = () => {
    out.innerHTML = car.aboutСar();
}

btn1.onclick = () => {
    car.addDriver(inp1.value);
    inp1.value = '';
    out3.innerHTML = car.driver;
    // out3.innerHTML = typeof car.driver; 
}
    
btn2.onclick = () => {
    out1.innerHTML = car.checkDriver(inp2.value);
    inp2.value = '';
}

