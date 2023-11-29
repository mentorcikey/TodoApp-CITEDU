const userRegisterStorage = JSON.parse(localStorage.getItem("userSignUp"))

if (!userRegisterStorage) {
    window.location.href = "register.html"
}

// loader 

const container = document.querySelector("div.container")
const loader = document.querySelector("div.loader")

container.style.display = "none"

setTimeout(function () {
    container.style.display = "block"
    loader.style.display = "none"
}, 2000)

// Feature logout 

const p = document.querySelector("p.username")
p.innerHTML = userRegisterStorage.name

const buttonLogout = document.querySelector("div.user button")

buttonLogout.addEventListener("click", function () {
    localStorage.removeItem("userSignUp")
    window.location.href = "register.html"
})

// Feature slider 

let slides = document.querySelectorAll('.slide-container');
let index = 0;

function next() {
    slides[index].classList.remove('active');
    index = (index + 1) % slides.length;
    slides[index].classList.add('active');
}

function prev() {
    slides[index].classList.remove('active');
    index = (index - 1 + slides.length) % slides.length;
    slides[index].classList.add('active');
}

// toggle sidebar

let menu = document.querySelector('#menu-bar');
let navbar = document.querySelector('.navbar');

menu.onclick = () => {
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
}
