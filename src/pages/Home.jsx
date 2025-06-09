import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import BookImg from "../assets/bookimg.jpg";
import Aimg from "../assets/aimg.jpg";
import Himg from "../assets/h-img.jpg";

export default function Home() {
    return (
        <>
            <Navbar />
            <h1 className="text-amber-700"></h1>
            <section className="bg-[url(./assets/h-img.jpg)] h-[50vh] bg-cover w-[95%] mx-auto relative">
                <h1 className="font-bold text-3xl text-blue-800 font-serif "></h1>
            </section>


            <div>
                <h1 className="flex mt-15 font-bold text-3xl text-blue-800 justify-center font-serif ">Welcome To The Library</h1>
                <h2 className="text-2xl flex display-flex mt-5 justify-center font-serif">All E-books</h2>
            </div>

            <section>
                <div class="p-6">
                    {/* <!-- Search Section --> */}
                    <div class="flex flex-col items-center mb-8">
                        {/* <!-- Search Bar --> */}
                        <div class="relative w-full max-w-md">
                            <input type="text" id="searchInput" class="w-full p-3 pl-10 pr-4 rounded-lg border border-gray-300 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Search by title, author, or genre..." />
                            {/* <!-- Search Icon --> */}
                            <i class="fas fa-search absolute left-3 top-3 text-gray-500"></i>
                        </div>

                        {/* <!-- Filter Section (Optional) --> */}
                        <div class="mt-4 flex space-x-4">
                            <button class="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600">By Title</button>
                            <button class="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600">By Author</button>
                            <button class="bg-purple-500 text-white px-4 py-2 rounded-lg hover:bg-purple-600">By Genre</button>
                        </div>
                    </div>

                    {/* <!-- Search Results (Initially Empty) --> */}
                    <div id="searchResults" class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {/* <!-- This will dynamically show the search results --> */}
                    </div>
                </div>


            </section>



            <section className=" flex justify-center w-15% mt-20">
                <div className="bg-white p-10 gap-2 grid grid-cols-3">
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