function contador(N,listaNota){
    var N = N; 
    var Nota = listaNota;
    var Contar = 0;
    var i = 0;

    while (i < N) {
      if (Nota[i] >= 6) {
     Contar = Contar + 1;
       }

      i = i + 1;
     }
     return (Contador);
}
    module.exports=cotador