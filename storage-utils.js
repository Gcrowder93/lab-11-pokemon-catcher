export const results = [
    { 
        id: '',
        appeared: '',
        chosen: ''
    },
    {
        id: '',
        appeared: '',
        chosen: ''
    },
];

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
        const pokeString = JSON.stringify(products);
        localStorage.setItem('POKEMON', pokeString);
    }
    return pokes || pokemon;

}

export function getResults(){

    let 
} 