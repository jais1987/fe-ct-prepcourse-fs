/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/

function crearGato(nombre, edad) {
   // Debes crear un nuevo objeto con las propiedades "nombre" y "edad".
   // Ambas propiedades deben tener el valor correspondiente recibido por parámetro.
   // Además, agregar una propiedad con el nombre "meow".
   // La propiedad "meow" será una función que retorne el string: "Meow!".
   // Retornar el objeto.
   // Tu código:
   return {
      nombre,
      edad,
      meow() {
         return "Meow!";
      }
   };
}

var miGato = crearGato("Snowball", 3);
console.log(miGato.nombre); 
console.log(miGato.edad);   
console.log(miGato.meow()); 

function nuevoUsuario(nombre, email, password) {
   // Debes crear un nuevo objeto.
   // Este debe tener las propiedades: "nombre", "email" y "password" con sus respectivos valores.
   // Retornar el objeto.
   // Tu código:
   
   return {
      nombre,
      email,
      password
   };
   
      return usuario;
}

console.log(nuevoUsuario('Johan', 'alexis.com', '1235546'));

function agregarPropiedad(objeto, propiedad) {
   // Recibirás un objeto por parámetro.
   // Debes agregarle una propiedad con el nombre recibido por parámetro.
   // Esta propiedad será igual al valor `null`.
   // Retornar el objeto.
   // Tu código:
   objeto[propiedad] = null;
   
      return objeto;
      
}
var miObjeto = {};
agregarPropiedad(miObjeto, "nuevaPropiedad");
console.log(miObjeto.nuevaPropiedad);

function invocarMetodo(objeto, metodo) {
   // El parámetro "metodo" es un string que coincide con el nombre de una propiedad del objeto recibido.
   // Esta propiedad contiene una función en su interior. Debes invocarla/ejecutarla.
   // [NOTA]: no necesitar retornar nada.
   // Tu código:
   if (objeto.hasOwnProperty(metodo) && typeof objeto[metodo] === 'function') {
   
      objeto[metodo]();
   }
}


function multiplicarNumeroDesconocidoPorCinco(objetoMisterioso) {
   // El parámetro "objetoMisterioso" posee una propiedad con el nombre "numeroMisterioso".
   // Debes multiplicar este número por 5 y retornar el resultado.
   // Tu código:
   if (objetoMisterioso.hasOwnProperty("numeroMisterioso")) {
     
      return objetoMisterioso.numeroMisterioso * 5;
   } else {
      
      return NaN;
   }
}

var objetoMisterioso = {
   numeroMisterioso: 7
};

var resultado = multiplicarNumeroDesconocidoPorCinco(objetoMisterioso);
console.log(resultado);

var resultado = multiplicarNumeroDesconocidoPorCinco(objetoMisterioso);
console.log(resultado);

function eliminarPropiedad(objeto, propiedad) {
   // El parámetro "propiedad" es una propiedad del objeto que recibes.
   // Debes eliminarla del objeto y retornarlo finalmente.
   // Tu código:
   delete objeto[propiedad];
   return objeto;
}
var miObjeto = {
   nombre: "Ejemplo",
   edad: 25
};

eliminarPropiedad(miObjeto, "edad");

console.log(miObjeto);

function tieneEmail(objetoUsuario) {
   // Verifica si el "objetoUsuario", en su propiedad "email", posee un valor definido.
   // En ese caso retornar true. Caso contrario, false.
   // Tu código:
         if (objetoUsuario.email) {
         return true;
      } else {
         return false;
      }
   }
   
   var usuario = { nombre: "Jhon", email: "jhon@email.com" };
   
   console.log(tieneEmail(usuario)); 

function tienePropiedad(objeto, propiedad) {
   // Verifica si el objeto recibido posee una propiedad con el mismo nombre que el parámetro "propiedad".
   // En ese caso retornar true. Caso contrario, false.
   // Tu código:
   return propiedad in objeto;

}
var miObjeto = {
   nombre: "Johan",
   edad: 30
};

console.log(tienePropiedad(miObjeto, "nombre")); 
console.log(tienePropiedad(miObjeto, "ocupacion"));

function verificarPassword(objetoUsuario, password) {
   // Verifica si la propiedad "password" del "objetoUsuario" coincide con el parámetro "password".
   // En ese caso retornar true. Caso contrario, false.
   // Tu código:
   return objetoUsuario.password === password;
}

