function testeSenhaValida(password) {
    const tamanhoDaSenha = password.length >= 8; //se tem pelo menos 8 caracteres
    const contemNumeros = /\d/.test(password); //se tem pelo menos um número
    const verificaMaiusculaEMinuscula = /[a-zA-Z]/.test(password); //se pelo menos uma letra seja ela maiúscula ou minúscula
    return tamanhoDaSenha && contemNumeros && verificaMaiusculaEMinuscula; //true = atende false = se não atender
}

function testeEmailValido(emailUsuario) {
    const verificador = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; //verifica o formato básico de um email
    return verificador.test(String(emailUsuario).toLowerCase()); //true = se o email corresponder false = se não for
}

function testeTemperaturaValida(temperatura) {
    return (temperatura * 9/5) + 32; //Convertendo os Celsius para Fahrenheit
}

module.exports = { testeEmailValido, testeTemperaturaValida, testeSenhaValida };
