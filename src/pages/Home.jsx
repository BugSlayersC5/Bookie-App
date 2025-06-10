import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
// import BookImg from "../assets/bookimg.jpg";
import Book from "../assets/book.png";

export default function Home() {
    return (
        <>
            <Navbar />
            <h1 className="text-amber-700 mt-10"></h1>
            <section className="bg-[url(./assets/book.png)] h-[100vh] bg-cover w-[95%] mx-auto relative">
                <div>
                    <h1 className="font-bold text-6xl  text-white flex font-serif ">GREAT BOOKS, <br />SMART SYSTEM,</h1>
                    <h1 className="text-yellow-600 font-bold text-6xl flex font-serif ">SEEMLESS ACCESS,</h1>
                    <h4 className="text-white">Lorem ipsum dolor sit amet <br />consectetur adipisicing elit.</h4>
                </div>

                <div className="flex ">
                    <button className="text-30 border bg-yellow-400 p-4">ADD BOOK</button>
                    <button className="text-30 border bg-green-400 p-4">VIEW BOOKS</button>
                </div>

            </section>

            <div>
                <h1 className="flex mt-15 font-bold text-3xl text-blue-800 justify-center font-serif ">Welcome To The Library</h1>
                <h2 className="text-2xl flex display-flex mt-5 justify-center font-serif">Explore Our Books</h2>
            </div>

            <section>
                <div class="p-6 grid-cols-3">
                    {/* Book Categories with Icons */}
                    <div class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-3 gap-6">
                        {/* <!-- Fiction Category --> */}
                        <div class="flex flex-col items-center bg-gray-200 rounded-lg p-4 shadow-md hover:shadow-xl transition-all duration-300">
                            <i class="fas fa-book-open text-4xl text-blue-500 mb-4"></i>
                            <h3 class="text-lg font-semibold">Fiction</h3>
                            <p class="text-sm text-gray-600">Explore captivating stories and novels</p>
                        </div>

                        {/* Non Fiction Category */}
                        <div class="flex flex-col items-center bg-gray-200 rounded-lg p-4 shadow-md hover:shadow-xl transition-all duration-300">
                            <i class="fas fa-book text-4xl text-green-500 mb-4"></i>
                            <h3 class="text-lg font-semibold">Non-Fiction</h3>
                            <p class="text-sm text-gray-600">Dive into true stories and factual content</p>
                        </div>

                        {/* Mystery Category */}
                        <div class="flex flex-col items-center bg-gray-200 rounded-lg p-4 shadow-md hover:shadow-xl transition-all duration-300">
                            <i class="fas fa-search text-4xl text-purple-500 mb-4"></i>
                            <h3 class="text-lg font-semibold">Mystery</h3>
                            <p class="text-sm text-gray-600">Uncover thrilling secrets and mysteries</p>
                        </div>

                        {/*  Science Fiction Category */}
                        <div class="flex flex-col items-center bg-gray-200 rounded-lg p-4 shadow-md hover:shadow-xl transition-all duration-300">
                            <i class="fas fa-rocket text-4xl text-red-500 mb-4"></i>
                            <h3 class="text-lg font-semibold">Science Fiction</h3>
                            <p class="text-sm text-gray-600">Explore futuristic worlds and adventures</p>
                        </div>

                        {/* Kids Category */}
                        <div class="flex flex-col items-center bg-gray-200 rounded-lg p-4 shadow-md hover:shadow-xl transition-all duration-300">
                            <i class="fas fa-child text-4xl text-yellow-500 mb-4"></i>
                            <h3 class="text-lg font-semibold">Kids</h3>
                            <p class="text-sm text-gray-600">Books and stories for young readers</p>
                        </div>

                        {/* Teens Category */}
                        <div class="flex flex-col items-center bg-gray-200 rounded-lg p-4 shadow-md hover:shadow-xl transition-all duration-300">
                            <i class="fas fa-users text-4xl text-pink-500 mb-4"></i>
                            <h3 class="text-lg font-semibold">Teens</h3>
                            <p class="text-sm text-gray-600">Books for teens with exciting stories</p>
                        </div>
                    </div>
                </div>

            </section>

            <section>
                <div class="p-6">
                    {/* Search Section */}
                    <div class="flex flex-col items-center mb-8">
                        {/*  Search Bar  */}
                        <div class="relative w-full max-w-md">
                            <input type="text" id="searchInput" class="w-full p-3 pl-10 pr-4 rounded-lg border border-gray-300 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Search by title, author, or genre..." />
                            {/* Search Icon  */}
                            <i class="fas fa-search absolute left-3 top-3 text-gray-500"></i>
                        </div>

                        {/* Filter Section (Optional) */}
                        <div class="mt-4 flex space-x-4">
                            <button class="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-800">By Title</button>
                            <button class="bg-blue-800 text-white px-4 py-2 rounded-lg hover:bg-blue-600">By Author</button>
                            <button class="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-800">By Genre</button>
                        </div>
                    </div>

                    {/* Search Results (Initially Empty) */}
                    <div
                        id="searchResults" class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    </div>
                </div>
            </section>

            <section class="w-full px-6 py-12 bg-gray-50">
                <div class="max-w-7xl mx-auto flex flex-col md:flex-row gap-8 items-start">

                    {/* Left: List of Popular Books */}
                    <div class="w-full md:w-1/2 space-y-4">
                        <h2 class="text-2xl font-semibold text-gray-800 mb-4">Popular Books</h2>
                        <div class="grid grid-cols-2 sm:grid-cols-3 gap-4">
                            <div class="bg-white p-4 rounded-xl shadow hover:shadow-lg transition">
                                <img src={Book} alt="Book 1" class="w-full h-32 object-cover rounded" />
                                <p class="mt-2 text-sm text-gray-700 font-medium">Book Title 1</p>
                            </div>
                            <div class="bg-white p-4 rounded-xl shadow hover:shadow-lg transition">
                                <img src={Book} alt="Book 2" class="w-full h-32 object-cover rounded" />
                                <p class="mt-2 text-sm text-gray-700 font-medium">Book Title 2</p>
                            </div>
                            <div class="bg-white p-4 rounded-xl shadow hover:shadow-lg transition">
                                <img src={Book} alt="Book 2" class="w-full h-32 object-cover rounded" />
                                <p class="mt-2 text-sm text-gray-700 font-medium">Book Title 3</p>
                            </div>

                        </div>
                    </div>

                    {/* Right: Animated Book Preview Placeholder */}
                    <div class="w-full md:w-1/2 bg-white rounded-xl shadow-lg p-6 h-[300px] flex items-center justify-center">
                        <div class="text-center space-y-3">
                            <div class="w-40 h-56 bg-gray-200 rounded-lg animate-pulse"></div>
                            <p class="text-lg font-semibold text-gray-600">Book Preview</p>
                            <p class="text-sm text-gray-400">Animated transition will appear here</p>
                        </div>
                    </div>
                </div>
            </section>

            <section className=" flex justify-center w-15% mt-2">
                <div className="bg-white justify-around p-30 gap-6 grid grid-cols-3">
                    <img src={Book} alt="book.png" />
                    <img src={Book} alt="book.png" />
                    <img src={Book} alt="book.png" />
                    <img src={Book} alt="book.png" />
                    <img src={Book} alt="book.png" />
                    <img src={Book} alt="book.png" />
                    <img src={Book} alt="book.png" />
                    <img src={Book} alt="book.png" />
                    <img src={Book} alt="book.png" />
                </div>
            </section>
            <Footer />
        </>
    );
}