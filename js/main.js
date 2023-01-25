import { showResults, showNames, } from "./index.js";

let button = document.getElementById('btSub');

button.addEventListener('click', function main(e) {
    e.preventDefault();
    
    showResults();
    // showImg()
    showNames();
});