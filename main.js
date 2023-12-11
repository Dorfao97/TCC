// navbar

var ul = document.querySelector('nav ul');
var menuBtn = document.querySelector('menu-btn i');

function menuShow() {
    if (ul.classList.contains('open')) {
        ul.classList.remove('open');
    } else {
        ul.classList.add('open');
    }
}
// fim

// slide conteudo

let count = 1;
document.getElementById("radio1").checked = true;

setInterval(function () {
    nextImage();
}, 5000)

function nextImage() {
    count++;
    if (count > 4) {
        count = 1;
    }

    document.getElementById("radio" + count).checked = true;

}
// fim


// botão voltar 

// const btn = document.getElementById("btnTop")

// btn.addEventListener("click", function () {
//     window.scrollTo(0, 0)
// })

// document.addEventListener('scroll', ocultar)

// function ocultar() {
//     if (window.scrollY > 10) {
//         btn.style.display = "flex"
//     } else {
//         btn.style.display = "none"
//     }
// }

// ocultar()

// fim