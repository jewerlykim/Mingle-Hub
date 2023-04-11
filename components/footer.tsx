const Footer = () => {
    return (
        <footer className="bg-blue-900 text-white w-full py-8">
            <div className="max-w-screen-xl px-4 mx-auto border-t-2 border-gray-300 my-2">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 pt-8 items-center">
                    <div>
                        <h3 className="bg-blue-900 text-white font-semibold">MingleHub</h3>
                        <p className="bg-blue-900 text-white mt-2">Connecting blockchain projects with mainnet solutions.</p>
                    </div>
                    <div>
                        <h4 className="bg-blue-900 text-white font-semibold">Company</h4>
                        <ul className="bg-blue-900 text-white mt-2 space-y-2">
                            <li><a href="#" className="hover:bg-blue-900 text-white">About Us</a></li>
                            <li><a href="#" className="hover:bg-blue-900 text-white">Our Team</a></li>
                            <li><a href="#" className="hover:bg-blue-900 text-white">Careers</a></li>
                            <li><a href="#" className="hover:bg-blue-900 text-white">Contact Us</a></li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="bg-blue-900 text-white font-semibold">Resources</h4>
                        <ul className="bg-blue-900 text-white mt-2 space-y-2">
                            <li><a href="#" className="hover:bg-blue-900 text-white">Blog</a></li>
                            <li><a href="#" className="hover:bg-blue-900 text-white">Documentation</a></li>
                            <li><a href="#" className="hover:bg-blue-900 text-white">FAQ</a></li>
                            <li><a href="#" className="hover:bg-blue-900 text-white">Support</a></li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="bg-blue-900 text-white font-semibold">Legal</h4>
                        <ul className="bg-blue-900 text-white mt-2 space-y-2">
                            <li><a href="#" className="hover:bg-blue-900 text-white">Privacy Policy</a></li>
                            <li><a href="#" className="hover:bg-blue-900 text-white">Terms of Service</a></li>
                        </ul>
                    </div>
                </div>
                <div className="flex justify-center pt-12">
                    {/* Add your social media icons here */}
                </div>
                <div className="text-center bg-blue-900 text-white pt-10 sm:pt-12 font-light flex items-center justify-center">
                    &copy; {new Date().getFullYear()} Crystal Clear. All rights reserved.
                </div>
            </div>
        </footer>
    );
};

export default Footer;
