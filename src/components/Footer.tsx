import React from 'react';

export default function Footer() {
    return (
        <div className="mt-4 bg-slate-950">
            <div className="flex flex-col items-center justify-center gap-2 p-4">
                <p className="text-xs text-center text-slate-300">
                    This is a project made with Next.js, TailwindCSS and PokeAPI
                </p>
                <p className="text-xs text-center text-slate-300">
                    <a
                        href=""
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[#FFCC01] hover:text-[#FFCC01] hover:underline"
                    >
                        {' '}
                    </a>
                </p>
            </div>
        </div>
    );
}
