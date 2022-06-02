fibonacci = require('../algoritmos/Fibonacci')

test('Os 5 primeiros números são os corretos', () => {
    expect(fibonacci(5)).toMatchObject([ 0, 1, 1, 2, 3 ]);
});
  
test('Os 10 primeiros números são os corretos', () => {
      expect(fibonacci(10)).toMatchObject([0, 1, 1, 2, 3, 5, 8, 13, 21, 34]);
});