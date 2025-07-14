import React from 'react';

export default function OwOLL() {
    return (
        <div className="max-w-4xl mx-auto px-6 py-12 space-y-16 font-sans text-custom-text">
            {/* Title */}
            <h1 className="text-4xl font-bold text-custom-text">
                OwOLL: AI-Driven UX Research Accelerator
            </h1>

            {/* Project Overview */}
            <div>
                <div
                    className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-custom-primary/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:relative lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0"
                >
                    <h2 className="text-sm font-bold uppercase tracking-widest text-custom-text lg:sr-only">
                        Project Overview
                    </h2>
                </div>
                <h2 className="text-2xl font-semibold mb-4 text-custom-text">
                    Project Overview
                </h2>
                <p className="text-lg">
                    Built as a Capstone for CSC491 and paired with a real business model from CSC454, OwOLL
                    is a startup-ready platform that transforms how UX researchers work. Our team of five
                    automated the manual triage of user transcripts with a custom RAG pipeline, structuring
                    feedback into tables, mind-maps via React Flow, and AI-powered summaries—delivering
                    actionable insights in seconds instead of days.
                </p>
            </div>

            {/* Demo */}
            <div>
                <div
                    className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-custom-primary/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:relative lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0"
                >
                    <h2 className="text-sm font-bold uppercase tracking-widest text-custom-text lg:sr-only">
                        Demo
                    </h2>
                </div>
                <h2 className="text-2xl font-semibold mb-4 text-custom-text">
                    Demo of OwOLL
                </h2>
                <div className="aspect-[16/9] w-full">
                    <iframe
                        className="w-full h-full rounded"
                        src="https://www.youtube.com/embed/6BToKfKKiJg"
                        title="OwOLL Demo"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                    />
                </div>
            </div>

            {/* Structure of the project */}
            <div>
                <div
                    className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-custom-primary/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:relative lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0"
                >
                    <h2 className="text-sm font-bold uppercase tracking-widest text-custom-text lg:sr-only">
                        Structure
                    </h2>
                </div>
                <h2 className="text-2xl font-semibold mb-4 text-custom-text">
                    Structure of the Project
                </h2>
                <div className="space-y-4 text-lg text-custom-text">
                    <p>
                        <strong>RAG Pipeline</strong><br/>
                        A custom retrieval-augmented generation system fetches relevant quotes and context,
                        then synthesizes them into structured tables and narrative summaries using Cohere
                        LLMs.
                    </p>
                    <p>
                        <strong>Mind-Map Visualization</strong><br/>
                        Leveraging React Flow, we render interactive mind maps that let teams reorganize
                        themes, cluster insights, and export to shareable formats.
                    </p>
                    <p>
                        <strong>AI-Powered Persona Generator</strong><br/>
                        Fine-tuned models generate perspective-aware user personas that highlight pain
                        points, motivations, and feature requests.
                    </p>
                    <p>
                        <strong>Collaboration &amp; Export</strong><br/>
                        Teams can comment on nodes, tag stakeholders, and export complete reports in PDF or
                        JSON.
                    </p>
                    <p>
                        <strong>DevOps &amp; CI/CD</strong><br/>
                        Hosted on Next.js + Vercel, with a FastAPI backend and Supabase auth, containerized
                        via Docker and orchestrated in GitHub Actions for zero-downtime releases.
                    </p>
                </div>
            </div>

            {/* Try OwOLL */}
            <div>
                <div
                    className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-custom-primary/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:relative lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0"
                >
                    <h2 className="text-sm font-bold uppercase tracking-widest text-custom-text lg:sr-only">
                        Try OwOLL
                    </h2>
                </div>
                <div className="text-center pb-12">
                    <a
                        href="https://owoll-frontend.vercel.app/"
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
                        Try OwOLL&nbsp;
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
            </div>
        </div>
    );
}
