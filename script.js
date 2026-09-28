/* =========================================================
   CHAPTER 18
   FOR MY SWEETCAKE ❤️
   SCRIPT.JS
   ========================================================= */


/* =========================================================
   CONFIGURACIÓN
   ========================================================= */

// Fecha real de apertura:
// 1 de octubre de 2026 a las 00:00
const birthdayDate =
    new Date(2026, 9, 1, 0, 0, 0);


// =========================================================
// MODO PREVIEW
// =========================================================

// Para probar la película:
// http://127.0.0.1:5500/index.html?preview=true

const urlParams =
    new URLSearchParams(
        window.location.search
    );

const previewMode =
    urlParams.get("preview") === "true";


console.log(
    previewMode
        ? "🎬 MODO PREVIEW ACTIVADO"
        : "🔐 MODO CUMPLEAÑOS ACTIVADO"
);


/* =========================================================
   ESCENAS
   ========================================================= */

const scenes =
    document.querySelectorAll(".scene");

let currentScene = 0;


/* =========================================================
   CAMBIAR ESCENA
   ========================================================= */

function changeScene(index) {

    if (
        index < 0 ||
        index >= scenes.length
    ) {
        return;
    }


    scenes[currentScene]
        .classList.remove("active");


    currentScene = index;


    scenes[currentScene]
        .classList.add("active");

}


/* =========================================================
   CUENTA REGRESIVA
   ========================================================= */

const daysElement =
    document.getElementById("days");

const hoursElement =
    document.getElementById("hours");

const minutesElement =
    document.getElementById("minutes");

const secondsElement =
    document.getElementById("seconds");

const lockedMessage =
    document.getElementById("lockedMessage");

const unlockMessage =
    document.getElementById("unlockMessage");

const unlockButton =
    document.getElementById("unlockButton");


function updateCountdown() {

    // -----------------------------------------------------
    // SI ESTAMOS EN PREVIEW
    // -----------------------------------------------------

    if (previewMode) {

        daysElement.textContent = "00";
        hoursElement.textContent = "00";
        minutesElement.textContent = "00";
        secondsElement.textContent = "00";

        unlockCountdown();

        return;
    }


    // -----------------------------------------------------
    // MODO NORMAL
    // -----------------------------------------------------

    const now = new Date();

    const difference =
        birthdayDate - now;


    if (difference <= 0) {

        unlockCountdown();

        return;

    }


    const days =
        Math.floor(
            difference /
            (1000 * 60 * 60 * 24)
        );


    const hours =
        Math.floor(
            (difference /
                (1000 * 60 * 60)) % 24
        );


    const minutes =
        Math.floor(
            (difference /
                (1000 * 60)) % 60
        );


    const seconds =
        Math.floor(
            (difference /
                1000) % 60
        );


    daysElement.textContent =
        String(days).padStart(2, "0");

    hoursElement.textContent =
        String(hours).padStart(2, "0");

    minutesElement.textContent =
        String(minutes).padStart(2, "0");

    secondsElement.textContent =
        String(seconds).padStart(2, "0");

}


/* =========================================================
   DESBLOQUEAR CUENTA REGRESIVA
   ========================================================= */

function unlockCountdown() {

    daysElement.textContent = "00";

    hoursElement.textContent = "00";

    minutesElement.textContent = "00";

    secondsElement.textContent = "00";


    lockedMessage.style.display =
        "none";


    unlockMessage.style.display =
        "block";


    // Indicador visual solamente para ti
    if (previewMode) {

        const previewLabel =
            document.createElement("div");

        previewLabel.textContent =
            "✦ MODO PREVIEW ✦";

        previewLabel.style.position =
            "fixed";

        previewLabel.style.top =
            "15px";

        previewLabel.style.right =
            "15px";

        previewLabel.style.zIndex =
            "9999";

        previewLabel.style.padding =
            "8px 14px";

        previewLabel.style.border =
            "1px solid rgba(255,255,255,.2)";

        previewLabel.style.borderRadius =
            "20px";

        previewLabel.style.background =
            "rgba(0,0,0,.6)";

        previewLabel.style.color =
            "rgba(255,255,255,.55)";

        previewLabel.style.fontFamily =
            "Arial, sans-serif";

        previewLabel.style.fontSize =
            "9px";

        previewLabel.style.letterSpacing =
            "3px";

        document.body.appendChild(
            previewLabel
        );

    }

}


