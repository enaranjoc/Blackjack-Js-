
/**
 * Función para crear la imagen de la carta en el html
 * @param {String} carta Carta
 * @returns {HTMLImageElement} Imagen de retorno
 */
export const crearImgCarta = (carta) =>{
    if ( !carta) throw new Error('La carta es un argumento obligatorio.');

    const imgCarta = document.createElement('img');
    imgCarta.src = `assets/cartas/${ carta }.png`; //3H, JD
    imgCarta.classList.add('carta');
    return imgCarta;
}
