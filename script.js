let currentDisplay = '';
document.querySelector('#display').value = currentDisplay;
function takeNumber(a) {
    currentDisplay = currentDisplay + a;
    document.querySelector('#display').value = currentDisplay;
}

function clearDisplay() {
    currentDisplay = '';
    document.querySelector('#display').value = currentDisplay;
}

function calculation() {
    document.querySelector('#display').value = currentDisplay;
    try {
        currentDisplay = eval(currentDisplay);
    } catch (e) {
        currentDisplay = 'Error';
    }
}

function deleteLast() {
    currentDisplay = currentDisplay.slice(0, -1);
    document.querySelector('#display').value = currentDisplay;
}