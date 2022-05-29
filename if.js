/*condiionales*/

if (true) {
    console.log ("hola");

}

if (false) {
    console.log ("hola");
}
else {
    console.log ("chao");
}
/*-----------------------------------------------*/
var edad = 18;

if (edad === 18) {
    console.log ("pudes votar es tu primera vez");
} else if (edad > 18) {
    console.log ("puedes vota de nuevo")
} else {
    console.log ("aun no puedes votar")
}

/*---------------------*/

var numero = 1;
var resultado = numero === 1 ? "si soy un uno" : "no soy un uno";

/*-------------reto piedra papel tijera*/

var op1 = "piedra";
var op2 = "papel";
var op3 = "tijera";

var resultado = function (user, cpu) {
    if (user ! = cpu) {
        if (user === op1 && cpu === op3) {
            console.log ("el usuario gano con" + op1)
        } else if (user === op2 && cpu === op1) {
            console.log ("el usuario gano con" + op2)
        } else if (user === op3 && cpu === op2) {
            console.log ("el usuario gano con" + op3)
        } else {
            console.log ("cpu gano becerro")
        }
    } else if (user === cpu) {
        console.log ("empate")
    }
};

