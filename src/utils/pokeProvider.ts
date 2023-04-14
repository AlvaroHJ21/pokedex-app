import pokeApi from '../api/pokeApi';
import { PokemonFull } from '../interfaces/pokemon-full';
import { PokemonListResponse, SmallPokemon } from '../interfaces/pokemon-list';
import { background, PokeTypes } from './backgroundByType';
import { PokemonInfo } from '../interfaces/pokemon-info';

const getPokemonInfo = async (nameOrId: string) => {
    try {
        const { data } = await pokeApi.get<PokemonFull>(`/pokemon/${nameOrId}`);

        const pokemon: PokemonInfo = {
            id: data.id,
            name: data.name,
            image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${data.id}.svg`,
            sprites: data.sprites,
            bg: background[data.types[0].type.name as PokeTypes],
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
        };
    });

    await Promise.all(
        pokemons.map(async (pokemon) => {
            const { data } = await pokeApi.get<PokemonFull>(`/pokemon/${pokemon.name}`);
            pokemon.id = data.id;
            pokemon.bg = background[data.types[0].type.name as PokeTypes];
            pokemon.img = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${data.id}.svg`;
        })
    );

    return pokemons;
};

export default { getPokemonInfo, getSmallPokemon };
