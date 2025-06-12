import { User, Calendar, Edit, Trash2, Tag, Building2, Eye } from 'lucide-react'; // Import necessary icons
import { Link } from 'react-router';
import { apiClient } from '../api/client';

export function BookCard({ book }) {

    const deleteBook = () => {
        apiClient.delete(`/books/${book.id}`)
            .then((response) => {
                console.log(response);
                location.reload();

            })
            .catch((error) => {
                console.log(error);
            })
    }

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
                        <User size={14} className="mr-1.5  text-off-white" />
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
                        <Building2 size={14} className="mr-1.5  text-off-white" />
                        Published by: {book.publicationCompany}
                    </p>

                </div>
            </div>

            {/* Action Row */}
            <div className="mt-3 pt-3 border-t border-gray-100 flex items-center justify-between">
                <div className="flex space-x-2">
                    <Link
                        to={`/edit-book?id=${book.id}`}
                        className="p-1.5 rounded-full hover:bg-blue-100 text-curry transition-colors duration-200"
                        title="Edit Book"
                    >
                        <Edit size={18} />
                    </Link>
                    <button
                        onClick={deleteBook}
                        className="p-1.5 rounded-full hover:bg-red-100 text-red-500 transition-colors duration-200"
                        title="Delete Book"
                    >
                        <Trash2 size={18} />
                    </button>
                </div>
                <Link
                    to={`/view-book?id=${book.id}`}
                    className="px-3 py-1.5 bg-curry text-black rounded-md hover:bg-off-white transition-colors duration-200 text-sm font-semibold flex items-center"
                >
                    <Eye size={14} className="mr-1.5" /> View Book
                </Link>
            </div>
        </div>
    );
}