
const Ordenacao = require("./Ordenacao");
test("Ordenacao 0 1 3 5 8 17 24 450", () => {
    expect(Ordenacao(0,1,3,5,8,17,24,450)).toBe(17);
})