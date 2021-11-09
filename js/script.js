for (let i = 1; i <= 100; i++) {
    let num = i; //assegno a num il valore del contatore
    if (i % 3 == 0) {
        num = "Fizz"; //num diventa Fizz quando è multiplo di 3
    }
    if (i % 5 == 0) {
        num = "Buzz"; //num diventa Buzz quando è multiplo di 5
    }
    if ((i % 3 == 0) && (i % 5 == 0)) {
        num = "FizzBuzz"; //num diventa FizzBuzz quando è multiplo di 3 e 5
    }
    console.log(num)
}