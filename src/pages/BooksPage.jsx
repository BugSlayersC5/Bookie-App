import React, { useState } from 'react'; 
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { BookCard } from "../components/BookCard"; 

const initialBooks = [
    { id: 1, title: 'Things Fall Apart', author: 'Chinua Achebe', image: 'https://cdn.dribbble.com/userupload/41985817/file/original-cdb492d01db9bade4b588262d7653afc.png?resize=768x576&vertical=center', genre: 'Fiction', yearPublished: 1958 },
    { id: 2, title: 'Half a Yellow Sun', author: 'Chimamanda Ngozi Adichie', image: 'https://cdn.dribbble.com/userupload/41985817/file/original-cdb492d01db9bade4b588262d7653afc.png?resize=768x576&vertical=center', genre: 'Historical Fiction', yearPublished: 2006 },
    
    { id: 3, title: 'The Great Gatsby', author: 'F. Scott Fitzgerald',  image: 'https://cdn.dribbble.com/userupload/41985817/file/original-cdb492d01db9bade4b588262d7653afc.png?resize=768x576&vertical=center', genre: 'Classics', yearPublished: 1925 },
    { id: 4, title: 'Purple Hibiscus', author: 'Chimamanda Ngozi Adichie',  image: 'https://cdn.dribbble.com/userupload/41985817/file/original-cdb492d01db9bade4b588262d7653afc.png?resize=768x576&vertical=center', genre: 'Fiction', yearPublished: 2003 },
    { id: 5, title: 'The Beautyful Ones Are Not Yet Born ', author: 'Ayi Kwei Armah', image: 'https://cdn.dribbble.com/userupload/41985817/file/original-cdb492d01db9bade4b588262d7653afc.png?resize=768x576&vertical=center', genre: 'Philosophical Fiction', yearPublished: 1968 },
    { id: 6, title: 'Tail of the Blue Bird', author: 'Nii Ayikwei Parkes', image: 'https://cdn.dribbble.com/userupload/41985817/file/original-cdb492d01db9bade4b588262d7653afc.png?resize=768x576&vertical=center', genre: 'Poetry', yearPublished: 2009 },
    { id: 7, title: 'The Great Gatsby', author: 'F. Scott Fitzgerald',  image: 'https://cdn.dribbble.com/userupload/41985817/file/original-cdb492d01db9bade4b588262d7653afc.png?resize=768x576&vertical=center', genre: 'Classics', yearPublished: 1925 },
    { id: 8, title: 'Pride and Prejudice', author: 'Jane Austen',  image: 'https://cdn.dribbble.com/userupload/41985817/file/original-cdb492d01db9bade4b588262d7653afc.png?resize=768x576&vertical=center', genre: 'Romance', yearPublished: 1813 },
    { id: 9, title: 'The Great Gatsby', author: 'F. Scott Fitzgerald', image: 'https://cdn.dribbble.com/userupload/41985817/file/original-cdb492d01db9bade4b588262d7653afc.png?resize=768x576&vertical=center', genre: 'Classics', yearPublished: 1925 },
    { id: 10, title: 'Pride and Prejudice', author: 'Jane Austen',  image: 'https://cdn.dribbble.com/userupload/41985817/file/original-cdb492d01db9bade4b588262d7653afc.png?resize=768x576&vertical=center', genre: 'Romance', yearPublished: 1813 },
    { id: 11, title: 'The Great Gatsby', author: 'F. Scott Fitzgerald',  image: '', genre: 'Classics', yearPublished: 1925 },
    { id: 12, title: 'Pride and Prejudice', author: 'Jane Austen',  image:'', genre: 'Romance', yearPublished: 1813 },
];


export default function BooksPage() {
    const [searchTerm, setSearchTerm] = useState('');
    const [filteredBooks, setFilteredBooks] = useState(initialBooks); // State to hold filtered books

    // Basic search functionality 
    const handleSearchChange = (event) => {
        const value = event.target.value.toLowerCase();
        setSearchTerm(value);
        const results = initialBooks.filter(book =>
            book.title.toLowerCase().includes(value) ||
            book.author.toLowerCase().includes(value)
        );
        setFilteredBooks(results);
    };

    

    return (
        <>
            <Navbar />

            <div className="p-8 bg-dark-green min-h-screen">
                <div className="min-h-screen ">
                    <h1 className="text-4xl font-bold mb-8 text-green-900 text-center">
                        📚 Explore Our Collection
                    </h1>

                    <div className="flex justify-center mb-6">
                        <input
                            type="text"
                            placeholder="Search by title or author..."
                            className="w-full max-w-md px-4 py-2 border border-transparent rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-off-white bg-light-green"
                            value={searchTerm}
                            onChange={handleSearchChange}
                        />
                    </div>
                 

                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                        {filteredBooks.map(book => {
                            return (
                                <BookCard key={book.id} book={book} />
                            );
                        })}
                    </div>
                    {filteredBooks.length === 0 && (
                        <p className="text-center text-gray-600 mt-8 text-lg">No books found matching your criteria.</p>
                    )}
                </div>
            </div>
            <Footer />
        </>
    );
}