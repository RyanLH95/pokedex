// For first container 
const onButton = document.getElementById('big-button');
const enterButton = document.getElementById('blue-button');
const upButton = document.getElementById('up-button');
const leftButton = document.getElementById('left-button');
const rightButton = document.getElementById('right-button');
const downButton = document.getElementById('down-button');

// For second container
const numberButton = documnet.getElementById('dex-buttons');
const navigateLeft = document.getElementById('nav-left');
const navigateRight = document.getElementById('nav-right');

// pokemon information
let pokemonImage = document.getElementById('pokemon')
let PokemonInfo = document.getElementsByClassName('dex-info')
let PokemonTypeOne = document.getElementsByClassName('primary-type')
let pokemonTypeTwo = document.getElementsByClassName('secondary-type')
let dexNumber = document.getElementById('dex-number')

// functions for button elements

// To turn on pokedex
onButton.addEventListener('click', turnOnPokedex)

// To act as enter button when pressing number pad
enterButton.addEventListener('click', () => showPokemon )

// Directional buttons for navigating up and down pokedex
upButton.addEventListener('click', () => {
    goUpOne++
    showPokemon()
})

leftButton.addEventListener('click', () => {
    goUpTen++
    showPokemon()
})

downButton.addEventListener('click', () => {
    goDownOne++
    showPokemon()
})

rightButton.addEventListener('click', () => {
    goDownTen++
    showPokemon()
})

let currentPokemonIndex

function turnOnPokedex() {
    currentPokemonIndex = 0
}

function showPokemon() {
    
}

