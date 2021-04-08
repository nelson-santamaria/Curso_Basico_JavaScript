// Un objeto es una colección de propiedades, y una propiedad es una asociación de key (nombre, o clave) y valores.
// Se coloca coma(,)
// This como referencia al objeto del que estamos hablando
var objecto = {}; // Object Literal Syntax 

var miAuto = {
    marca: "Toyota",  // key - value 
    modelo: "Corolla",
    annio: 2020,
    detallesDelAuto: function() {   // Metodo de un objeto (una función dentro de un objeto)
      return `Auto ${this.modelo} ${this.annio}`
  },
    otrosDetallesAuto: function(){
        return `Marca ${this.marca} ${this.annio}`
    }

};

miAuto.marca;
miAuto.annio 
miAuto.modelo 

miAuto.detallesDelAuto(); 


// Función constructora / crear mas objetos

function auto(marca, modelo, annio) {  // Creas una función con los parametros que va a recibir, 
    this.marca = marca;   // Utilizamos el "this" para asignar valores a las propiedades del objeto 
    this.modelo = modelo;
    this.annio = annio;
}

var newAuto = new auto("Tesla", "Model 3", 2020);


// Ejercicio crear varios objetos

var cars = [];
var brand;
var model;
var year;




function Create_Car(brand, model, year) {  // Creas una función con los parametros que va a recibir, 
    this.brand = brand;   // Utilizamos el "this" para asignar valores a las propiedades del objeto 
    this.model = model;
    this.year = year;
}


var numCars = prompt("¿Cuantos carros desea crear");

for(var i= 0; i < numCars; i++)
{
    brand = prompt("¿Ingrese la marca de carro");
    model = prompt("¿Ingrese el modelo de carro");
    year = prompt("¿Ingrese año del carro");

    cars.push(new Create_Car(brand, model, year));
}

console.table(cars);

