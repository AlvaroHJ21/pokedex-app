import React from 'react';

import { PokemonInfo } from '@/interfaces/pokemon-info';

interface Props {
    pokemon: PokemonInfo;
}

export default function PokemonStats({ pokemon }: Props) {
    return (
        <div className="flex gap-8 m-auto max-w-[600px] w-[90%] items-center pt-8">
            <p className="text-3xl font-bold">Stats</p>
            <div className="flex flex-col flex-1 gap-4">
                {pokemon.stats.map((stat, index) => {
                    
                    // const numberRandom = Math.floor(Math.random() * 100) + 1;

                    return (
                        <div key={index} className="flex items-center gap-2">
                            <p className="w-32 capitalize">{stat.name}</p>
                            <div className="flex-1 h-5 rounded-full">
                                <div
                                    style={{
                                        width: `${stat.level}%`,
                                    }}
                                    className={`bg-white rounded-full h-5`}
                                />
                            </div>
                            <p>{stat.level}</p>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}