function actualizarPassword(objetoUsuario, nuevaPassword) {
   // Reemplaza la contrseña guardada en la propiedad "password" del "objetoUsuario".
   // La nueva contraseña la recibes por parámetro.
   // Retornar el objeto.
   // Tu código:
   objetoUsuario.password = nuevaPassword;
   
      return objetoUsuario
}

function agregarAmigo(objetoUsuario, nuevoAmigo) {
   // El parámetro "objetoUsuario" tiene una propiedad llamada "amigos" igual a un arreglo.
   // Debes agregar el "nuevoAmigo" al final de este arreglo.
   // Retornar el objeto.
   // Tu código:
   objetoUsuario.amigos.push(nuevoAmigo);
   
      return objetoUsuario;
}
var usuario = {
   nombre: "Johan",
   amigos: ["Amigo1", "Amigo2"]
};

var nuevoAmigo = "Amigo3";
agregarAmigo(usuario, nuevoAmigo);

console.log(usuario);

function pasarUsuarioAPremium(objetoMuchosUsuarios) {
   // El parámetro "objetoMuchosUsuarios" es un arreglo de objetos (usuarios).
   // Cada usuario tiene una propiedad llamada "esPremium".
   // Define esta propiedad de todos los usuarios como true.
   // Retornar el arreglo.
   // Tu código:
   objetoMuchosUsuarios.forEach(function(usuario) {
      usuario.esPremium = true;
   });

   return objetoMuchosUsuarios;
}

var usuarios = [
   { nombre: "Usuario1", esPremium: false },
   { nombre: "Usuario2", esPremium: false },
   { nombre: "Usuario3", esPremium: false }
];

var usuariosPremium = pasarUsuarioAPremium(usuarios);

console.log(usuariosPremium); 



function sumarLikesDeUsuario(objetoUsuario) {
   // El parámetro "objetoUsuario" tiene una propiedad llamada "posts" que es un arreglo.
   // Este arreglo contiene objetos (post).
   // Cada post posee una propiedad llamada "likes". Esta propiedad es un número.
   // Debes sumar los likes de todos los post y retornar el resultado.
   // Tu código:
   if (objetoUsuario.hasOwnProperty("posts")) {
      
      var sumaLikes = 0;

     
      for (var key in objetoUsuario) {
         
         if (key === "posts") {
            
            var posts = objetoUsuario[key];

            
            for (var i = 0; i < posts.length; i++) {
               
               if (posts[i].hasOwnProperty("likes")) {
                  
                  sumaLikes += posts[i].likes;
               }
            }
         }
      }

      
      return sumaLikes;
   } else {
      
      return 0;
   }
}

var totalLikes = sumarLikesDeUsuario(usuario);
console.log(totalLikes); 


function agregarMetodoCalculoDescuento(objetoProducto) {
   // Agrega una propiedad al "objetoProducto" con el nombre "calcularPrecioDescuento".
   // Esta propiedad debe ser una función que multiplique el precio del producto por el porcentajeDeDescuento.
   // El "objetoProducto" posee una propiedad "precio" y una propiedad "porcentajeDeDescuento".
   // Luego debes restar del precio total del producto ese valor de descuento.
   // Retornar el precio final.
   // Ejemplo:
   // Precio ---> 10
   // PorcentajeDeDescuento ---> 0.2
   // Precio final ---> 8
   // Tu código:
   objetoProducto.calcularPrecioDescuento = function() {
      
      var descuento = this.precio * this.porcentajeDeDescuento;
            
      var precioFinal = this.precio - descuento;
            
      return precioFinal;
   };
   
     return objetoProducto;
}


// var objetoProducto = {
//    precio: 10,
//    porcentajeDeDescuento: 0.2
// };

// agregarMetodoCalculoDescuento(objetoProducto);

// var precioFinal = objetoProducto.calcularPrecioDescuento();
// console.log(precioFinal); 

/*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/
module.exports = {
   crearGato,
   nuevoUsuario,
   agregarPropiedad,
   invocarMetodo,
   multiplicarNumeroDesconocidoPorCinco,
   eliminarPropiedad,
   tieneEmail,
   tienePropiedad,
   verificarPassword,
   actualizarPassword,
   agregarAmigo,
   pasarUsuarioAPremium,
   sumarLikesDeUsuario,
   agregarMetodoCalculoDescuento,
};
