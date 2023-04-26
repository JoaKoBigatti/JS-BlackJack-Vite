import _ from "underscore";

/**
 * Esta funcion crea una nueva baraja
 * @param {Array<string>} tiposCartas Ejemplo: ['C','D','H','S']
 * @param {Array<string>} cartasEspeciales Ejemplo: ['A','J','K','Q']
 * @returns {Array<string>} retorna un nuevo deck de cartas
*/

//Esta funcion crea una nueva baraja
export const crearDeck =(tiposCartas, cartasEspeciales)=>{

    if(!tiposCartas ||tiposCartas.length === 0) throw new Error('tiposDeCartas es obligatorio como un arreglo de string');
    if(!cartasEspeciales ||cartasEspeciales.length === 0) throw new Error('cartasEspeciales es obligatorio como un arreglo de string');

    let deck=[];
    for(let i = 2 ; i<=10 ; i++){
        for( let tipoCarta of tiposCartas) {
            deck.push(i + tipoCarta);
        }
    } 
    for(let tipoCarta of tiposCartas){
        for(let cartaEspecial of cartasEspeciales){
            deck.push(cartaEspecial + tipoCarta);
        }
    }
    return _.shuffle(deck);
}