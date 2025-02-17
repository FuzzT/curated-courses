export default function Footer() {
    return (
        <footer className="bg-gradient-to-br from-amber-200 via-pink-300 to-fuchsia-600 p-2">
            <div className="rounded-3xl bg-white/80 shadow-lg"> {/* Full-width card with rounded corners */}
                <div className="mx-auto max-w-4xl py-24 sm:py-32 md:py-48 px-6 lg:px-8"> {/* Increased vertical padding and horizontal padding */}
                <div className="text-center"> {/* Center content */}
                    <h3 className="text-2xl font-semibold mb-4 text-gray-900">Contact Us</h3>
                    <p className="text-gray-500">Email: contact@example.com</p>
                    <div className="flex justify-center gap-6 mt-6">
                    <a href="#" className="text-gray-500 hover:text-gray-900 text-lg">
                        Facebook
                    </a>
                    <a href="#" className="text-gray-500 hover:text-gray-900 text-lg">
                        Twitter
                    </a>
                    <a href="#" className="text-gray-500 hover:text-gray-900 text-lg">
                        LinkedIn
                    </a>
                    </div>
                </div>
                </div>
            </div>
        </footer>
    );
}  