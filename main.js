document.getElementById('form-number').addEventListener('submit', function(event) {
    event.preventDefault();

const campoA = parseFloat(document.getElementById('campoA').value);
const campoB = parseFloat(document.getElementById('campoB').value);
const messageDiv = document.getElementById('message');

if (campoB > campoA) {
    messageDiv.textContent = 'O formulário está válido!';
    messageDiv.className = 'message valid';
} else {
    messageDiv.textContent = 'O campo B deve ser maior que o campo A.';
    messageDiv.className = 'message invalid'
}
});