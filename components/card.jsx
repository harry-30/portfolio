'use client';

import Link from 'next/link';

export default function Card({ time, role, company, description, link }) {
    return (
        <div className="group relative grid pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4">
            <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition lg:-inset-x-6 lg:block group-hover:bg-custom-secondary lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg" />

            <header className="z-10 mb-2 mt-1 text-xs font-semibold uppercase tracking-wide text-slate-500 sm:col-span-2">
                {time}
            </header>

            <div className="z-10 sm:col-span-6">
                <h3 className="font-medium leading-snug text-custom-text transition-colors group-hover:text-custom-accent">
                    <Link
                        href={link}
                        className="inline-flex items-baseline text-base font-medium"
                    >
                        {role} · {company}
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                            className="inline-block h-4 w-4 shrink-0 ml-1 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1 motion-reduce:transition-none text-custom-text group-hover:text-custom-accent"
                            aria-hidden="true"
                        >
                            <path
                                fillRule="evenodd"
                                d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z"
                                clipRule="evenodd"
                            />
                        </svg>
                    </Link>
                </h3>

                {/* description stays custom-text */}
                <p className="mt-2 text-sm leading-normal text-custom-text">
                    {description}
                </p>
            </div>
        </div>
    );
}
