'use client';

import dynamic from 'next/dynamic';
import Header from '../components/header';
import About from '../components/about';
import Experience from '../components/experience';

const ThreeScene = dynamic(() => import('../components/model'), { ssr: false });

export default function Home() {
    return (
        <div className="mx-auto min-h-screen max-w-screen-xl px-6 py-12 font-main md:px-12 md:py-20 lg:px-24 lg:py-0 flex flex-col lg:flex-row">
            <aside className="w-full lg:w-2/5 lg:sticky lg:top-0 lg:h-screen flex-shrink-0 space-y-6">
                <div className="w-full max-w-md h-64 mx-auto lg:mx-0 lg:w-2/3 pt-8 pb-1">
                    <ThreeScene />
                </div>
                <Header />
            </aside>
            <main className="w-full pt-24 lg:w-1/2 lg:py-24 space-y-16">
                <About />
                <Experience />
            </main>
        </div>
    );
}
