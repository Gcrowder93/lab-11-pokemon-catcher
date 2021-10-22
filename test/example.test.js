// IMPORT MODULES under test here:
// import { example } from '../example.js';

import { encounterPokemon, getResults, setResults } from '../storage-utils.js';
const test = QUnit.test;

test('time to test a function', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = true;
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = true;

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});

test ('getResults returns the key "RESULTS" from localStorage',
    (expect) => {
        const results = [
            { id: 1, encounter: 0, capture: 0 }
        ];
        localStorage.setItem('RESULTS', JSON.stingify(results));
        const actual = getResults();
        expect.deepEqual(actual, results);
    });

test ('setResults returns and empty array if there is no RESULTS key in localStorage', (expect)=>{
    localStorage.removeItem('RESULTS');
    const expected = [];
    setResults(expected);
    const stringResults = localStorage.getItem('RESULTS');
    const actual = JSON.parse(stringResults);
    expect.deepEqual(actual, expected);
});

// test ('getChosen returns an empty array if there is no RESULTS key in localStorage', (expect) => {
//     localStorage.removeItem('RESULTS');
//     const expected = [
//         { id: 1, encounter: 0, capture: 0 }
//     ];
//     getChosen(expected);
//     const localStorage = localStorage.getItem('RESULTS');
//     const actual = JSON.parse(localStorage);
//     expect.deepEqual(actual, actual);
// });

test ('encounterPokemon increments the shown keu when the item exists in results', (expect) => {
    const expected = [
        { id: 1, encounter: 1, capture: 1 },
    ];
    encounterPokemon(1);
    const string = localStorage.getItem('RESULTS');
    const actual = JSON.parse(string);
    expect.deepEqual(actual, expected);
});