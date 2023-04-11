import { NextPage } from "next";
import Image from 'next/image';

const Hero: NextPage = () => {
    return (
        <section className="bg-gradient-to-b from-blue-900 via-blue-800 to-teal-500 py-16">
            <div className="w-screen px-[8%]">
                <div className="lg:flex lg:items-center lg:justify-between">
                    <div className="lg:w-1/2">
                        <Image
                            src="/sample/nft_chef_logo_480.png"
                            alt="Promising Project Image"
                            width={400}
                            height={400}
                            className="rounded-lg"
                        />
                    </div>
                    <div className="mt-8 lg:mt-0 lg:w-1/2">
                        <h2 className="text-3xl font-semibold text-white">
                            Promising Project Name
                        </h2>
                        <p className="mt-4 text-lg text-white">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed urna nulla, feugiat at egestas id, tincidunt vel sapien. Nam bibendum consequat lectus, a fermentum libero ultricies a.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Hero;