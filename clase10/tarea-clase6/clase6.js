document.querySelector('#siguiente').onclick = function(e){
    e.preventDefault()
    const numeroIntegrantes= Number(document.querySelector('#cantidad-integrantes').value)
    const errorCantidadFamiliares = validarCantidadFamiliares(numeroIntegrantes)
    manejarErroresIngreso(errorCantidadFamiliares)
    if(!errorCantidadFamiliares){
        borrarIntegrantes()
        crearIntegrantes(numeroIntegrantes)
    }
}

const manejarErroresIngreso=(error)=>{
    const ingreso = document.querySelector('#ingreso').id
    borrarErroresAnteriores()
    crearErroresNuevos(error,ingreso)
}


const validarCantidadFamiliares=(cantidadFamiliares)=>{
    if(cantidadFamiliares <=0){
        return 'No puede dejar vacio o insertar letras en este campo'
    }else if(!/^(\+|-)?\d+$/.test(cantidadFamiliares)){
        return 'El campo cantidad familia solo acepta numeros enteros como valor'
    }
    return ''
}

const validarEdadesIntegrantes=(edadesIntegrantes)=>{

    if(edadesIntegrantes <=0){
        return 'No puede dejar vacio o insertar letras en este campo'
    }else if(!/^(\+|-)?\d+$/.test(edadesIntegrantes)){
        return 'En los campos de edades de integrantes solo acepta numeros enteros como valor'
    }
    return ''
}

const borrarIntegrantes=()=>{
    const $integrantes = document.querySelectorAll('.integrante')
    for(let i=0; i<$integrantes.length; i++){
        $integrantes[i].remove()
    }
}
const crearIntegrantes=(numeroIntegrantes)=>{
    if(numeroIntegrantes>0){
        mostrarBotonCalcular()
    }
    for(let i=0; i<numeroIntegrantes; i++){
        crearIntegrante(i)
    }
}
const mostrarBotonCalcular=()=>{
    document.querySelector('#calcular').classList.remove('hidden');
}
const crearIntegrante=(indice)=>{
    const $divIntegrante = document.createElement("div")
    $divIntegrante.className = 'integrante'
    $divIntegrante.id = `edadIntegrante${indice}`

    const $label = document.createElement("label")
    $label.textContent = `Edad del integrante N°${indice+1}`

    const $input = document.createElement("input")
    $input.type = "number"
    $input.id = `edadIntegrante${indice}`
    $input.className="form-control"

    $divIntegrante.appendChild($label)
    $divIntegrante.appendChild($input)

    document.querySelector('#integrantes').appendChild($divIntegrante)
}

document.querySelector('#calcular').onclick = function(e){
    e.preventDefault()
    const edadesData= obtenerEdadesIntegrantes()
    let esExito = manejarErrores(edadesData.errores) === 0
    console.log(esExito)
    if(esExito){
        mostrarEdad('mayor',CalcularEdadMayor(edadesData.edades))
        mostrarEdad('menor',CalcularEdadMenor(edadesData.edades))
        mostrarEdad('promedio',CalcularEdadPromedio(edadesData.edades))
        mostrarResultados()
    }
}

const obtenerEdadesIntegrantes=()=>{
    const $integrantes = document.querySelectorAll('.integrante input')
    const edadesIntegrantes = []
    const erroresEdadesIntegrantes = {}
    $integrantes.forEach(function($integrante){
        let campoNombre = $integrante.id
        let CampoEdad = Number($integrante.value)
        let Error = validarEdadesIntegrantes(CampoEdad)
        edadesIntegrantes.push(CampoEdad)
        erroresEdadesIntegrantes[campoNombre] = Error
    })
    const edadesData = {
        edades : edadesIntegrantes,
        errores: erroresEdadesIntegrantes
    }
    return edadesData
}

const manejarErrores=(errores)=>{
    const keys=Object.keys(errores)
    let cantidadErrores = 0
    borrarErroresAnteriores()
    keys.forEach(function(key){
        const error = errores[key]
        if(error){
            cantidadErrores++
            crearErroresNuevos(error,key)
        }
    })
    return cantidadErrores
}

const borrarErroresAnteriores=()=>{
    const $errores = document.querySelectorAll('.error')
    $errores.forEach(function(error){
        error.remove()
    })
}

const crearErroresNuevos=(error,key)=>{
    const $error = document.createElement('label')
    $error.textContent = error
    $error.className = 'error'
    document.querySelector(`#${key}`).appendChild($error)
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
    const $integrantes = document.querySelectorAll('.integrante')
    $integrantes.forEach(function(integrante){
        integrante.remove()
    })
    document.querySelector('#calcular').className = 'btn btn-primary hidden mt-3'
}

