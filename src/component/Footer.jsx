export default function Footer() {
    return (
        <footer className="bg-gradient-to-br from-amber-200 via-pink-300 to-fuchsia-600 p-2">
        <div className="rounded-3xl bg-white/80 shadow-lg">
            <div className="mx-auto max-w-6xl pt-12 pb-4 sm:pt-24 sm:pb-4 md:pt-32 md:pb-2 px-6 lg:px-8">
            <div className="text-center">
                <h3 className="text-3xl font-semibold mb-4 text-gray-900">Contact Us</h3>
                <p className="text-gray-500 sm:pb-6 md:pb-8 lg:pb-8">Email: contact@example.com</p>
            </div>

            {/* New pb-16 div with two child divs */}
            <div className="pb-16">
                {/* First child div: 6-column grid */}
                <div className="grid grid-cols-2 gap-y-10 pb-6 lg:grid-cols-6 lg:gap-8">
                {/* Column 1: Logo with name */}
                <div>
                    <h2 className="text-lg font-semibold text-gray-900">CuratedCourses</h2>
                </div>

                {/* Column 2: Empty */}
                <div></div>

                {/* Column 3: Product, Pricing, Analysis, API */}
                <div>
                    <h3 className="text-sm font-semibold text-gray-900">Product</h3>
                    <ul className="mt-4 space-y-2">
                    <li><a href="#" className="text-sm text-gray-500 hover:text-gray-900">Pricing</a></li>
                    <li><a href="#" className="text-sm text-gray-500 hover:text-gray-900">Analysis</a></li>
                    <li><a href="#" className="text-sm text-gray-500 hover:text-gray-900">API</a></li>
                    </ul>
                </div>

                {/* Column 4: Company, Careers, Blog */}
                <div>
                    <h3 className="text-sm font-semibold text-gray-900">Company</h3>
                    <ul className="mt-4 space-y-2">
                    <li><a href="#" className="text-sm text-gray-500 hover:text-gray-900">Careers</a></li>
                    <li><a href="#" className="text-sm text-gray-500 hover:text-gray-900">Blog</a></li>
                    <li><a href="#" className="text-sm text-gray-500 hover:text-gray-900">Company</a></li>
                    </ul>
                </div>

                {/* Column 5: Support, Help center, Community */}
                <div>
                    <h3 className="text-sm font-semibold text-gray-900">Support</h3>
                    <ul className="mt-4 space-y-2">
                    <li><a href="#" className="text-sm text-gray-500 hover:text-gray-900">Help center</a></li>
                    <li><a href="#" className="text-sm text-gray-500 hover:text-gray-900">Community</a></li>
                    </ul>
                </div>

                {/* Column 6: Company, Terms of service, Privacy policy */}
                <div>
                    <h3 className="text-sm font-semibold text-gray-900">Legal</h3>
                    <ul className="mt-4 space-y-2">
                    <li><a href="#" className="text-sm text-gray-500 hover:text-gray-900">Terms of service</a></li>
                    <li><a href="#" className="text-sm text-gray-500 hover:text-gray-900">Privacy policy</a></li>
                    </ul>
                </div>
                </div>

                {/* Second child div: Generic footer details */}
                <div className="flex justify-between group/row relative isolate pt-[calc(--spacing(2)+1px)] last:pb-[calc(--spacing(2)+1px)]">
                    <div aria-hidden="true" className="absolute inset-y-0 left-1/2 -z-10 w-screen -translate-x-1/2">
                        <div className="absolute inset-x-0 top-0 border-t border-black/5"></div>
                        <div className="absolute inset-x-0 top-2 border-t border-black/5"></div>
                        <div className="absolute inset-x-0 bottom-0 hidden border-b border-black/5 group-last/row:block"></div>
                        <div className="absolute inset-x-0 bottom-2 hidden border-b border-black/5 group-last/row:block"></div>
                    </div>
                    
                    <div>
                        <div className="py-3 group/item relative">
                        
                            <svg viewBox="0 0 15 15" aria-hidden="true" className="hidden group-first/item:block absolute size-[15px] fill-black/10 -top-2 -left-2">
                                <path d="M8 0H7V7H0V8H7V15H8V8H15V7H8V0Z"></path>
                            </svg>
                            <svg viewBox="0 0 15 15" aria-hidden="true" className="absolute size-[15px] fill-black/10 -top-2 -right-2">
                                <path d="M8 0H7V7H0V8H7V15H8V8H15V7H8V0Z"></path>
                            </svg>
                            <svg viewBox="0 0 15 15" aria-hidden="true" className="hidden group-first/item:group-last/row:block absolute size-[15px] fill-black/10 -bottom-2 -left-2">
                                <path d="M8 0H7V7H0V8H7V15H8V8H15V7H8V0Z"></path>
                            </svg>
                            <svg viewBox="0 0 15 15" aria-hidden="true" className="hidden group-last/row:block absolute size-[15px] fill-black/10 -bottom-2 -right-2">
                                <path d="M8 0H7V7H0V8H7V15H8V8H15V7H8V0Z"></path>
                            </svg>
                            
                            <div className="text-sm/6 text-gray-950">© 2025 CuratedCurses Inc.</div>
                        </div>
                    </div>
                    
                    <div className="flex gap-4 items-center justify-center relative">
                        <a href="#" className="text-dark-500 hover:text-gray-600 relative">
                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
                            </svg>
                            <div className="absolute inset-0 border-t border-black/5"></div>
                            <div className="absolute inset-0 border-b border-black/5"></div>
                        </a>
                        <a href="#" className="text-dark-500 hover:text-gray-600 relative">
                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                            </svg>
                            <div className="absolute inset-0 border-t border-black/5"></div>
                            <div className="absolute inset-0 border-b border-black/5"></div>
                        </a>
                        <a href="#" className="text-dark-500 hover:text-gray-600 relative">
                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                            </svg>
                            <div className="absolute inset-0 border-t border-black/5"></div>
                            <div className="absolute inset-0 border-b border-black/5"></div>
                        </a>
                    </div>
                </div>

            </div>
            </div>
        </div>
        </footer>
    );
}  