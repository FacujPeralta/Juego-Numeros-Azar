let numeroAlAzar = Math.floor(Math.random() * 100) + 1;
let numeroEntrada = document.getElementById('numeroEntrada')
let mensaje = document.getElementById('mensaje')
let intento = document.getElementById('intento')
let intentos = 0

function chequearResultado(){
    intentos ++ 
    intento.textContent = intentos;
    let numeroIngresado = parseInt(numeroEntrada.value);
    if(isNaN (numeroIngresado) || numeroIngresado < 1 || numeroIngresado > 100){
        mensaje.textContent = 'EL NUMERO TIENE QUE SER ENTRE 1 Y 100'
        mensaje.style.color = 'Orange';

        return
    }
    if(numeroIngresado === numeroAlAzar){
        mensaje.textContent = '¡FELICITACIONES, LA PEGASTE BRO!'
        mensaje.style.color = 'green';
    }
    if(numeroIngresado < numeroAlAzar){
        mensaje.textContent = '¡EL NUMERO TIENE QUE SER MAYOR!'
        mensaje.style.color = 'Black';
    }
    if(numeroIngresado > numeroAlAzar){
        mensaje.textContent = '¡EL NUMERO TIENE QUE SER MENOR!'
        mensaje.style.color = 'Red'
    }
    
}