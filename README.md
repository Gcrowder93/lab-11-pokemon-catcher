# Pokemon Cathcher App

## HTML Elements Needed
- [ ] Home Page
  - [ ] Three pokemon image buttons/(radios?)
    * need id's to watch event listeners
  - [ ] Results Page
- [ ] Render results table?/list?

## State to Keep track of
- [ ] **pokemonCaught** -- total plays
- [ ] **pokemonChosen** -- selected button
- [ ] **pokemonAppear** -- the three generated per session

## user events
* Page Load
  * generate three pokemon 
  * update state -- **pokemonAppear**
  * update view based on state -- render
* Button Click
  * increment total plays state -- **pokemonCaught**
  * increment selected pokemon state -- **pokemonChosen**
  * if (plays < 10) 
      * generate three pokemon 
      * update state -- **pokemonAppear**
      * update view based on state -- render
  * else () 
    * send user to results page


## functions


### Local Storage Utils Functions -- could be in a separate *storage-utils.js*
* findById -- reference products lab for this function
* set Results -- TWO FUNCTIONS
  * *Encountered* -- 
    * getResults
    * increment pokemonAppear
    * stringify
    * localStorage.setItem('RESULTS', string)
  * *Selected* -- 
    * getResults
    * increment pokemonChosen
    * stringify
    * localStorage.setItem('RESULTS', string)
* getResults
  * looks for 'RESULTS' in local storage
  * if ('RESULTS') exists 
    * localStorage.getItem('RESULTs')
    * JSON.parse
    * return results array
  * else (no 'RESULTS')
    * return empty array
    
  ```
  'RESULTS' = [
    {
        id: '',
        appeared: #,
        chosen: #
    },
    {
        id: '',
        appeared: #,
        chosen: #
    },
    ...
]```


### home page Functions -- app.js














  - [ ] Stretch - counter at the top of page to display play count