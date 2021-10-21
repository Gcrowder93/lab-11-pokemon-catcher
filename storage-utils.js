import { pokemon } from './src/pokemon.js';

export function findByPokemon(pokemon, pokes){

    for (let poke of pokes) {
        if (poke.id === pokemon){
            return poke;
        }
    }
}

export function getPoke(){

    const pokeString = localStorage.getItem('POKEMON') || '[]';
    const pokemon = JSON.parse(pokeString);
    
    
    return pokemon;

}

export function encounter(pokemon){
    let pokeArray = getPoke();
    let foundPoke = findByPokemon(pokemon, pokeArray);


    if (foundPoke){
        foundPoke.encounter++;
       // const pokeString = JSON.stringify(pokemon);
       // localStorage.setItem('POKEMON', pokeString);
    } else {
        const newPoke = {
            pokemon: pokemon.pokemon,
            encounted: 1,
            captured: 0,
        };
        pokeArray.push(newPoke);
    }
    const arrayString = JSON.stringify(pokeArray);
    localStorage.setItem('POKEMON', arrayString);
    return pokeArray;
}

export function getResults(){
    const resultString = localStorage.getItem('RESULT') || [];
    const result = JSON.parse(resultString);
    return result;
}

export function getChosen(){
    const chosenString = localStorage.getItem('RESULT') || [];
    const chosen = JSON.parse(chosenString);
    return chosen;
}