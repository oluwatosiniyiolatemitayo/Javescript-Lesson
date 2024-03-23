function checkNumber() {
    const number = document.getElementById('numberInput').value;

    if (number % 2 === 0) {
        document.getElementById('result').innerText = "Even";
    } else {
        document.getElementById('result').innerText = "Odd";
    }
}
