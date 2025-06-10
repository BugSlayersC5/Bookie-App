import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import BookCard from "../components/BookCard";

const books = [
    { id: 1, title: 'Things Fall Apart', author: 'Chinua Achebe', status: 'Available', image: 'https://cdn.dribbble.com/userupload/41985817/file/original-cdb492d01db9bade4b588262d7653afc.png?resize=768x576&vertical=center' },
    { id: 2, title: 'Half a Yellow Sun', author: 'Chimamanda Ngozi Adichie', status: 'Borrowed' },
    { id: 3, title: 'The Great Gatsby', author: 'F. Scott Fitzgerald', status: 'Available' },
    { id: 4, title: 'Purple Hibiscus', author: 'Chimamanda Ngozi Adichie', status: 'Reserved' },
    { id: 5, title: 'The Beautyful Ones Are Not Yet Born ', author: 'Ayi Kwei Armah', status: 'Available' },
    { id: 6, title: 'Tail of the Blue Bird', author: 'Nii Ayikwei Parkes', status: 'Reserved' },
    { id: 7, title: 'The Great Gatsby', author: 'F. Scott Fitzgerald', status: 'Available' },
    { id: 8, title: 'Pride and Prejudice', author: 'Jane Austen', status: 'Reserved' },
    { id: 9, title: 'The Great Gatsby', author: 'F. Scott Fitzgerald', status: 'Available' },
    { id: 10, title: 'Pride and Prejudice', author: 'Jane Austen', status: 'Reserved' },
    { id: 11, title: 'The Great Gatsby', author: 'F. Scott Fitzgerald', status: 'Available' },
    { id: 12, title: 'Pride and Prejudice', author: 'Jane Austen', status: 'Reserved' },]



export default function BooksPage() {

    return (
        <>
            <Navbar />

            <div className="p-6 max-w-7xl mx-auto">

                <div className="min-h-screen bg-gradient-to-br from-green-50 via-stone-100 to-green-100">
                    <h1 className="text-4xl font-bold mb-8 text-green-900 text-center">
                        📚 Explore Our Collection
                    </h1>

                    <div className="flex justify-center mb-6">
                        <input
                            type="text"
                            placeholder="Search by title or author..."
                            className="w-full max-w-md px-4 py-2 border border-green-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-green-400"
                        // UI only for now will add the right thing later
                        />
                    </div>
                    <div className="flex flex-wrap justify-center gap-2 mb-10">
                        {'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('').map((letter) => (
                            <span
                                key={letter}
                                className="cursor-pointer text-green-800 hover:text-white hover:bg-green-500 transition px-3 py-1 rounded-md border border-green-300 text-sm font-medium"
                            >
                                {letter}
                            </span>
                        ))}
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
