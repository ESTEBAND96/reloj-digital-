function time() {
    let date = new Date();
    let h = date.getHours();
    let m = date.getMinutes();
    let s = date.getSeconds();
    let session = "AM";

    if (h === 0) {
        h = 12;       
    }
    if (h > 12) {
        h = h - 12;
        session = "PM";
    }

    h = (h < 10) ? "0" + h : h;
    m = (m < 10) ? "0" + m : m;
    s = (s < 10) ? "0" + s : s;

    let digitaltime = h + ":" + m + ":" + s + " " + session;
    document.getElementById("myclock").innerHTML = digitaltime;
}

// Llama a la función una vez para que muestre la hora inmediatamente
time();
// Configura el intervalo para que se actualice cada segundo
setInterval(time, 1000);