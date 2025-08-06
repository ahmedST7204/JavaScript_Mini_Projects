function age() {
    // ------------------- Taking User's Birth Date ----------------------
    var d1 = document.getElementById('date').value;
    var m1 = document.getElementById('month').value;
    var y1 = document.getElementById('year').value;

    // -------------------- Taking current Year -------------------------
    var date = new Date();
    var d2 = date.getDate();
    var m2 = 1 + date.getMonth();
    var y2 = date.getFullYear();
    var month = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

    // ---------------- Leap Year Check ------------------
    if ((y2 % 4 == 0 && y2 % 100 != 0) || (y2 % 400 == 0)) {
        month[1] = 29;
    }

    if (d1 > d2) {
        d2 = d2 + month[m2 - 1];
        m2 = m2 - 1;
    }

    if (m1 > m2) {
        m2 = m2 + 12;
        y2 = y2 - 1;
    }

    var d = d2 - d1;
    var m = m2 - m1;
    var y = y2 - y1;

    let result = 'Your age is ' + y + ' Years ' + m + ' Months ' + d + ' Days';

    // ------------------ BirthDay Check ------------------------
    if (parseInt(d1) === date.getDate() && parseInt(m1) === (date.getMonth() + 1)) {
        result += "<br>🎉 Happy Birthday!";
    }

    document.getElementById('age').innerHTML = result;
}

document.addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        document.getElementById("myButton").click();
    }
});


