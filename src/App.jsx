// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'
import PokemonCard from "./components/PokemonCard"
import NavBar from "./components/NavBar"
import { useState } from "react"

// Liste des pokemons
const pokemonList = [
  {
      name: "Bulbasaur",
      imgSrc: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
  },
  {
    name: "charmander",
    imgSrc: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png",
  },
  {
    name: "squirtle",
    imgSrc: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/7.png",
  },
  {
    name: "pikachu",
    imgSrc: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png",
  },
  {
      name: "Mew",
  },
];

function App() {

  // State pokmonIndex
  const [pokemonIndex, setPokemonIndex] = useState(0);

  // Fonctions pour changer de pokemon au click
  const previousClick = () => {
    setPokemonIndex(pokemonIndex - 1)
  }
  const nextClick = () => {
    setPokemonIndex(pokemonIndex + 1)
  }

  return (
    <div>
        <PokemonCard pokemon={pokemonList[pokemonIndex]}/>
        <NavBar pokemonList={pokemonList} pokemonIndex={pokemonIndex} previousClick={previousClick} nextClick={nextClick} />
    </div>
  );
}

export default App;