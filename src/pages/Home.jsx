import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import BookImg from "../assets/bookimg.jpg"

export default function Home() {
    return (
        <>
            <Navbar />
            <h1 className="text-amber-700"></h1>
            <section className="bg-[url(./assets/bookimg.jpg)] h-[50vh] bg-cover w-[95%] mx-auto relative">
                <h1 className="font-bold text-3xl text-white font-serif ">WELCOME TO BOOKIE APP</h1>
            </section>

            {/* <section className="flex display-col justify-end ">
                <div>Search By Title</div>
                <div>Search By Author</div>
                <div>
                    
                </div>
            </section> */}
            <div>
                <h2 className="text-2xl flex display-flex mt-15 justify-center ">All E-books</h2>
                <button>View E-books</button>
                <button>Add New Book</button>
                <button>Search</button>
            </div>



            <section className=" flex justify-center w-15% mt-20">
                <div className="bg-white p-6 grid grid-cols-3">
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