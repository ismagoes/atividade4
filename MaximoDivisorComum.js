function MaximoDivisorComum(ValorA,ValorB){
    var ValorA = ValorA
    var ValorB = ValorB

    for(let i = ValorA; i>0; i--){
       if (ValorA % i == 0 && ValorB % i == 0){
        return (i);
       }
    }
}
module.exports = MaximoDivisorComum