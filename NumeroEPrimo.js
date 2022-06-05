function NumeroEPrimo(){
  function NumeroPrimo(num) {
      var numeros = new Array();
      for (var i = 0; i <= num; i++) {
        if (Eprimo(i)){
          numeros.push(i);
        }
      }
      return numeros;
    }
    function Eprimo(num) {
      for(let i = 2; i <num; i++)
        if(num % i === 0) {
            return false
        };
      return num > 1;
    }
    document.getElementById("MostrarResultados").innerHTML = (NumeroPrimo(23));
}
module.exports = NumeroEPrimo