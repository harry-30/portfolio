'use client';

import dynamic from 'next/dynamic';
import Header from '../components/header';
import About from '../components/about';
import Experience from '../components/experience';
import Projects from '../components/projects';
import { FaLinkedin, FaGithub } from 'react-icons/fa';

const ThreeScene = dynamic(() => import('../components/model'), { ssr: false });

export default function Home() {
    return (
        <div className="flex flex-col min-h-screen">
            <div className="mx-auto w-full max-w-screen-xl px-6 py-12 font-main md:px-12 md:py-20 lg:px-24 lg:py-0 flex flex-col lg:flex-row flex-1">
                <aside className="w-full lg:w-2/5 lg:sticky lg:top-0 lg:h-screen flex-shrink-0 space-y-6">
                    <div className="w-full max-w-md h-64 mx-auto lg:mx-0 lg:w-2/3 pt-8 pb-1">
                        <ThreeScene />
                    </div>
                    <Header />
                </aside>
                <main className="w-full lg:w-1/2 pt-24 lg:py-24 space-y-16">
                    <About />
                    <Projects />
                    <Experience />
                </main>
            </div>
            <footer className="w-full bg-custom-text text-custom-primary py-8 text-center">
                <div className="flex justify-center items-center space-x-20 mb-4">
                    <a
                        href="https://www.linkedin.com/in/harryduongdev/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center hover:underline"
                    >
                        <FaLinkedin className="mr-2" size={20} />
                        LinkedIn
                    </a>
                    <a
                        href="https://github.com/harry-30"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center hover:underline"
                    >
                        <FaGithub className="mr-2" size={20} />
                        GitHub
                    </a>
                </div>
                <p>© {new Date().getFullYear()} Harry Duong.</p>
            </footer>
        </div>
    );
}
