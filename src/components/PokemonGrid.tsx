import { SmallPokemon } from '@/interfaces';
import React from 'react';
import PokemonCard from './PokemonCard';

interface Props {
    pokemons: SmallPokemon[];
}

export default function PokemonGrid({ pokemons }: Props) {
    return (
        <div>
            <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
                {pokemons.map((pokemon) => (

                    <PokemonCard key={pokemon.id} pokemon={pokemon} />
                    
                ))}
            </div>
        </div>
    );
}
