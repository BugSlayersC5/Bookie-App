export default function BookCard({book}) {
    return(
    <div className="bg-white rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 p-6 border border-green-100">
        <img src={book.image} className="w-full h-60 object-cover rounded-md mb-4" />
        <h2 className="text-xl font-bold text-green-900">{book.title}</h2>
        <p className="text-gray-700 mb-1">by {book.author}</p>
        <span
            className={`inline-block mt-2 px-3 py-1 rounded-full text-sm ${book.status === 'Available'
                ? 'bg-green-200 text-green-800'
                : book.status === 'Borrowed'
                    ? 'bg-red-200 text-red-800'
                    : 'bg-yellow-200 text-yellow-800'
                }`}
        >
            {book.status}
        </span>
    </div>
    )
}