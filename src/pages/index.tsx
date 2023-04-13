import { Layout } from '@/components';
import Link from 'next/link';

export default function Home() {
    return (
        <Layout>
            <div className="flex flex-col justify-center min-h-screen">
                <div className="flex flex-col items-center max-w-lg gap-4 m-auto">
                    <img
                        src="https://www.pngall.com/wp-content/uploads/5/Pikachu-PNG-File.png"
                        alt="pikachu"
                        width={480}
                        height={480}
                    />
                    <h1 className="text-6xl text-center">
                        <span className="font-bold">Find</span> all your favorite{' '}
                        <span className="font-bold">Pokemon</span>
                    </h1>
                    <p className="text-xl text-center">
                        You can know the type of Pokemon, its strengths, disavantages and abilities
                    </p>
                    <Link href={'/pokemons'} className="bg-[#235FA2] py-2 px-6 rounded-lg">
                        See Pokemons
                    </Link>
                </div>
            </div>
        </Layout>
    );
}
