import { NextPage } from 'next';
import Head from 'next/head';
import Navbar from './navbar';
import Footer from './footer';


export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <>
            <Head>
                <title>Mingle Hub</title>
                <meta name="description" content="MingleHub connects emerging blockchain projects with established mainnets, providing grants, investments, and resources. This platform fosters collaboration in the blockchain ecosystem. Visit our site to explore MingleHub's mission, launchpads, and partnered mainnets." />
                <link rel="icon" href="/logo/logo-only-image.png" />
            </Head>
            <Navbar />
            <main>{children}</main>
            <Footer />
        </>
    );
}
