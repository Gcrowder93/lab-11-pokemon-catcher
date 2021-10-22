export function findById(id, items){
    for (let item of items){
        if (item.id === id){
            return item;
        }
    }
}

export function getResults(){
    const resultString = localStorage.getItem('RESULTS') || '[]';
    const result = JSON.parse(resultString);
    return result;
}

export function capturePokemon(id) {
    const newResults = getResults();
    const capturePokemon = findById(id, newResults);
    
    if (capturePokemon){
        capturePokemon.picked ++;  
    } else {
        const newCapturePokemon = { id: id, shown: 1, picked: 1 };
        newResults.push(newCapturePokemon);
    }

    setResults(newResults);
}

export function encounterPokemon(id){
    let results = getResults();
    let item = findById(id, results);

    if (item){
        item.encounter++;
    } else {
        const newItem = { id: id, capture: 0, encounter: 1 };
        results.push(newItem);
    }
    setResults(results);
}

export function setResults(results){
    const stringResults = JSON.stringify(results);
    localStorage.setItem('RESULTS', stringResults);
}
