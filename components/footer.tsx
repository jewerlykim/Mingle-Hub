const Footer = () => {
    return (
        <footer className="bg-white w-full py-8">
            <div className="max-w-screen-xl px-4 mx-auto border-t-2 border-gray-300 my-2">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 pt-8 items-center">
                    <div>
                        <h3 className="text-gray-800 font-semibold">MingleHub</h3>
                        <p className="text-gray-500 mt-2">Connecting blockchain projects with mainnet solutions.</p>
                    </div>
                    <div>
                        <h4 className="text-gray-800 font-semibold">Company</h4>
                        <ul className="text-gray-500 mt-2 space-y-2">
                            <li><a href="#" className="hover:text-gray-800">About Us</a></li>
                            <li><a href="#" className="hover:text-gray-800">Our Team</a></li>
                            <li><a href="#" className="hover:text-gray-800">Careers</a></li>
                            <li><a href="#" className="hover:text-gray-800">Contact Us</a></li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="text-gray-800 font-semibold">Resources</h4>
                        <ul className="text-gray-500 mt-2 space-y-2">
                            <li><a href="#" className="hover:text-gray-800">Blog</a></li>
                            <li><a href="#" className="hover:text-gray-800">Documentation</a></li>
                            <li><a href="#" className="hover:text-gray-800">FAQ</a></li>
                            <li><a href="#" className="hover:text-gray-800">Support</a></li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="text-gray-800 font-semibold">Legal</h4>
                        <ul className="text-gray-500 mt-2 space-y-2">
                            <li><a href="#" className="hover:text-gray-800">Privacy Policy</a></li>
                            <li><a href="#" className="hover:text-gray-800">Terms of Service</a></li>
                        </ul>
                    </div>
                </div>
                <div className="flex justify-center pt-12">
                    {/* Add your social media icons here */}
                </div>
                <div className="text-center text-gray-500 pt-10 sm:pt-12 font-light flex items-center justify-center">
                    &copy; {new Date().getFullYear()} MingleHub. All rights reserved.
                </div>
            </div>
        </footer>
    );
};

export default Footer;
