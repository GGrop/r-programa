function probarValidarNombre() {
console.assert(
    validarNombre('') === 'Este campo debe tener al menos 1 caracter',
    'Validar nombre no validó que el nombre no sea vacío',
);

console.assert(
    validarNombre(
        '111111111111111111111111111111111111111111111111111111111111111111111111111111111111111') ===
    'Este campo debe tener menos de 50 caracteres',
    'Validar nombre no validó que el nombre sea menor a 50 caracteres',
);
console.assert(
    validarNombre('12345678') === 'El campo nombre solo acepta letras',
    'Validar nombre no valido que el nombre solo acepta letras',
)

console.assert(
    validarNombre('Giuliano') === '',
    'validar nombre fallo con un nombre valido'
)

}
function probarValidarCiudad(){
    console.assert(
        validarCiudad('') === 'Debes seleccionar una opcion de este campo',
        'validar ciudad no valido que haya elegido una ciudad',
    )
    console.assert(
        validarCiudad('Entre Rios') === '',
        'validar ciudad fallo con una opcion valida'
    )
} 

function probarValidarDescripcionRegalo(){

    console.assert(
        validarDescripcionRegalo('aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa') === 
        'No se permiten mas de 50 caracteres',
        'validar descipcion regalo no valido que hubieran menos de 250 caracteres',
    )
    console.assert(
        validarDescripcionRegalo('') === 'Este campo debe tener al menos 1 caracter',
        'validar descripcion fallo al validar la descripcion'
    )
    console.assert(
        validarDescripcionRegalo('Regalo') === '',
        'validar descripcion fallo con una descripcion correcta'
    )
    console.assert(
        validarDescripcionRegalo('.,.,.') === 'Descripcion solo acepta letras y numeros',
        'validar descripcion fallo al validar que descripcion solo contenga letras y numeros'
    )
}

probarValidarNombre();
probarValidarCiudad();
probarValidarDescripcionRegalo();
