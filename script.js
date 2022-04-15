const resultado = document.querySelector(' .result ')

function insert(valor) {
    resultado.innerHTML += valor;
}

function clean() {
    resultado.innerHTML = '';
}

function backspace() {
    if (resultado.textContent) {
        let result = resultado.innerHTML
        resultado.innerHTML = result.substring(0, result.length - 1)
    }
}

function confirma() {
    if (resultado.textContent != 'Erro') {
        resultado.innerHTML = eval(resultado.innerHTML)
    }
}