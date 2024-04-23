const form = document.getElementById('formulario');
const numeroA = document.getElementById('numero-a');
const numeroB = document.getElementById('numero-b');

const mensagemCerta = 'Os números são válidos';
const mensagemErrada = 'Os números não são válidos';

form.addEventListener('submit', function(event) {
    event.preventDefault();
    respostas(parseInt(numeroA.value), parseInt(numeroB.value));
});

function respostas(a, b) {
    if (b > a) {
        const containerMensagemSucesso = document.querySelector('.mensagem-certa');
        containerMensagemSucesso.innerHTML = mensagemCerta;
        containerMensagemSucesso.style.display = 'block';
        document.querySelector('.mensagem-erro').style.display = 'none';
    } else {
        const containerMensagemErro = document.querySelector('.mensagem-erro');
        containerMensagemErro.innerHTML = mensagemErrada;
        containerMensagemErro.style.display = 'block';
        numeroB.style.border = '1px solid red';
        document.querySelector('.mensagem-certa').style.display = 'none';
    }
}