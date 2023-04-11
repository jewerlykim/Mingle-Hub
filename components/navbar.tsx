import React from 'react';
import { useRouter } from "next/router";
import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
    const router = useRouter();
    const currentPath = router.pathname;

    return (
        <header>
            <nav className="bg-blue-900 text-white shadow py-4">
                <div className="px-8 mx-auto max-w-7xl">
                    <div className="flex items-center justify-between h-16">
                        <div className="flex items-center">
                            <Link className="flex items-center" href="/">
                                <Image
                                    src="/logo/logo-black.svg"
                                    width={80}
                                    height={80}
                                    alt="logo"
                                />
                                <h1 className="bg-blue-900 text-white text-lg ml-2">
                                    MingleHub
                                </h1>
                            </Link>

                        </div>

                        <div className="flex items-baseline space-x-4">

                            <Link href="/" className={`text-md font-medium px-3 py-2 rounded-md ${currentPath === "/" ? "text-gray-800" : "text-gray-300"} hover:text-gray-800`}>
                                Home
                            </Link>


                            <Link href="/intro" className={`text-md font-medium px-3 py-2 rounded-md ${currentPath === "/intro" ? "text-gray-800" : "text-gray-300"} hover:text-gray-800`}>
                                About
                            </Link>


                            <Link href="/launching" className={`text-md font-medium px-3 py-2 rounded-md ${currentPath === "/launching" ? "text-gray-800" : "text-gray-300"} hover:text-gray-800`}>
                                Projects
                            </Link>
                            <Link href="/contact" className={`text-md font-medium px-3 py-2 rounded-md ${currentPath === "/contact" ? "text-gray-800" : "text-gray-300"} hover:text-gray-800`}>
                                Contact
                            </Link>

                        </div>
                    </div>
                </div>
            </nav>
        </header>
    );
};

export default Navbar;
