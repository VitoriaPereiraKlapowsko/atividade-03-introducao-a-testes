const { testeEmailValido, testeTemperaturaValida, testeSenhaValida } = require('./funcoes');

test('Verificando se os requisitos da senha são válidos', () => {
    expect(testeSenhaValida('senhateste0')).toBe(true); // Aqui seria a senha válida
    expect(testeSenhaValida('abcdefghijklmnopqrstuvwxyz')).toBe(false); 
    expect(testeSenhaValida('123456789')).toBe(false); 
});

test('Verificando se o email é válido', () => {
    expect(testeEmailValido('vitoriapereiraklapowsko@gmail.com')).toBe(true); //Aqui seria o email que é valido
    expect(testeEmailValido('Email Inválido')).toBe(false);
});

test('Verificando se a temperatura é valida', () => {
    expect(testeTemperaturaValida(0)).toBe(32); // 0°C eu quero que ele seja convertido para 32°F
    expect(testeTemperaturaValida(100)).toBe(212); //100°C eu quero que seja convertido para 212°F
});


