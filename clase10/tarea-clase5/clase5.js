const botonCalcular = document.querySelector('#botonCalcular')
botonCalcular.onclick = function(e){
    e.preventDefault()
    const salarioAnual = Number(document.querySelector('#salario-anual').value)
    document.querySelector('#muestreo-salario').value = salarioAnual*12
}