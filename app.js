import { pokemon } from './src/pokemon.js';
console.log(pokemon);

const caughtSpan = document.getElementById('caught');
const chosenSpan = document.getElementById('chosen');
const appearSpan = document.getElementById('appeared');

const pokeImg1 = document.getElementById('poke1-img');
const pokeImg2 = document.getElementById('poke2-img');
const pokeImg3 = document.getElementById('poke3-img');
const button = document.getElementById('select');

let caught = 0;
let chosen = 0;
let appeared = 0;

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
    console.log(rando1, rando2);

    let poke1 = pokemon[rando1];
    pokeImg1.src = poke1.url_image;

    let poke2 = pokemon[rando2];
    pokeImg2.src = poke2.url_image;

    let poke3 = pokemon[rando3];
    pokeImg3.src = poke3.url_image;

};

generatePoke();

button.addEventListener('click', ()=>{
    const selected = document.querySelector('input[type=radio]:checked');
  // if (!selected) {
  //   return 
  // const userSelect = selected.value;
    generatePoke();
    appeared++;
    appeared++;
    appeared++;
    appearSpan.textContent = appeared;
});