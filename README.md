# Pokemon Catching App

## Application Concept and Wireframe

### Application Concept
- This is a pokemon catching app
- We will be utilizing the pokeAPI for the pokemon data
- FULL CRUD
  - GET: get all pokemon
  - POST: Caught pokemon will be posted to our array
  - PUT: Give the pokemon a name
  - DELETE: Release our pokemon back into the wild

### Functionality
- We want a header at the top of the page to display the name of our app
- When the app loads, three images of grass will be loaded on the screen
  - when the grass is clicked we will reveal a wild pokemon
- Once we select a pokemon we will push that pokemon to our pokedex
- The pokedex will show the new caught pokemon
- The pokedex will show the name of the caught pokemon
- The pokedex will have a button to release the pokemon
- The pokedex will update when the pokemon is released

### Endpoints
- GET - fetch 3 random pokemon from pokeAPI (retrieve it on front or back, choose one)
- GET - fetch our pokedex
- POST - push caught pokemon to our pokedex
- PUT - change pokemon name
- DELETE - delete our pokemon from our pokedex

### Component Architecture
- App.js (stateful: hold our caught pokemon information, this.state.caughtPokemon)
  - Header.js (functional)
  - Finder.js (stateful: axios request to fetch the three wild pokemon)
    - Grass.js (stateful: this.state.grassClicked)
  - Pokedex.js (functional)
    - Pokemon.js (stateful: this.state.name, this.state.editing)
  
### Wireframe
https://www.figma.com/file/vH2Ys9XD8mkzxbINjkRrau/Pokedex-App?node-id=0%3A1
https://www.figma.com/file/vH2Ys9XD8mkzxbINjkRrau/Pokedex-App?node-id=1%3A43

