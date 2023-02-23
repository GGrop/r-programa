document.querySelector('#siguiente').onclick = function(e){
    e.preventDefault()

    borrarIntegrantes()
    crearIntegrantes()
}

const borrarIntegrantes=()=>{
    const $integrantes = document.querySelectorAll('.integrante')
    for(let i=0; i<$integrantes.length; i++){
        $integrantes[i].remove()
    }
}
const crearIntegrantes=()=>{
    const numeroIntegrantes= Number(document.querySelector('#cantidad-integrantes').value)
    if(numeroIntegrantes>0){
        mostrarBotonCalcular()
    }
    for(let i=0; i<numeroIntegrantes; i++){
        crearIntegrante(i)
    }
}
const mostrarBotonCalcular=()=>{
    document.querySelector('#calcular').className = ''
}
const crearIntegrante=(indice)=>{
    const $divIntegrante = document.createElement("div")
    $divIntegrante.className = 'integrante'

    const $label = document.createElement("label")
    $label.textContent = `Edad del integrante N°${indice+1}`

    const $input = document.createElement("input")
    $input.type = "number"

    $divIntegrante.appendChild($label)
    $divIntegrante.appendChild($input)

    document.querySelector('#integrantes').appendChild($divIntegrante)
}

document.querySelector('#calcular').onclick = function(e){
    e.preventDefault()
    const edades= obtenerEdadesIntegrantes()
    mostrarEdad('mayor',CalcularEdadMayor(edades))
    mostrarEdad('menor',CalcularEdadMenor(edades))
    mostrarEdad('promedio',CalcularEdadPromedio(edades))
    mostrarResultados()
}

const obtenerEdadesIntegrantes=()=>{
    const $integrantes = document.querySelectorAll('.integrante input')
    const edades=[]
    for(let i=0; i<$integrantes.length;i++){
        if($integrantes[i].value !=0){
            edades.push(Number($integrantes[i].value))
        }
    }
    return edades
}

const CalcularEdadMayor=(edades)=>{
    let edadMayor= edades[0]
    for(let i=0; i<edades.length;i++){
        if(edades[i]>edadMayor){
            edadMayor=edades[i]
        }
    }
    return edadMayor
}
const CalcularEdadMenor=(edades)=>{
    let edadMenor= edades[0]
    for(let i=0; i<edades.length;i++){
        if(edades[i]<edadMenor){
            edadMenor=edades[i]
        }
    }
    return edadMenor

}
const CalcularEdadPromedio=(edades)=>{
    let acumulador= 0
    for(let i=0; i<edades.length;i++){
        acumulador += edades[i]
    }
    return (acumulador/edades.length)
}

const mostrarEdad=(tipo, resultado)=>{
    document.querySelector(`#${tipo}`).value = resultado
}

const mostrarResultados=()=>{
    document.querySelector('#resultados').className = ''
}

document.querySelector('#reset').onclick = function(e){
    e.preventDefault()
    document.querySelector('#resultados').className = 'hidden'
}