updateCountdown();


const countdownInterval =
    setInterval(
        updateCountdown,
        1000
    );


/* =========================================================
   BOTÓN COMENZAR
   ========================================================= */

unlockButton.addEventListener(
    "click",
    () => {

        changeScene(1);

    }
);


/* =========================================================
   BOTONES CONTINUAR GENERALES
   ========================================================= */

document
    .querySelectorAll(".next-button")
    .forEach(button => {

        button.addEventListener(
            "click",
            () => {

                changeScene(
                    currentScene + 1
                );

            }
        );

    });


/* =========================================================
   ESCENA 3 — 18 PÁGINAS
   ========================================================= */

const pages = [

    {
        title: "Tu sonrisa",

        text:
            "Una de esas pequeñas cosas capaces de hacer especial cualquier día."
    },

    {
        title: "Tus ocurrencias",

        text:
            "Porque contigo siempre hay algo que me hace reír."
    },

    {
        title: "Tu forma de ser",

        text:
            "Porque eres tú, con todo aquello que te hace único."
    },

    {
        title: "Tu manera de hacerme reír",

        text:
            "Incluso en los días normales, siempre consigues sacarme una sonrisa."
    },

    {
        title: "Tus pequeños detalles",

        text:
            "Porque muchas veces son las cosas pequeñas las que terminan significando más."
    },

    {
        title: "Nuestros momentos",

        text:
            "Porque cada momento contigo termina convirtiéndose en un recuerdo."
    },

    {
        title: "Tu forma de querer",

        text:
            "Porque hay maneras de demostrar cariño que no necesitan muchas palabras."
    },

    {
        title: "La confianza",

        text:
            "Porque poder compartir cosas contigo hace que todo se sienta más especial."
    },

    {
        title: "Tus sueños",

        text:
            "Porque me encanta verte imaginar todo lo que quieres conseguir."
    },

    {
        title: "Tu forma de escuchar",

        text:
            "Porque saber que puedo hablar contigo significa mucho para mí."
    },

    {
        title: "Tu sonrisa cuando estás feliz",

        text:
            "Porque verte feliz es una de esas cosas que también me hace feliz."
    },

    {
        title: "Tus abrazos",

        text:
            "Porque hay momentos en los que no hace falta decir absolutamente nada."
    },

    {
        title: "Las aventuras que nos esperan",

        text:
            "Porque todavía quedan muchísimas historias que podemos vivir."
    },

    {
        title: "Todo lo que has aprendido",

        text:
            "Porque cada experiencia te ha ayudado a convertirte en la persona que eres."
    },

    {
        title: "La persona que eres hoy",

        text:
            "Porque tienes muchísimo por delante y apenas estás comenzando."
    },

    {
        title: "Lo que todavía no sabemos",

        text:
            "Porque la vida tiene muchas sorpresas esperando por ti."
    },

    {
        title: "Los recuerdos que faltan",

        text:
            "Porque esta historia todavía tiene muchas páginas en blanco."
    },

    {
        title: "Tú. ❤️",

        text:
            "Porque después de todas estas páginas, la razón más sencilla siempre será la misma: eres tú."
    }

];


let currentPage = 0;


const bookPage =
    document.getElementById("bookPage");

const pageNumber =
    document.getElementById("pageNumber");

const pageTitle =
    document.getElementById("pageTitle");

const pageText =
    document.getElementById("pageText");

const nextPageButton =
    document.getElementById(
        "nextPageButton"
    );


function showPage(index) {

    const page =
        pages[index];


    pageNumber.textContent =
        `PÁGINA ${String(index + 1).padStart(2, "0")}`;


    pageTitle.textContent =
        page.title;


    pageText.textContent =
        page.text;


    bookPage.classList.remove(
        "new-page"
    );


    void bookPage.offsetWidth;


    bookPage.classList.add(
        "new-page"
    );


    if (
        index === pages.length - 1
    ) {

        nextPageButton.textContent =
            "CONTINUAR →";

    } else {

        nextPageButton.textContent =
            "PASAR PÁGINA →";

    }

}


