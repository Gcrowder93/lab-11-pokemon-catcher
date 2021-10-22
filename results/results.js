/*
import { pokemon } from '../src/pokemon.js';
import { getPoke, findByPokemon } from '../storage-utils.js';

const result = getPoke();
const resultString = document.getElementById('result-string');

for (let poke of result) {
    const pokemonId = findByPokemon(poke.id, pokemon);
    const div = document.createElement('div');
    const img = document.createElement('img');
    img.src = pokemonId.url_image;

    const captured = document.createElement('span');
    captured.textContent = `Captured: ${poke.picked}`;
    const encountered = document.createElement('span');
    encountered.textContent = `Encountered: ${poke.shown}`;

    div.append(img, name, captured, encountered);
    resultString.append(div);

}
*/

