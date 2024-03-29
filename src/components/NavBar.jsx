function NavBar ({ pokemonList, pokemonClick}) {

    const pikaClick = (pokemon) => {
        alert("Pika pikachuuuu !!!");
        pokemonClick(pokemon);
      }

    return (
        <>
            {pokemonList.map ((pokemon, index) => (
                <button key={pokemon.name} onClick={() => {pokemon.name === "pikachu" ? pikaClick(index) : pokemonClick(index)}}>
                    {pokemon.name}
                </button>
            ))}
        </>
    );
}

export default NavBar;