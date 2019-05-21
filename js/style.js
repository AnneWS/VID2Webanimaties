/*jslint browser: true, devel: true, eqeq: true, plusplus: true, sloppy: true, vars: true, white: true*/
/*eslint-env browser*/
/*eslint 'no-console':0*/
console.log('aarde hype');

var aarde = document.querySelector('img');

/*aarde.addEventListener('dblclick', function () {
    if (aarde.src == "../images/earth_PNG39.png") {
        aarde.src = "../images/earth_PNG-bw.png";
    } else {
        aarde.src = "../images/earth_PNG39.png";
    }
});*/

/*thanks to Joop*/
function kleurAarde() {
    aarde.classList.toggle("kleur");
}

function grijsAarde() {
    aarde.classList.remove("kleur");
}

aarde.addEventListener('click', kleurAarde);
aarde.addEventListener('dblclick', grijsAarde);


/*function keyDownTextField(e) {
    var keyCode = e.keyCode;
    var oldAngle = 0;
    console.log(oldAngle);
    var newAngle = oldAngle + 45 + "deg";
    var newAngleBack = newAngle - 45 + "deg";
    if (keyCode == 39) {
        aarde.style.transform = 'rotate(45deg)';
        console.log(newAngle);
    }
    if (keyCode == 37) {
        aarde.style.transform = 'rotate(-45deg)';
        console.log(newAngleBack);
    }
}*/

var goToTop = document.querySelector('h3');
goToTop.addEventListener('click', function() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
});



/*var oldAngle = 0;
function keyDownTextField(e) {
    var keyCode = e.keyCode;
    console.log(oldAngle);
    var newAngle = 45;
    var newAngleBack = 45;
    if (keyCode == 39) {
        aarde.style.transform = 'rotate(' + oldAngle + newAngle + "deg)";
        console.log(newAngle);
    }
    if (keyCode == 37) {
        aarde.style.transform = 'rotate(' + newAngle - newAngleBack + "deg)";
        console.log(newAngleBack);
    }
}

document.addEventListener("keydown", keyDownTextField, false);*/

function draaiAarde(e) {
    var keyCode = e.keyCode;
    if (keyCode == 39) {
        aarde.classList.remove('draaiLinks');
        aarde.classList.add('draaiRechts');
    }
    if (keyCode == 37) {
        aarde.classList.remove('draaiRechts');
        aarde.classList.add('draaiLinks');
    }
    e.preventDefault;
}

document.addEventListener('keydown', draaiAarde, false);



/*var cirkelObj = null;

function init() {
    var cirkelObj = document.getElementsByClassName('circle');
    cirkelObj.style.position= 'relative';
    cirkelObj.style.left = '0px';
}

function moveRight() {
    cirkelObj.style.left = parseInt(cirkelObj.style.left) + 10 + 'px';
}

window.onload = init;

cirkelObj.addEventListener('click', moveRight);*/

/*function verschuiven() {
    var cirkelX = 0;
    cirkelX += 5;
    cirkel.style.position = "relative";
    cirkel.style.left = cirkelX + "em";
    verschuiven.preventDefault();
}

cirkel.addEventListener('click', verschuiven);*/
var cirkel = document.querySelector('div>svg>circle');
//console.log(cirkel);

window.addEventListener("scroll", function() {
    if (window.pageYOffset >= 500){
        //console.log("check");
        cirkel.classList.add("moveright");
    }
    else {
        cirkel.classList.remove("moveright");
    }
});
