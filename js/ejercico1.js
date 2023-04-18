let numeroRandom = Math.floor(Math.random() * 10) + 1;
let numeroUsuario = 0;
let intentos = 0;
let salida = document.getElementById('salida');
let containerInput = document.getElementById('container-input');


function aJugar (){
    numeroUsuario = parseInt(document.getElementById("numero-usuario").value);
    
    if(numeroUsuario !== numeroRandom){
        salida = `<p>${numeroUsuario} no es el numero que eligio la PC</p>`;
        intentos++;
        
        if(numeroUsuario > numeroRandom){
            document.getElementById('salida').innerHTML = `${numeroUsuario} es MAYOR al numero de la PC`
        }
        if(numeroUsuario < numeroRandom){
            document.getElementById('salida').innerHTML = `${numeroUsuario} es MENOR al numero de la PC`
        }
    }

    if(numeroUsuario == numeroRandom){
        salida = `${numeroUsuario} ES EL NUMERO ELEGIDO!`;
        document.getElementById('display-numero').innerHTML = numeroRandom
        document.getElementById('salida').innerHTML = `FELICIDADES!🎊`;
    }
    document.getElementById('display-resultado').innerHTML = `${salida} Este es su intento nº${intentos}`;
    numeroUsuario
}

function volverAJugar(){
    numeroRandom = Math.floor(Math.random() * 10) + 1;
    document.getElementById('display-numero').innerHTML ='?';
    document.getElementById('display-resultado').innerHTML ="Vamos a jugar!"
    document.getElementById('numero-usuario').value = "";
    document.getElementById('numero-usuario').focus();
    document.getElementById('salida').innerHTML ="";
    intentos = 0
}

