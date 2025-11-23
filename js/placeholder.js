function rollingPlaceholder(selector, words, speed = 1500){
    const el = document.querySelector(selector);
    if (!el) return;
    let index = 0;
    let interval;
    let paused = false;
    const parent = el.parentNode;
    const cs = getComputedStyle(el);
    if(getComputedStyle(parent).position === "static"){
        parent.style.position = "relative";
    }

    const ph = document.createElement("span");
    ph.style.position = "absolute";
    ph.style.left = el.offsetLeft + 3 + "px";
    ph.style.top = el.offsetTop + "px";
    ph.style.fontSize = cs.fontSize;
    ph.style.fontFamily = cs.fontFamily;
    ph.style.color = "#aaa";
    ph.style.pointerEvents = "none";
    ph.style.transition = "transform .35s, opacity .2s";
    ph.style.opacity = "1";

    parent.appendChild(ph);
    ph.innerText = words[0];

    function nextWord(){
        if (paused) return;
        ph.style.transform = "translateY(-150%)";
        ph.style.opacity = "0";

        setTimeout(() =>{
            index = (index + 1) % words.length;
            ph.innerText = words[index];
            ph.style.transform = "translateY(30%)";
            ph.style.opacity = "0";

            setTimeout(() =>{
                ph.style.transform = "translateY(0)";
                ph.style.opacity = "1";
            }, 20);
        }, 250);
    }

    interval = setInterval(nextWord, speed);

    el.addEventListener("input", () =>{
        if (el.value.trim() !== "") {
            paused = true;
            ph.style.opacity = "0";
        } else {
            paused = false;
            ph.style.opacity = "1";
        }
    });
}


rollingPlaceholder("#species", [
    "человек",
    "гном",
    "эльф",
    "полурослик",
    "полуэльф",
    "орк",
    "полуорк",
    "фелин",
]);

rollingPlaceholder("#class", [
    'бард',
    'варвар',
    'воин',
    'маг',
    'плут',
    'разбойник',
    'алхимик',
    'следопыт',
    'жрец',
    'чаровник',
    'охотник',
    'универсал',
    'мистик',
    'шаман',
    'паладин',
    'мультикласс'
]);

