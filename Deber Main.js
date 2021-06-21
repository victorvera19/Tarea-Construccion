/*Sintaxis del Lenguaje
  Variables y tipos de datos*/
console.log("Funcionando...")
var numero = 20 // Se añade un valor
let num1; 
let num2 = null //esta en estado nulo
let entero = 20  
let decimal = 1.1 // Se integra como componente decimal
let string = "Hola Mundo" // Se escribe el mensaje
let booleano = false
let fecha = new Date()
let dd = fecha.getDate(), // día
    mm = fecha.getMonth() + 1, //mes
    aa = fecha.getFullYear(), //año
    hoy = `${aa}-${mm}-${dd}` // formato para crear la fecha
const pi =3.1416 //constante
console.log("Numero1 =", num1)
console.log(`Numero2= ${num2}`)
console.log (`fecha hoy=${fecha}`)
console.log(hoy) // formato para mostrar la fecha actual
let numeros = [1, 2, 3, 4, 5]; // arreglo de numeros
let colores = ["blue","black","white"]; //arreglo de colores
const json = { //Objeto json va en clave y valor 
    "nombres": ["Mario", "Eladio"], // arreglo 
    "genero": "Hombre" 
};
const teacher = { //objetos 
    nombre: 'Maria', //cualquier nombre
    genero: 'Femenino',  // genero femenino
    juegos: ['Tennis','Basketball'], //Arreglos en descripción de juegos 
    conocimientos : {   // se añade otro objeto
        lenguajes: [
            'Js', 'Python', 'Java',
            'Php',
        ],
        materias: {Nivel1:
        'Arte', Nive2: 'Base', // materias
        Nivel3: 'BaseI' }
    }
};
json.genero = "F"
teacher.nombre = 'Maria'
teacher.edad = 39
console.log('json',json,json.genero); 
console.log('Objeto', teacher.conocimientos.lenguajes[1]); 
let n1= 4  // estructuras de control
let n2= 4
if (num1 === undefined)
    console.log(`${num1}=undefined`);
if (num2 === null)
    console.log(`${num2}=null`); 

if (n1 == 0 ) {
    console.log (n1);
} else if (n1 == n2) {
    console.log(`${n1}= ${n2}`);
} else{
    console.log(`${n1}!= ${n2}`);  
}
let num= 2
let rec = num % 2;
switch (rec) { // se crea un switch
    case 0: 
        console.log(`${rec}-${num} es Par`);
        break;
    case 1:
        console.log(`${num} - ${num}es Impar`);
        break;
    
    default:
        if (isNaN(rec))
            console.log(`${rec}= Error`);
        break; 
}
console.log("Salir del Switch");   
//bucles incremento++
//while
let i = 0
console.log("Bucle While", colores)
while (i < colores.length && colores[i] != "blue") {
    console.log(i, colores[i])
    i = i + 1
}
//Bucle For usado en incrementos o decrementos 
console.log("recorrido for incremento", colores);
for (let i = 0; i < colores.length; i++) {
    console.log (i, colores[i])
}
//----------------------------in------------------------
console.log("RECORRIDO FOR IN",colores)
for (let j in colores) {
    console.log (j, colores[j])
}
//-------------------of directamente al valor----------------------
console.log("Recorrido for of", colores)
for (let color of colores) {
    console.log(color)
}
let nombr = "Marla"
for (let caracter of nombr) {
    console.log (caracter)
}
const Personas = [
    { "nombre": "Jose", "Apellidos" : // se crea mas arreglos
    "Velez" },  
    { "nombre": "Dana", "Apellidos" : // en mi caso le cambio nombres
    "Solis" },  
    { "nombre": "Raul", "Apellidos" : // y apellidos
    "Castro" },  
]
console.log("of");
for (let persona of Personas) {
    console.log(persona.nombre)
}
//----------------------recorridos de objetos iterativos-------------
console.log("Foreach");
Personas.forEach(persona => {
    if (persona.nombre != "Dana")
        console.log(persona.nombre) //Muestras todos los nombres distintos a Dana
})
//------------------------------Map---------------------------------
const persons = Personas.map(person => person.nombre)
console.log ("Map", persons);
//-----------------------------filter------------------------------ 
const person = Personas.filter (person =>  person.nombre !="Dana" )
console.log ("Filter", person);
//------------------------------find--------------------------------
const OnePerson = Personas.find (person => person.nombre === "Dana")
console.log ("Find", OnePerson);
//--------------------------------Funciones------------------------
function sumar () { //Se llama a la funcion 
    console.log(8 + 1);
}
sumar()
const suma = () => { //Suma con ArrrowFuncion
    console.log("Suma con ArrrowFuncion",8+4);
}
suma () 
//Funcion Multiplicar
function multiplicar(n1, n2) {
    return n1 * n2
}
let resp = multiplicar(4, 4)
console.log("Sin arrow",resp);
const multi = (n1, n2) => n1 * n2
console.log("Con Arrow",multi(4, 4));

