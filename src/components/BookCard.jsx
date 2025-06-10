
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
        <div className="bg-white shadow-lg hover:shadow-xl transition-all duration-300 p-4 border border-green-100 flex flex-col rounded-xl">
            <img
                src={book.image}
                className="w-full h-36 object-cover rounded-md mb-2" // Reduced image height to h-36 (from h-40), mb-3 to mb-2
                alt={`Cover of ${book.title}`}
            />

            <div className="flex-grow flex flex-col justify-between">
                <div>
                    <h2 className="text-lg font-bold text-green-900 mb-0.5 leading-tight">{book.title}</h2> {/* Reduced font size to text-lg (from text-xl), mb-1 to mb-0.5, added leading-tight */}
                    <p className="text-sm text-gray-700 mb-1 flex items-center"> {/* Reduced font size to text-sm, mb-1.5 to mb-1 */}
                        <BookOpen size={14} className="mr-1.5 text-green-600" /> {/* Reduced icon size, margin */}
                        by {book.author}
                    </p>
                    {book.genre && (
                        <p className="text-sm text-gray-600 mb-1 flex items-center"> {/* Reduced font size, mb-1.5 to mb-1 */}
                            <Tag size={14} className="mr-1.5 text-green-600" /> {/* Reduced icon size, margin */}
                            Genre: {book.genre}
                        </p>
                    )}
                    {book.yearPublished && (
                        <p className="text-sm text-gray-600 mb-2 flex items-center"> {/* Reduced font size, mb-2 remains */}
                            <Calendar size={14} className="mr-1.5 text-green-600" /> {/* Reduced icon size, margin */}
                            Published: {book.yearPublished}
                        </p>
                    )}
                </div>

                <span
                    className={`inline-block mt-2 px-2.5 py-0.5 rounded-full text-xs font-medium ${ // Reduced mt-3 to mt-2, px/py, text-sm to text-xs
                        book.status === 'Available'
                            ? 'bg-green-200 text-green-800'
                            : book.status === 'Borrowed'
                                ? 'bg-red-200 text-red-800'
                                : 'bg-yellow-200 text-yellow-800'
                    }`}
                >
                    {book.status}
                </span>
            </div>

            {/* Action Row */}
            <div className="mt-3 pt-3 border-t border-gray-100 flex items-center justify-between"> {/* Reduced mt-4 to mt-3, pt-4 to pt-3 */}
                <div className="flex space-x-2"> {/* Reduced space-x-3 to space-x-2 */}
                    <button
                        onClick={handleEdit}
                        className="p-1.5 rounded-full hover:bg-blue-100 text-blue-600 transition-colors duration-200" // Reduced p-2 to p-1.5
                        title="Edit Book"
                    >
                        <Edit size={18} /> {/* Reduced icon size */}
                    </button>
                    <button
                        onClick={handleDelete}
                        className="p-1.5 rounded-full hover:bg-red-100 text-red-600 transition-colors duration-200" // Reduced p-2 to p-1.5
                        title="Delete Book"
                    >
                        <Trash2 size={18} /> {/* Reduced icon size */}
                    </button>
                </div>
                <button
                    onClick={handleViewBook}
                    className="px-3 py-1.5 bg-green-600 text-white rounded-md hover:bg-green-700 transition-colors duration-200 text-sm font-semibold flex items-center" // Adjusted px/py
                >
                    <BookOpen size={14} className="mr-1.5" /> View Book {/* Reduced icon size, margin */}
                </button>
            </div>
        </div>
    );
}