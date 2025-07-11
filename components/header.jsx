'use client';

import Link from 'next/link';
import { EB_Garamond } from 'next/font/google';

const ebGaramond = EB_Garamond({
    variable: '--font-garamond',
    subsets: ['latin'],
    weight: ['700'],
});

export default function Header() {
    return (
        <header
            id="header"
            className="lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:flex-col lg:justify-between"
        >
            <div>
                <h1
                    className={`text-4xl sm:text-5xl font-bold tracking-tight ${ebGaramond.className}`}
                >
                    <span className="text-custom-accent italic">Harry</span>{' '}
                    <span className="text-custom-text">Duong</span>
                </h1>

                <h2 className="mt-3 text-lg font-bold tracking-tight text-custom-text sm:text-xl">
                    Software Engineer
                </h2>

                <p className="mt-4 max-w-xs leading-normal text-custom-text">
                    Design immersive web experiences.
                </p>

                <nav className="nav hidden lg:block">
                    <ul className="mt-16 w-max space-y-6">
                        {[
                            { href: '#about', label: 'About' },
                            { href: '#projects', label: 'Projects' },
                            { href: '#experience', label: 'Experience' },
                        ].map(({ href, label }) => (
                            <li key={href}>
                                <Link href={href} className="group flex items-center">
                                    <span className="nav-indicator mr-4 h-px w-8 bg-custom-text transition-all group-hover:w-16 group-hover:bg-custom-accent group-focus-visible:w-16 group-focus-visible:bg-custom-accent motion-reduce:transition-none" />
                                    <span className="nav-text text-xs font-bold uppercase tracking-widest text-custom-accent group-hover:text-custom-text group-focus-visible:text-custom-text">
                                        {label}
                                    </span>
                                </Link>
                            </li>
                        ))}
                    </ul>
                </nav>
            </div>
        </header>
    );
}
