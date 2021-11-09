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
  
  