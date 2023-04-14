import { GetServerSideProps } from 'next';

import { MdArrowBackIos } from 'react-icons/md';

import pokeProvider from '@/utils/pokeProvider';
import { PokemonInfo } from '@/interfaces/pokemon-info';
import { useRouter } from 'next/router';
import PokemonHero from '../../components/PokemonHero';
import PokemonStats from '@/components/PokemonStats';
import { useState, useEffect } from 'react';

interface Props {
    pokemon: PokemonInfo;
}

export default function Pokemon({ pokemon }: Props) {

    const router = useRouter();

    const [color, setColor] = useState('blue')

    useEffect(() => {
        setColor(pokemon.bg)
    }, [])
    
    
    return (
        <div
            style={{
                backgroundColor: `${color}`,
            }}
            className={`h-screen`}
        >
            <button onClick={() => router.back()} className="absolute z-20 flex items-center justify-center p-4 m-4 rounded-full">
                <MdArrowBackIos size={32} />
            </button>

            <PokemonHero pokemon={pokemon} />
            <PokemonStats pokemon={pokemon} />
        </div>
    );
}

// You should use getServerSideProps when:
// - Only if you need to pre-render a page whose data must be fetched at request time

export const getServerSideProps: GetServerSideProps = async (ctx) => {
    const { id } = ctx.params as { id: string };

    const pokemon = await pokeProvider.getPokemonInfo(id);

    return {
        props: {
            pokemon,
        },
    };
};
