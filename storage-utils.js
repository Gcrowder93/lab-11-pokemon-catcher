export function findById(id, pokes){

    for (let poke of pokes) {
        if (poke.id === id){
            return poke;
        }
    }
}

import { pokemon } from './pokemon.js';

export function getPoke(){

    let lsPokemon = localStorage.getItem('POKEMON');
    const pokes = JSON.parse(lsPokemon);

    if (!pokes){
        const pokeString = JSON.stringify(pokemon);
        localStorage.setItem('POKEMON', pokeString);
    }
    return pokes || pokemon;

}