import { RiSearchLine } from 'react-icons/ri';
import { MdClose, MdHistory } from 'react-icons/md';
import { MouseEvent, useEffect, useRef, useState } from 'react';
import { PokemonInfo } from '../interfaces/pokemon-info';
import pokeProvider from '@/utils/pokeProvider';

export default function PokemonSearcher() {
    const [isOpen, setIsOpen] = useState(false);

    const input = useRef<HTMLInputElement>(null);

    const childRef = useRef<HTMLDivElement>(null);

    const [results, setResults] = useState<PokemonInfo[]>([]);

    useEffect(() => {
        if (isOpen) {
            input.current?.focus();
        }
    }, [isOpen]);

    useEffect(() => {
        Promise.all([15, 4, 65].map((id) => pokeProvider.getPokemonInfo(id.toString()))).then(
            (data) => {
                if (!data) return;
                setResults(data.map((poke) => poke!));
            }
        );
    }, []);

    function handleClick(e: MouseEvent) {
        // Si el click fue dentro del modal, no hacer nada

        if (childRef.current?.contains(e.target as Node)) return;

        setIsOpen(false);
    }

    return (
        <>
            {/* Action */}
            <div
                onClick={() => setIsOpen(true)}
                className="flex flex-col items-center justify-center gap-4 pt-4"
            >
                <p>Search your favorite Pokemon</p>
                <div className="flex gap-2 px-4 py-3 transition-colors bg-black bg-opacity-25 cursor-pointer w-60 hover:bg-gray-800">
                    <RiSearchLine size={20} />
                    <p className="text-gray-400">Pikachu</p>
                </div>
            </div>

            {/* Modal */}
            {isOpen && (
                <div className="fixed top-0 left-0 right-0 z-50 w-full h-screen bg-black bg-opacity-40 backdrop-blur-sm response ">
                    <div
                        onClick={handleClick}
                        className="flex items-center justify-center w-full h-full padre "
                    >
                        {/* Contenido del modal */}
                        <div
                            ref={childRef}
                            className="hijo max-w-2xl w-[90%] p-8 bg-slate-900 h-[80%] flex flex-col gap-4"
                        >
                            {/* Search */}
                            <div className="flex items-center gap-4">
                                <div className="flex flex-1 gap-4 px-4 py-3 bg-black bg-opacity-25">
                                    <RiSearchLine size={20} />
                                    <input
                                        ref={input}
                                        className="flex-1 bg-transparent outline-none"
                                        type="text"
                                        placeholder="Pikachu"
                                    />
                                </div>
                                <button onClick={() => setIsOpen(false)}>
                                    <MdClose size={24} />
                                </button>
                            </div>

                            {/* Recents */}
                            <div>
                                <div className="py-2">
                                    <p>Recent</p>
                                </div>
                                <div className="flex gap-2 py-2 text-gray-400">
                                    <p className="flex-1">Pikachu</p>
                                    <button>
                                        <MdHistory />
                                    </button>
                                    <button>
                                        <MdClose />
                                    </button>
                                </div>
                                <div className="flex gap-2 py-2 text-gray-400">
                                    <p className="flex-1">Raichu</p>
                                    <button>
                                        <MdHistory />
                                    </button>
                                    <button>
                                        <MdClose />
                                    </button>
                                </div>
                            </div>

                            {/* Results */}

                            <div>
                                <div className="py-2">
                                    <p>Results</p>
                                </div>
                                <div className='flex flex-col gap-2'>
                                    {results.map((result) => (
                                        <div key={result.id} className="flex gap-4 px-2 py-2 bg-black bg-opacity-25">
                                            <img
                                                className="w-20 h-20"
                                                src={result.sprites.front_default}
                                                alt={result.name}
                                            />
                                            <div className="flex flex-col justify-center">
                                                <p className="text-lg capitalize">{result.name}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}
