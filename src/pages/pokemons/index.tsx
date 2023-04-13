import { GetStaticProps } from 'next';

import pokeProvider from '@/utils/pokeProvider';
import { Layout } from '@/components';
import PokemonGrid from '@/components/PokemonGrid';

export default function index({ pokemons }: any) {
    return (
        <Layout>
            <div className="pt-20 max-w-[1200px] w-[90%] m-auto">

                <PokemonGrid pokemons={pokemons} />
            
            </div>
        </Layout>
    );
}

// You should use getStaticProps when:
//- The data required to render the page is available at build time ahead of a user’s request.
//- The data comes from a headless CMS.
//- The data can be publicly cached (not user-specific).
//- The page must be pre-rendered (for SEO) and be very fast — getStaticProps generates HTML and JSON files, both of which can be cached by a CDN for performance.

export const getStaticProps: GetStaticProps = async (ctx) => {
  
    const pokemons = await pokeProvider.getSmallPokemon(40);

    return {
        props: {
            pokemons,
        },
    };
};
