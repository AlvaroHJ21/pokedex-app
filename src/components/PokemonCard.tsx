import { SmallPokemon } from '@/interfaces';

interface Props {
    pokemon: SmallPokemon;
}

export default function PokemonCard({ pokemon }: Props) {
    return (
        <div
            style={{
                boxShadow: `1px 1px 2px ${pokemon.bg}`,
                // backgroundColor: pokemon.bg,
            }}
            className="flex flex-col items-center justify-center gap-2 p-4 bg-opacity-25 rounded-lg cursor-pointer bg-slate-950 group"
        >
            <img
                className="w-20 h-20 transition-all duration-300 ease-in-out group-hover:scale-110"
                src={pokemon.img}
                alt={`${pokemon.name}`}
                width={80}
                height={80}
            />
            <p>{pokemon.name}</p>
            {/* <div style={{
                backgroundColor: pokemon.bg
            }} className={`w-4 h-4 rounded-full`}></div> */}
        </div>
    );
}
