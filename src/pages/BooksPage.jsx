import { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { BookCard } from "../components/BookCard";
import { SearchIcon, LibraryBigIcon, LibraryBig } from 'lucide-react';
import { apiClient } from "../api/client";


export default function BooksPage() {

    const [books, setBooks] = useState([]);

    const getBooks = () => {
        apiClient.get('/books')
            .then((response) => {
                console.log(response.data);
                setBooks(response.data.data);

            })
            .catch((error) => {
                console.log(error)
            })

    }

    useEffect(getBooks, []);


    return (
        <>
            <Navbar />

            <div className="p-8 bg-dark-green min-h-screen">
                <div className="min-h-screen ">
                    <div className="flex flex-row justify-center text-4xl font-bold text-off-white text-center">
                            < LibraryBig size={48} color="#FDD36B" />
                        <h1 className="text-4xl font-bold mb-8 text-black text-center">
                            Library Collection
                        </h1>
                    </div>
                    <p className='text-sm font-bold mb-8 text-black text-center'>
                        Manage your library collection with ease. Search, add, edit, and organize <br />
                        your books.
                    </p>


                    <div className=" flex justify-center mb-6">
                        <div className="relative w-full max-w-md">
                            <span className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                <SearchIcon className="h-5 w-5 text-gray-500" />
                            </span>
                            <input
                                type="text"
                                placeholder="Search by title or author"
                                className="w-full pl-10 px-4 py-2 border border-transparent rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-off-white bg-light-green text-white"
                            />
                        </div>
                    </div>


                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                        {books.map(book => {
                            return (
                                <BookCard key={book.id} book={book} />
                            );
                        })}
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
}