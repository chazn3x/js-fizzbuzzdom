let num, box;
for (let i = 1; i <= 100; i++) {
    box = document.createElement("div"); //creo div box
    document.querySelector(".grid").append(box); //aggiungo un box nella griglia
    if (i % 15 == 0) {
        num = "FizzBuzz"; //num diventa FizzBuzz quando è multiplo di 3 e 5
        box.className = "box box-pink"; //assegno la classe .box e .box-pink al div
    } else if (i % 3 == 0) {
        num = "Fizz"; //num diventa Fizz quando è multiplo di 3
        box.className = "box box-green"; //assegno la classe .box e .box-green al div
    } else if (i % 5 == 0) {
        num = "Buzz"; //num diventa Buzz quando è multiplo di 5
        box.className = "box box-yellow"; //assegno la classe .box e .box-yellow al div
    } else {
        num = i; //assegno a num il valore del contatore
        box.className = "box"; //assegno la classe .box al div
    }
    box.innerHTML = num;
    console.log(num)
}