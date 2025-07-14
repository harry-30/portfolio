'use client';

import React from 'react';

export default function PseudoPitch() {
    return (
        <div className="max-w-4xl mx-auto px-6 py-12 space-y-16 font-sans text-custom-text">
            {/* Title */}
            <h1 className="text-4xl font-bold text-custom-text">
                PseudoPitch: Calibrated Probabilistic Pitch Classification
            </h1>

            {/* Project Overview */}
            <div>
                <div
                    className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-custom-primary/75 px-6 py-5 backdrop-blur
                               md:-mx-12 md:px-12 lg:relative lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0"
                >
                    <h2 className="text-sm font-bold uppercase tracking-widest text-custom-text lg:sr-only">
                        Project Overview
                    </h2>
                </div>
                <h2 className="text-2xl font-semibold mb-4 text-custom-text">
                    Project Overview
                </h2>
                <p className="text-lg">
                    Awarded 3rd place at OUSAC 2025, PseudoPitch combines Probabilistic Nearest Neighbors
                    with pseudo-label smoothing to deliver interpretable, well-calibrated probabilities
                    of baseball pitch outcomes—even in low-data regimes. Our method outperforms classic
                    baselines by leveraging self-labeling to refine decision boundaries and tighten confidence
                    estimates.
                </p>
            </div>
            <h2 className="text-2xl font-semibold mb-4 text-custom-text">
                    Methodology
                </h2>
                <div className="space-y-4 text-lg text-custom-text">
                    <p>
                        <strong>Data Preprocessing</strong><br />
                        Extract raw pitch features (speed, spin, release angle) and normalize to unit scale.
                    </p>
                    <p>
                        <strong>Feature Embedding</strong><br />
                        Compute k-nearest neighbor graph and extract neighbor distances as probabilistic features.
                    </p>
                    <p>
                        <strong>Pseudo-Label Smoothing</strong><br />
                        Iteratively assign soft labels to unlabeled points based on high-confidence predictions,
                        refining the decision surface.
                    </p>
                    <p>
                        <strong>Probabilistic Calibration</strong><br />
                        Fit a reliability curve via isotonic regression to align raw scores with true outcome
                        frequencies.
                    </p>
                    <p>
                        <strong>Evaluation &amp; Deployment</strong><br />
                        Benchmarked against logistic regression and standard KNN on held-out seasons; packaged
                        as a Python module with scikit-learn API compatibility.
                    </p>
                </div>
            {/* Presentation Video */}
            <div>
                <div
                    className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-custom-primary/75 px-6 py-5 backdrop-blur
                               md:-mx-12 md:px-12 lg:relative lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0"
                >
                    <h2 className="text-sm font-bold uppercase tracking-widest text-custom-text lg:sr-only">
                        Presentation
                    </h2>
                </div>
                <h2 className="text-2xl font-semibold mb-4 text-custom-text">
                    OUSAC 2025 Presentation
                </h2>
                <div className="aspect-[16/9] w-full">
                    <iframe
                        src="https://drive.google.com/file/d/1aH7PYmPuC_j8z60QYlatMvPPcr0w-vfb/preview"
                        title="PseudoPitch Presentation"
                        frameBorder="0"
                        allow="autoplay; encrypted-media"
                        className="w-full h-full rounded"
                    />
                </div>
            </div>

            {/* Paper Embed */}
            <div>
                <div
                    className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-custom-primary/75 px-6 py-5 backdrop-blur
                               md:-mx-12 md:px-12 lg:relative lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0"
                >
                    <h2 className="text-sm font-bold uppercase tracking-widest text-custom-text lg:sr-only">
                        Conference Paper
                    </h2>
                </div>
                <h2 className="text-2xl font-semibold mb-4 text-custom-text">
                    Conference Paper
                </h2>
                <div className="w-full h-[800px]">
                    <iframe
                        src="https://drive.google.com/file/d/1u9PQ_877kksbUL0mhkI1YcnrvtqqutLs/preview"
                        title="PseudoPitch Paper"
                        frameBorder="0"
                        className="w-full h-full rounded"
                    />
                </div>
            </div>

            {/* Structure of the Project */}
            <div>
                <div
                    className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-custom-primary/75 px-6 py-5 backdrop-blur
                               md:-mx-12 md:px-12 lg:relative lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0"
                >
                    <h2 className="text-sm font-bold uppercase tracking-widest text-custom-text lg:sr-only">
                        Methodology
                    </h2>
                </div>
            </div>
        </div>
    );
}
