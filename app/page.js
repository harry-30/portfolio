'use client';

import dynamic from 'next/dynamic';
import { EB_Garamond } from "next/font/google";

const ebGaramond = EB_Garamond({
  variable: "--font-garamond",
  subsets: ["latin"],
  weight: ["700"],
});

const ThreeScene = dynamic(() => import('../components/model'), { ssr: false });

export default function Home() {
  return (
    <div className="p-8 space-y-4">
        <h1 className={`text-6xl ${ebGaramond.className} font-bold`}>
            <span className="text-custom-accent">Harry</span>{' '}
            <span>Duong</span>
        </h1>
        
        <div className="w-full h-[40vh] border border-gray-300">
            <ThreeScene />
        </div>
    </div>
  );
}
