import { pokemon } from './src/pokemon.js';
import { encounter } from './storage-utils.js';
console.log(pokemon);

const pokeImg1 = document.getElementById('poke1-img');
const pokeImg2 = document.getElementById('poke2-img');
const pokeImg3 = document.getElementById('poke3-img');
const pokeRadio1 = document.getElementById('poke-radio1');
const pokeRadio2 = document.getElementById('poke-radio2');
const pokeRadio3 = document.getElementById('poke-radio3');

const button = document.getElementById('select');


const generatePoke = ()=>{
    let rando1 = Math.floor(Math.random() * pokemon.length);
    let rando2 = Math.floor(Math.random() * pokemon.length);
    let rando3 = Math.floor(Math.random() * pokemon.length);

    while (
        rando1 === rando2 ||
    rando1 === rando3 || 
    rando2 === rando3
    ) {
        rando1 = Math.floor(Math.random() * pokemon.length);
        rando2 = Math.floor(Math.random() * pokemon.length);
        rando3 = Math.floor(Math.random() * pokemon.length);
    }
    console.log(rando1, rando2, rando3);

    let poke1 = pokemon[rando1];
    pokeImg1.src = poke1.url_image;
    pokeRadio1.value = poke1.id;
    let poke2 = pokemon[rando2];
    pokeImg2.src = poke2.url_image;
    pokeRadio2.value = poke2.id;
    let poke3 = pokemon[rando3];
    pokeImg3.src = poke3.url_image;
    pokeRadio3.value = poke3.id;
    return [
        poke1,
        poke2,
        poke3
    ];
};

let pokemonGen = generatePoke();

button.addEventListener('click', ()=>{
    const selected = document.querySelector('input[type=radio]:checked');
    generatePoke();
    encounter(pokemonGen[0]);
    encounter(pokemonGen[1]);
    encounter(pokemonGen[2]);
  
});

let totalPlays = 0;
generatePoke()

button.addEventListener('click', () => {
    totalPlays++;
    const chosenRadio = document.querySelector('input [type=radio]:checked');
    const chosenId = chosenRadio.value;
    encounter(chosenId);

    generatePoke();

    if (chosenRadio){
        const chosenId = chosenRadio.value;
        totalPlays++;
        encounter(chosenId);
        if (totalPlays >= 3){
            window.location = './results.js';
        } else {
            generatePoke();
        }
    }
});