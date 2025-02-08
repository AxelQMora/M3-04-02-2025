/*
Esta es la estructura para comentarios grandes, de varias líneas

Tipos de datos
*/

// Comentarios de una sola línea

//Tipo: Number

var edad = 25
var precio = 100.51
var puntos = 0

// Tipo: String
var nombre = "Axel"
var saludo = 'hola'
var character = "Q"
var numberString = "25"

// Tipo: Boolean
var esMayor = true
var tienePermiso = false

//Tipo: Symbol (identificador único)
var identidicador1 = Symbol("id")
var identidicador2 = Symbol("id")

//Tipo: bigint (números grabdes)
var numerote = 1000000000000000000000000000000000000n //el bigint se indica con la n al final

//Tipos: null, undefined, nan
var vacio = null
var sinDefinir = undefined
var resultadoInvalido = NaN //Cuando el resultado de una operación no es un número válido

/*
    ¿Qué es console.log?
    console.log se usa para mostrar valores en la consola del navegador.
    Es útil para depurar y entender cómo funcionan las variables en el código.
*/

console.log(edad)
console.log(nombre)

/*
    ¿Qué es typeof?
    typeof nos permite conocer el tipo de dato de una variable.
    Es útil para depuración y validaciones de código.
*/

console.log(typeof edad)
console.log(typeof numberString)


