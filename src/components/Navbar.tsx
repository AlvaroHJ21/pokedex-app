import Link from 'next/link';
import { useRouter } from 'next/router';

const links = [
    { href: '/', label: 'Home' },
    { href: '/pokemons', label: 'Pokedex' },
    { href: '/legendaries', label: 'Legendaries' },
    { href: '/documentation', label: 'Documentation' },
];

export default function Navbar() {
    
    const router = useRouter();

    return (
        <header className="fixed top-0 left-0 right-0 z-50 bg-slate-900">
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
                        {links.map(({ href, label }) => (
                            <li
                                key={`${href}${label}`}
                                className={`py-2 border-b-2  ${
                                    router.asPath === href
                                        ? 'border-b-[#FFCC01]'
                                        : 'border-b-transparent'
                                } hover:border-b-[#FFCC01] transition-colors`}
                            >
                                <Link href={href} className="px-2 py-2">{label}</Link>
                            </li>
                        ))}
                    </ul>
                </nav>
            </div>
        </header>
    );
}
