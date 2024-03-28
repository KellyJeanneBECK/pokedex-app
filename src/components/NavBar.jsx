function NavBar ({ pokemonList, pokemonClick}) {
    return (
        <>
            {pokemonList.map ((pokemon, index) => (
                <button key={pokemon.name} onClick={() => pokemonClick(index)}>
                    {pokemon.name}
                </button>
            ))}
        </>
    );
}

export default NavBar;

// {pokemonIndex > 0 ? <button onClick={previousClick}>Previous</button> : ""}
// {pokemonIndex < pokemonList.length - 1 ? <button onClick={nextClick}>Next</button> : ""}