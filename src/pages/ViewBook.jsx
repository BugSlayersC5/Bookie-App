import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useSearchParams } from "react-router";
import { useEffect, useState } from "react";
import { apiClient } from "../api/client";

export default function ViewBook() {
    const [searchParams] = useSearchParams();
    const id = searchParams.get('id');

    const [book, setBook] = useState({});

    const getBook = () => {
        apiClient.get(`/books/${id}`)
            .then((response) => {
                console.log(response.data);
                setBook(response.data.data);
            })
            .catch((error) => {
                console.log(error);
            })
    }

    useEffect(getBook, []);

    return (
        <>
            <Navbar />
         <div className="min-h-screen bg-gray-50 py-10 px-4">
  <div className="max-w-5xl mx-auto bg-white border border-gray-200 rounded-3xl shadow-sm overflow-hidden grid grid-cols-1 md:grid-cols-2">
    <div className="w-full h-80 md:h-auto">
      <img
        src={book.image}
        alt={book.title}
        className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
      />
    </div>
    <div className="p-6 flex flex-col justify-between space-y-6">
      <div>
        <h1 className="text-3xl font-semibold text-gray-900">{book.title}</h1>
        <p className="text-gray-500 italic mt-1">by {book.author}</p>

        <div className="mt-4 space-y-1 text-sm text-gray-600">
          <p><span className="text-gray-800 font-medium">Category:</span> {book.bookCategory}</p>
          <p><span className="text-gray-800 font-medium">Year:</span> {book.publicationYear}</p>
          <p><span className="text-gray-800 font-medium">Publisher:</span> {book.publicationCompany}</p>
        </div>
      </div>

      <button
        onClick={() => window.history.back()}
        className="mt-4 w-fit px-4 py-2 text-sm font-medium text-white bg-gray-900 rounded-md hover:bg-gray-700 transition"
      >
        ← Back
      </button>
    </div>
  </div>
</div>

            <Footer />
        </>
    );
}