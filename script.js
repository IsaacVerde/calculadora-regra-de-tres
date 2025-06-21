const form = document.getElementById("form-regra-de-tres");
const resultado = document.getElementById("resultado");
// UMA VARIAVEL PARA O FORMULARIO EUMA PARA O RESULTADO

form.addEventListener("submit", function (event) {

    event.preventDefault();

  const a = Number(document.getElementById("a").value);
  const b = Number(document.getElementById("b").value);
  const c = Number(document.getElementById("c").value);
if   (a ===0){
    resultado.innerHTML = "O valor de referencia Nao pode ser zero"
    return;
}
//FORMLUMA DA REGRA DE TRES
 const x = ( b * c) / a;
 //EXIBIÇÃO DE RESULTADOS COM VARIAVEIS PARA CONCATENAR, LEMBRAR DO ASCENTO CRASEADO.
 //TO FIXED PARA ARREDONDAR PARA 2 NUMEROS DECIMAIS
 resultado.innerHTML = `<p>Resultado: = ${x.toFixed(2)}</p>`;

});
