

//tarea clase 2
// const operador='-'

// const sumar=(numero1, numero2)=>{
//   return numero1 + numero2
// }

// const restar=(numero1, numero2)=>{
//   return numero1 - numero2
// }

// const numero1Insertado=Number(prompt('inserta el primer numero'))
// const numero2Insertado=Number(prompt('inserta el segundo numero'))

// if(operador == '+'){
//   console.log(sumar(numero1Insertado, numero2Insertado))
// }else{
//   console.log(restar(numero1Insertado, numero2Insertado))
// }

//ejercicio clase 3
// const division=(numero1, numero2)=>{
//   return numero1 / numero2
// }
// const multiplicar=(numero1, numero2)=>{
//   return numero1 * numero2
// }
// const sumar=(numero1,numero2)=>{
//   return numero1 + numero2
// }
// const restar=(numero1, numero2)=>{
//   return numero1 + numero2
// }
// let operador = prompt('inserte un operador entre -,+,*,/')
// let num1=prompt('inserte el primero numero')
// let num2=prompt('inserte el segundo numero')

// if(operador ==='+'){
//   console.log(` el resultado de ${num1} ${operador} ${num2} es igual a ${suma(num1,num2)}`)
// }else if(operador === '-'){
//   console.log(` el resultado de ${num1} ${operador} ${num2} es igual a ${resta(num1,num2)}`)
// }else if (operador === '*'){
//     console.log(` el resultado de ${num1} ${operador} ${num2} es igual a ${multiplicar(num1,num2)}`)
// }else if(operador === '/'){
//     console.log(` el resultado de ${num1} ${operador} ${num2} es igual a ${division(num1,num2)}`)
// }else{
//   console.log('no conozco ese operador')
// }

// tarea 1 clase 3
// const MI_NOMBRE='giuliano'
// const nombreUsuario= (prompt('insertar tu nombre') || '').toLowerCase()
// const NOMBRE_PRIMO='fernando'

// if(nombreUsuario === MI_NOMBRE){
//   console.log(`hola tocayo, yo tambien me lamo ${MI_NOMBRE}`)
// } else if (nombreUsuario === NOMBRE_PRIMO){
//   console.log(`Hola ${nombreUsuario} te llamas igual que primo`)
// }else if(nombreUsuario.trim() == ''){
//       console.log('no ingresaste nigun nombre')
// } else {
//   console.log(`Hola ${nombreUsuario}`)
// }
//tarea 2 de clase 3
// const edadUsuario = Number(prompt('Insertar tu edad'))
// const MI_EDAD = 22
// if(edadUsuario > MI_EDAD){
//   console.log('tenes mas edad que yo!')
// }else if (edadUsuario < MI_EDAD){
//   console.log('tenes menos edad que yo!')
// } else if (edadUsuario === MI_EDAD){
//   console.log('tenemos la misma edad')
// }else{
//   console.log('no entendi tu respuesta')
// }
//tarea 3 de clase 3
// const usuarioTieneDocumento = (prompt('Tenes documento? responder con "si" o "no"')|| "").toLowerCase()
// if(usuarioTieneDocumento === 'si'){
//   const edadUsuario = Number(prompt('que edad tenes?'))
//   if(edadUsuario > 18){
//     console.log( 'sos mayor de edad, podes entrar al bar')
//   }else if(edadUsuario < 18){
//     console.log('no podes entrar al bar')
//   }else{
//     console.log("no entendi la respuesta de tu edad")
//   }
// }else if(usuarioTieneDocumento === 'no'){
//   console.log('no podes entrar al bar')
// } else{
//   console.log('no entendi tu respuesta')
// }
const tareaEscribiArrays = () => {
    let comidasFavoritas = ["choripan", "milanesas con papas fritas", "salame"];
    console.log(comidasFavoritas.length);
    console.log(comidasFavoritas[2]);
    comidasFavoritas[0] = "helado";
    console.log(comidasFavoritas);
};
const elMalditoFizzBuzzClasico=()=>{
//tarea de clase 4
    const MI_INICIO=1
    const MI_FINAL=50
    for(let i=MI_INICIO; i<=MI_FINAL; i=i+1){
        let multiploDeTres = i%3
        let multiploDeCinco = i%5
        if( multiploDeTres ==0 && multiploDeCinco==0){
        console.log(`FizzBuzz porq el numero es: ${i} y sus restos son: ${multiploDeTres}, ${multiploDeCinco}`)
        }else if(multiploDeTres == 0){
        console.log(`Fizz porque el numero es:${i} y su resto es: ${multiploDeTres}`)
        }else if(multiploDeCinco == 0){
        console.log(`Buzz porque el numero es:${i} y su resto es: ${multiploDeCinco}`)
        }else{
        console.log(i)
        }
    }
}

const elMalditoFizzBuzzDeNuevo=()=>{
for(let i = 1; i<=50;i++){
    let texto=''

    if(i % 3 === 0){
    texto='Fizz'
    }
    if(i % 5 === 0){
    texto = texto + 'Buzz'
    }
    console.log(texto || i)
}
}

const tareaClase4=()=>{
let contador=0
for(let i=3; i<=22;i=i+3){
    console.log(i)
}
}
const tareaClase4b=()=>{
let i =10
while(i >=1){
    console.log(i)
    i-=1
}
}

const tareaClase5=()=>{
    const miTitulo = document.querySelector('.claseEjemplo')
    console.log(miTitulo)
    console.log(miTitulo.innerText)
    miTitulo.innerText="Chau mundo"
}
const tareaClase5b=()=>{
    const mediaLinks= document.querySelectorAll('li')
    console.log(mediaLinks)
    for(let i=0; i<mediaLinks.length;i++){
        console.log(mediaLinks[i].innerText)
    }
}

const reproducirFuncion=()=>{
    tareaClase5()
    tareaClase5b()
}

reproducirFuncion()