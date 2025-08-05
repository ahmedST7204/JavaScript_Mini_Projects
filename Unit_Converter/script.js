var meter = document.getElementById('meter');
var centimeter = document.getElementById('centimeter');
var inches = document.getElementById('inches');
var centimeters = document.getElementById('centimeters');
var feet = document.getElementById('feet');
var inch = document.getElementById('inch');
var kilometers = document.getElementById('kilometers');
var meters = document.getElementById('meters');
var liter = document.getElementById('liter');
var mililiter = document.getElementById('mililiter');

// --------------------- Meter ------------------------
meter.addEventListener('input', function(){
    let m = this.value;
    let cm = m*100;
    centimeter.value = cm;
});

// -------------------- Centimeter ----------------------
centimeter.addEventListener('input', function(){
    let cm = this.value;
    let m = cm/100;
        if(!Number.isInteger(m)){
        m = m.toFixed(2);
    }
    meter.value = m;
});

// ------------------- inches --------------------
inches.addEventListener('input', function(){
    let ins = this.value;
    let cms = ins*2.54;
    centimeters.value = cms;
});

// -------------------- Centimeters ----------------------
centimeters.addEventListener('input', function(){
    let cms = this.value;
    let ins = cms/2.54;
        if(!Number.isInteger(ins)){
        ins = ins.toFixed(2);
    }
    inches.value = ins;
});

// -------------------- Centimeter ----------------------
feet.addEventListener('input', function(){
    let f = this.value;
    let i = f*12;
    inch.value = i;
});

// ----------------------- Inch -------------------------
inch.addEventListener('input', function(){
    let i = this.value;
    let f = i/12;
        if(!Number.isInteger(f)){
        f = f.toFixed(2);
    }
    feet.value = f;
});

// -------------------- Kilometers ----------------------
kilometers.addEventListener('input', function(){
    let kms = this.value;
    let ms = kms*1000;
    meters.value = ms;
});

// ----------------------- Meter ----------------------------
meters.addEventListener('input', function(){
    let ms = this.value;
    let kms = ms/1000;
        if(!Number.isInteger(kms)){
        kms = kms.toFixed(2);
    }
    kilometers.value = kms;
});

// -------------------------- Liter ------------------------------
liter.addEventListener('input', function(){
    let l = this.value;
    let ml = l*1000;
    mililiter.value = ml;
});

// ------------------------ Mililiter ---------------------------
mililiter.addEventListener('input', function(){
    let ml = this.value;
    let l = ml/1000;
    if(!Number.isInteger(l)){
        l = l.toFixed(2);
    }
    liter.value = l;
});
