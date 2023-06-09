import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';

interface Props {
    children: React.ReactNode | React.ReactNode[];
}

export default function Layout({ children }: Props) {
    return (
        <>
            <Navbar />
            {children}
            <Footer/>
        </>
    );
}
