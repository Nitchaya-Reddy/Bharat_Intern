let cel = document.getElementById('cel');
let fah = document.getElementById('fah');
let kel = document.getElementById('kel');
cel.oninput = function () {
    let f = (parseFloat(cel.value) * 9) / 5 + 32;
    fah.value = parseFloat(f.toFixed(2));
    let k = (parseFloat(cel.value) + 273.15);
    kel.value = parseFloat(k.toFixed(2));
}
fah.oninput = function () {
    let c = ((parseFloat(fah.value) - 32) * 5) / 9;
    cel.value = parseFloat(c.toFixed(2));
    let k = (parseFloat(fah.value) - 32) * 5 / 9 + 273.15;
    kel.value = parseFloat(k.toFixed(2));
}
kel.oninput = function () {
    let f = (parseFloat(kel.value) - 273.15) * 9 / 5 + 32;
    fah.value = parseFloat(f.toFixed(2));
    let c = (parseFloat(kel.value) - 273.15);
    cel.value = parseFloat(c.toFixed(2));
}