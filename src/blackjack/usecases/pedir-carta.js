/**
 * Esta funcion me permite tomar una carta
 * @param {array <string>} deck ingresa el arreglo deck 
 * @returns {string} retorna la carta que pedimos
 */

 export const pedirCarta = (deck)=>{
    if(!deck || deck.length === 0){
        throw 'No hay cartas en el deck';
    }
    return deck.shift(); 
}