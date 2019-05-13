/*jslint browser: true, devel: true, eqeq: true, plusplus: true, sloppy: true, vars: true, white: true*/
/*eslint-env browser*/
/*eslint 'no-console':0*/
console.log('aarde hype');

var aarde = document.querySelector('img');

aarde.addEventListener('dblclick', function () {
    if (aarde.src == "../images/earth_PNG39.png") {
        aarde.src = "../images/earth_PNG-bw.png";
    } else {
        aarde.src = "../images/earth_PNG39.png";
    }
});

aarde.onclick = function rotate() {
    aarde.setAttribute('style', 'transform:rotate(45deg)');
}

aarde.addEventListener('keydown', function draaien() {
    var key = event.key;
    console.log(key);
    var oldAngle = aarde.style.rotate;
    console.log(oldAngle);
    var newAngle = oldAngle + 45;
    var newAngleBack = newAngle - 45;
    if (key === 'ArrowRight') {
        newAngle;
        console.log(newAngle);
    }
    if (key === 'ArrowLeft') {
        newAngleBack;
        console.log(newAngleBack);
    }
})
/*var angle = 0;
aarde.getAttribute('transform');
console.log('Rotate: ' + angle + 'deg');*/
