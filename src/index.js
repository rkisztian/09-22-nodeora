import 'bootstrap/dist/js/bootstrap.bundle.js';
import 'bootstrap/dist/css/bootstrap.css';

import'./main.css';


function nyeremeny() {
    document.getElementById('nyeremenyhelye').style.display = 'block';
}

document.getElementById('uzenet').addEventListener("click",nyeremeny);

console.log("Loaded");