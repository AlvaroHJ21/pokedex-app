import pokeApi from '../api/pokeApi';
import { Pokemon } from '../interfaces/pokemon-full';
import { PokemonListResponse, SmallPokemon } from '../interfaces/pokemon-list';
import { background, PokeTypes } from './backgroundByType';
const getPokemonInfo = async (nameOrId: string) => {
    try {
        const { data } = await pokeApi.get<Pokemon>(`/pokemon/${nameOrId}`);

        const pokemon = {
            id: data.id,
            name: data.name,
            sprites: data.sprites,
        };

        return pokemon;
    } catch (error) {
        return null;
    }
};

const getSmallPokemon = async (limit: number = 10) => {
    const { data } = await pokeApi.get<PokemonListResponse>(`/pokemon?limit=${limit}`);

    const pokemons: SmallPokemon[] = data.results.map((pokemon, index) => {
        return {
            ...pokemon,
            id: index + 1,
            img: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${
                index + 1
            }.svg`,
        };
    });

    await Promise.all(
        pokemons.map(async (pokemon) => {
            const { data } = await pokeApi.get<Pokemon>(`/pokemon/${pokemon.name}`);

            pokemon.bg = background[data.types[0].type.name as PokeTypes];
        })
    );

    return pokemons;
};

export default { getPokemonInfo, getSmallPokemon };
