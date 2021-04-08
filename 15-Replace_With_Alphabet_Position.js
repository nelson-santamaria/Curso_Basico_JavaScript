
// Convert a text in code ascii
/*let strString ="The sunset sets at twelve o' clock.";

let numLength  = strString.length;

console.log("Total Caracteres "+ numLength);

let arrAscii = [];
let codAscii;
let charAscii;
let strLetterToNumber= "";
function Create_Character_Ascii(codAscii, charAscii) {  // Creas una función con los parametros que va a recibir, 
    this.codAscii = codAscii;   // Utilizamos el "this" para asignar valores a las propiedades del objeto 
    this.charAscii = charAscii;
    
}

for (var strLetter of strString) {
    strLetterToNumber = strLetterToNumber + " "+ strLetter.charCodeAt();
}

console.log(strLetterToNumber);/*

// Challenge
/*In this kata you are required to, given a string, replace every letter with its position in the alphabet.

If anything in the text isn't a letter, ignore it and don't return it.

"a" = 1, "b" = 2, etc.
Result
20 8 5 19 21 14 19 5 20 19 5 20 19 1 20 20 23 5 12 22 5 15 3 12 15 3 11


" 20 8 5 14 1 18 23 8 1 12 2 1 3 15 14 19 1 20 13 9 4 14 9 7 8 20"
  20 8 5 14 1 18 23 8 1 12 2 1 3 15 14 19 1 20 13 9 4 14 9 7 8 20

*/

// Solución propuesta

var strInputString ="]r5.:.,^";
var strLetterToNumber1 = "";
var numLetterCase = [];
var strOutput ="";

var arrlist_Aphabet = [
    {numLetter: 1 , strLowerCase: 'a' } , 
    {numLetter: 2 , strLowerCase: 'b' } , 
    {numLetter: 3 , strLowerCase: 'c' } , 
    {numLetter: 4 , strLowerCase: 'd' } , 
    {numLetter: 5 , strLowerCase: 'e' } , 
    {numLetter: 6 , strLowerCase: 'f' } , 
    {numLetter: 7 , strLowerCase: 'g' } , 
    {numLetter: 8 , strLowerCase: 'h' } , 
    {numLetter: 9 , strLowerCase: 'i' } , 
    {numLetter: 10 , strLowerCase: 'j'} , 
    {numLetter: 11 , strLowerCase: 'k'} , 
    {numLetter: 12 , strLowerCase: 'l'} , 
    {numLetter: 13 , strLowerCase: 'm'} , 
    {numLetter: 14 , strLowerCase: 'n'} , 
    {numLetter: 15 , strLowerCase: 'o'} , 
    {numLetter: 16 , strLowerCase: 'p'} , 
    {numLetter: 17 , strLowerCase: 'q'} , 
    {numLetter: 18 , strLowerCase: 'r'} , 
    {numLetter: 19 , strLowerCase: 's'} , 
    {numLetter: 20 , strLowerCase: 't'} , 
    {numLetter: 21 , strLowerCase: 'u'} , 
    {numLetter: 22 , strLowerCase: 'v'} , 
    {numLetter: 23 , strLowerCase: 'w'} , 
    {numLetter: 24 , strLowerCase: 'x'} , 
    {numLetter: 25 , strLowerCase: 'y'} , 
    {numLetter: 26 , strLowerCase: 'z'} , 
];

for (ValorcharLetter of strInputString)
{
    //var valida = arrlist_Aphabet.find(function(charLetter, numberLetter, mayLetter)
    var strLetterBuscada = ValorcharLetter;
    var valida = arrlist_Aphabet.filter(function(charLetter)
    {

        //console.log(charLetter.strUpperCase+ " Letra"+ strLetterBuscada);
        return charLetter.strLowerCase === strLetterBuscada.toLowerCase();
    }
    );
    
    if (valida.length > 0)
    {
        if(strOutput.length === 0)
        {
            strOutput = valida[0].numLetter;    
        }
        else
        {
            strOutput = strOutput+ " " +valida[0].numLetter;                
        }
        
    }
}

console.log(strOutput.toString);


// Best soluctions

var Text1 = alphabetPosition("]r5.:.,^");
function alphabetPosition(text) {
    return text
      .toUpperCase() // Convierte minusculas a mayusculas
      .match(/[a-z]/gi) // Define el número de ocurrencias en un conjunto de la a-z.
      .map( (c) => c.charCodeAt() - 64) // Crear un array  que se asigna a c y le resta el número inicial del ascii.
      .join(' ');
  }

  console.log(Text1);

  
//---------------------------
var Text2 = alphabetPosition("]r5.:.,^");


function alphabetPosition(text) {
    var result = "";
    for (var i = 0; i < text.length; i++){
      var code = text.toUpperCase().charCodeAt(i)
      if (code > 64 && code < 91) result += (code - 64) + " ";
    }
  
    return result.slice(0, result.length-1);//  slice extrae una sección de una cadena y devuelve una cadena nueva.
}

console.log(Text2);

//----------------------------

