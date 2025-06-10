import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
// import BookImg from "../assets/bookimg.jpg";
import Book from "../assets/book.png";

export default function Home() {
    return (
        <>
            <Navbar />
            <h1 className="text-amber-700"></h1>
            <section className="bg-[url(./assets/book.png)] h-[100vh] bg-cover w-[100%] mx-auto relative">
                <div className="py-30 ml-10">
                    <h1 className="w-20% h-5"></h1>
                    <p className="text-xs text-white">Hello New Friend</p>
                    <h1 className="font-bold text-6xl  text-white flex font-serif ">GREAT BOOKS, <br />SMART SYSTEM,</h1>
                    <h1 className="text-yellow-600 font-bold text-6xl flex font-serif ">SEEMLESS ACCESS,</h1>
                    <h4 className="text-white">Lorem ipsum dolor sit amet <br />consectetur adipisicing elit.</h4>

                    <div className="flex flex-row gap-4 mt-10">
                        <button className="text-xs border-radius-none rounded-md bg-yellow-400 p-4 px-10">ADD BOOK</button>
                        <button className="text-xs border-radius-none rounded-md bg-green-400 p-4 px-10">VIEW BOOKS</button>
                    </div>
                </div>


            </section>

            <section className="bg-cyan-100 text-sm ">
                <div className="flex flex-row gap-5 justify-center justify-content-space-between">
                    <span><h3 className="flex display-flex mt-5 justify-center font-serif">ALL BOOKS</h3></span>
                    <span><h3 className="flex display-flex mt-5 justify-center font-serif">FICTION</h3></span>
                    <span><h3 className="flex display-flex mt-5 justify-center font-serif">SCIENCE</h3></span>
                    <span><h3 className="flex display-flex mt-5 justify-center font-serif">TECHNOLOGY</h3></span>
                </div>
                <div className="border-radius-none ml-100 bg-cyan-50 h-50 w-150">
                    <h2 className="flex display-flex mt-10 justify-center font-serif">OUR MENU</h2>
                    <h1 className="flex mt-5 font-bold text-3xl text-black justify-center font-serif ">ALL BOOKS</h1>
                    <p className="flex justify-center mt-8 ">Lorem ipsum dolor sit, ame consectetur adipisicing elit. <br />Ipsa quo dignissimos expedita quae incidunt. Maxime, sed. </p>
                </div>

                <div>
                    <p className="mt-30">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nostrum fugit magni aperiam rem saepe voluptates natus cupiditate soluta illo, atque commodi at quo iusto autem voluptatibus enim. Ratione, molestiae mollitia?</p>
                </div>

                <div>
                    <p className="mt-20">Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus optio ab sit aliquid ullam cupiditate non officiis delectus quos, quibusdam ea, maiores repudiandae iusto labore modi ducimus eaque porro? Corrupti.</p>
                </div>
            </section>

            <section className="bg-gray-800  mx-auto  px-4 py-16">
                <h2 className="text-3xl font-bold text-center text-cyan-200 mb-10">
                    Find Answers To Common Questions
                </h2>

                <div className="grid md:grid-cols-2 gap-6">
                    <div className="bg-white rounded-3xl h-12 px-6">
                        <div class="flex justify-between mt-3 items-center text-lg font-semibold">
                            <p>How Long Working Time?</p>
                            <span class="text-cyan-300">&#9660;</span>
                        </div>
                        <p class="mt-2 text-sm text-gray-400">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        </p>
                    </div>

                </div>
                <div class="grid md:grid-cols-2 gap-6">
                    <div class="bg-white rounded-3xl h-12 mt-15 px-6">
                        <div class="flex justify-between mt-3 items-center text-lg font-semibold">
                            <p>Where The Office Work?</p>
                            <span class="text-cyan-300">&#9660;</span>
                        </div>

                    </div>
                </div>

                <div class="grid md:grid-cols-2 mt-5 gap-6">
                    <div class="bg-white rounded-3xl h-12 px-6">
                        <div class="flex justify-between mt-3 items-center text-lg font-semibold">
                            <p>Office Hour Information?</p>
                            <span class="text-cyan-300">&#9660;</span>
                        </div>
                    </div>
                </div>

                <div className="bg-gray-800 mt-10  ">
                    <div className="grid md:grid-cols-2 gap-6">
                        <div className="bg-white rounded-3xl h-12 px-6">
                            <div class="flex justify-between mt-3 items-center text-lg font-semibold">
                                <p>How Long Working Time?</p>
                                <span class="text-cyan-300">&#9660;</span>
                            </div>
                            <p class="mt-2 text-sm text-gray-400">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            </p>
                        </div>

                    </div>
                    <div class="grid md:grid-cols-2 gap-6">
                        <div class="bg-white rounded-3xl h-12 mt-15 px-6">
                            <div class="flex justify-between mt-3 items-center text-lg font-semibold">
                                <p>Where The Office Work?</p>
                                <span class="text-cyan-300">&#9660;</span>
                            </div>

                        </div>
                    </div>

                    <div class="grid md:grid-cols-2 mt-5 gap-6">
                        <div class="bg-white rounded-3xl h-12 px-6">
                            <div class="flex justify-between mt-3 items-center text-lg font-semibold">
                                <p>Office Hour Information?</p>
                                <span class="text-cyan-300">&#9660;</span>
                            </div>
                        </div>
                    </div>

                </div>
            </section>



            <section class="px-6 py-12 bg-cyan-200 flex flex-row gap-6">
                <div className="bg-gray-50 w-80 h-60 rounded-2xl ml-10 text-black">
                    <p className="py-4 px-6">CLIENTS REVIEW</p>
                    <h1 className="text-3xl mb-10  py-6 px-6">Sucess Stories <br />From Satisfied <br />Clients</h1>
                </div>
                <div className="bg-green-300 w-80 h-60 rounded-2xl ml-10 text-black">
                    <p className="py-4 px-6">CLIENT</p>
                    <h4 className="font-light mb-10  py-6 px-6">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quae blanditiis incidunt, natus enim nec</h4>
                </div>
                <div className="bg-gray-50 w-80 h-60 rounded-2xl ml-10 text-black">
                    <p className="py-4 px-6">CLIENT</p>
                    <h4 className="font-light mb-10  py-6 px-6">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quae blanditiis incidunt, natus enim nec</h4>
                </div>

            </section>
            <Footer />
        </>
    );
}