
    // distintas formas de agarrar los elementos
    // POR EJEMPLO si queremos agarrar el name
    // 1-
    // const $form = document.querySelector('#carta-a-santa');
    // const nombre = $form.nombre.value;
    // console.log(nombre)
    // 2-
    // const nombre = document.querySelector('[name=nombre]').value
    // console.log(nombre);
    // 3-
    // (agregandole un id)
    // const nombre = document.querySelector('#nombre').value
    // const ciudad = $form.ciudad.value
    // const comportamiento = $form.comportamiento.value
    // const descripcionRegalo = $form['descripcion-regalo'].value
    // console.log(ciudad)
    // console.log(comportamiento)
    // console.log(descripcionRegalo)

    function validarNombre(nombre){

        if(nombre.length === 0){
            return 'Este campo debe tener al menos 1 caracter'
        }

        if(nombre.length >= 50){
            return 'Este campo debe tener menos de 50 caracteres'
        }
        if(!/^[a-z]+$/i.test(nombre)){
            return 'El campo nombre solo acepta letras'
        }

        return ''
    }

    function validarCiudad(ciudad){

        if(ciudad.length === 0){
            return 'Debes seleccionar una opcion de este campo'
        }

        return ''
    }

    function validarDescripcionRegalo(descripcionRegalo){

        if(descripcionRegalo.length >50){
            return 'No se permiten mas de 50 caracteres'
        }
        if(descripcionRegalo.length === 0 ){
            return 'Este campo debe tener al menos 1 caracter'
        }
        if(!/^[a-z0-9]+$/i.test(descripcionRegalo)){
            return 'Descripcion solo acepta letras y numeros'
        }

        return ''

    }

    function validarFormulario(e){
        e.preventDefault()
        const $form = document.querySelector('#carta-a-santa')
        const errorNombre = validarNombre($form.nombre.value)
        const errorCiudad = validarCiudad($form.ciudad.value)
        const errorDescripcionRegalo = validarDescripcionRegalo($form['descripcion-regalo'].value)
        
        const errores = {
            nombre: errorNombre,
            ciudad: errorCiudad,
            'descripcion-regalo':errorDescripcionRegalo
        }
        let esExito= manejarErrores(errores) === 0;
        console.log(esExito)
        if(esExito){
            $form.className='oculto'
            document.querySelector('#exito').className=''
        }
        setTimeout(()=>{window.location.href = 'file:///D:/Giuli/Desktop/GithubDesktop/r-programa/clase7(carta-a-santa)/wishlist.html'},5000)

        
    }
    const crearErroresNuevos=($errores, error, key)=>{
        $form[key].className = "error"
        const $error = document.createElement("li")
        $error.textContent = error
        $error.className='errorMessage'
        $errores.appendChild($error)
    }
    const borrarErroresAnteriores=()=>{
        const $errores = document.querySelectorAll('.errorMessage')
        for(let i=0; i<$errores.length;i++){
            $errores[i].remove()
        }

    }

    function manejarErrores(errores){
        const keys=Object.keys(errores)
        const $errores = document.querySelector('#errores')
        let cantidadErorres=0
        borrarErroresAnteriores($errores)
        console.log(keys)
        keys.forEach(function(key){
            const error = errores[key];
            if(error){
                cantidadErorres++
                crearErroresNuevos($errores, error, key)
            }
        })
        return cantidadErorres

        // forma hardcodeada de hacerlo:

        // errorNombre = errores.nombre
        // errorCiudad = errores.ciudad
        // errorDescripcionRegalo = errores.descripcionRegalo

        // if(errorNombre){
        //     $form.nombre.className = "error"
        // }else{
        //     $form.nombre.ClassName = ""
        // }

        // if(errorCiudad){
        //     console.log(errorCiudad)
        //     $form.ciudad.className = "error"
        // }else{
        //     $form.ciudad.ClassName = ""
        // }

        // if(errorDescripcionRegalo){
        //     $form['descripcion-regalo'].className = "error"
        // }else{
        //     $form['descripcion-regalo'].className = "error"
        // }
    }
    
    const $form = document.querySelector('#carta-a-santa')
    $form.onsubmit = validarFormulario