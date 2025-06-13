import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useSearchParams, useNavigate } from "react-router";
import { useEffect, useState } from "react";
import { apiClient } from "../api/client";
import SubmitButton from "../components/SubmitButton";

export default function EditBook() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const id = searchParams.get('id');

  const [book, setBook] = useState({});

  const getBook = () => {
    apiClient.get(`/books/${id}`)
      .then((response) => {
        console.log(response.data);
        setBook(response.data.data);
      })
      .catch((error) => {
        console.log(error);
      })
  }


  useEffect(getBook, []);

  const patchBook = async (data) => {
    // Post data to api
    try {
      const response = await apiClient.patch(`/books/${id}`, data, {
        headers: {
          "Content-Type": "application/json"
        }
      });
      console.log(response);
      navigate(-1);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <>
      <Navbar />
      <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
        <div className="w-full max-w-lg bg-white p-6 rounded-xl shadow-md">
          <h2 className="text-2xl font-bold mb-6 text-center text-gray-700">Edit Book</h2>

          <form action={patchBook} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">Title</label>
              <input
                type="text"
                name="title"
                className="mt-1 w-full px-4 py-2 shadow-sm border-gray-300 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#234046]"
                defaultValue={book.title}

              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">Author</label>
              <input
                type="text"
                name="author"
                className="mt-1 w-full px-4 py-2 shadow-sm border-gray-300 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#234046]"
                required
                defaultValue={book.author}
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">Book Category</label>
              <input
                type="text"
                name="bookCategory"
                className="mt-1 w-full px-4 py-2 shadow-sm border-gray-300 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#234046]"
                defaultValue={book.bookCategory}

              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">Publication Company</label>
              <input
                type="text"
                name="publicationCompany"
                className="mt-1 w-full px-4 py-2 shadow-sm border-gray-300 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#234046]"
                defaultValue={book.publicationCompany}

              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700"> Publication Year</label>
              <input
                type="number"
                name="publicationYear"
                className="mt-1 w-full px-4 py-2 shadow-sm border-gray-300 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#234046]"
                defaultValue={book.publicationYear}
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">Cover Image URL</label>
              <input
                type="url"
                name="image"
                className="mt-1 w-full px-4 py-2 shadow-sm border-gray-300 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#234046]"
                defaultValue={book.image}
              />
            </div>

            <SubmitButton
              title={"Update Book"}
              className="w-full bg-[#192D30] text-white py-2 px-4 rounded-md hover:bg-[#234046] transition cursor-pointer" />


          </form>
        </div>
      </div>
      <Footer />

    </>
  );
}