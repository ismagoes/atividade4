listaMDC = require('../algoritmos/MaximoDivisorComum')

test('O MDC entre 3, 4 e 5 é 1', () => {
    expect(listaMDC([3, 4, 5])).toBe(1);
});
  
test('O MDC entre 4, 8, 24, 200 e 2 é 2', () => {
      expect(listaMDC([4, 8, 24, 200, 2])).toBe(2);
});