// IMPORT MODULES under test here:
// import { example } from '../example.js';

import { getChosen, getResults } from '../storage-utils';
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

test ('getChosen returns an empty array if there is no RESULTS key in localStorage', (expect) => {
    localStorage.removeItem('RESULTS');
    const expected = [
        { id: 1, encounter: 0, capture: 0 }
    ];
    getChosen(expected);
    const localStorage = localStorage.getItem('RESULTS');
    const actual = JSON.parse(localStorage);
    expect.deepEqual(actual, actual);
});