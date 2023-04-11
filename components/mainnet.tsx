import React from 'react';
import Image from 'next/image';
import { NextPage } from 'next';

interface Mainnet {
    id: number;
    name: string;
    imageUrl: string;
    homepageUrl: string;
}

const mainnets: Mainnet[] = [
    // Add your mainnet data here
    {
        id: 1,
        name: 'TCG Verse (Oasys L2)',
        imageUrl: '/sample/tcgverse_only_logo.png',
        homepageUrl: 'https://tcgverse.xyz/',
    },
    {
        id: 2,
        name: 'TCG Verse (Oasys L2)',
        imageUrl: '/sample/tcgverse_only_logo.png',
        homepageUrl: 'https://tcgverse.xyz/',
    },
    {
        id: 3,
        name: 'TCG Verse (Oasys L2)',
        imageUrl: '/sample/tcgverse_only_logo.png',
        homepageUrl: 'https://tcgverse.xyz/',
    },

];

const MainnetSection: NextPage = () => {
    return (
        <section className="bg-gradient-to-b from-gray-300 via-gray-200 to-white py-16">
            <div className="w-screen mx-auto px-[8%]">
                <h2 className="text-3xl font-semibold text-gray-900 mb-8">
                    Mainnets
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                    {mainnets.map((mainnet) => (
                        <div
                            key={mainnet.id}
                            className="bg-gray-100 p-4 rounded-lg shadow-md"
                        >
                            <div className="text-center">
                                <a
                                    href={mainnet.homepageUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <Image
                                        src={mainnet.imageUrl}
                                        alt={mainnet.name}
                                        width={150}
                                        height={150}
                                        className="rounded-full mx-auto"
                                    />
                                </a>
                                <h3 className="text-xl font-semibold mt-4 text-black">
                                    {mainnet.name}
                                </h3>
                            </div>
                        </div>
                    ))}
                    <div className="flex flex-col items-center justify-center bg-gray-100 p-4 rounded-lg shadow-md">
                        <div className="text-center">
                            <a
                                href="/contact"
                                className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded"
                            >
                                NEXT YOU!
                            </a>
                            <h3 className="text-lg font-medium mt-4 text-gray-600">
                                Register your mainnet here!
                            </h3>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default MainnetSection;
