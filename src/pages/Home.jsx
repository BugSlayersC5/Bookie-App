import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import BookImg from "../assets/bookimg.jpg";
import Aimg from "../assets/aimg.jpg";
import Himg from "../assets/h-img.jpg";

export default function Home() {
    return (
        <>
            <Navbar />
            <h1 className="text-amber-700 mt-10"></h1>
            <section className="bg-[url(./assets/h-img.jpg)] h-[50vh] bg-cover w-[95%] mx-auto relative">
                <h1 className="font-bold text-3xl text-blue-800 font-serif "></h1>
            </section>

            <section>
                <div class="flex justify-start mb-6">
                    <button class="bg-blue-800 text-white py-2 px-6 rounded-md hover:bg-blue-600 focus:outline-none">
                        Add New Book
                    </button>
                </div>

                <div class="flex flex-col space-y-4">
                    {/* Book 1 */}
                    <div class="flex justify-between items-center p-4 bg-gray-100 rounded-lg shadow-md">
                        <div>
                            <h3 class="text-xl font-semibold">Book Title</h3>
                            <p class="text-gray-600">Author: Harry Porter</p>
                        </div>
                        <div class="flex space-x-4">
                            {/* Edit Button */}
                            <button class="bg-blue-800 text-white py-1 px-3 rounded-md hover:bg-yellow-600 focus:outline-none">
                                Edit
                            </button>
                            {/* Delete Button */}
                            <button class="bg-red-500 text-white py-1 px-3 rounded-md hover:bg-red-600 focus:outline-none">
                                Delete
                            </button>
                        </div>
                    </div>
                </div>
            </section>

            <div>
                <h1 className="flex mt-15 font-bold text-3xl text-blue-800 justify-center font-serif ">Welcome To The Library</h1>
                <h2 className="text-2xl flex display-flex mt-5 justify-center font-serif">All E-books</h2>
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

            <section className=" flex justify-center w-15% mt-2">
                <div className="bg-white justify-around p-30 gap-6 grid grid-cols-3">
                    <img src={BookImg} alt="Book Image" />
                    <img src={BookImg} alt="Book Image" />
                    <img src={BookImg} alt="Book Image" />
                    <img src={BookImg} alt="Book Image" />
                    <img src={BookImg} alt="Book Image" />
                    <img src={BookImg} alt="Book Image" />
                    <img src={BookImg} alt="Book Image" />
                    <img src={BookImg} alt="Book Image" />
                    <img src={BookImg} alt="Book Image" />
                </div>
            </section>
            <Footer />
        </>
    );
}