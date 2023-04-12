import React from 'react';
import Image from 'next/image';
import { NextPage } from 'next';

// About component
const About: NextPage = () => {
    return (
        <div className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-b from-transparent to-[rgb(var(--background-end-rgb))] bg-[rgb(var(--background-start-rgb))]">
            <h1 className="text-4xl font-bold my-[3%] text-white">
                About Us
            </h1>
            <div className="mb-[10%] ">
                <Image src='/logo/logo-no-background.svg' alt="Mingle Hub Logo" width={200} height={200} />
            </div>
            <div className="flex items-center px-[8%] my-[3%]">
                <div className="text-[rgb(var(--foreground-rgb))]">
                    <h2 className="text-2xl font-semibold">
                        Our Mission
                    </h2>
                    <p className="mb-[6%]">
                        Mingle Hub hopes to facilitate smoother exchanges between blockchain mainnets and projects, helping to accelerate the success of new projects and expand the mainnet ecosystem. Moreover, we hope to see the entire blockchain ecosystem spreading globally.
                    </p>
                    <h2 className="text-2xl font-semibold mb-4">
                        Tasks We Carry Out
                    </h2>
                    <ul className="list-disc list-inside">
                        <li>Introduce startup projects to the Mainnet various support and investment programs.</li>
                        <li>Help communicate between the fledgling project and the mainnet to ensure that the support program runs smoothly.</li>
                        <li>For mainnets, we provides project discovery opportunities by introducing them to upstart projects that are promising and a good fit for their mainnet.</li>
                        <li>Help organize, promote, and market events in South Korea on the mainnet.</li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default About;
