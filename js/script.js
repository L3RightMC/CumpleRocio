document.addEventListener('DOMContentLoaded', function() {
    const texts = ["Hola Rocío", "Prepárate para algo tremendo putiloca", "Aquí vamos, agarrate esas nalgas..."];
    const durations = [3000, 5000, 5000];
    const introText = document.querySelector('.segundo');
    const introScreen = document.querySelector('.primero');
    const elmain = document.querySelector('.principal');
    let currentIndex = 0;

    function showText(index) {
        introText.textContent = texts[index];
        setTimeout(() => {
            introText.classList.add('active');
        }, 100);
        setTimeout(() => {
            introText.classList.remove('active');
            if (index < texts.length - 1) {
                setTimeout(() => {
                    showText(index + 1);
                }, 1000);
            } else {
                setTimeout(() => {
                    introScreen.classList.add('hidden');
                    elmain.classList.add('visible');
                }, 1000);
            }
        }, durations[index]);
    }
    showText(0);

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

    const bSiguiente = document.querySelectorAll('.siguiente');
    const bAnterior = document.querySelectorAll('.anterior');
    const div1 = document.querySelector('.primer');
    const div2 = document.querySelector('.segun');
    const div3 = document.querySelector('.tercer');
    const div4 = document.querySelector('.cuarter');
    const div5 = document.querySelector('.quinter'); 
    const div6 = document.querySelector('.sexting'); 
    const divs = [div1, div2, div3, div4, div5, div6];
    let divactual = 0;

    function mostrardiv(index) {
        divs.forEach((div, i) => {
            if (i === index) {
                div.classList.add('active');
            } else {
                div.classList.remove('active');
            }
        });
    }
    bSiguiente.forEach(btn => {
        btn.addEventListener('click', () => {
            if (divactual < divs.length - 1) {
                divactual++;
                mostrardiv(divactual);
            }
        });
    });
    bAnterior.forEach(btn => {
        btn.addEventListener('click', () => {
            if (divactual > 0) {
                divactual--;
                mostrardiv(divactual);
            }
        });
    });
    mostrardiv(0);
});