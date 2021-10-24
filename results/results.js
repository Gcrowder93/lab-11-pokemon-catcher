import { pokemon } from '../src/pokemon.js';
import { getResults, findById } from '../storage-utils.js';

const results = getResults();
const main = document.getElementById('main');

for (let item of results){
    const pokeDex = findById(item.id, pokemon);
    const div = document.createElement('div');
    const img = document.createElement('img');
    img.src = pokeDex.url_image;
    const header = document.createElement('h2');
    header.textContent = pokeDex.name;
    const resultsSpan1 = document.createElement('span');
    resultsSpan1.textContent = `Shown: ${item.encounter}-`;
    const resultsSpan2 = document.createElement('span2');
    resultsSpan2.textContent = `Picked: ${item.capture}` ;

    div.append(header, img, resultsSpan1, resultsSpan2);
    main.append(div);
}

const names = results.map((item)=>{
    const pokeDex = findById(item.id, pokemon);
    return pokeDex.id;
});

const picked = results.map((item)=>{
    return item.capture;
});


const ctx = document.getElementById('resultsChart').getContext('2d');
// eslint-disable-next-line no-undef
new Chart(ctx, {
    type: 'bar',
    data: {
        labels: names,
        datasets: [{
            label: '# of Times Picked',
            data: picked,
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});

// const resultString = document.getElementById('result-string');

// for (let poke of results) {
//     const pokemonId = findById(poke.id, pokemon);
//     const div = document.createElement('div');
//     const img = document.createElement('img');
//     img.src = pokemonId.url_image;

//     const captured = document.createElement('span');
//     captured.textContent = `Captured: ${poke.picked}`;
//     const encountered = document.createElement('span');
//     encountered.textContent = `Encountered: ${poke.shown}`;

//     div.append(img, name, captured, encountered);
//     resultString.append(div);

// }

