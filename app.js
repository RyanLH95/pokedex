const pokemonCount = 151;
var pokedex = {};




// For first container 
// buttons
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

var name = document.getElementById('name')
var height = document.getElementById('height')
var weight = document.getElementById('weight')
var description = document.getElementById('description')
var primaryType = document.getElementById('primary-type')
var secondaryType = document.getElementById('secondary-type')

// functions for button elements

// To turn on pokedex
onButton.addEventListener('click', turnOn)

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

window.onload = function() {
    showPokemon(1);
}

function getPokemon(num) {
    let url = "images/pokemon/bulbasaur" + num.toString()

    let res = fetch(url);
    let pokemon = res.json();
    console.log(pokemon)
}