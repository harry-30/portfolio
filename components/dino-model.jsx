'use client';

import Script from 'next/script';

export default function DinoModel() {
    return (
        <div className="sketchfab-embed-wrapper w-full h-full">
            {/* Sketchfab requires their embed script for some interactions */}
            <Script
                src="https://static.sketchfab.com/api/sketchfab-viewer-1.12.0.js"
                strategy="lazyOnload"
            />

            <iframe
                title="Voxel Dino"
                className="w-full h-full"
                frameBorder="0"
                allow="autoplay; fullscreen; xr-spatial-tracking"
                xr-spatial-tracking="true"
                webkitallowfullscreen="true"
                mozallowfullscreen="true"
                allowFullScreen
                src="https://sketchfab.com/models/08004b3aba5343e3accfb966e933eb3a/embed"
            />
        </div>
    );
}
