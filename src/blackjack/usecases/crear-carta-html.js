/**
 * Esta funcion crea la imagen HTML de la carta
 * @param {string} carta 
 * @param {number} turno determina la carta del jugador que corresponda
 * @returns {HTMLElement} imagen de retorno 
 */

export const crearCarta=(carta, turno)=>{
    if (!carta) throw new Error('La carta es un argumento obligarorio');
    
    const divCartasJugadores= document.querySelectorAll('.divCartas');
    const imgCarta = document.createElement('img');
    imgCarta.src=`assets/cartas/${carta}.png`;
    imgCarta.classList.add('carta');
    divCartasJugadores[turno].append(imgCarta);
    return imgCarta;
}