'use client';

import Project from './project';

export default function Projects() {
    return (
        <section
            id="projects"
            className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"
        >
            <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-custom-primary/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:relative lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
                <h2 className="text-sm font-bold uppercase tracking-widest text-custom-text lg:sr-only">
                    Projects
                </h2>
            </div>
            <ul className="group/list space-y-12">
                <li>
                    <Project
                        link="/projects/something"
                        project_name="OwOLL"
                        project_description="OwOLL streamlines UX research with a RAG-powered insights engine and interactive React Flow mind maps—visualizing data and generating actionable recommendations in seconds."
                        image_path="/owoll.png"
                        image_alt="OwOLL - UX Research Helper"
                    />
                </li>
                <li>
                    <Project
                        link="/projects/something"
                        project_name="PseudoPitch"
                        project_description="PseudoPitch fuses Probabilistic Nearest Neighbors with pseudo-labeling and tailored smoothing to deliver interpretable, well-calibrated probability estimates of baseball pitch outcomes—even in low-data regimes—outperforming traditional baselines."
                        image_path="/pseudopitch.jpg"
                        image_alt="OUSAC Conference 2025"
                    />
                </li>
                <li>
                    <Project
                        link="/projects/something"
                        project_name="Sayyara"
                        project_description="Sayyara is a startup-ready, Uber-style car-care platform handed over to the Sayyara team—instantly pairing drivers with vetted mechanics and powering a smooth, real-time chat interface for diagnostics, quotes, and booking appointments."
                        image_path="/sayyara.png"
                        image_alt="Sayyara - Mechanics"
                    />
                </li>
            </ul>
        </section>
    );
}
