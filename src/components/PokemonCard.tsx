import { SmallPokemon } from '@/interfaces';
import Link from 'next/link';

interface Props {
    pokemon: SmallPokemon;
}

export default function PokemonCard({ pokemon }: Props) {
    return (
        <Link href={`/pokemons/${pokemon.id}`}>
            <div
                style={{
                    boxShadow: `1px 1px 2px ${pokemon.bg}`,
                }}
                className="relative flex flex-col items-center justify-center gap-2 bg-opacity-25 cursor-pointer bg-slate-950 group"
            >
                {/* Imagen */}
                <img
                    className="relative z-10 w-20 h-20 transition-all duration-300 ease-in-out group-hover:scale-150"
                    src={pokemon.img}
                    alt={`${pokemon.name}`}
                    width={80}
                    height={80}
                />

                {/* Adorno */}
                <div
                    style={{ backgroundColor: pokemon.bg }}
                    className="absolute bottom-0 left-0 z-0 w-0 h-0 transition-all duration-200 ease-in-out group-hover:w-1/2 group-hover:h-full poligon"
                ></div>

                {/* Textos */}
                <div className="relative flex items-center justify-between w-full">
                    <div
                        style={{
                            backgroundColor: pokemon.bg,
                        }}
                        className="self-start px-2 py-1 pr-4 text-center text-white poligon"
                    >
                        <p className="font-black">#{pokemon.id}</p>
                    </div>
                    <div>
                        <p className="pr-4 text-xs font-bold uppercase group-hover:text-white">
                            {pokemon.name}
                        </p>
                    </div>
                </div>
            </div>
        </Link>
    );
}
