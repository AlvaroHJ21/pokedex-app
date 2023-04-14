import Link from 'next/link';

export default function Navbar() {
    return (
        <header className="fixed top-0 left-0 right-0 z-50 bg-slate-950">
            <div className="flex items-center justify-between h-16  w-[90%] m-auto max-w-[1200px]">
                <Link href={'/'}>
                    <img
                        src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/International_Pok%C3%A9mon_logo.svg/2560px-International_Pok%C3%A9mon_logo.svg.png"
                        alt="logo"
                        width={100}
                    />
                </Link>

                <nav>
                    <ul className="flex gap-2">
                        <li className="px-4 py-2 border-b-2 border-b-transparent hover:border-b-[#FFCC01] transition-colors">
                            <Link href={'/'}>Home</Link>
                        </li>
                        <li className="px-4 py-2 border-b-2 border-b-transparent hover:border-b-[#FFCC01] transition-colors">
                            <Link href={'/pokemons'}>Pokedex</Link>
                        </li>
                        <li className="px-4 py-2 border-b-2 border-b-transparent hover:border-b-[#FFCC01] transition-colors">
                            <Link href={'/pokemons'}>Legendaries</Link>
                        </li>
                        <li className="px-4 py-2 border-b-2 border-b-transparent hover:border-b-[#FFCC01] transition-colors">
                            <Link href={'/pokemons'}>Documentation</Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    );
}
