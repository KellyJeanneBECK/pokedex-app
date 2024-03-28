function NavBar ({ pokemonList, pokemonIndex, previousClick, nextClick}) {
    return (
        <>
            {pokemonIndex > 0 ? <button onClick={previousClick}>Previous</button> : ""}
            {pokemonIndex < pokemonList.length - 1 ? <button onClick={nextClick}>Next</button> : ""}
        </>
    );
}

export default NavBar;