import Navbar from "../components/Navbar";
import Footer from "../components/Footer";


export default function CreateBook() {
    return (
        <>
            <Navbar />

     <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4 py-8">
      <div className="w-full max-w-lg bg-white p-6 rounded-xl shadow-md">
 <h2 className="text-2xl font-semibold mb-4 text-gray-800">Add New Book</h2>
      <form className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">Title</label>
          <input
            type="text"
            name="title"
            className="mt-1 w-full px-4 py-2 shadow-sm border-gray-300 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#234046]"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Author</label>
          <input
            type="text"
            name="author"
           className="mt-1 w-full px-4 py-2 shadow-sm border-gray-300 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#234046]"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">ISBN</label>
          <input
            type="text"
            name="isbn"
            className="mt-1 w-full px-4 py-2 shadow-sm border-gray-300 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#234046]"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Category</label>
          <input
            type="text"
            name="category"
            className="mt-1 w-full px-4 py-2 shadow-sm border-gray-300 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#234046]"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Published Date</label>
          <input
            type="date"
            name="publishedDate"
            className="mt-1 w-full px-4 py-2 shadow-sm border-gray-300 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#234046]"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Cover Image URL</label>
          <input
            type="url"
            name="coverImage"
            className="mt-1 w-full px-4 py-2 shadow-sm border-gray-300 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#234046]"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Description</label>
          <textarea
            name="description"
            rows={4}
            className="mt-1 w-full px-4 py-2 shadow-sm border-gray-300 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#234046]"
          />
        </div>

        <div>
          <button
            type="submit"
            className="w-full py-2 px-4 bg-[#192D30] text-white font-semibold rounded-lg shadow-md hover:bg-[#234046] transition"
          >
            Add Book
          </button>
        </div>
      </form>
      </div>
     
    </div>
  



            <Footer />
        </>
    );
}