quicksort = require('../algoritmos/Ordenacao')


test('Retorna o array ordenado', () => {
    expect(quicksort([35, 16, 72])).toMatchObject([16, 35, 72]);
});
  
test('Retorna o array ordenado', () => {
      expect(quicksort([10, -10, 0])).toMatchObject([-10, 0, 10]);
});