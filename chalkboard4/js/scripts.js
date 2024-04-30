function askQuestion() {
    var userAnswer = document.getElementById("answer").value;
    var questionDiv = document.getElementById("question");

    if (userAnswer.toLowerCase() === "regenstein") {
        questionDiv.innerHTML = "You guessed '" + userAnswer + "' and it's correct!";
    } else {
        questionDiv.innerHTML = "You guessed '" + userAnswer + "' but it's incorrect. Try again!";
    }
}

function checkNumber() {
    var numberInput = document.getElementById("numberInput").value;

    if (Number.isInteger(Number(numberInput)) && numberInput.length === 5) {

        if (parseInt(numberInput) % 2 === 0) {
            alert(numberInput + " is an even number.");
        } else {
            alert(numberInput + " is an odd number.");
        }
    } else {
        alert("Please enter a valid 5-digit number.");
    }
}
