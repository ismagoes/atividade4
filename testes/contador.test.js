contar = require('../algoritmos/contador')

test('Existem 5 números entre 0 e 5.98', () => {
    expect(contar(5.99)).toBe(5);
});
  
test('Existem 0 números entre 0 e 0.99', () => {
      expect(contar(0)).toBe(0);
});