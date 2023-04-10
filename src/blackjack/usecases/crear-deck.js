import { shuffle } from "underscore";

/**
 * Esta función crea un nuevo deck
 * @param {Array<String>} tiposDeCarta Ejemplo ['C','D','H','S']
 * @param {Array<String>} tiposEspeciales Ejemplo ['A','J','Q','K']
 * @returns  {Array<String>} Retorna un nuevo deck de cartas
 */
export const crearDeck = (tiposDeCarta, tiposEspeciales) => {
    let deck = [];

    if ( !tiposDeCarta || tiposDeCarta.length === 0)
        throw new Error('tiposDeCarata es obligatorio como un arreglo de string');

    if ( !tiposEspeciales || tiposEspeciales.length === 0)
        throw new Error('tiposEspeciales es obligatorio como un arreglo de string');

    for( let i = 2; i <= 10; i++ ) {
        for( let tipo of tiposDeCarta ) {
            deck.push( i + tipo);
        }
    }

    for( let tipo of tiposDeCarta ) {
        for( let esp of tiposEspeciales ) {
            deck.push( esp + tipo);
        }
    }

    return shuffle( deck );;
}