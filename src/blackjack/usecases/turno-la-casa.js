import {pedirCarta, crearCarta, determinarGanador, acumularPuntos} from './index.js'
/**
 * Esta funcion realiza la jugada de la casa
 * 
 */

//turno de la PC
export const turnoLaCasa = (puntosMinimos, deck, puntosJugadores)=>{
    let puntosLaCasa=0;
    do{
        const carta = pedirCarta(deck);
        puntosLaCasa = acumularPuntos(carta, puntosJugadores.length-1, puntosJugadores);
        crearCarta(carta, puntosJugadores.length-1);
    }while((puntosLaCasa < puntosMinimos)&&(puntosMinimos<=21));
    determinarGanador(puntosJugadores);
}