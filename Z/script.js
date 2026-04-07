
    function mostrarMinion() {
        let minion = document.querySelector(".minionEA")
        minion.classList.toggle("aparecer")
    }
/*    
        let minion = document.getElementById("img");
        if (minion.style.display === "none") {
            minion.style.display = "block";
        }else {
            minion.style.display = "no
        */

let minions = [
    "imagens/minion-dectective.png",
    "imagens/minion-gay.png",
     "imagens/minion.png",
    
    
]

let indice = 0

function passarMinion() {
    indice++

    if (indice >= minions.length) {
        indice = 0
    }

    document.getElementById("minionPrincipal").src = minions[indice]
}

function voltarMinion() {
    indice--

    if (indice < 0) {
        indice = minions.length - 1
    }

    document.getElementById("minionPrincipal").src = minions[indice]
}