import { GetServerSideProps } from 'next';

import { MdArrowBackIos } from 'react-icons/md';

import pokeProvider from '@/utils/pokeProvider';
import { PokemonInfo } from '@/interfaces/pokemon-info';
import PokemonHero from '../../components/PokemonHero';
import PokemonStats from '@/components/PokemonStats';
import { useState, useEffect } from 'react';
import Link from 'next/link';

interface Props {
  pokemon: PokemonInfo;
}

export default function Pokemon({ pokemon }: Props) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <p>Loading...</p>;
  }

  return (
    <div
      style={{
        backgroundColor: `${pokemon.bg}`,
      }}
      className={`h-screen`}
    >
      <Link
        href="/pokemons"
        className="absolute z-20 flex items-center justify-center p-4 m-4 rounded-full"
      >
        <MdArrowBackIos size={32} />
      </Link>

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
