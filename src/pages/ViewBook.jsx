import Navbar from "../components/Navbar";
import Footer from "../components/Footer";


export default function ViewBook() {
    const book = {
        title: 'Things Fall Apart',
        author: 'Chinua Achebe',
        status: 'Available',
        image: 'https://cdn.dribbble.com/userupload/41985817/file/original-cdb492d01db9bade4b588262d7653afc.png?resize=768x576&vertical=center',
        description:
            'A classic novel that explores pre-colonial life in Nigeria and the impact of European colonization on African culture.',
    };

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
                            <span
                                className={`inline-block px-4 py-1 rounded-full text-sm font-semibold border-2 ${book.status === 'Available'
                                    ? 'bg-green-100 border-green-400 text-green-800'
                                    : book.status === 'Borrowed'
                                        ? 'bg-red-100 border-red-400 text-red-800'
                                        : 'bg-yellow-100 border-yellow-400 text-yellow-800'
                                    }`}
                            >
                                {book.status}
                            </span>
                        </div>
                        <p className="text-gray-600 leading-relaxed">{book.description}</p>
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