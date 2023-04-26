import {valorCarta} from './valor-carta.js';

/**
 * 
 * @param {string} carta 
 * @param {number} turno 
 * @param {array <number>} puntosJugadores 
 * @returns 
 */

//turno: 0=primer jugaro y el ultimo es la casa
export  const acumularPuntos=(carta, turno, puntosJugadores)=>{
    const puntosHTML = document.querySelectorAll('small');
    puntosJugadores[turno] = puntosJugadores[turno] + valorCarta(carta);
    puntosHTML[turno].innerText = puntosJugadores[turno];
    return puntosJugadores[turno];
}