const pokemonCount = 151;
var pokedex = pokemonCount([
    {
        pokemon: 'bulbasaur',
        dexInfo: [
        { dexName: 'bulbasaur-name' },
        { specs: 'bulbasaur-specs' },
        { desc: 'bulbasaur-desc' }
        ],
        dexNumber: 'bulbasaur-no',
        primaryType: 'grass-one',
        secondaryType: 'poison-two'
    },
    {
        pokemon: 'ivysaur',
        dexInfo: [
        { dexName: 'ivysaur-name' },
        { specs: 'ivysaur-specs' },
        { desc: 'ivysaur-desc' }
        ],
        dexNumber: 'ivysaur-no',
        primaryType: 'grass-one',
        secondaryType: 'poison-two' 
    },
    {
        pokemon: 'venusaur',
        dexInfo: [
        { name: 'venusaur-name' },
        { specs: 'venusaur-specs' },
        { desc: 'venusaur-desc' }
        ],
        dexNumber: 'ivysaur-no',
        primaryType: 'grass-one',
        secondaryType: 'poison-two' 
    },
    {
        pokemon: 'charmander',
        dexInfo: [
        { name: 'charmander-name' },
        { specs: 'charmander-specs' },
        { desc: 'charmander-desc' }
        ],
        dexNumber: 'charmander-no',
        primaryType: 'fire-one',
        secondaryType: null
    },
    {
        pokemon: 'charmeleon',
        dexInfo: [
        { name: 'charmeleon-name' },
        { specs: 'charmeleon-specs' },
        { desc: 'charmeleon-desc' }
        ],
        dexNumber: 'charmeleon-no',
        primaryType: 'fire-one',
        secondaryType: null
    },
    {
        pokemon: 'charizard',
        dexInfo: [
        { name: 'charizard-name' },
        { specs: 'charizard-specs' },
        { desc: 'charizard-desc' }
        ],
        dexNumber: 'charmeleon-no',
        primaryType: 'fire-one',
        secondaryType: 'flying-two'
    },
    {
        pokemon: 'squirtle',
        dexInfo: [
        { name: 'squirtle-name' },
        { specs: 'squirtle-specs' },
        { desc: 'squirtle-desc' }
        ],
        dexNumber: 'squirtle-no',
        primaryType: 'water-one',
        secondaryType: null
    },
    {
        pokemon: 'wartortle',
        dexInfo: [
        { name: 'wartortle-name' },
        { specs: 'wartortle-specs' },
        { desc: 'wartortle-desc' }
        ],
        dexNumber: 'wartortle-no',
        primaryType: 'water-one',
        secondaryType: null
    },
    {
        pokemon: 'blastoise',
        dexInfo: [
        { name: 'blastoise-name' },
        { specs: 'blastoise-specs' },
        { desc: 'blastoise-desc' }
        ],
        dexNumber: 'blastoise-no',
        primaryType: 'water-one',
        secondaryType: null
    },
    {
        pokemon: 'caterpie',
        dexInfo: [
        { name: 'caterpie-name' },
        { specs: 'caterpie-specs' },
        { desc: 'caterpie-desc' }
        ],
        dexNumber: 'caterpie-no',
        primaryType: 'bug-one',
        secondaryType: null
    },
    {
        pokemon: 'metapod',
        dexInfo: [
        { name: 'metapod-name' },
        { specs: 'metapod-specs' },
        { desc: 'metapod-desc' }
        ],
        dexNumber: 'metapod-no',
        primaryType: 'bug-one',
        secondaryType: null
    },
    {
        pokemon: 'butterfree',
        dexInfo: [
        { name: 'butterfree-name' },
        { specs: 'butterfree-specs' },
        { desc: 'butterfree-desc' }
        ],
        dexNumber: 'butterfree-no',
        primaryType: 'bug-one',
        secondaryType: 'flying-two'
    },
    {
        pokemon: 'weedle',
        dexInfo: [
        { name: 'weedle-name' },
        { specs: 'weedle-specs' },
        { desc: 'weedle-desc' }
        ],
        dexNumber: 'weedle-no',
        primaryType: 'bug-one',
        secondaryType: 'poison-two'
    },
    {
        pokemon: 'kakuna',
        dexInfo: [
        { name: 'kakuna-name' },
        { specs: 'kakuna-specs' },
        { desc: 'kakuna-desc' }
        ],
        dexNumber: 'kakuna-no',
        primaryType: 'bug-one',
        secondaryType: 'posion-two'
    },
    {
        pokemon: 'beedrill',
        dexInfo: [
        { name: 'beedrill-name' },
        { specs: 'beedrill-specs' },
        { desc: 'beedrill-desc' }
        ],
        dexNumber: 'beedrill-no',
        primaryType: 'bug-one',
        secondaryType: 'poison-two'
    },
    {
        pokemon: 'pidgey',
        dexInfo: [
        { name: 'pidgey-name' },
        { specs: 'pidgey-specs' },
        { desc: 'pidgey-desc' }
        ],
        dexNumber: 'pidgey-no',
        primaryType: 'normal-one',
        secondaryType: 'flying-two'
    },
    {
        pokemon: 'pidgeotto',
        dexInfo: [
        { name: 'pidgeotto-name' },
        { specs: 'pidgeotto-specs' },
        { desc: 'pidgeotto-desc' }
        ],
        dexNumber: 'pidgetto-no',
        primaryType: 'normal-one',
        secondaryType: 'flying-two'
    },
    {
        pokemon: 'pidgeot',
        dexInfo: [
        { name: 'pidgeot-name' },
        { specs: 'pidgeot-specs' },
        { desc: 'pidgeot-desc' }
        ],
        dexNumber: 'pidgeot-no',
        primaryType: 'normal-one',
        secondaryType: 'flying-two'
    },
    {
        pokemon: 'rattata',
        dexInfo: [
        { name: 'rattata-name' },
        { specs: 'rattata-specs' },
        { desc: 'rattata-desc' }
        ],
        dexNumber: 'rattata-no',
        primaryType: 'normal-one',
        secondaryType: null
    },
    {
        pokemon: 'raticate',
        dexInfo: [
        { name: 'raticate-name' },
        { specs: 'raticate-specs' },
        { desc: 'raticate-desc' }
        ],
        dexNumber: 'raticate-no',
        primaryType: 'normal-one',
        secondaryType: null
    },
    {
        pokemon: 'spearow',
        dexInfo: [
        { name: 'spearow-name' },
        { specs: 'spearow-specs' },
        { desc: 'spearow-desc' }
        ],
        dexNumber: 'spearow-no',
        primaryType: 'normal-one',
        secondaryType: 'flying-two'
    },
    {
        pokemon: 'fearow',
        dexInfo: [
        { name: 'fearow-name' },
        { specs: 'fearow-specs' },
        { desc: 'fearow-desc' }
        ],
        dexNumber: 'fearow-no',
        primaryType: 'normal-one',
        secondaryType: 'flying-two'
    },
    {
        pokemon: 'ekans',
        dexInfo: [
        { name: 'ekans-name' },
        { specs: 'ekans-specs' },
        { desc: 'ekans-desc' }
        ],
        dexNumber: 'ekans-no',
        primaryType: 'poison-one',
        secondaryType: null
    },
    {
        pokemon: 'arbok',
        dexInfo: [
        { name: 'arbok-name' },
        { specs: 'arbok-specs' },
        { desc: 'arbok-desc' }
        ],
        dexNumber: 'arbok-no',
        primaryType: 'poison-one',
        secondaryType: null
    },
    {
        pokemon: 'pikachu',
        dexInfo: [
        { name: 'pikachu-name' },
        { specs: 'pikachu-specs'},
        { desc: 'pikachu-desc' }
        ],
        dexNumber: 'pikachu-no',
        primaryType: 'electric-one',
        secondaryType: null
    },
    {
        pokemon: 'raichu',
        dexInfo: [
        { name: 'raichu-name' },
        { specs: 'raichu-specs' },
        { desc: 'raichu-desc' }
        ],
        dexNumber: 'raichu-no',
        primaryType: 'electric-one',
        secondaryType: null
    },
    {
        pokemon: 'sandshrew',
        dexInfo: [
        { name: 'sandshrew-name' },
        { specs: 'sandshrew-specs' },
        { desc: 'sandshrew-desc' }
        ],
        dexNumber: 'sandshrew-no',
        primaryType: 'ground-one',
        secondaryType: null
    },
    {
        pokemon: 'sandslash',
        dexInfo: [
        { name: 'sandslash-name' },
        { specs: 'sandslash-specs' },
        { desc: 'sandslash-desc' }
        ],
        dexNumber: 'sandslash-no',
        primaryType: 'ground-one',
        secondaryType: null
    },
    {
        pokemon: 'nidoran-f',
        dexInfo: [
        { name: 'nidoran-f-name' },
        { specs: 'nidoran-f-specs' },
        { desc: 'nidoran-f-desc' }
        ],
        dexNumber: 'nidoran-f-no',
        primaryType: 'poison-one',
        secondaryType: null
    },
    {
        pokemon: 'nidorina',
        dexInfo: [
        { name: 'nidorina-name' },
        { specs: 'nidorina-specs' },
        { desc: 'nidorina-desc' }
        ],
        dexNumber: 'nidorina-no',
        primaryType: 'poison-one',
        secondaryType: null
    },
    {
        pokemon: 'nidoqueen',
        dexInfo: [
        { name: 'nidoqueen-name' },
        { specs: 'nidoqueen-specs' },
        { desc: 'nidoqueen-desc' }
        ],
        dexNumber: 'nidoqueen-no',
        primaryType: 'poison-one',
        secondaryType: 'ground-two'
    },
    {
        pokemon: 'nidoran-m',
        dexInfo: [
        { name: 'nidoran-m-name' },
        { specs: 'nidoran-m-specs' },
        { desc: 'nidoran-m-desc' }
        ],
        dexNumber: 'nidoran-m-no',
        primaryType: 'poison-one',
        secondaryType: null
    },
    {
        pokemon: 'nidorino',
        dexInfo: [
        { name: 'nidorino-name' },
        { specs: 'nidorino-specs' },
        { desc: 'nidorino-desc' }
        ],
        dexNumber: 'nidorino-no',
        primaryType: 'poison-one',
        secondaryType: null
    },
    {
        pokemon: 'nidoking',
        dexInfo: [
        { name: 'nidoking-name' },
        { specs: 'nidoking-specs' },
        { desc: 'nidoking-desc' },
        ],
        dexNumber: 'nidoking-no',
        primaryType: 'poison-one',
        secondaryType: 'ground-two'
    },
    {
        pokemon: 'clefairy',
        dexInfo: [
        { name: 'clefairy-name' },
        { specs: 'clefairy-specs' },
        { desc: 'clefairy-desc' }
        ],
        dexNumber: 'clefairy-no',
        primaryType: 'normal-one',
        secondaryType: null
    },
    {
        pokemon: 'clefable',
        dexInfo: [
        { name: 'clefable-name' },
        { specs: 'clefable-specs' },
        { desc: 'clefable-desc' }
        ],
        dexNumber: 'clefable-no',
        primaryType: 'normal-one',
        secondaryType: null
    },
    {
        pokemon: 'vulpix',
        dexInfo: [
        { name: 'vulpix-name' },
        { specs: 'vulpix-specs' },
        { desc: 'vulpix-desc' },
        ],
        dexNumber: 'vulpix-no',
        primaryType: 'fire-one',
        secondaryType: null
    },
    {
        pokemon: 'ninetales',
        dexInfo: [
        { name: 'ninetales-name' },
        { specs: 'ninetales-specs' },
        { desc: 'ninetales-desc' }
        ],
        dexNumber: 'ninetales-no',
        primaryType: 'fire-one',
        secondaryType: null
    },
    {
        pokemon: 'jigglypuff',
        dexInfo: [
        { name: 'jigglypuff-name' },
        { specs: 'jigglypuff-specs' },
        { desc: 'jigglypuff-desc' }
        ],
        dexNumber: 'jigglypuff-no',
        primaryType: 'normal-one',
        secondaryType: null
    },
    {
        pokemon: 'wigglytuff',
        dexInfo: [
        { name: 'wigglytuff-name' },
        { specs: 'wigglytuff-specs' },
        { desc: 'wigglytuff-desc' }
        ],
        dexNumber: 'wigglytuff-no',
        primaryType: 'normal-one',
        secondaryType: null
    },
    {
        pokemon: 'zubat',
        dexInfo: [
        { name: 'zubat-name' },
        { specs: 'zubat-specs' },
        { desc: 'zubat-desc' }
        ],
        dexNumber: 'zubat-no',
        primaryType: 'poison-one',
        secondaryType: 'flying-two'
    },
    {
        pokemon: 'golbat',
        dexInfo: [
        { name: 'golbat-name' },
        { specs: 'golbat-specs' },
        { desc: 'golbat-desc' }
        ],
        dexNumber: 'golbat-no',
        primaryType: 'poison-one',
        secondaryType: 'flying-two'
    },
    {
        pokemon: 'oddish',
        dexInfo: [
        { name: 'oddish-name' },
        { specs: 'oddish-specs' },
        { desc: 'oddish-desc' }
        ],
        dexNumber: 'oddish-no',
        primaryType: 'grass-one',
        secondaryType: 'poison-two'
    },
    {
        pokemon: 'gloom',
        dexInfo: [
        { name: 'gloom-name' },
        { specs: 'gloom-specs' },
        { desc: 'gloom-desc' }
        ],
        dexNumber: 'gloom-no',
        primaryType: 'grass-one',
        secondaryType: 'poison-two'
    },
    {
        pokemon: 'vileplume',
        dexInfo: [
        { name: 'vileplume-name' },
        { specs: 'vileplume-specs' },
        { desc: 'vileplume-desc' }
        ],
        dexNumber: 'vileplume-no',
        primaryType: 'grass-one',
        secondaryType: 'poison-two'
    },
    {
        pokemon: 'paras',
        dexInfo: [
        { name: 'paras-name' },
        { specs: 'paras-specs' },
        { desc: 'paras-desc' }
        ],
        dexNumber: 'paras-no',
        primaryType: 'bug-one',
        secondaryType: 'grass-two'
    },
    {
        pokemon: 'parasect',
        dexInfo: [
        { name: 'parasect-name' },
        { specs: 'parasect-specs' },
        { desc: 'parasect-desc' }
        ],
        dexNumber: 'parasect-no',
        primaryType: 'bug-one',
        secondaryType: 'grass-two'
    },
    {
        pokemon: 'venonat',
        dexInfo: [
        { name: 'venonat-name' },
        { specs: 'venonat-specs' },
        { desc: 'venonat-desc' }
        ],
        dexNumber: 'venonat-no',
        primaryType: 'bug-one',
        secondaryType: 'poison-two'
    },
    {
        pokemon: 'venomoth',
        dexInfo: [
        { name: 'venomoth-name' },
        { specs: 'venomoth-specs' },
        { desc: 'venomoth-desc' }
        ],
        dexNumber: 'venomoth-no',
        primaryType: 'bug-one',
        secondaryType: 'poison-two'
    },
    {
        pokemon: 'diglett',
        dexInfo: [
        { name: 'diglett-name' },
        { specs: 'diglett-specs' },
        { desc: 'diglett-desc' }
        ],
        dexNumber: 'diglett-no',
        primaryType: 'ground-one',
        secondaryType: null
    },
    {
        pokemon: 'dugtrio',
        dexInfo: [
        { name: 'dugtrio-name' },
        { specs: 'dugtrio-specs' },
        { desc: 'dugtrio-desc' }
        ],
        dexNumber: 'dugtrio-no',
        primaryType: 'ground-one',
        secondaryType: null
    },
    {
        pokemon: 'meowth',
        dexInfo: [
        { name: 'meowth-name' },
        { specs: 'meowth-specs' },
        { desc: 'meowth-desc' }
        ],
        dexNumber: 'meowth-no',
        primaryType: 'normal-one',
        secondaryType: null
    },
    {
        pokemon: 'persian',
        dexInfo: [
        { name: 'persian-name' },
        { specs: 'persian-specs' },
        { desc: 'persian-desc' }
        ],
        dexNumber: 'persian-no',
        primaryType: 'normal-one',
        secondaryType: null
    },
    {
        pokemon: 'psyduck',
        dexInfo: [
        { name: 'psyduck-name' },
        { specs: 'psyduck-specs' },
        { desc: 'psyduck-desc' }
        ],
        dexNumber: 'psyduck-no',
        primaryType: 'water-one',
        secondaryType: null
    },
    {
        pokemon: 'golduck',
        dexInfo: [
        { name: 'golduck-name' },
        { specs: 'golduck-specs' },
        { desc: 'golduck-desc' }
        ],
        dexNumber: 'golduck-no',
        primaryType: 'water-one',
        secondaryType: null
    },
    {
        pokemon: 'mankey',
        dexInfo: [
        { name: 'mankey-name' },
        { specs: 'mankey-specs' },
        { desc: 'mankey-desc' }
        ],
        dexNumber: 'mankey-no',
        primaryType: 'fighting-one',
        secondaryType: null
    },
    {
        pokemon: 'primeape',
        dexInfo: [
        { name: 'primeape-name' },
        { specs: 'primeape-specs' },
        { desc: 'primeape-desc' }
        ],
        dexNumber: 'primeape-no',
        primaryType: 'fighting-one',
        secondaryType: null
    },
    {
        pokemon: 'growlithe',
        dexInfo: [
        { name: 'growlithe-name' },
        { specs: 'growlithe-specs' },
        { desc: 'growlithe-desc' }
        ],
        dexNumber: 'growlithe-no',
        primaryType: 'fire-one',
        secondaryType: null
    },
    {
        pokemon: 'arcanine',
        dexInfo: [
        { name: 'arcanine-name' },
        { specs: 'arcanine-specs' },
        { desc: 'arcanine-desc' }
        ],
        dexNumber: 'arcanine-no',
        primaryType: 'fire-one',
        secondaryType: null
    },
    {
        pokemon: 'poliwag',
        dexInfo: [
        { name: 'poliwag-name' },
        { specs: 'poliwag-specs' },
        { desc: 'poliwag-desc' }
        ],
        dexNumber: 'poliwag-no',
        primaryType: 'water-one',
        secondaryType: null
    },
    {
        pokemon: 'poliwhirl',
        dexInfo: [
        { name: 'poliwhirl-name' },
        { specs: 'poliwhirl-specs' },
        { desc: 'poliwhirl-desc' }
        ],
        dexNumber: 'poliwhirl-no',
        primaryType: 'water-one',
        secondaryType: null
    },
    {
        pokemon: 'poliwrath',
        dexInfo: [
        { name: 'poliwrath-name' },
        { specs: 'poliwrath-specs' },
        { desc: 'poliwrath-desc' }
        ],
        dexNumber: 'poliwrath-no',
        primaryType: 'water-one',
        secondaryType: 'fighting-two'
    },
    {
        pokemon: 'abra',
        dexInfo: [
        { name: 'abra-name' },
        { specs: 'abra-specs' },
        { desc: 'abra-desc' }
        ],
        dexNumber: 'abra-no',
        primaryType: 'psychic-one',
        secondaryType: null
    },
    {
        pokemon: 'kadabra',
        dexInfo: [
        { name: 'kadabra-name' },
        { specs: 'kadabra-specs' },
        { desc: 'kadabra-desc' }
        ],
        dexNumber: 'kadabra-no',
        primaryType: 'psychic-one',
        secondaryType: null
    },
    {
        pokemon: 'alakazam',
        dexInfo: [
        { name: 'alakazam-name' },
        { specs: 'alakazam-specs' },
        { desc: 'alakazam-desc' }
        ],
        dexNumber: 'alakazam-no',
        primaryType: 'psychic-one',
        secondaryType: null
    },
    {
        pokemon: 'machop',
        dexInfo: [
        { name: 'machop-name' },
        { specs: 'machop-specs' },
        { desc: 'machop-desc' }
        ],
        dexNumber: 'machop-no',
        primaryType: 'fighting-one',
        secondaryType: null
    },
    {
        pokemon: 'machoke',
        dexInfo: [
        { name: 'machoke-name' },
        { specs: 'machoke-specs' },
        { desc: 'machoke-desc' }
        ],
        dexNumber: 'machoke-no',
        primaryType: 'fighting-one',
        secondaryType: null
    },
    {
        pokemon: 'machamp',
        dexInfo: [
        { name: 'machamp-name' },
        { specs: 'machamp-specs' },
        { desc: 'machamp-desc' }
        ],
        dexNumber: 'machamp-no',
        primaryType: 'fighting-one',
        secondaryType: null
    },
    {
        pokemon: 'bellsprout',
        dexInfo: [
        { name: 'bellsprout-name' },
        { specs: 'bellsprout-specs' },
        { desc: 'bellsprout-desc' }
        ],
        dexNumber: 'bellsprout-no',
        primaryType: 'grass-one',
        secondaryType: 'poison-two'
    },
    {
        pokemon: 'weepinbell',
        dexInfo: [
        { name: 'weepinbell-name' },
        { specs: 'weepinbell-specs' },
        { desc: 'weepinbell-desc' }
        ],
        dexNumber: 'weepinbell-no',
        primaryType: 'grass-one',
        secondaryType: 'poison-two'
    },
    {
        pokemon: 'victreebel',
        dexInfo: [
        { name: 'victreebel-name' },
        { specs: 'victreebel-specs' },
        { desc: 'victreebel-desc' }
        ],
        dexNumber: 'victreebel-no',
        primaryType: 'grass-one',
        secondaryType: 'poison-two'
    },
    {
        pokemon: 'tentacool',
        dexInfo: [
        { name: 'tentacool-name' },
        { specs: 'tentacool-specs' },
        { desc: 'tentacool-desc' }
        ],
        dexNumber: 'tentacool-no',
        primaryType: 'water-one',
        secondaryType: 'poison-two'
    },
    {
        pokemon: 'tentacruel',
        dexInfo: [
        { name: 'tentacruel-name' },
        { specs: 'tentacruel-specs' },
        { desc: 'tentacruel-desc' }
        ],
        dexNumber: 'tentacruel-no',
        primaryType: 'water-one',
        secondaryType: 'poison-two'
    },
    {
        pokemon: 'geodude',
        dexInfo: [
        { name: 'geodude-name' },
        { specs: 'geodude-specs' },
        { desc: 'geodude-desc' }
        ],
        dexNumber: 'geodude-no',
        primaryType: 'rock-one',
        secondaryType: 'ground-two'
    },
    {
        pokemon: 'graveler',
        dexInfo: [
        { name: 'graveler-name' },
        { specs: 'graveler-specs' },
        { desc: 'graveler-desc' }
        ],
        dexNumber: 'graveler-no',
        primaryType: 'rock-one',
        secondaryType: 'ground-two'
    },
    {
        pokemon: 'golem',
        dexInfo: [
        { name: 'golem-name' },
        { specs: 'golem-specs' },
        { desc: 'golem-desc' }
        ],
        dexNumber: 'golem-no',
        primaryType: 'rock-one',
        secondaryType: 'ground-two'
    },
    {
        pokemon: 'ponyta',
        dexInfo: [
        { name: 'ponyta-name' },
        { specs: 'ponyta-specs' },
        { desc: 'ponyta-desc' }
        ],
        dexNumber: 'ponyta-no',
        primaryType: 'fire-one',
        secondaryType: null
    },
    {
        pokemon: 'rapidash',
        dexInfo: [
        { name: 'rapidash-name' },
        { specs: 'rapidash-specs' },
        { desc: 'rapidash-desc' }
        ],
        dexNumber: 'rapidash-no',
        primaryType: 'fire-one',
        secondaryType: null
    },
    {
        pokemon: 'slowpoke',
        dexInfo: [
        { name: 'slowpoke-name' },
        { specs: 'slowpoke-specs' },
        { desc: 'slowpoke-desc' }
        ],
        dexNumber: 'slowpoke-no',
        primaryType: 'water-one',
        secondaryType: 'psychic-two'
    },
    {
        pokemon: 'slowbro',
        dexInfo: [
        { name: 'slowbro-name' },
        { specs: 'slowbro-specs' },
        { desc: 'slowbro-desc' }
        ],
        dexNumber: 'slowbro-no',
        primaryType: 'water-one',
        secondaryType: 'psychic-two'
    },
    {
        pokemon: 'magnemite',
        dexInfo: [
        { name: 'magnemite-name' },
        { specs: 'magnemite-specs' },
        { desc: 'magnemite-desc' }
        ],
        dexNumber: 'magnemite-no',
        primaryType: 'electric-one',
        secondaryType: null
    },
    {
        pokemon: 'magneton',
        dexInfo: [
        { name: 'magneton-name' },
        { specs: 'magneton-specs' },
        { desc: 'magneton-desc' }
        ],
        dexNumber: 'magneton-no',
        primaryType: 'electric-one',
        secondaryType: null
    },
    {
        pokemon: 'farfetch-d',
        dexInfo: [
        { name: 'farfetch-d-name' },
        { specs: 'farfetch-d-specs' },
        { desc: 'farfetch-d-desc' }
        ],
        dexNumber: 'farfetch-d-no',
        primaryType: 'normal-one',
        secondaryType: 'flying-two'
    },
    {
        pokemon: 'doduo',
        dexInfo: [
        { name: 'doduo-name' },
        { specs: 'doduo-specs' },
        { desc: 'doduo-desc' }
        ],
        dexNumber: 'doduo-no',
        primaryType: 'normal-one',
        secondaryType: 'flying-two'
    },
    {
        pokemon: 'dodrio',
        dexInfo: [
        { name: 'dodrio-name' },
        { specs: 'dodrio-specs' },
        { desc: 'dodrio-desc' }
        ],
        dexNumber: 'dodrio-no',
        primaryType: 'normal-one',
        secondaryType: 'flying-two'
    },
    {
        pokemon: 'seel',
        dexInfo: [
        { name: 'seel-name' },
        { specs: 'seel-specs' },
        { desc: 'seel-desc' }
        ],
        dexNumber: 'seel-no',
        primaryType: 'water-one',
        secondaryType: null
    },
    {
        pokemon: 'dewgong',
        dexInfo: [
        { name: 'dewgong-name' },
        { specs: 'dewgong-specs' },
        { desc: 'dewgong-desc' }
        ],
        dexNumber: 'dewgong-no',
        primaryType: 'water-one',
        secondaryType: 'ice-two'
    },
    {
        pokemon: 'grimer',
        dexInfo: [
        { name: 'grimer-name' },
        { specs: 'grimer-specs' },
        { desc: 'grimer-desc' }
        ],
        dexNumber: 'grimer-no',
        primaryType: 'poison-one',
        secondaryType: null
    },
    {
        pokemon: 'muk',
        dexInfo: [
        { name: 'muk-name' },
        { specs: 'muk-specs' },
        { desc: 'muk-desc' }
        ],
        dexNumber: 'muk-no',
        primaryType: 'poison-one',
        secondaryType: null
    },
    {
        pokemon: 'shellder',
        dexInfo: [
        { name: 'shellder-name' },
        { specs: 'shellder-specs' },
        { desc: 'shellder-desc' }
        ],
        dexNumber: 'shellder-no',
        primaryType: 'water-one',
        secondaryType: null
    },
    {
        pokemon: 'cloyster',
        dexInfo: [
        { name: 'cloyster-name' },
        { specs: 'cloyster-specs' },
        { desc: 'cloyster-desc' }
        ],
        dexNumber: 'cloyster-no',
        primaryType: 'water-one',
        secondaryType: 'ice-two'
    },
    {
        pokemon: 'gastly',
        dexInfo: [
        { name: 'gastly-name' },
        { specs: 'gastly-specs' },
        { desc: 'gastly-desc' }
        ],
        dexNumber: 'gastly-no',
        primaryType: 'ghost-one',
        secondaryType: 'poison-two'
    },
    {
        pokemon: 'haunter',
        dexInfo: [
        { name: 'haunter-name' },
        { specs: 'haunter-specs' },
        { desc: 'haunter-desc' }
        ],
        dexNumber: 'haunter-no',
        primaryType: 'ghost-one',
        secondaryType: 'poison-two'
    },
    {
        pokemon: 'gengar',
        dexInfo: [
        { name: 'gengar-name' },
        { specs: 'gengar-specs' },
        { desc: 'gengar-desc' },
        ],
        dexNumber: 'gengar-no',
        primaryType: 'ghost-one',
        secondaryType: 'poison-two'
    },
    {
        pokemon: 'onix',
        dexInfo: [
        { name: 'onix-name' },
        { specs: 'onix-specs' },
        { desc: 'onix-desc' },
        ],
        dexNumber: 'onix-no',
        primaryType: 'rock-one',
        secondaryType: 'ground-two'
    },
    {
        pokemon: 'drowzee',
        dexInfo: [
        { name: 'drowzee-name' },
        { specs: 'drowzee-specs' },
        { desc: 'drowzee-desc' }
        ],
        dexNumber: 'drowzee-no',
        primaryType: 'psychic-one',
        secondaryType: null
    },
    {
        pokemon: 'hypno',
        dexInfo: [
        { name: 'hypno-name' },
        { specs: 'hypno-specs' },
        { desc: 'hypno-desc' }
        ],
        dexNumber: 'hypno-no',
        primaryType: 'psychic-one',
        secondaryType: null
    },
    {
        pokemon: 'krabby',
        dexInfo: [
        { name: 'krabby-name' },
        { specs: 'krabby-specs' },
        { desc: 'krabby-desc' }
        ],
        dexNumber: 'krabby-no',
        primaryType: 'water-one',
        secondaryType: null
    },
    {
        pokemon: 'kingler',
        dexInfo: [
        { name: 'kingler-name' },
        { specs: 'kingler-specs' },
        { desc: 'kingler-desc' }
        ],
        dexNumber: 'kingler-no',
        primaryType: 'water-one',
        secondaryType: null
    },
    {
        pokemon: 'voltorb',
        dexInfo: [
        { name: 'voltorb-name' },
        { specs: 'voltorb-specs' },
        { desc: 'voltorb-desc' }
        ],
        dexNumber: 'voltorb-no',
        primaryType: 'electric-one',
        secondaryType: null
    },
    {
        pokemon: 'electrode',
        dexInfo: [
        { name: 'electrode-name' },
        { specs: 'electrode-specs' },
        { desc: 'electrode-desc' }
        ],
        dexNumber: 'electrode-no',
        primaryType: 'electric-one',
        secondaryType: null
    },
    {
        pokemon: 'exeggcute',
        dexInfo: [
        { name: 'exeggcute-name' },
        { specs: 'exeggcute-specs' },
        { desc: 'exeggcute-desc' }
        ],
        dexNumber: 'exeggcute-no',
        primaryType: 'grass-one',
        secondaryType: 'psychic-two'
    },
    {
        pokemon: 'exeggutor',
        dexInfo: [
        { name: 'exeggutor-name' },
        { specs: 'exeggutor-specs' },
        { desc: 'exeggutor-desc' }
        ],
        dexNumber: 'exeggutor-no',
        primaryType: 'grass-one',
        secondaryType: 'psychic-two'
    },
    {
        pokemon: 'cubone',
        dexInfo: [
        { name: 'cubone-name' },
        { specs: 'cubone-specs' },
        { desc: 'cubone-desc' }
        ],
        dexNumber: 'cubone-no',
        primaryType: 'ground-one',
        secondaryType: null
    },
    {
        pokemon: 'marowak',
        dexInfo: [
        { name: 'marowak-name' },
        { specs: 'marowak-specs' },
        { desc: 'marowak-desc' }
        ],
        dexNumber: 'marowak-no',
        primaryType: 'ground-one',
        secondaryType: null
    },
    {
        pokemon: 'hitmonlee',
        dexInfo: [
        { name: 'hitmonlee-name' },
        { specs: 'hitmonlee-specs' },
        { desc: 'hitmonlee-desc' }
        ],
        dexNumber: 'hitmonlee-no',
        primaryType: 'fighting-one',
        secondaryType: null
    },
    {
        pokemon: 'hitmonchan',
        dexInfo: [
        { name: 'hitmonchan-name' },
        { specs: 'hitmonchan-specs' },
        { desc: 'hitmonchan-desc' }
        ],
        dexNumber: 'hitmonchan-no',
        primaryType: 'fighting-one',
        secondaryType: null
    },
    {
        pokemon: 'lickitung',
        dexInfo: [
        { name: 'lickitung-name' },
        { specs: 'lickitung-specs' },
        { desc: 'lickitung-desc' }
        ],
        dexNumber: 'lickitung-no',
        primaryType: 'normal-one',
        secondaryType: null
    },
    {
        pokemon: 'koffing',
        dexInfo: [
        { name: 'koffing-name' },
        { specs: 'koffing-specs' },
        { desc: 'koffing-desc' }
        ],
        dexNumber: 'koffing-no',
        primaryType: 'poison-one',
        secondaryType: null
    },
    {
        pokemon: 'weezing',
        dexInfo: [
        { name: 'weezing-name' },
        { specs: 'weezing-specs' },
        { desc: 'weezing-desc' }
        ],
        dexNumber: 'weezing-no',
        primaryType: 'poison-one',
        secondaryType: null
    },
    {
        pokemon: 'rhyhorn',
        dexInfo: [
        { name: 'rhyhorn-name' },
        { specs: 'rhyhorn-specs' },
        { desc: 'rhyhorn-desc' }
        ],
        dexNumber: 'rhyhorn-no',
        primaryType: 'ground-one',
        secondaryType: 'rock-two'
    },
    {
        pokemon: 'rhydon',
        dexInfo: [
        { name: 'rhydon-name' },
        { specs: 'rhydon-specs' },
        { desc: 'rhydon-desc' },
        ],
        dexNumber: 'rhydon-no',
        primaryType: 'ground-one',
        secondaryType: 'rock-two'
    },
    {
        pokemon: 'chansey',
        dexInfo: [
        { name: 'chansey-name' },
        { specs: 'chansey-specs' },
        { desc: 'chansey-desc' }
        ],
        dexNumber: 'chansey-no',
        primaryType: 'normal-one',
        secondaryType: null
    },
    {
        pokemon: 'tangela',
        dexInfo: [
        { name: 'tangela-name' },
        { specs: 'tangela-specs' },
        { desc: 'tangela-desc' }
        ],
        dexNumber: 'tangela-no',
        primaryType: 'grass-one',
        secondaryType: null
    },
    {
        pokemon: 'kangaskhan',
        dexInfo: [
        { name: 'kangaskhan-name' },
        { specs: 'kangaskhan-specs' },
        { desc: 'kangaskhan-desc' }
        ],
        dexNumber: 'kangaskhan-no',
        primaryType: 'normal-one',
        secondaryType: null
    },
    {
        pokemon: 'horsea',
        dexInfo: [
        { name: 'horsea-name' },
        { specs: 'horsea-specs' },
        { desc: 'horsea-desc' }
        ],
        dexNumber: 'horsea-no',
        primaryType: 'water-one',
        secondaryType: null
    },
    {
        pokemon: 'seadra',
        dexInfo: [
        { name: 'seadra-name' },
        { specs: 'seadra-specs' },
        { desc: 'seadra-desc' },
        ],
        dexNumber: 'seadra-no',
        primaryType: 'water-one',
        secondaryType: null
    },
    {
        pokemon: 'goldeen',
        dexInfo: [
        { name: 'goldeen-name' },
        { specs: 'goldeen-specs' },
        { desc: 'goldeen-desc' },
        ],
        dexNumber: 'goldeen-no',
        primaryType: 'water-one',
        secondaryType: null
    },
    {
        pokemon: 'seaking',
        dexInfo: [
        { name: 'seaking-name' },
        { specs: 'seaking-specs' },
        { desc: 'seaking-desc' }
        ],
        dexNumber: 'seaking-no',
        primaryType: 'water-one',
        secondaryType: null
    },
    {
        pokemon: 'staryu',
        dexInfo: [
        { name: 'staryu-name' },
        { specs: 'staryu-specs' },
        { desc: 'staryu-desc' }
        ],
        dexNumber: 'staryu-no',
        primaryType: 'water-one',
        secondaryType: null
    },
    {
        pokemon: 'starmie',
        dexInfo: [
        { name: 'starmie-name' },
        { specs: 'starmie-specs' },
        { desc: 'starmie-desc' }
        ],
        dexNumber: 'starmie-no',
        primaryType: 'water-one',
        secondaryType: 'psychic-two'
    },
    {
        pokemon: 'mr-mime',
        dexInfo: [
        { name: 'mr-mime-name' },
        { specs: 'mr-mime-specs' },
        { desc: 'mr-mime-desc' }
        ],
        dexNumber: 'mr-mime-no',
        primaryType: 'psychic-one',
        secondaryType: null
    },
    {
        pokemon: 'scyther',
        dexInfo: [
        { name: 'scyther-name' },
        { specs: 'scyther-specs' },
        { desc: 'scyther-desc' }
        ],
        dexNumber: 'scyther-no',
        primaryType: 'bug-one',
        secondaryType: 'flying-two'
    },
    {
        pokemon: 'jynx',
        dexInfo: [
        { name: 'jynx-name' },
        { specs: 'jynx-specs' },
        { desc: 'jynx-desc' },
        ],
        dexNumber: 'jynx-no',
        primaryType: 'ice-one',
        secondaryType: 'psychic-two'
    },
    {
        pokemon: 'electabuzz',
        dexInfo: [
        { name: 'electabuzz-name' },
        { specs: 'electabuzz-specs' },
        { desc: 'electabuzz-desc' }
        ],
        dexNumber: 'electabuzz-no',
        primaryType: 'electric-one',
        secondaryType: null
    },
    {
        pokemon: 'magmar',
        dexInfo: [
        { name: 'magmar-name' },
        { specs: 'magmar-specs' },
        { desc: 'magmar-desc' }
        ],
        dexNumber: 'magmar-no',
        primaryType: 'fire-one',
        secondaryType: null
    },
    {
        pokemon: 'pinsir',
        dexInfo: [
        { name: 'pinsir-name' },
        { specs: 'pinsir-specs' },
        { desc: 'pinsir-desc' },
        ],
        dexNumber: 'pinsir-no',
        primaryType: 'bug-one',
        secondaryType: null
    },
    {
        pokemon: 'tauros',
        dexInfo: [
        { name: 'tauros-name' },
        { specs: 'tauros-specs' },
        { desc: 'tauros-desc' }
        ],
        dexNumber: 'tauros-no',
        primaryType: 'normal-one',
        secondaryType: null
    },
    {
        pokemon: 'magikarp',
        dexInfo: [
        { name: 'magikarp-name' },
        { specs: 'magikarp-specs' },
        { desc: 'margikarp-desc' }
        ],
        dexNumber: 'magikarp-no',
        primaryType: 'water-one',
        secondaryType: null
    },
    {
        pokemon: 'gyarados',
        dexInfo: [
        { name: 'gyarados-name' },
        { specs: 'gyarados-specs' },
        { desc: 'gyarados-desc' }
        ],
        dexNumber: 'gyarados-no',
        primaryType: 'water-one',
        secondaryType: 'flying-two'
    },
    {
        pokemon: 'lapras',
        dexInfo: [
        { name: 'lapras-name' },
        { specs: 'lapras-specs' },
        { desc: 'lapras-desc' }
        ],
        dexNumber: 'lapras-no',
        primaryType: 'water-one',
        secondaryType: 'ice-two'
    },
    {
        pokemon: 'ditto',
        dexInfo: [
        { name: 'ditto-name' },
        { specs: 'ditto-specs' },
        { desc: 'ditto-desc' }
        ],
        dexNumber: 'ditto-no',
        primaryType: 'normal-one',
        secondaryType: null
    },
    {
        pokemon: 'eevee',
        dexInfo: [
        { name: 'eevee-name' },
        { specs: 'eevee-specs' },
        { desc: 'eevee-desc' }
        ],
        dexNumber: 'eevee-no',
        primaryType: 'normal-one',
        secondaryType: null
    },
    {
        pokemon: 'vaporeon',
        dexInfo: [
        { name: 'vaporeon-name' },
        { specs: 'vaporeon-specs' },
        { desc: 'vaporeon-desc' }
        ],
        dexNumber: 'vaporeon-no',
        primaryType: 'water-one',
        secondaryType: null
    },
    {
        pokemon: 'jolteon',
        dexInfo: [
        { name: 'jolteon-name' },
        { specs: 'jolteon-specs' },
        { desc: 'jolteon-desc' },
        ],
        dexNumber: 'jolteon-no',
        primaryType: 'electric-one',
        secondaryType: null
    },
    {
        pokemon: 'flareon',
        dexInfo: [
        { name: 'flareon-name' },
        { specs: 'flareon-specs' },
        { desc: 'flareon-desc' }
        ],
        dexNumber: 'flareon-no',
        primaryType: 'fire-one',
        secondaryType: null
    },
    {
        pokemon: 'porygon',
        dexInfo: [
        { name: 'porygon-name' },
        { specs: 'porygon-specs' },
        { desc: 'porygon-desc' }
        ],
        dexNumber: 'porygon-no',
        primaryType: 'normal-one',
        secondaryType: null
    },
    {
        pokemon: 'omanyte',
        dexInfo: [
        { name: 'omanyte-name' },
        { specs: 'omanyte-specs' },
        { desc: 'omanyte-desc' }
        ],
        dexNumber: 'omanyte-no',
        primaryType: 'rock-one',
        secondaryType: 'water-two'
    },
    {
        pokemon: 'omastar',
        dexInfo: [
        { name: 'omastar-name' },
        { specs: 'omastar-specs' },
        { desc: 'omastar-desc' }
        ],
        dexNumber: 'omastar-no',
        primaryType: 'rock-one',
        secondaryType: 'water-two'
    },
    {
        pokemon: 'kabuto',
        dexInfo: [
        { name: 'kabuto-name' },
        { specs: 'kabuto-specs' },
        { desc: 'kabuto-desc' }
        ],
        dexNumber: 'kabuto-no',
        primaryType: 'rock-one',
        secondaryType: 'water-two'
    },
    {
        pokemon: 'kabutops',
        dexInfo: [
        { name: 'kabutops-name' },
        { specs: 'kabutops-specs' },
        { desc: 'kabutops-desc' }
        ],
        dexNumber: 'kabutops-no',
        primaryType: 'rock-one',
        secondaryType: 'water-two'
    },
    {
        pokemon: 'aerodactyl',
        dexInfo: [
        { name: 'aerodactyl-name' },
        { specs: 'aerodactyl-specs' },
        { desc: 'aerodactyl-desc' }
        ],
        dexNumber: 'aerodactyl-no',
        primaryType: 'rock-one',
        secondaryType: 'flying-two'
    },
    {
        pokemon: 'snorlax',
        dexInfo: [
        { name: 'snorlax-name' },
        { specs: 'snorlax-specs' },
        { desc: 'snorlax-desc' }
        ],
        dexNumber: 'snorlax-no',
        primaryType: 'normal-one',
        secondaryType: null
    },
    {
        pokemon: 'articuno',
        dexInfo: [
        { name: 'articuno-name' },
        { specs: 'articuno-specs' },
        { desc: 'articuno-desc' }
        ],
        dexNumber: 'articuno-no',
        primaryType: 'ice-one',
        secondaryType: 'flying-two'
    },
    {
        pokemon: 'zapdos',
        dexInfo: [
        { name: 'zapdos-name' },
        { specs: 'zapdos-specs' },
        { desc: 'zapdos-desc' },
        ],
        dexNumber: 'zapdos-no',
        primaryType: 'electric-one',
        secondaryType: 'flying-two'
    },
    {
        pokemon: 'moltres',
        dexInfo: [
        { name: 'moltres-name' },
        { specs: 'moltres-specs' },
        { desc: 'moltres-desc' }
        ],
        dexNumber: 'moltres-no',
        primaryType: 'fire-one',
        secondaryType: 'flying-two'
    },
    {
        pokemon: 'dratini',
        dexInfo: [
        { name: 'dratini-name' },
        { specs: 'dratini-specs' },
        { desc: 'dratini-desc' }
        ],
        dexNumber: 'dratini-no',
        primaryType: 'dragon-one',
        secondaryType: null
    },
    {
        pokemon: 'dragonair',
        dexInfo: [
        { name: 'dragonair-name' },
        { specs: 'dragonair-specs' },
        { desc: 'dragonair-desc' }
        ],
        dexNumber: 'dragonair-no',
        primaryType: 'dragon-one',
        secondaryType: null
    },
    {
        pokemon: 'dragonite',
        dexInfo: [
        { name: 'dragonite-name' },
        { specs: 'dragonite-specs' },
        { desc: 'dragonite-desc' }
        ],
        dexNumber: 'dragonite-no',
        primaryType: 'dragon-one',
        secondaryType: 'flying-two'
    },
    {
        pokemon: 'mewtwo',
        dexInfo: [
        { name: 'mewtwo-name' },
        { specs: 'mewtwo-specs' },
        { desc: 'mewtwo-desc' }
        ],
        dexNumber: 'mewtwo-no',
        primaryType: 'psychic-one',
        secondaryType: null
    },
    {
        pokemon: 'mew',
        dexInfo: [
        { name: 'mew-name' },
        { specs: 'mew-specs' },
        { desc: 'mew-desc' }
        ],
        dexNumber: 'mew-no',
        primaryType: 'psychic-one',
        secondaryType: null
    }
])
