
import { BookOpen, Calendar, Edit, Trash2, Tag } from 'lucide-react'; // Import necessary icons

export function BookCard({ book }) { // Using named export here
    // Placeholder functions for handling actions - these would typically
    // trigger events or state updates in the parent component (BooksPage)
    // or through a global state management system.
    const handleEdit = () => {
        console.log(`Edit book: ${book.title}`);
        // e.g., navigate('/edit-book/' + book.id); or openEditModal(book);
    };

    const handleDelete = () => {
        console.log(`Delete book: ${book.title}`);
        // e.g., confirmAndDelete(book.id); or dispatch(deleteBook(book.id));
    };

    const handleViewBook = () => {
        console.log(`View details for: ${book.title}`);
        // e.g., navigate('/book/' + book.id);
    };

    return (
        <div className="bg-light-green shadow-lg hover:shadow-xl transition-all duration-300 p-4 border border-transparent flex flex-col rounded-xl">
            <img
                src={book.image}
                className="w-full h-36 object-cover rounded-md mb-2"
                alt={`Cover of ${book.title}`}
            />

            <div className="flex-grow flex flex-col justify-between">
                <div>
                    <h2 className="text-lg font-bold text-curry mb-0.5 leading-tight">{book.title}</h2>
                    <p className="text-sm  text-off-white mb-1 flex items-center">
                        <BookOpen size={14} className="mr-1.5  text-off-white" />
                        {book.author}
                    </p>
                    
                    <p className="text-sm text-off-white mb-1 flex items-center">
                        <Tag size={14} className="mr-1.5  text-off-white" />
                        Genre: {book.bookCategory}
                    </p>
                    

                    <p className="text-sm text-off-white mb-2 flex items-center">
                        <Calendar size={14} className="mr-1.5  text-off-white" />
                        Published: {book.publicationYear}
                    </p>



                    <p className="text-sm text-off-white mb-2 flex items-center">
                        <Calendar size={14} className="mr-1.5  text-off-white" />
                        Published by: {book.publicationCompany}
                    </p>

                </div>
            </div>

            {/* Action Row */}
            <div className="mt-3 pt-3 border-t border-gray-100 flex items-center justify-between">
                <div className="flex space-x-2">
                    <button
                        onClick={handleEdit}
                        className="p-1.5 rounded-full hover:bg-blue-100 text-curry transition-colors duration-200"
                        title="Edit Book"
                    >
                        <Edit size={18} />
                    </button>
                    <button
                        onClick={handleDelete}
                        className="p-1.5 rounded-full hover:bg-red-100 text-red-500 transition-colors duration-200"
                        title="Delete Book"
                    >
                        <Trash2 size={18} />
                    </button>
                </div>
                <button
                    onClick={handleViewBook}
                    className="px-3 py-1.5 bg-curry text-white rounded-md hover:bg-off-white transition-colors duration-200 text-sm font-semibold flex items-center"
                >
                    <BookOpen size={14} className="mr-1.5" /> View Book
                </button>
            </div>
        </div>
    );
}