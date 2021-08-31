console.log("tarea 1 Katherine Coto | Modulo 4");

console.log("Ejercicio 1");
//1. Escriba una función que reciba un contador, y un valor y cree un arreglo
// con la cantidad de valores que dice el contador.

var newArray = [];
function createArray(contador, valor) {
  for (let i = 0; i < contador; i++) {
    newArray.push(valor);
  }
}

createArray(3, "k");
console.log(newArray);

console.log(
  "----------------------------------------------------------------------"
);

console.log("Ejercicio 2");
//2. Escriba una función que le dé vuelta a un arreglo
var arrayNormal = [1, 2, 3, 4, 5];
var arrayReverse = [];
function revertirArreglo(arreglo) {
  for (let index = arreglo.length - 1; index >= 0; index--) {
    arrayReverse.push(arreglo[index]);
  }
}

revertirArreglo(arrayNormal);
console.log(arrayReverse);

console.log(
  "----------------------------------------------------------------------"
);

console.log("Ejercicio 3");
//Escriba una función que reciba dos arreglos y diga si son iguales o no.

var iguales = false;
function revisarIgualdadArreglos(arreglo1, arreglo2) {
  if (arreglo1.length == arreglo2.length) {
    for (let index = 0; index < arreglo1.length; index++) {
      if (arreglo1[index] == arreglo2[index]) {
        iguales = true;
      } else {
        iguales = false;
        break;
      }
    }
  }
  return iguales;
}

// Ejemplo
const arr1 = [1, 2];
const arr2 = [1, 2, 4];

console.log(revisarIgualdadArreglos(arr1, arr2));

console.log(
  "----------------------------------------------------------------------"
);

console.log("Ejercicio 4");
//Escriba una función que reciba un arreglo de pares llave/valor y devuelva un objeto

function ObjetoLlaveValor(arreglo) {
  var newObject = new Object();

  for (var key in arreglo) {
    var value = arreglo[key];
    newObject[value[0]] = value[1];
  }
  return newObject;
}

// Ejemplo
const arregloLlaveValor = [
  ["nombre", "Luis"],
  ["apellido", "Cascante"],
];

console.log(ObjetoLlaveValor(arregloLlaveValor));
/* Espero que retorne
    {
    nombre: 'Luis',
    apellido: 'Cascante'
    }
    */

console.log(
  "----------------------------------------------------------------------"
);

console.log("Ejercicio 5");
// Escriba una función que reciba un arreglo y devuelva un arreglo sin elementos
// duplicados, PERO no pueden usar el new Set() de JS

function removerDuplicados(arreglo) {
  var newArray5 = [];
  for (let index = 0; index < arreglo.length; index++) {
    if (!newArray5.includes(arreglo[index])) {
      newArray5.push(arreglo[index]);
    }
  }
  return newArray5;
}

// Ejemplo
const arreglo = [1, 2, 3, 1, 2];
console.log(removerDuplicados(arreglo));

console.log(
  "----------------------------------------------------------------------"
);

console.log("Ejercicio 6");
//6. Escriba una función que reciba dos arreglos y devuelva la intersección. devolver los
// elementos que están en los dos arreglos.

function encontrarInterseccion(arreglo1, arreglo2) {
  var interseccion = [];
  for (let index = 0; index < arreglo1.length; index++) {
    if (arreglo2.includes(arreglo1[index])) {
      interseccion.push(arreglo1[index]);
    }
  }
  return interseccion;
}
// Ejemplo
const array6A = [1, 2, 3, 4];
const array6B = [3, 4, 5, 6];
console.log(encontrarInterseccion(array6A, array6B));
// Espero que retorne [3,4]

console.log(
  "----------------------------------------------------------------------"
);

console.log("Ejercicio 7");
//7.Escriba una función que reciba un variable y diga si es un arreglo.

function esArreglo(variable) {
  var isArray = false;
  if (Array.isArray(variable)) {
    isArray = true;
  }
  return isArray;
}

// Ejemplo
const variable = [];
console.log(esArreglo(variable));
// Espero que retorne true

console.log(
  "----------------------------------------------------------------------"
);

console.log("Ejercicio 8");
//8. Escriba una función que reciba un arreglo y lo clone, es decir,
// devuelva un arreglo igual

function clonarArreglo(arreglo) {
  var newArray8 = [];
  for (let index = 0; index < arreglo.length; index++) {
    newArray8.push(arreglo[index]);
  }
  return newArray8;
}
// Ejemplo
const arreglo8 = [1, 2, 3, 4];
console.log(clonarArreglo(arreglo8));

console.log(
  "----------------------------------------------------------------------"
);

console.log("Ejercicio 9");
// 9. Escriba una función que reciba un arreglo de strings y
// devuelva todos los strings concatenados.

function concatenarStrings(arreglo) {
  var newString = "";
  for (let index = 0; index < arreglo.length; index++) {
    newString = newString.concat(arreglo[index], " ");
  }
  return newString;
}

