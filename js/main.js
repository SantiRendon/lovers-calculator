import { renderResults } from "./index.js";

let buttonSubmit = document.getElementById('btSub')

buttonSubmit.addEventListener('click', function main(e) {
    e.preventDefault();
    
    renderResults();
});