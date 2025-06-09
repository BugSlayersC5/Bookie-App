import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function EditBook() {
    return (
        <>

            <Navbar />
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
      <div className="w-full max-w-lg bg-white p-6 rounded-xl shadow-md">
        <h2 className="text-2xl font-bold mb-6 text-center text-gray-700">Edit Book</h2>
        
        <form  className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-600">Title</label>
            <input
              type="text"
              name="title"
              className="mt-1 w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="Book Title"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-600">Author</label>
            <input
              type="text"
              name="author"
              className="mt-1 w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="Author Name"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-600">Genre</label>
            <input
              type="text"
              name="genre"
              className="mt-1 w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="Genre"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-600">Description</label>
            <textarea
              name="description"
              className="mt-1 w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="Write a short description..."
              rows="3"
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition"
          >
            Save Changes
          </button>
        </form>
      </div>
    </div>
            <Footer />

        </>
    );
}