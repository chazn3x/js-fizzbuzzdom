let num, box;
for (let i = 1; i <= 100; i++) {
    box = document.createElement("div"); //creo div box
    document.querySelector(".grid").append(box); //aggiungo un box nella griglia
    box.className = "box"; //assegno la classe .box al div
        if (i % 15 == 0) {
        num = "FizzBuzz"; //num diventa FizzBuzz quando è multiplo di 3 e 5
        box.classList.add("box-pink"); //aggiungo la classe .box-pink al box
    } else if (i % 3 == 0) {
        num = "Fizz"; //num diventa Fizz quando è multiplo di 3
        box.classList.add("box-green"); //aggiungo la classe .box-green al box
    } else if (i % 5 == 0) {
        num = "Buzz"; //num diventa Buzz quando è multiplo di 5
        box.classList.add("box-yellow"); //aggiungo la classe .box-yellow al box
    } else {
        num = i; //assegno a num il valore del contatore
    }
    box.innerHTML = num;
}