nextPageButton.addEventListener(
    "click",
    () => {

        if (
            currentPage <
            pages.length - 1
        ) {

            bookPage.classList.add(
                "turning"
            );


            setTimeout(
                () => {

                    currentPage++;

                    showPage(
                        currentPage
                    );

                    bookPage.classList.remove(
                        "turning"
                    );

                },
                500
            );

        } else {

            changeScene(4);

        }

    }
);


showPage(0);


/* =========================================================
   ESCENA 4 — CONSTELACIÓN
   ========================================================= */

const stars =
    document.querySelectorAll(
        ".star-point"
    );

const constellation =
    document.getElementById(
        "constellation"
    );

const constellationLines =
    document.getElementById(
        "constellationLines"
    );

const constellationMessage =
    document.getElementById(
        "constellationMessage"
    );

const constellationNext =
    document.getElementById(
        "constellationNext"
    );


let foundStars = [];


stars.forEach(
    (star, index) => {

        star.addEventListener(
            "click",
            () => {

                if (
                    foundStars.includes(index)
                ) {
                    return;
                }


                foundStars.push(index);


                star.classList.add(
                    "found"
                );


                constellationMessage.textContent =
                    star.querySelector("span")
                        .textContent;


                if (
                    foundStars.length > 1
                ) {

                    drawConstellationLine(
                        foundStars[
                            foundStars.length - 2
                        ],
                        index
                    );

                }


                if (
                    foundStars.length ===
                    stars.length
                ) {

                    constellationComplete();

                }

            }
        );

    }
);


function drawConstellationLine(
    first,
    second
) {

    const firstStar =
        stars[first];

    const secondStar =
        stars[second];


    const containerRect =
        constellation
            .getBoundingClientRect();


    const firstRect =
        firstStar
            .getBoundingClientRect();


    const secondRect =
        secondStar
            .getBoundingClientRect();


    const x1 =
        firstRect.left +
        firstRect.width / 2 -
        containerRect.left;


    const y1 =
        firstRect.top +
        firstRect.height / 2 -
        containerRect.top;


    const x2 =
        secondRect.left +
        secondRect.width / 2 -
        containerRect.left;


    const y2 =
        secondRect.top +
        secondRect.height / 2 -
        containerRect.top;


    const line =
        document.createElementNS(
            "http://www.w3.org/2000/svg",
            "line"
        );


    line.setAttribute(
        "x1",
        x1
    );


    line.setAttribute(
        "y1",
        y1
    );


    line.setAttribute(
        "x2",
        x2
    );


    line.setAttribute(
        "y2",
        y2
    );


    constellationLines.appendChild(
        line
    );

}


function constellationComplete() {

    constellationMessage.textContent =
        "Hay personas que llegan a nuestra vida y dejan su propia constelación. ❤️";


    constellationNext.classList.remove(
        "hidden"
    );


    constellation.style.boxShadow =
        "0 0 80px rgba(255,255,255,.08)";

}


constellationNext.addEventListener(
    "click",
    () => {

        changeScene(5);

    }
);


/* =========================================================
   ESCENA 6 — RECUERDOS
   ========================================================= */

const memories = [

    {
        image: "Images/foto1.jpg",
        caption: "Un recuerdo. ❤️"
    },

    {
        image: "Images/foto2.jpeg",
        caption: "Otro momento."
    },

    {
        image: "Images/foto3.jpg",
        caption: "Otra historia."
    },

    {
        image: "Images/foto4.jpg",
        caption: "Un momento para guardar."
    },

    {
        image: "Images/foto5.jpg",
        caption:
            "Y todavía quedan muchos por crear. ❤️"
    }

];


let currentMemory = 0;


const polaroid =
    document.querySelector(
        ".polaroid"
    );

const photoFrame =
    document.querySelector(
        ".photo-frame"
    );

const memoryCaption =
    document.getElementById(
        "memoryCaption"
    );

const nextMemory =
    document.getElementById(
        "nextMemory"
    );


