// Switch es una forma diferente de validar, está depende del caso que sea verdad. 

var numero = 1; 
var resultado; 

/* Switch compara con un === por esa razón los elementos tiene que ser idénticos */ 

switch (numero) {
    case 1: 
        resultado = "Sí es uno";
        break;
    case 10: 
        resultado = "Sí es diez";
        break;
    case 100:
        resultado = "Sí es cien";
        break;
    default:   
        resultado = "No match"; 
}

console.log(resultado); 

/* Juego Piedra, papel o tijera con Switch*/

var arrOpciones = ["Piedra","Papel","Tijera"];

var optMaquina = arrOpciones[Math.floor(Math.random() * 3)];

var optJugador = "Papel";


console.log( "Jugador elogió "+ optJugador + " Máquina eligió "+ optMaquina);

switch(true)
{
    case (optMaquina === optJugador):
        console.log("Empate");
        break;
    case (optMaquina ==="Tijera") && (optJugador ==="Papel"):
        console.log("Perdí");
        break;
    case (optMaquina ==="Tijera") && (optJugador ==="Piedra"):
        console.log("Gané");
        break;
    case (optMaquina ==="Piedra") && (optJugador ==="Tijera"):
        console.log("Perdí");
        break;
    case (optMaquina ==="Piedra") && (optJugador ==="Papel"):
        console.log("Gané");
        break;
    case (optMaquina ==="Papel") && (optJugador ==="Tijera"):
        console.log("Gané");
        break;    
    case (optMaquina ==="Papel") && (optJugador ==="Piedra"):
        console.log("Perdí");
        break;         
}




