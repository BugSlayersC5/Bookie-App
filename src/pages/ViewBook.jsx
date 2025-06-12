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
            <div className="min-h-screen bg-gradient-to-b from-green-100 via-white to-green-50 py-10 px-4">
                <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-xl p-6 flex flex-col md:flex-row gap-6 animate-fade-in">
                    <img
                        src={book.image}
                        alt={book.title}
                        className="w-full md:w-1/3 h-72 object-cover rounded-lg shadow-md transform hover:scale-105 transition duration-300"
                    />
                    <div className="flex-1 flex flex-col justify-between space-y-4">
                        <div>
                            <h1 className="text-4xl font-extrabold text-green-900 mb-2">{book.title}</h1>
                            <p className="text-lg text-gray-700 italic mb-3">by {book.author}</p>
                            <div>
                                <p className="text-gray-600 leading-relaxed">{book.bookCategory}</p>
                                <p className="text-gray-600 leading-relaxed">{book.publicationYear}</p>
                                <p className="text-gray-600 leading-relaxed">{book.publicationCompany}</p>
                            </div>
                        </div>

                        <button
                            onClick={() => window.history.back()}
                            className="self-start mt-4 px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 transition"
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