// Ejemplo
const arreglo9 = ["Hola", "Mundo", "!"];
console.log(concatenarStrings(arreglo9));
// Espero que retorne 'Hola Mundo !'

console.log(
  "----------------------------------------------------------------------"
);

console.log("Ejercicio 10");
// 10. Escriba una función que reciba un número e inserte un '-' menos entre los números
// pares y un '*' asterico entre dos números impares.

function isOdd(value) {
  if (value % 2 != 0) return true;
  else return false;
}

function formatearNumero(numero) {
  var newString10 = "";
  var arrayNumber = Array.from(numero.toString());

  for (let index = 0; index < arrayNumber.length; index++) {
    if (isOdd(arrayNumber[index]) && isOdd(arrayNumber[index + 1])) {
      newString10 = newString10.concat(arrayNumber[index] + "*");
    } else if (!isOdd(arrayNumber[index]) && !isOdd(arrayNumber[index + 1])) {
      newString10 = newString10.concat(arrayNumber[index] + "-");
    } else {
      newString10 = newString10.concat(arrayNumber[index] + "");
    }
  }

  return newString10;
}

// Ejemplo
const numero10 = 134245780;
console.log(formatearNumero(numero10));
// Espero que retorne '1*34-2-45*78-0'

console.log(
  "----------------------------------------------------------------------"
);

console.log("Ejercicio 11");
//Escriba una función que "revuelva" un arreglo. O sea, que cambie los elementos de
// posición al azar. Pueden usar Math.random()

function barajarArreglo(arreglo) {
  var newArray = [];

  for (let index = 0; index < arreglo.length; index++) {
    var indiceAleatorio = Math.floor(Math.random() * (arreglo.length - 0));
    let temporal = arreglo[index];
    arreglo[index] = arreglo[indiceAleatorio];
    arreglo[indiceAleatorio] = temporal;

    return arreglo;
  }

  return newArray;
}
// Ejemplo
const arreglo11 = [1, 2, 3, 4];
console.log(barajarArreglo(arreglo11));

// Espero que retorne los elementos en ordenes diferentes cada vez

console.log(
  "----------------------------------------------------------------------"
);

console.log("Ejercicio 12");
//12. Escriba una función que encuentre los valores repetidos de un arreglo.

function buscarRepetido(arreglo) {
  var response = [];
  var repetidos = [];
  for (let index = 0; index < arreglo.length; index++) {
    if (!response.includes(arreglo[index])) {
      response.push(arreglo[index]);
    } else {
      repetidos.push(arreglo[index]);
    }
  }
  return repetidos;
}
// Ejemplo
const arreglo12 = [1, 2, 3, 5, 5, 5, 5];
console.log(buscarRepetido(arreglo12));

console.log(
  "----------------------------------------------------------------------"
);

console.log("Ejercicio 13");
//Escriba una función que encuentre la diferencia de dos arreglos, es decir, devolver
// los valores que solo están en uno y no en el otro.

function encontrarDiferencias(arreglo1, arreglo2) {
  var response = [];
  var newArray = arreglo1.concat(arreglo2);

  for (let index = 0; index < newArray.length; index++) {
    if (
      !(
        arreglo1.includes(newArray[index]) && arreglo2.includes(newArray[index])
      )
    ) {
      response.push(newArray[index]);
    }
  }
  return response;
}
// Ejemplo
const arreglo13a = [1, 2, 3, 4];
const arreglo13b = [3, 4, 5, 6];
console.log(encontrarDiferencias(arreglo13a, arreglo13b));

console.log(
  "----------------------------------------------------------------------"
);

console.log("Ejercicio 14");
//14. Escriba una función que 'aplane' un arreglo.

function aplanarArreglo(arreglo) {
  var response = [];
  for (let index = 0; index < arreglo.length; index++) {
    if (Array.isArray(arreglo[index])) {
      for (let subindex = 0; subindex < arreglo[index].length; subindex++) {
        response.push(arreglo[index][subindex]);
      }
    } else {
      response.push(arreglo[index]);
    }
  }
  return response;
}
// Ejemplo
const arreglo14 = [[1, 2], 3, 4, 5, [6, 7, 8]];
console.log(aplanarArreglo(arreglo14));

console.log(
  "----------------------------------------------------------------------"
);

console.log("Ejercicio 15");
//Escriba una función que imprima en consola "Hola Mundo!"

function escribirHola() {
  var response = "Hola mundo :)";
  return response;
}
// Ejemplo
console.log(escribirHola());

console.log(
  "----------------------------------------------------------------------"
);

console.log("Ejercicio 16");
//16. Escriba una función que revise si un string está vacío o no

function isStringEmpy(variable) {
  var vacio = false;
  if (variable == "") {
    vacio = true;
  }
  return vacio;
}
// Ejemplo
const variable16 = "";
console.log(isStringEmpy(variable16));

console.log(
  "----------------------------------------------------------------------"
);

