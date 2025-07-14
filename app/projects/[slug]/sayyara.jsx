'use client';

import React from 'react';

export default function Sayyara() {
    return (
        <div className="max-w-4xl mx-auto px-6 py-12 space-y-16 font-sans text-custom-text">
            {/* Title */}
            <h1 className="text-4xl font-bold text-custom-text">
                Sayyara: Trustworthy Car-Care Matchmaking
            </h1>

            {/* Tagline */}
            <p className="italic">
                “Instilling trust in auto service professionals and helping them grow their business as well as providing ease, convenience, and transparency to consumers for all of their automotive needs.”
            </p>

            {/* Our Scope */}
            <section>
                <div
                    className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-custom-primary/75 px-6 py-5 backdrop-blur 
                               md:-mx-12 md:px-12 lg:relative lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0"
                >
                    <h2 className="text-sm font-bold uppercase tracking-widest text-custom-text lg:sr-only">
                        Our Scope
                    </h2>
                </div>
                <h2 className="hidden lg:block text-2xl font-semibold mb-4 text-custom-text">
                    Our Scope
                </h2>
                <ul className="list-disc pl-6 space-y-2">
                    <li>Addresses the difficulties unique to communication around car-related issues</li>
                    <li>Omits scheduling & payment—focuses purely on connecting vehicle owners with mechanics</li>
                    <li>Provides a smooth, real-time chat interface for diagnostics, quotes, and booking</li>
                    <li>Designed as a startup-ready product and handed over to the Sayyara team</li>
                </ul>
            </section>

            {/* Demo */}
            <section>
                <div
                    className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-custom-primary/75 px-6 py-5 backdrop-blur 
                               md:-mx-12 md:px-12 lg:relative lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0"
                >
                    <h2 className="text-sm font-bold uppercase tracking-widest text-custom-text lg:sr-only">
                        Demo
                    </h2>
                </div>
                <h2 className="hidden lg:block text-2xl font-semibold mb-4 text-custom-text">
                    Demo of Sayyara
                </h2>
                <div className="aspect-[16/9] w-full">
                    <iframe
                        className="w-full h-full rounded"
                        src="https://www.youtube.com/embed/W39tN3AjDhM"
                        title="Sayyara Demo"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                    />
                </div>
            </section>

            {/* Structure */}
            <section>
                <div
                    className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-custom-primary/75 px-6 py-5 backdrop-blur 
                               md:-mx-12 md:px-12 lg:relative lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0"
                >
                    <h2 className="text-sm font-bold uppercase tracking-widest text-custom-text lg:sr-only">
                        Structure
                    </h2>
                </div>
                <h2 className="hidden lg:block text-2xl font-semibold mb-4 text-custom-text">
                    How It Works
                </h2>
                <div className="space-y-4 text-lg">
                    <p>
                        <strong>Issue Reporting</strong><br />
                        Vehicle owners describe symptoms or upload photos; messages are routed instantly to vetted mechanics.
                    </p>
                    <p>
                        <strong>Real-Time Chat</strong><br />
                        In-app chat powered by React + TypeScript, allowing quick diagnostics, clarifications, and quote delivery.
                    </p>
                    <p>
                        <strong>Mechanic Matching</strong><br />
                        Proprietary algorithm ranks nearby mechanics by specialty, rating, and availability.
                    </p>
                    <p>
                        <strong>Request Handoff</strong><br />
                        Once a match is confirmed, the mechanic receives all details; the owner can track updates in real time.
                    </p>
                </div>
            </section>

            {/* Try Sayyara */}
            <section>
                <div
                    className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-custom-primary/75 px-6 py-5 backdrop-blur 
                               md:-mx-12 md:px-12 lg:relative lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0"
                >
                    <h2 className="text-sm font-bold uppercase tracking-widest text-custom-text lg:sr-only">
                        Try Sayyara
                    </h2>
                </div>
                <div className="text-center pb-12">
                    <a
                        href="https://github.com/csc301-fall-2022/team-project-9-sayyara-t"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="
                            inline-flex 
                            items-center 
                            bg-custom-text 
                            text-custom-primary 
                            font-semibold 
                            px-6 
                            py-3 
                            rounded-full 
                            transition 
                            hover:bg-custom-secondary 
                            hover:text-custom-text
                        "
                    >
                        Check out the codebase for Sayyara&nbsp;
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                            className="h-5 w-5"
                        >
                            <path
                                fillRule="evenodd"
                                d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0
                                    00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z"
                                clipRule="evenodd"
                            />
                        </svg>
                    </a>
                </div>
            </section>
        </div>
    );
}
