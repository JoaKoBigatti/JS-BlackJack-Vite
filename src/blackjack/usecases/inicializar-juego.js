/**
 * esta funcion inicia el juego
 * @param {number} numJugadores 
 * @returns reinicia los valores del juego y retorna los puntos en 0
 */

 export const inicializarJuego=(numJugadores=2)=>{
    const btnPedir = document.querySelector('#btnPedir'),
      btnDetener = document.querySelector('#btnDetener'),
      divCartasJugadores= document.querySelectorAll('.divCartas'),
      puntosHTML = document.querySelectorAll('small');

    let puntosJugadores=[];
    for(let i=0;i<numJugadores;i++){
        puntosJugadores.push(0);
    }
        puntosHTML.forEach(elem => elem.innerText=0)
        divCartasJugadores.forEach(elem => elem.innerHTML='');
        btnPedir.disabled = false;
        btnDetener.disabled = false;
        // console.log(deck)
        return puntosJugadores;
    }