function showMemory(index) {

    const memory =
        memories[index];


    photoFrame.innerHTML = "";


    const image =
        document.createElement(
            "img"
        );


    image.src =
        memory.image;


    image.alt =
        "Recuerdo";


    image.onerror =
        () => {

            image.style.display =
                "none";


            const placeholder =
                document.createElement(
                    "span"
                );


            placeholder.className =
                "photo-placeholder";


            placeholder.textContent =
                "📷";


            photoFrame.appendChild(
                placeholder
            );

        };


    photoFrame.appendChild(
        image
    );


    memoryCaption.textContent =
        memory.caption;


    if (
        index ===
        memories.length - 1
    ) {

        nextMemory.textContent =
            "CONTINUAR →";

    } else {

        nextMemory.textContent =
            "SIGUIENTE →";

    }

}


nextMemory.addEventListener(
    "click",
    () => {

        if (
            currentMemory <
            memories.length - 1
        ) {

            currentMemory++;

            showMemory(
                currentMemory
            );

        } else {

            changeScene(7);

        }

    }
);


showMemory(0);


/* =========================================================
   ESCENA 7 — REGALO
   ========================================================= */

const birthdayAnswer =
    document.getElementById(
        "birthdayAnswer"
    );

const unlockGift =
    document.getElementById(
        "unlockGift"
    );

const wrongAnswer =
    document.getElementById(
        "wrongAnswer"
    );

const giftBox =
    document.querySelector(
        ".gift-box"
    );

const passwordArea =
    document.getElementById(
        "passwordArea"
    );

const giftSuccess =
    document.getElementById(
        "giftSuccess"
    );


unlockGift.addEventListener(
    "click",
    () => {

        const answer =
            birthdayAnswer.value.trim();


        if (
            answer === "18"
        ) {

            wrongAnswer.textContent =
                "";


            giftBox.classList.add(
                "open"
            );


            setTimeout(
                () => {

                    passwordArea.style.display =
                        "none";


                    giftSuccess.classList.add(
                        "active"
                    );


                    createConfetti();

                },
                900
            );

        } else {

            wrongAnswer.textContent =
                "Mmm... intenta otra vez 👀";


            birthdayAnswer.value =
                "";

        }

    }
);


birthdayAnswer.addEventListener(
    "keydown",
    event => {

        if (
            event.key === "Enter"
        ) {

            unlockGift.click();

        }

    }
);


/* =========================================================
   ESCENA 8 — 18 DESEOS
   ========================================================= */

const wishes = [

    "Que nunca dejes de soñar.",

    "Que tengas el valor para perseguir tus metas.",

    "Que encuentres felicidad en las cosas pequeñas.",

    "Que nunca tengas miedo de intentar algo nuevo.",

    "Que cada caída te enseñe algo importante.",

    "Que siempre tengas motivos para sonreír.",

    "Que nunca pierdas tu curiosidad.",

    "Que encuentres personas que te quieran de verdad.",

    "Que tengas fuerza para superar los días difíciles.",

    "Que celebres cada pequeño logro.",

    "Que nunca dejes de creer en ti.",

    "Que tengas aventuras que nunca olvides.",

    "Que puedas cumplir muchos de tus sueños.",

    "Que aprendas cosas que te hagan crecer.",

    "Que tengas muchos momentos felices.",

    "Que nunca olvides lo mucho que vales.",

    "Que esta nueva etapa te sorprenda de la mejor manera.",

    "Y que nunca olvides que todavía tienes muchísimas páginas por escribir. ❤️"

];


let currentWish = 0;


const wishNumber =
    document.getElementById(
        "wishNumber"
    );

const wishText =
    document.getElementById(
        "wishText"
    );

const wishCard =
    document.getElementById(
        "wishCard"
    );

const nextWish =
    document.getElementById(
        "nextWish"
    );


function showWish(index) {

    wishNumber.textContent =
        String(index + 1)
            .padStart(2, "0");


    wishText.textContent =
        wishes[index];


    if (
        index ===
        wishes.length - 1
    ) {

        nextWish.textContent =
            "CONTINUAR →";

    } else {

        nextWish.textContent =
            "SIGUIENTE →";

    }

}


