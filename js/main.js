const answers = [
    "Nada.",
    "Nada.",
    "Nada.",
    "No.",
    "Probablemente."
];

function ask(){
    const dialog = document.getElementById("answer");
    const loader = document.getElementById("loader");
    const button = document.getElementById("ask");
    const delay = Math.floor((Math.random() * ((2200 + 1) - 1000)) + 1000);
    const answer = answers[Math.floor((Math.random() * (4 + 1)))];

    dialog.classList.add("hidden");
    loader.classList.remove("hidden");

    setTimeout(() => {
        dialog.classList.remove("hidden");
        loader.classList.add("hidden");
        button.textContent = "Intentar de nuevo";
        dialog.innerText = answer;

    }, delay);
}