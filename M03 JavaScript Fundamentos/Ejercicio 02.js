/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/
/*2️⃣ EJERCICIO 02 2️⃣*/

function devolverString(string) {
   // Debe retornar un string.
   // Tu código:
   return string;
}
  console.log (devolverString("Soy del verde"));

// ⛔️ "X" e "Y" son números.

function suma(x, y) {
   // Retorna el resultado de su suma.
   // Tu código:
   return x + y;
}
 console.log (suma (29, 32));

function resta(x, y) {
   // Retorna el resultado de la resta.
   // Tu código:
   return x - y;
}
   console.log (resta(19, 7));


function divide(x, y) {
   // Retorna el resultado de su división.
   // Tu código:
   return x / y;
}
  console.log (divide (18, 2));


function multiplica(x, y) {
   // Retorna el resultado de su multiplicación.
   // Tu código:
   return x * y;
}
   console.log (multiplica(5, 3));

function obtenerResto(x, y) {
   // Obten el resto de la división de "x" entre "y".
   // Tu código:
   return x % y ;
}
  console.log (obtenerResto (14, 2));

/*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/
module.exports = {
   devolverString,
   suma,
   resta,
   divide,
   multiplica,
   obtenerResto,
};
