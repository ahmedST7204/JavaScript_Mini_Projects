var meter = document.getElementById('meter');
var centimeter = document.getElementById('centimeter');
var inches = document.getElementById('inches')
var centimeters = document.getElementById('centimeters')
var feet = document.getElementById('feet');
var inch = document.getElementById('inch');
var kilometers = document.getElementById('kilometers');
var meters = document.getElementById('meters');
var liter = document.getElementById('liter')
var mililiter = document.getElementById('mililiter')

// -------------------Meter--------------------
meter.addEventListener('input', function(){
    let m = this.value;
    let cm = m*100;
    centimeter.value = cm;
});

// -----------------Centimeter--------------------
centimeter.addEventListener('input', function(){
    let c = this.value;
    let m = c/100;
    meter.value = m;
});

// ----------------Inches----------------------
inches.addEventListener('input', function(){
    let ins = this.value;
    let cms = ins*2.54;
        if(!Number.isInteger(cms)){
            cms = cms.toFixed(2);
    }
    centimeters.value = cms;
});

// ----------------Centimeters-------------------
centimeters.addEventListener('input', function(){
    let cms = this.value;
    let ins = cms/2.54;
     if(!Number.isInteger(ins)){
        ins = ins.toFixed(2);
    }
    inches.value = ins;
});

// ------------------Feet----------------------
feet.addEventListener('input', function(){
    let f = this.value;
    let i = f*12;
    inch.value = i;
});

// -------------------Inch----------------------
inch.addEventListener('input', function(){
    let i = this.value;
    let f = i/12;
    if(!Number.isInteger(f)){
        f = f.toFixed(2);
    }
    feet.value = f;
});

// -----------------KiloMeters-------------------
kilometers.addEventListener('input', function(){
    let km = this.value;
    let ms = km*1000;
    meters.value = ms;
});

// -------------------Meters----------------------
meters.addEventListener('input', function(){
    let ms = this.value;
    let km = ms/1000;
    kilometers.value = km;
});

// ---------------------Liter-----------------------
liter.addEventListener('input', function(){
    let l = this.value;
    let ml = l*1000;
    mililiter.value = ml;
});

// -------------------Mililiter----------------------
mililiter.addEventListener('input', function(){
    let ml = this.value;
    let l = ml/1000;
    liter.value = l;
});
