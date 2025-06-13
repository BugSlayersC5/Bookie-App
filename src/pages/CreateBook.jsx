import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { apiClient } from "../api/client";
import SubmitButton from "../components/SubmitButton";
import { useNavigate } from "react-router";

export default function CreateBook() {
  const navigate = useNavigate();

  const postBook = async (data) => {
    // Post data to api
    try {
      const response = await apiClient.post("/books", data, {
        headers: {
          "Content-Type": "application/json"
        }
      });
      console.log(response);
      navigate('/books-page');
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <>
      <Navbar />

      <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4 py-8">
        <div className="w-full max-w-lg bg-white p-6 rounded-xl shadow-md">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800">Add New Book</h2>
          <form action={postBook} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">Title</label>
              <input
                type="text"
                name="title"
                className="mt-1 w-full px-4 py-2 shadow-sm border-gray-300 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#234046]"

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
              <label className="block text-sm font-medium text-gray-700">Book Category</label>
              <input
                type="text"
                name="bookCategory"
                className="mt-1 w-full px-4 py-2 shadow-sm border-gray-300 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#234046]"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">Publication Company</label>
              <input
                type="text"
                name="publicationCompany"
                className="mt-1 w-full px-4 py-2 shadow-sm border-gray-300 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#234046]"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700"> Publication Year</label>
              <input
                type="number"
                name="publicationYear"
                className="mt-1 w-full px-4 py-2 shadow-sm border-gray-300 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#234046]"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">Cover Image URL</label>
              <input
                type="url"
                name="image"
                className="mt-1 w-full px-4 py-2 shadow-sm border-gray-300 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#234046]"
              />
            </div>

            <div>
              <SubmitButton
                title={"Add Book"}
                className="w-full bg-[#192D30] text-white py-2 px-4 rounded-md hover:bg-[#234046] transition cursor-pointer" />
            </div>
          </form>
        </div>

      </div>




      <Footer />
    </>
  );
}