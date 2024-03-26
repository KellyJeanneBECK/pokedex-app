const pokemonList = [
    {
        name: "Bulbasaur",
        imgSrc: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
    },
    {
        name: "Mew",
    },
];

function PokemonCard() {
    const pokemon = pokemonList[1];

    return (
        <figure>
            <div>{pokemon.imgSrc ? <img src={pokemon.imgSrc} /> : <p>???</p>}</div>
            <figcaption>{pokemon.name}</figcaption>
        </figure>
    );
}

export default PokemonCard;