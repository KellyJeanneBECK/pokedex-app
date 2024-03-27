function PokemonCard({ pokemon }) {
    return (
        <figure>
            <div>{pokemon.imgSrc ? <img src={pokemon.imgSrc} /> : <p>???</p>}</div>
            <figcaption>{pokemon.name}</figcaption>
        </figure>
    );
}

export default PokemonCard;