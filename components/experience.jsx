// components/Experience.jsx
'use client';

import Card from './card';

export default function Experience() {
    return (
        <section
            id="experience"
            className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"
        >
            <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-custom-primary/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:relative lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
                <h2 className="text-sm font-bold uppercase tracking-widest text-custom-text lg:sr-only">
                    Experience
                </h2>
            </div>
            <ol className="group/list space-y-12">
                <li>
                    <Card
                        time="May 2023 – Aug 2024"
                        role="Software Engineer Intern"
                        company="myBlueprint (Toronto)"
                        link="https://myblueprint.ca"
                        description="Built and maintained React & TypeScript features for a digital education platform serving 1 M daily users, including a multi-year course scheduler that streamlined academic planning for 6,500+ schools."
                    />
                </li>
                <li>
                    <Card
                        time="Sept 2022 – Dec 2022"
                        role="Frontend Developer"
                        company="Sayyara.io (Toronto)"
                        link="https://github.com/csc301-fall-2022/team-project-9-sayyara-t"
                        description="Developed the React + TypeScript front end with Material UI for a car-care matchmaking app, leading UI/UX for landing pages and real-time chat interfaces."
                    />
                </li>
                <li>
                    <Card
                        time="May 2022 – Aug 2022"
                        role="Software Engineer Intern"
                        company="FPT Software (Hanoi)"
                        link="https://www.fptsoftware.com"
                        description="Implemented 80+ JavaScript/HTML front-end features and supported Java Spring Boot & MySQL backend for a medical insurance platform used by Singapore’s largest healthcare provider."
                    />
                </li>
            </ol>
        </section>
    );
}
