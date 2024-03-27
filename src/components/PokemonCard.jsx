import PropTypes from "prop-types";

function PokemonCard({ pokemon }) {
    return (
        <figure>
            <div>{pokemon.imgSrc ? <img src={pokemon.imgSrc} /> : <p>???</p>}</div>
            <figcaption>{pokemon.name}</figcaption>
        </figure>
    );
}

PokemonCard.propTypes = {
    pokemon: PropTypes.shape({
        name: PropTypes.string.isRequired,
        imgSrc: PropTypes.string,
    }).isRequired
}

export default PokemonCard;