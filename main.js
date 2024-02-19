function calculate() {
    var period = parseFloat(document.getElementById('periodInput').value);
    if (!isNaN(period) && period > 0) {
        var frequency = 1 / period;
        document.getElementById('result').innerText = "Frequency: " + frequency.toFixed(2) + " Hz";
    } else {
        document.getElementById('result').innerText = "Please enter a valid positive number for the period.";
    }
}
