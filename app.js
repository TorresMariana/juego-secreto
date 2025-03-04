
let numeroSecreto = 0;
let intentos = 0;
let listaNumerosSorteados = [];
let numeroMaximo = 10;


function asignarTextoElemento(elemento, texto){
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

function verificarIntento(){
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);
    // console.log('Número secreto: ', numeroSecreto);
    console.log('Número usuario:', numeroDeUsuario);
    console.log(typeof(numeroDeUsuario));

    console.log(intentos);
    if (numeroDeUsuario === numeroSecreto){
        asignarTextoElemento('p',`Acertaste el número en ${intentos} ${(intentos == 1) ? 'vez' : 'veces'}`);
        //El botón "Nuevo juego" se activa una vez adivinado el número secreto
        document.getElementById('reiniciar').removeAttribute('disabled');
    }
    else{
        //El usuario no acertó el número
        if(numeroDeUsuario > numeroSecreto){
            asignarTextoElemento('p', 'El número secreto es menor');
        }else{
            asignarTextoElemento('p','El número secreto es mayor');
        }
        intentos++;
        limpiarCaja();
    }

    return;
}

function limpiarCaja(){
    document.querySelector('#valorUsuario').value = '';
    return;
}

function generarNumeroSecreto() {
    let numeroSecretoGenerado = Math.floor(Math.random()*numeroMaximo) + 1;

    console.log('número secreto: ', numeroSecretoGenerado);
    console.log(listaNumerosSorteados);

    //Si ya sortemos todos los números se mostrará un mensaje para cerrar el juego
    if (listaNumerosSorteados.length == numeroMaximo){
        asignarTextoElemento('p', 'Ya se sortearon todos los números posibles');
    }else{ //IF ANIDADO
        //Si el numeroSecretoGenerado esta incluido en la lista
        if(listaNumerosSorteados.includes(numeroSecretoGenerado)){
            //Recursividad: la función se llama a ella misma
            return generarNumeroSecreto();
        }else{
            listaNumerosSorteados.push(numeroSecretoGenerado);
            return numeroSecretoGenerado;
        }
    } 
    
}

function condicionesIniciales(){
    //HOISTING
    asignarTextoElemento('h1','Juego del número secreto');
    asignarTextoElemento('p', `Indica un número del 1 al ${numeroMaximo}`);
    numeroSecreto = generarNumeroSecreto();
    // console.log('número secreto: ', numeroSecreto);
    intentos = 1;
}

function reiniciarJuego(){
    //Limpiar caja
    limpiarCaja();
    condicionesIniciales();

    //Deshabilitar el bóton de nuevo juego
    document.querySelector('#reiniciar').setAttribute('disabled', 'true');

    return;
}


//HOISTING
condicionesIniciales();






