const calcularSomatorio = require('../algoritmos/Somatorio');

test('O somatório de 4, 6 e 5 é 15', () => {
    expect(calcularSomatorio([4, 6, 5])).toBe(15);
});
  
test('O somatório de -2 e 2 é 0', () => {
      expect(calcularSomatorio([-2, 2])).toBe(0);
});