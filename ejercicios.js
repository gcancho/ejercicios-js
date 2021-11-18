const imprimirAsteriscos = () =>{
  const asteriscos = '************************************'
  return console.log(asteriscos)
}

//Ejercicio : Programa una función que valide si una palabra, es un palíndromo (que se lee igual en un sentido que en otro), pe. mifuncion("Salas")

// Funcion para saber si una palabra es palídroma
const palabraPalidroma = (cadena) =>{

    let palabra = cadena.toLowerCase()
    //Convirtiendo la cadena a arreglo por cada letra con el metodo split()
    let arregloLetras = palabra.split('')

    let j=0
    for (let i = 0; i < arregloLetras.length; i++) {
        if (arregloLetras[0+i] === arregloLetras[arregloLetras.length-1-i]){
          j++
        }
    }
    if (j === arregloLetras.length) {
      return console.log('Es una palabra palíndroma')
    } else {
      return console.log('No es una palabra palíndroma')
    }

  }

  palabraPalidroma('Otto')

imprimirAsteriscos()

const invertirCadena = (cadena) =>{
  if(!cadena) return console.warn('No ingresó nigun texto')
  let texto = cadena
  let arregloTextoInvertida = texto.split("").reverse()
  return console.log(arregloTextoInvertida)
}

invertirCadena('Hola mundo')

imprimirAsteriscos()


// Ejercicio : Programa una función que elimine cierto patrón de caracteres de un texto dado, pe. miFuncion("xyz1, xyz2, xyz3, xyz4 y xyz5", "xyz") devolverá  "1, 2, 3, 4 y 5.
// Logré hacer el ejercicio, pero solo cuando los caracteres a eliminar empiezan desde la posicion 0 :(

const eliminarCaracteres = (cadena, caracEliminados) =>{
  if(!cadena) return console.log('No ingresó ninguna cadena')
  if(!caracEliminados) return console.log('No ingresó caracteres a eliminar')
  let arr = cadena.split(',');

  let arregloFinal = []

  for (let i = 0; i < arr.length; i++) {
    if(arr[i].substring(0,caracEliminados.length) === caracEliminados){
      let valor = arr[i].substring(caracEliminados.length,arr[0].length)
      arregloFinal.push(valor)
    }else{
      return console.log('Los caracteres a eliminar no se encuentran en la cadena')
    }
  }
  return console.log(arregloFinal.join())
}

eliminarCaracteres('xyz1,xyz2,xyz3,xyz4,xyz5','xyz')


// Ejercicio : Programa una función que elimine cierto patrón de caracteres de un texto dado, pe. miFuncion("xyz1, xyz2, xyz3, xyz4 y xyz5", "xyz") devolverá  "1, 2, 3, 4 y 5.

const eliminarCaracteres = (cadena,caracteres) =>{
  if(!cadena) return console.log('No ingresó ninguna cadena')
  if(!caracteres) return console.log('No ingresó caracteres a eliminar')

  let patron = caracteres
  // La g significa que buscará todas las concidencias, si no hubiera g solo buscaria la primera
  let expReg = new RegExp(patron,'g')

  if(expReg.test(cadena)){
    return console.log(cadena.replace(expReg,''))
  }
}

eliminarCaracteres('xyz1,xyz2,xyz3,xyz4,xyz5','xyz')
eliminarCaracteres('peru ganó con goles de cuevita, lapadula y carrillo','o')
