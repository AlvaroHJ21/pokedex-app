import { PokemonInfo } from '@/interfaces/pokemon-info';

interface Props {
  pokemon: PokemonInfo;
}

export default function PokemonHero({ pokemon }: Props) {
  const number = (n: number) => {
    if (n < 10) return `#00${n}`;
    if (n < 100) return `#0${n}`;
    return n;
  };

  return (
    <div className="m-auto max-w-[600px] w-[90%] relative">
      <div className="relative z-10 flex items-end gap-8 pt-40">
        {/* Textos */}
        <div className="flex flex-col items-end pb-8">
          <div>
            <p className="text-sm uppercase">{pokemon.type}</p>
            <h1 className="mb-4 text-6xl font-bold capitalize">{pokemon.name}</h1>
          </div>
          <div className="flex justify-between w-full">
            <p className="font-bold">Height</p>
            <p className="text-sm">{pokemon.height}M</p>
          </div>
          <div className="flex justify-between w-full">
            <p className="font-bold">Weight</p>
            <p className="text-sm">{pokemon.weight}KG</p>
          </div>
          <div className="flex justify-between w-full">
            <p className="font-bold">Abilities</p>
            <p className="text-sm capitalize">{pokemon.abilities[0]}</p>
          </div>
        </div>
        {/* Imagen */}
        <img src={pokemon.image} alt={`imagen de ${pokemon.name}`} width={280} className="h-72" />
      </div>

      {/* Numero de fondo */}
      <div className=" w-full opacity-25 absolute top-0 flex justify-end z-0 font-bold text-[14rem]">
        <p>{number(pokemon.id)}</p>
      </div>
    </div>
  );
}
