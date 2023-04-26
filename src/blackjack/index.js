import {crearDeck, inicializarJuego, pedirCarta, crearCarta, turnoLaCasa, acumularPuntos} from './usecases'

  let deck = [], puntosJugadores=[];
  const tiposCartas = ['C','D','H','S'], cartasEspeciales = ['A','J','K','Q'];
  //referencias del html
  const btnPedir = document.querySelector('#btnPedir'),
      btnDetener = document.querySelector('#btnDetener'),
      btnNuevoJuego = document.querySelector('#btnNuevo');


  //Eventos
  btnPedir.addEventListener('click', ()=> {

      const carta= pedirCarta(deck);
      const puntosJugador = acumularPuntos(carta, 0, puntosJugadores);
      crearCarta(carta, 0);

      if(puntosJugador > 21 ){
          btnPedir.disabled = true;
          btnDetener.disabled = true;
          turnoLaCasa(puntosJugador, deck, puntosJugadores);
          setTimeout(() => {
          alert('Te pasaste wey');
          }, 100);
      }else if (puntosJugador === 21) {
          btnPedir.disabled = true;
          btnDetener.disabled = true;
          setTimeout(() => {
          alert('llegaste a 21')
          }, 100);
          turnoLaCasa(puntosJugador, deck, puntosJugadores);
      } 
  });

  btnDetener.addEventListener('click', ()=> {
      btnPedir.disabled = true;
      btnDetener.disabled = true;
      turnoLaCasa(puntosJugadores[0], deck, puntosJugadores);
  });
  
  btnNuevoJuego.addEventListener('click', ()=> {
      deck = crearDeck(tiposCartas, cartasEspeciales);
      puntosJugadores= inicializarJuego();
  });

