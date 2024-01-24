function find() {
    var ch = parseInt(document.getElementById("opt").value);
    var x = document.getElementById("answ1");

    if (ch < 5) {
        x.style.display = (x.style.display === "none") ? "block" : "none";
    } else if (ch === 5) {
        document.getElementById("demo").innerHTML = "Exit";
        setTimeout(demos, 1000);
    } else {
        alert("Invalid choice. Please enter a valid option.");
    }
}

function calculation() {
    var ch = parseInt(document.getElementById("opt").value);
    var num1 = document.getElementById("num1").value;
    var num2 = document.getElementById("num2").value;

    if (!isValidInput(num1) || !isValidInput(num2)) {
        alert("Invalid input!!");
        return;
    }

    var n1 = parseInt(num1);
    var n2 = parseInt(num2);
    var result;

    switch (ch) {
        case 1:
            result = n1 + n2;
            break;
        case 2:
            result = n1 - n2;
            break;
        case 3:
            result = n1 * n2;
            break;
        case 4:
            result = n1 / n2;
            break;
        default:
            alert("Invalid choice. Please enter a valid option.");
            return;
    }

    document.getElementById("demo").innerHTML = result;
    clear();
    find();
}

function isValidInput(input) {
    return !(input.charAt(0) === " " || /[A-z]/.test(input) || input === "");
}

function clear() {
    document.getElementById("num1").value = "";
    document.getElementById("num2").value = "";
    setTimeout(demos, 1000);
}

function demos() {
    document.getElementById("demo").innerHTML = "";
}
