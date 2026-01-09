document.addEventListener("DOMContentLoaded", () => {
    const fondo = document.querySelector(".kittys");

    function crearCorazon() {
        const corazon = document.createElement("div");
        corazon.classList.add("corazon");
        corazon.innerHTML = "🧁";

        corazon.style.left = Math.random() * 100 + "vw";
        corazon.style.animationDuration = Math.random() * 2 + 3 + "s";

        fondo.appendChild(corazon);

        setTimeout(() => corazon.remove(), 5000);
    }
    setInterval(crearCorazon, 300);

    const btnSiguiente = document.querySelectorAll('.siguiente');
const btnAnterior = document.querySelectorAll('.anterior');
const div1 = document.querySelector('.primer');
const div2 = document.querySelector('.segun');
const div3 = document.querySelector('.tercer');
const div4 = document.querySelector('.cuarter');
const div5 = document.querySelector('.quinter'); 
const div6 = document.querySelector('.sexting'); 
console.log(div3)

const divs = [div1, div2, div3, div4, div5, div6];
let currentDiv = 0;

function mostrarDiv(index) {
    divs.forEach((div, i) => {
        if (i === index) {
            div.classList.add('active');
        } else {
            div.classList.remove('active');
        }
    });
}

    btnSiguiente.forEach(btn => {
        btn.addEventListener('click', () => {
            if (currentDiv < divs.length - 1) {
                currentDiv++;
                mostrarDiv(currentDiv);
            }
        });
    });

    // ✅ Itera sobre todos los botones Anterior
    btnAnterior.forEach(btn => {
        btn.addEventListener('click', () => {
            if (currentDiv > 0) {
                currentDiv--;
                mostrarDiv(currentDiv);
            }
        });
    });

mostrarDiv(0);
});