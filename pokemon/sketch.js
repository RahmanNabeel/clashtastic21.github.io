// Pokemon Game Project
// Nabeel Rahman
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

const pokedex = document.getElementById('pokedex');
let song;
let header;

function setup() {
    createCanvas(400, 400);
    header = createElement("h1", "Generation 1 Pokedex");
    header.mouseOver(newText);
    header.mouseOut(oldText);
  
  }
  
  function draw() {
    background(220);
  }
  
  function newText() {
    header.html("Kanto!!");
  }
  
  function oldText() {
    header.html("Generation 1 pokedex");
  }

function preLoad() {
    song = loadSound('assets/dpmusic.mp3');
}

function setup() {
    createCanvas(windowWidth, windowHeight);
    song.play();
}



const fetchPokemon = () => {
    const promises = [];
    for (let i = 1; i <= 150; i++) {
        const url = `https://pokeapi.co/api/v2/pokemon/${i}`;
        promises.push(fetch(url).then((res) => res.json()));
    }
    Promise.all(promises).then((results) => {
        const pokemon = results.map((result) => ({
            name: result.name,
            image: result.sprites['front_default'],
            type: result.types.map((type) => type.type.name).join(', '),
            id: result.id
        }));
        displayPokemon(pokemon);
    });
};

const displayPokemon = (pokemon) => {
    console.log(pokemon);
    const pokemonHTMLString = pokemon
        .map(
            (pokeman) => `
        <li class="card">
            <img class="card-image" src="${pokeman.image}"/>
            <h2 class="card-title">${pokeman.id}. ${pokeman.name}</h2>
            <p class="card-subtitle">Type: ${pokeman.type}</p>
        </li>
    `
        )
        .join('');
    pokedex.innerHTML = pokemonHTMLString;
};
fetchPokemon();