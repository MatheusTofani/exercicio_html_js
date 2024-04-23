const form = document.getElementById('formulario');
const numeroAInput = document.getElementById('numero-a');
const numeroBInput = document.getElementById('numero-b');
const containerMensagemErrada = document.querySelector('.mensagem-errada');
const containerMensagemSucesso = document.querySelector('.mensagem-certa');

form.addEventListener('submit', function (e) {
    e.preventDefault();
    validateNumbers();
});

numeroAInput.addEventListener('keyup', validateNumbers);
numeroBInput.addEventListener('keyup', validateNumbers);

function validateNumbers() {
    const numeroA = parseFloat(numeroAInput.value);
    const numeroB = parseFloat(numeroBInput.value);

    const mensagemErrada = '* O numero B deve ser maior que o numero A';
    const mensagemCerta = '<b>* A leitura dos numeros esta correta</b>';

    if (isNaN(numeroA) || isNaN(numeroB)) {
        containerMensagemErrada.innerHTML = ''; 
        containerMensagemErrada.style.display = 'none';
        numeroAInput.style.border = '2px solid #ccc';
        return; 
    }

    if (numeroA >= numeroB) {
        containerMensagemErrada.innerHTML = mensagemErrada;
        containerMensagemErrada.style.display = 'block';
        numeroAInput.style.border = '1px solid red';

        containerMensagemSucesso.innerHTML = ''; 
        containerMensagemSucesso.style.display = 'none';
    } else {
        containerMensagemErrada.innerHTML = ''; 
        containerMensagemErrada.style.display = 'none';
        numeroAInput.style.border = '2px solid #ccc';
    }
}

function exibirMensagemSucesso() {
    containerMensagemSucesso.innerHTML = '<b>* A leitura dos numeros esta correta</b>';
    containerMensagemSucesso.style.display = 'block';
}

form.addEventListener('submit', function (e) {
    e.preventDefault();
    validateNumbers();
    if (!containerMensagemErrada.textContent.trim()) {
        exibirMensagemSucesso();
    }
});