nextWish.addEventListener(
    "click",
    () => {

        if (
            currentWish <
            wishes.length - 1
        ) {

            currentWish++;

            showWish(
                currentWish
            );

        } else {

            changeScene(9);

            startLetter();

        }

    }
);


showWish(0);


/* =========================================================
   ESCENA 9 — CARTA
   ========================================================= */

const letterText =
    document.getElementById(
        "letterText"
    );

const letterContinue =
    document.getElementById(
        "letterContinue"
    );


const letter = `

Hoy cumples 18 años, y no quería dejar pasar este día sin recordarte lo especial que eres para mí.

Me hace muy feliz poder estar a tu lado en un momento tan importante de tu vida y poder compartir contigo el comienzo de esta nueva etapa.

Deseo de todo corazón que estos 18 años traigan consigo muchísimas cosas bonitas: nuevos sueños, nuevas aventuras, aprendizajes, metas cumplidas y momentos que algún día puedas recordar con una enorme sonrisa.

Quiero que nunca dejes de creer en ti, que sigas persiguiendo todo aquello que te haga feliz y que, incluso en los días difíciles, recuerdes la persona increíble que eres y todo lo que todavía puedes lograr.

Gracias por cada momento, por cada sonrisa, por cada detalle y por todas esas pequeñas cosas que hacen que compartir momentos contigo sea tan especial.

Espero que podamos seguir creando recuerdos, riéndonos juntos y acompañándonos en cada nuevo capítulo que venga.

Hoy quiero celebrar tus 18 años, pero también celebrar a la persona que eres y a todo lo que está por venir.
Espero y deseo que pases un increible dia junto a tu familia y las personas que amas, y te sientas tan especial e importante como realmente lo eres para todos los que te aman.

Feliz cumpleaños, mi amor. ❤️

Que estos 18 sean solamente el comienzo de una etapa increíble, llena de sueños cumplidos, felicidad y muchísimas historias que todavía quedan por escribir. 
Que Dios te cuide mucho, te guie, te cuide y te bendiga todos los dias de tu vida...

Amor... quiero que siempre recuerdes... que en mi tienes un lugar seguro lleno de amor solo para ti...

`;


let letterStarted =
    false;


function startLetter() {

    if (
        letterStarted
    ) {

        return;

    }


    letterStarted =
        true;


    letterText.textContent =
        "";


    let index = 0;


    function writeLetter() {

        if (
            index <
            letter.length
        ) {

            letterText.textContent +=
                letter.charAt(index);


            index++;


            setTimeout(
                writeLetter,
                18
            );

        } else {
            letterContinue.classList.remove(
                "hidden"
            );

        }

    }


    writeLetter();

}


letterContinue.addEventListener(
    "click",
    () => {

        changeScene(10);

        createConfetti();

    }
);


/* =========================================================
   ESCENA 10 — CONFETI
   ========================================================= */

const confetti =
    document.getElementById(
        "confetti"
    );


function createConfetti() {

    confetti.innerHTML =
        "";


    for (
        let i = 0;
        i < 80;
        i++
    ) {

        const piece =
            document.createElement(
                "span"
            );


        piece.className =
            "confetti-piece";


        piece.style.left =
            Math.random() *
            100 +
            "%";


        piece.style.animationDuration =
            (3 +
                Math.random() * 3) +
            "s";


        piece.style.animationDelay =
            Math.random() * 2 +
            "s";


        piece.style.opacity =
            .4 +
            Math.random() * .6;


        confetti.appendChild(
            piece
        );

    }

}


/* =========================================================
   ESCENA 10 → 11
   ========================================================= */

const finalContinue =
    document.getElementById(
        "finalContinue"
    );


finalContinue.addEventListener(
    "click",
    () => {

        changeScene(11);

    }
);


/* =========================================================
   FINAL
   ========================================================= */

console.log(
    "🎬 CHAPTER 18 — For My Sweetcake ❤️"
);

console.log(
    previewMode
        ? "🧪 Estás viendo el MODO PREVIEW."
        : "🔐 La película está protegida hasta el 1 de octubre de 2026."
);