console.log("Ejercicio 17");
//17. Escriba una función que extraiga solo los primeros n caracteres de un string.

function estraerCaracteres(palabra, numb) {
  var response = palabra.substring(0, numb);
  return response;
}
// Ejemplo
const word = "Katherine";
console.log(estraerCaracteres(word, 3));

console.log(
  "----------------------------------------------------------------------"
);

console.log("Ejercicio 18");
//18. Escriba una función que ponga la primera letra en mayúscula y el resto minúsculas.

function capitalizar(palabra) {
  var response =
    palabra.substring(0, 1).toUpperCase() +
    palabra.substring(1, palabra.length);
  return response;
}
// Ejemplo
const word18 = "prueba";
console.log(capitalizar(word18));

console.log(
  "----------------------------------------------------------------------"
);

console.log("Ejercicio 19");
//19. Escriba una función que reciba un arreglo de objetos y los ordene de mayor a
//menor por el atributo id.

function ordenarObjetos(objeto) {
  var response = [...objeto].sort(function (a, b) {
    return a.id - b.id;
  });

  return response;
}
// Ejemplo
const carros = [
  {
    id: 5,
    color: "morado",
    tipo: "minivan",
    marca: "Toyota",
  },
  {
    id: 3,
    color: "verde",
    tipo: "sedan",
    marca: "Hyundai",
  },
  {
    id: 1,
    color: "azul",
    tipo: "sedan",
    marca: "Kia",
  },
  {
    id: 4,
    color: "Gris",
    tipo: "4x4",
    marca: "Tucson",
  },
  {
    id: 2,
    color: "Dorado",
    tipo: "SUV",
    marca: "BMW",
  },
];
console.log(ordenarObjetos(carros));

console.log(
  "----------------------------------------------------------------------"
);

console.log("Ejercicio 20");
//20. Escriba una función que reciba un número (lo reciben como string) y le dé la vuelta.

var numberReverse = "";
function revertirNumero(numero) {
  var arrayNumber = Array.from(numero);
  for (let index = arrayNumber.length - 1; index >= 0; index--) {
    numberReverse = numberReverse.concat(arrayNumber[index]);
  }
  return numberReverse;
}
// Ejemplo
const numero = "1234";
console.log(revertirNumero(numero));

console.log(
  "----------------------------------------------------------------------"
);

console.log("Ejercicio 21");
//21. Escriba una función que reciba un string y diga si es palíndromo o no.

function esPalindromo(str) {
  const strReversed = str.split("").reverse().join("");

  return strReversed === str ? "es palindromo" : "no es palindromo";
}
// Ejemplo
const test = "oso";
console.log(esPalindromo(test));

console.log(
  "----------------------------------------------------------------------"
);

console.log("Ejercicio 22");
//22. Escriba una función que reciba un string y encuentre la palabra
//más grande del string.

function palabraMasGrande(str) {
  var arrayStr = str.split(" ");
  var palabraLarga = "";
  var longitud = 0;
  for (let index = 0; index < arrayStr.length; index++) {
    if (arrayStr[index].length > longitud) {
      palabraLarga = arrayStr[index];
      longitud = arrayStr[index].length;
    }
  }
  return "La palabra más larga es: " + palabraLarga;
}
// Ejemplo
const frase = "Hola esto es una prueba de palabras";
console.log(palabraMasGrande(frase));

console.log(
  "----------------------------------------------------------------------"
);

console.log("Ejercicio 23");
//23. Escriba una función que reciba un arreglo y una función y ejecute la
//función en cada elemento del arreglo.

function ejecutarFuncion(arreglo, fun) {
  for (let index = 0; index < arreglo.length; index++) {
    fun(arreglo[index]);
  }
}

// Ejemplo
const arreglo23 = ["Uno", "Dos", "Tres", "Cuatro"];

let funcion23 = function (str) {
  console.log(str);
};

ejecutarFuncion(arreglo23, funcion23);

console.log(
  "----------------------------------------------------------------------"
);

console.log("Ejercicio 24");
//24. Escriba una función que reciba un arreglo y una función, si la función devuelve true
// agrega el elemento a un arreglo de los que pasaron y sino a un arreglo de los que
// NO pasaron, imprime los dos

function llenarArreglos(arreglo, fun) {
  var palidromos = [];
  var NoPalidromos = [];
  for (let index = 0; index < arreglo.length; index++) {
    if (fun(arreglo[index]) == true) {
      palidromos.push(arreglo[index]);
    } else {
      NoPalidromos.push(arreglo[index]);
    }
  }
  console.log("Palidromos:" + palidromos);
  console.log("No palidromos:" + NoPalidromos);
}

// Ejemplo
const arreglo24 = ["hola", "oso", "amar", "rata", "sometemos", "reconocer"];

function esPalindromo24(str) {
  const strReversed = str.split("").reverse().join("");

  return strReversed === str ? true : false;
}

llenarArreglos(arreglo24, esPalindromo24);

console.log(
  "----------------------------------------------------------------------"
);
