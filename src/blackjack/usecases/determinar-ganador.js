/**
 * Esta funcion determina el ganador de la partida
 * @param {number} puntosJugadores 
 */

export const determinarGanador=(puntosJugadores)=>{
    const[puntosMinimos, puntosLaCasa] = puntosJugadores;

    setTimeout(() => {
        (puntosMinimos===puntosLaCasa)?(alert('Uh empataste man, volve a jugar')):
        (((puntosLaCasa<=21)&&(puntosLaCasa > puntosMinimos))||(puntosMinimos>21))?(alert('Perdiste a la chingada, gana la casa')):
        (alert('VAAMO!!, GANASTE WEY'));
    }, 200);        
}