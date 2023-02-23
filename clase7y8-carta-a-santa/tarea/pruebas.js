function probarIngresoCantidadFamiliares(){

    console.assert(
        validarCantidadFamiliares('') === 'No puede dejar vacio o insertar letras en este campo',
        'Validar cantidad familiares no esta validad que cantidad familia sea vacio'
    )
    console.assert(
        validarCantidadFamiliares('1.5') === 'El campo cantidad familia solo acepta numeros enteros como valor',
        'Validar cantidad familiares no esta validad que cantidad familia sea un numero entero'
    )
    console.assert(
        validarCantidadFamiliares('5') === '',
        'Validar cantidad familia no esta validando una respuesta correcta'
    )
}

function probarIngresoEdades(){

    console.assert(
        validarEdadesIntegrantes('') === 'No puede dejar vacio o insertar letras en este campo',
        'Validar edades no esta validad que cantidad familia sea vacio'
    )
    console.assert(
        validarEdadesIntegrantes('1.5') === 'En los campos de edades de integrantes solo acepta numeros enteros como valor',
        'Validar edades no esta validad que cantidad familia sea un numero entero'
    )
    console.assert(
        validarEdadesIntegrantes('5') === '',
        'Validar edades no esta validando una respuesta correcta'
    )
}

probarIngresoEdades()