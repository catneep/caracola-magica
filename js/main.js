const answers = [
    "Nada.",
    "No.",
    "Probablemente.",
    "Nada."
];

function ask(){
    const dialog = document.getElementById("answer");
    const loader = document.getElementById("loader");
    const button = document.getElementById("ask");
    const delay = Math.floor((Math.random() * ((2200 + 1) - 1000)) + 1000);
    const answer = answers[
        Math.floor((Math.random() * (3 + 1)))
    ];

    dialog.classList.add("hidden");
    loader.classList.remove("hidden");

    setTimeout(() => {
        dialog.classList.remove("hidden");
        loader.classList.add("hidden");
        button.textContent = "Intentar de nuevo";
        dialog.innerText = answer;

    }, delay);
}

function toggleInfo(){
    const modal = document.getElementById("credits");
    if (modal.classList.contains("hidden"))
        modal.classList.remove("hidden");
    else
        modal.classList.add("hidden");
}