function calculateSum() {
    let n = parseInt(document.getElementById("number").value);
    let result = document.getElementById("result");

    if (isNaN(n) || n < 1) {
        alert("Please enter a valid positive number");
        return;
    }

    let sum = 0;
    for (let i = 2; i <= n; i += 2) {
        sum += i;
    }

    result.innerHTML = "Sum of Even Numbers up to " + n + " is " + sum;
}