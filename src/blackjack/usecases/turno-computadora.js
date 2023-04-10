import { valorCarta, pedirCarta, crearImgCarta} from "./";

/**
 * Función para el turno de la computadora
 * @param {Number} puntosMinimos Puntos minimos que la computadora necesita para ganar
 * @param {HTMLElement} puntosHTML Elemento HTML para mostrar los puntos. 
 * @param {Array<String>} deck Arreglo de strings.
 * @param {HTMLElement} divCartasComputadora Elemento HTML
 */

export const turnoComputadora = ( puntosMinimos, puntosHTML, deck, divCartasComputadora  ) => {

    let puntosComputadora = 0;

    do {
        const carta = pedirCarta(deck );
        puntosComputadora = puntosComputadora + valorCarta( carta );
        puntosHTML[1].innerText = puntosComputadora;
        divCartasComputadora.append( crearImgCarta(carta) );

        if( puntosMinimos > 21 ) {
            break;
        }

    } while(  (puntosComputadora < puntosMinimos)  && (puntosMinimos <= 21 ) );

    setTimeout(() => {
        if( puntosComputadora === puntosMinimos ) {
            alert('Nadie gana :(');
        } else if ( puntosMinimos > 21 ) {
            alert('Computadora gana')
        } else if( puntosComputadora > 21 ) {
            alert('Jugador Gana');
        } else {
            alert('Computadora Gana')
        }
    }, 100 );
}
