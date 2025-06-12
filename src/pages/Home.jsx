import Navbar from "../components/Navbar";
import Footer from "../components/Footer";


export default function Home() {

    return (
        <>
            <Navbar />
            <section className="bg-[url('./assets/book.png')] bg-cover bg-center w-full min-h-screen flex items-start justify-st text-center sm:text-left p-4 sm:p-6">
                <div className="py-16 sm:py-20 px- 2sm:px-6 max-w-4xl w-full md:ml-25 lg:mx-auto">
                    <p className="text-sm text-curry mb-2"> ---- Hello New Friend</p>
                    <h1 className="font-bold text-4xl leading-tight md:text-6xl text-white font-serif mb-2">
                        GREAT BOOKS, <br className="md:hidden" />SMART SYSTEM,
                    </h1>
                    <h1 className="text-curry font-bold text-4xl md:text-6xl font-serif mt-2">
                        SEAMLESS ACCESS,
                    </h1>
                    <h4 className="text-white mt-4 max-w-md mx-auto sm:mx-0 text-base sm:text-lg">
                        Lorem ipsum dolor sit amet <br className="sm:hidden" />consectetur adipisicing elit.
                    </h4>

                    <div className="flex flex-col sm:flex-row gap-4 mt-10 justify-center sm:justify-start">
                        <button className="text-xs sm:text-sm rounded-md bg-curry py-3 px-6 text-white hover:opacity-90 transition-opacity">ADD BOOK</button>
                        <button className="text-xs sm:text-sm rounded-md bg-dark-green py-3 px-6 text-white hover:opacity-90 transition-opacity">VIEW BOOKS</button>
                    </div>
                </div>
            </section>


            <section className="bg-cyan-100 py-12 px-4 sm:px-6 lg:px-8">
                <div className="max-w-6xl mx-auto">
                    <div className="flex flex-col sm:flex-row gap-4 justify-center text-center mb-8 flex-wrap">
                        <h3 className="font-serif text-lg sm:text-xl md:text-2xl text-gray-800 hover:text-cyan-700 cursor-pointer transition-colors px-2">ALL BOOKS</h3>
                        <h3 className="font-serif text-lg sm:text-xl md:text-2xl text-gray-800 hover:text-cyan-700 cursor-pointer transition-colors px-2">FICTION</h3>
                        <h3 className="font-serif text-lg sm:text-xl md:text-2xl text-gray-800 hover:text-cyan-700 cursor-pointer transition-colors px-2">SCIENCE</h3>
                        <h3 className="font-serif text-lg sm:text-xl md:text-2xl text-gray-800 hover:text-cyan-700 cursor-pointer transition-colors px-2">TECHNOLOGY</h3>
                    </div>

                    <div className="bg-cyan-50 p-8 rounded-lg text-center mb-12">
                        <h2 className="font-serif text-xl sm:text-2xl text-gray-700 mb-3">OUR MENU</h2>
                        <h1 className="font-bold text-3xl sm:text-4xl text-black font-serif mb-6">POPULAR BOOKS</h1>
                        <p className="text-gray-600 max-w-2xl mx-auto text-sm sm:text-base">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsa quo dignissimos expedita quae incidunt. Maxime, sed.</p>
                    </div>

                   
                </div>
            </section>

            

            <section className="bg-dark-green font-sans py-12 px-4 sm:px-6 lg:px-8">
                <div className="container mx-auto max-w-4xl">
                    <div className="text-center mb-12">
                        <h1 className="text-3xl sm:text-4xl font-bold text-cyan-50 mb-4">Frequently Asked Questions</h1>
                        <p className="text-base sm:text-lg text-gray-300">Find answers to common questions about our products and services.</p>
                    </div>

                    <div className="space-y-4">
                        {/* FAQ ITEM 1 */}
                        <div className="bg-white rounded-xl shadow-md overflow-hidden transition-all duration-300 hover:shadow-lg">
                            <button className="faq-toggle w-full flex justify-between items-center p-4 sm:p-6 text-left">
                                <h3 className="text-base sm:text-lg font-semibold text-gray-800">How do I add a book?</h3>
                                <i className="fas fa-chevron-down text-indigo-600 transition-transform duration-300"></i>
                            </button>
                            <div className="faq-content px-4 sm:px-6 pb-4 sm:pb-6 hidden">
                                <p className="text-sm sm:text-base text-gray-600">
                                    To add a book, click on the "Add Book" button at the top right corner of our website.
                                    You'll need to provide some data, and fill in some basic information on the form.
                                </p>
                            </div>
                        </div>

                        {/* FAQ ITEM 2 */}
                        <div className="bg-white rounded-xl shadow-md overflow-hidden transition-all duration-300 hover:shadow-lg">
                            <button className="faq-toggle w-full flex justify-between items-center p-4 sm:p-6 text-left">
                                <h3 className="text-base sm:text-lg font-semibold text-gray-800">What payment methods do you accept?</h3>
                                <i className="fas fa-chevron-down text-indigo-600 transition-transform duration-300"></i>
                            </button>
                            <div className="faq-content px-4 sm:px-6 pb-4 sm:pb-6 hidden">
                                <p className="text-sm sm:text-base text-gray-600 mb-3">
                                    We accept all major credit cards including Visa, MasterCard, American Express, and Discover.
                                    We also support payments through PayPal and bank transfers for certain plans.
                                </p>
                                <ul className="list-disc pl-5 text-gray-600 text-sm sm:text-base">
                                    <li>Credit/Debit Cards</li>
                                    <li>PayPal</li>
                                    <li>Bank Transfers (for annual plans)</li>
                                </ul>
                            </div>
                        </div>

                        {/* FAQ ITEM 3 */}
                        <div className="bg-white rounded-xl shadow-md overflow-hidden transition-all duration-300 hover:shadow-lg">
                            <button className="faq-toggle w-full flex justify-between items-center p-4 sm:p-6 text-left">
                                <h3 className="text-base sm:text-lg font-semibold text-gray-800">Can I cancel my subscription anytime?</h3>
                                <i className="fas fa-chevron-down text-indigo-600 transition-transform duration-300"></i>
                            </button>
                            <div className="faq-content px-4 sm:px-6 pb-4 sm:pb-6 hidden">
                                <p className="text-sm sm:text-base text-gray-600">
                                    Yes, you can cancel your subscription at any time. If you cancel during your billing period,
                                    you'll continue to have access to our services until the end of that period. We don't charge
                                    any cancellation fees.
                                </p>
                            </div>
                        </div>

                        {/* FAQ ITEM 4 */}
                        <div className="bg-white rounded-xl shadow-md overflow-hidden transition-all duration-300 hover:shadow-lg">
                            <button className="faq-toggle w-full flex justify-between items-center p-4 sm:p-6 text-left">
                                <h3 className="text-base sm:text-lg font-semibold text-gray-800">How do I edit a book?</h3>
                                <i className="fas fa-chevron-down text-indigo-600 transition-transform duration-300"></i>
                            </button>
                            <div className="faq-content px-4 sm:px-6 pb-4 sm:pb-6 hidden">
                                <p className="text-sm sm:text-base text-gray-600 mb-3">
                                    To reset your password:
                                </p>
                                <ol className="list-decimal pl-5 text-gray-600 space-y-2 text-sm sm:text-base">
                                    <li>Go to the login page and click "Forgot password"</li>
                                    <li>Enter the email address associated with your account</li>
                                    <li>Check your email for a password reset link</li>
                                    <li>Click the link and follow the instructions to create a new password</li>
                                </ol>
                            </div>
                        </div>

                        {/* FAQ ITEM 5 */}
                        <div className="bg-white rounded-xl shadow-md overflow-hidden transition-all duration-300 hover:shadow-lg">
                            <button className="faq-toggle w-full flex justify-between items-center p-4 sm:p-6 text-left">
                                <h3 className="text-base sm:text-lg font-semibold text-gray-800">Is there a mobile app available?</h3>
                                <i className="fas fa-chevron-down text-indigo-600 transition-transform duration-300"></i>
                            </button>
                            <div className="faq-content px-4 sm:px-6 pb-4 sm:pb-6 hidden">
                                <p className="text-sm sm:text-base text-gray-600">
                                    Yes! We have mobile apps available for both iOS and Android devices. You can download them from
                                    the App Store or Google Play Store. All your data will sync automatically between the web version
                                    and mobile apps.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="mt-16 text-center bg-indigo-50 rounded-xl p-6 sm:p-8">
                        <h2 className="text-xl sm:text-2xl font-bold text-dark-green mb-3">Still have questions?</h2>
                        <p className="text-sm sm:text-base text-gray-600 mb-6">Our support team is happy to help you with any other questions you might have.</p>
                        <button className="px-6 py-3 bg-dark-green text-white rounded-lg hover:bg-indigo-700 transition font-medium text-sm sm:text-base">
                            Contact Support
                        </button>
                    </div>
                </div>
            </section>

           

            <section className="px-4 py-12 bg-cyan-200 grid grid-cols-1 md:grid-cols-3 gap-6 sm:px-6 lg:px-8">
                <div className="bg-gray-50 rounded-2xl p-6 text-black">
                    <p className="text-xs sm:text-sm">CLIENTS REVIEW</p>
                    <h1 className="text-2xl sm:text-3xl mt-4">Success Stories <br />From Satisfied <br />Clients</h1>
                </div>
                <div className="bg-green-300 rounded-2xl p-6 text-black">
                    <p className="text-xs sm:text-sm">CLIENT</p>
                    <p className="font-light text-xs sm:text-sm mt-2">Name: Daniel Owusu
                        <br />Review:
                        "The new Library Management App has made it incredibly easy for us to manage books. Adding, updating, or removing books is seamless, and the real-time success/error messages help us know what's working instantly. The app is fast, intuitive, and has significantly reduced manual entry errors."
                    </p>
                </div>
                <div className="bg-gray-50 rounded-2xl p-6 text-black">
                    <p className="text-xs sm:text-sm">CLIENT</p>
                    <p className="font-light text-xs sm:text-sm mt-2">Name: Josephine Addo
                        <br />Review:
                        "The backend is rock solid! The API documentation made integration with our internal tools very easy, and input validation prevents data entry mistakes. I also appreciate the effort put into error handling, it makes debugging so much easier."
                    </p>
                </div>
            </section>
            <Footer />
        </>
    );
}