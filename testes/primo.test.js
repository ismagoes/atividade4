numeroEPrimo = require('../algoritmos/NumeroEPrimo')

test('O número 13 é primo', () => {
    expect(numeroEPrimo(13)).toBe(true);
});
  
test('O número 21 não é primo', () => {
    expect(numeroEPrimo(21)).toBe(false);
});
  