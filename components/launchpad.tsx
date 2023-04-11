import React from 'react';
import Image from 'next/image';
import { NextPage } from 'next';

interface Project {
    id: number;
    name: string;
    imageUrl: string;
    likes: number;
}

const projects: Project[] = [
    // Add your project data here
    {
        id: 1,
        name: 'Project 1',
        imageUrl: '/sample/nft_chef_logo_480.png',
        likes: 123,
    },
    {
        id: 2,
        name: 'Project 2',
        imageUrl: '/sample/nft_chef_logo_480.png',
        likes: 456,
    },
    {
        id: 3,
        name: 'Project 3',
        imageUrl: '/sample/nft_chef_logo_480.png',
        likes: 789,
    },


];

const Launchpad: NextPage = () => {
    return (
        <section className="bg-gradient-to-b from-teal-500 via-teal-400 to-gray-300 py-16">
            <div className="w-screen mx-auto px-[8%]">
                <h2 className="text-3xl font-semibold text-gray-900 mb-4">
                    Launchpad
                </h2>
                <p className="text-gray-900 mb-4">
                    Launchpad is a platform where projects seek support and showcase their work.
                </p>
                <button className="bg-teal-700 text-white px-6 py-2 rounded-md font-semibold mb-8">
                    APPLY
                </button>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                    {projects.map((project) => (
                        <div
                            key={project.id}
                            className="bg-gray-100 p-4 rounded-lg shadow-md"
                        >
                            <div className="text-center">
                                <Image
                                    src={project.imageUrl}
                                    alt={project.name}
                                    width={150}
                                    height={150}
                                    className="rounded-lg mx-auto"
                                />
                                <h3 className="text-xl font-semibold mt-4">
                                    {project.name}
                                </h3>
                                <p className="mt-2 text-gray-600">
                                    {project.likes} Likes
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Launchpad;
