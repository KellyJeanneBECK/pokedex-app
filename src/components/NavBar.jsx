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