function dividir(n1, n2 = 3) {
    let resp = 0
    try {  // si existe error
        resp = n1 / n2
    } catch (e) { 
        console.log("Ha ocurrido un error: ",e.message) // presenta ese mensaje 

    }
    return resp //si no existe error 
}
resp = dividir(6,6)  //parametro
console.log("Sin Arrow",resp);
resp = dividir(6, 0)
console.log(resp);
const divi = (n1, n2 = 3) => {
    let resp = 0
    try {
        resp = n1 / n2
    } catch (e) {
        console.log("Ha ocurrido un error: ",e.message)
    }
    return resp
}
console.log(divi(6)); //Se llama a la variable
 /* Fecth.Sirve para consumir api(respuesta del servidor que 
    entrega una respuesta con datos para ser consumidos)*/
fetch('https://pokeapi.co/api/v2/pokemon/')
    .then(res => res.json()) // formato para retornar json
    .then (datos => { 
    console.log(datos.results) 
    datos.results.forEach(poke=>console.log(poke.name))
    })
    .catch(error => console.log("Error del Api: ", error)) 
obtenerdatos()
//DOM = Es la estructura de HTML
let contenido =document.getElementById ('contenedor') //id del documento en HTML  
let variable = document.getElementById ('variable') // id de la variable HTML 
console.log(contenido);
console.log(variable);
variable.innerHTML= 'Enteros, Decimales, String, Boleanas, Fechas';
variable.style.color= "purple" // formato para agregar un color
variable.style.background= "#C0C0C0"   //formato para aplicar un fondo
console.log(variable);
let concepto = document.querySelector('.concepto') //Otra forma de acceder
console.log(concepto);
concepto.innerHTML = "Area de memoria"
let conceptos= document.querySelectorAll('.concepto') //Devuleve nodos con el mismo nombre
let cont = 1
conceptos.forEach(parrafo=> {
    parrafo.innerHTML= `Area de memoria#${cont}` 
    console.log(parrafo);
    cont = cont + 1
})
console.log(conceptos); //Imprime conceptos
let boton = document.getElementById('boton2') //Se accesa al Boton2 de HTML
let valor = document.getElementById('valor') //Se accesa al Boton2 de valor
boton.addEventListener('mouseover',() => {  //Se añade un evento
    console.log("Haz pasado el mouse");
})
botton.addEventListener('click',() => { //Se añade otro 
    let nodo = document.createElement("p") //Se crea otro elemento p 
    nodo.innerHTML= "nuevo elemento"
    nodo.style.color= "purple" // Se aplica un estilo
    contenido.appendChild(nodo) //Se añade al contenedor +
})
//Keypress se utiliza para hacer validaciones
valor.addEventListener('keypress', (e) => { 
    console.log(e.target.value); //Muestra el valor completo
})
