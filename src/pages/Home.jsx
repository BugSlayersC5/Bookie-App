import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Book from "../assets/book.png";
import { BookCard } from "../components/BookCard";
import { apiClient } from "../api/client";
import { useState, useEffect } from "react";
import { Link } from "react-router";
import { ChevronDown } from "lucide-react";




const faqs = [
  {
    question: "How do I add a book?",
    answer: `To add a book, click on the "Add Book" button at the top right corner of our website. You'll need to provide some data, and fill in some basic information on the form.`,
  },
  {
    question: "What payment methods do you accept?",
    answer: (
      <>
        <p>
          We accept all major credit cards including Visa, MasterCard, American
          Express, and Discover. We also support payments through PayPal and
          bank transfers for certain plans.
        </p>
        <ul className="list-disc pl-5 mt-2">
          <li>Credit/Debit Cards</li>
          <li>PayPal</li>
          <li>Bank Transfers (for annual plans)</li>
        </ul>
      </>
    ),
  },
  {
    question: "Can I cancel my subscription anytime?",
    answer: `Yes, you can cancel your subscription at any time. If you cancel during your billing period, you'll continue to have access to our services until the end of that period. We don't charge any cancellation fees.`,
  },
  {
    question: "How do I edit a book?",
    answer: (
      <>
        <p className="mb-2">To reset your password:</p>
        <ol className="list-decimal pl-5 space-y-1">
          <li>Go to the login page and click "Forgot password"</li>
          <li>Enter the email address associated with your account</li>
          <li>Check your email for a password reset link</li>
          <li>
            Click the link and follow the instructions to create a new password
          </li>
        </ol>
      </>
    ),
  },
  {
    question: "Is there a mobile app available?",
    answer: `Yes! We have mobile apps available for both iOS and Android devices. You can download them from the App Store or Google Play Store. All your data will sync automatically between the web version and mobile apps.`,
  },
];

export default function Home() {
  const [books, setBooks] = useState([]);

  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const getBooks = () => {
    apiClient
      .get("/books")
      .then((response) => {
        console.log(response.data);
        setBooks(response.data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(getBooks, []);

  return (
    <>
      <Navbar />
      <section className="bg-[url('./assets/book.png')] bg-cover sm: w-full h-[70vh] md:h-[100vh] flex items-start justify-st text-center sm:text-left p-4 sm:p-6">
        <div className="py-16 sm:py-20 px- 2sm:px-6 max-w-4xl w-full md:ml-25 lg:mx-auto">
<p className="relative  text-curry mb-2 before:content-[''] before:absolute before:top-0 before:left-0 before:w-10 text-2xl italic before:h-[2px] before:bg-curry before:-translate-y-2 animate-bounce">
  Hello New Friend
</p>
          <h1 className="font-bold text-4xl leading-tight md:text-7xl text-white font-serif mb-2">
            GREAT BOOKS, <br className="md:hidden" />
            SMART SYSTEM,
          </h1>
          <h1 className="text-curry font-bold text-4xl md:text-7xl font-serif mt-2">
            SEAMLESS ACCESS,
          </h1>
          <h4 className="text-white mt-4 max-w-md mx-auto sm:mx-0 text-base sm:text-lg">
            Library collection with ease. <br className="sm:hidden" />
            Great Books,Smart System.
          </h4>

          <div className="flex flex-col sm:flex-row gap-4 mt-10 justify-center sm:justify-start">
            <Link to="/create-book">
              <button className="text-xs sm:text-sm rounded-md bg-curry py-3 px-6 text-black hover:opacity-90 transition-opacity cursor-pointer">
                ADD BOOK
              </button>
            </Link>
            <Link to="/books-page">
              <button className="text-xs sm:text-sm rounded-md cursor-pointer bg-[#029967] py-3 px-6 text-white hover:opacity-90 transition-opacity">
                VIEW BOOKS
              </button>
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-cyan-100 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col sm:flex-row gap-4 justify-center text-center mb-8 flex-wrap">
            <h3 className="font-serif text-lg sm:text-xl md:text-2xl text-gray-800 hover:text-cyan-700 cursor-pointer transition-colors px-2">
              ALL BOOKS
            </h3>
            <h3 className="font-serif text-lg sm:text-xl md:text-2xl text-gray-800 hover:text-cyan-700 cursor-pointer transition-colors px-2">
              FICTION
            </h3>
            <h3 className="font-serif text-lg sm:text-xl md:text-2xl text-gray-800 hover:text-cyan-700 cursor-pointer transition-colors px-2">
              SCIENCE
            </h3>
            <h3 className="font-serif text-lg sm:text-xl md:text-2xl text-gray-800 hover:text-cyan-700 cursor-pointer transition-colors px-2">
              TECHNOLOGY
            </h3>
          </div>

          <div className="bg-cyan-50 p-8 rounded-lg text-center mb-12">
            <h2 className="font-serif text-xl sm:text-2xl text-gray-700 mb-3">
              {/* OUR MENU */}
            </h2>
            <h1 className="font-bold text-3xl sm:text-4xl text-black font-serif mb-6 italic">
              AVAILABLE BOOKS
            </h1>
            <p className="text-gray-600 max-w-2xl mx-auto text-sm sm:text-base">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsa quo
              dignissimos expedita quae incidunt. Maxime, sed.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {books.map((book) => {
              return <BookCard key={book.id} book={book} />;
            })}
          </div>
        </div>
      </section>

      <section className="bg-light-green font-sans py-12 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h1 className="text-3xl sm:text-4xl font-bold text-off-white mb-4">
              Frequently Asked Questions
            </h1>
            <p className="text-base sm:text-lg text-off-white">
              Find answers to common questions about our products and services.
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-md overflow-hidden transition-all duration-300"
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full flex justify-between items-center p-4 sm:p-6 text-left"
                >
                  <h3 className="text-base sm:text-lg font-semibold text-gray-800">
                    {faq.question}
                  </h3>
                  <ChevronDown
                    className={`text-light-green transform transition-transform duration-300 ${
                      openIndex === index ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {openIndex === index && (
                  <div className="px-4 sm:px-6 pb-4 sm:pb-6">
                    <div className="text-sm sm:text-base text-gray-600">
                      {faq.answer}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-cyan-200 px-4 sm:px-8 md:px-12 py-16">
  <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
    {/* Title Card */}
    <div className="bg-gray-50 rounded-2xl p-6 flex items-center justify-center text-center text-black shadow-md">
      <h1 className="text-3xl sm:text-4xl font-bold leading-tight italic">
        Success Stories <br />
        From Satisfied <br />
        Clients
      </h1>
    </div>

    {/* Testimonials */}
    {[
      {
        name: 'Josephine Addo',
        email: 'josephine.addo@example.com',
        img: 'https://plus.unsplash.com/premium_photo-1669882305249-5af7f5ed5c10?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8YmxhY2slMjB3b21hbiUyMHBvcnRyYWl0fGVufDB8fDB8fHww',
        message:
          'The backend is rock solid! The API documentation made integration with our internal tools very easy, and input validation prevents data entry mistakes.',
      },
      {
        name: 'Kwame Agyeman',
        email: 'kwame.agyeman@example.com',
        img: 'https://images.unsplash.com/photo-1531384441138-2736e62e0919?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        message:
          'Absolutely love how seamless the integration process was. Great attention to detail, especially in handling errors and edge cases!',
      },
      {
        name: 'Ama Serwaa',
        email: 'ama.serwaa@example.com',
        img: 'https://images.unsplash.com/photo-1530785602389-07594beb8b73?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        message:
          'This project helped streamline our entire backend process. Kudos to the team for excellent performance and communication.',
      },
      {
        name: 'Daniel Boateng',
        email: 'daniel.boateng@example.com',
        img: 'https://images.unsplash.com/photo-1529111290557-82f6d5c6cf85?q=80&w=1386&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        message:
          'The documentation was crystal clear and the system works like a charm. Great experience throughout the project!',
      },
      {
        name: 'Linda Mensah',
        email: 'linda.mensah@example.com',
        img: 'https://images.unsplash.com/photo-1531727991582-cfd25ce79613?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        message:
          'From planning to deployment, the team exceeded expectations. Highly reliable and extremely helpful during testing.',
      },
    ].map((testimonial, idx) => (
      <div
        key={idx}
        className="bg-gray-50 rounded-2xl p-6 flex flex-col justify-between text-black shadow-md hover:bg-green-300 transition-colors duration-300"
      >
        <p
          className="text-4xl text-green-900 mb-2"
          style={{ fontFamily: '"Passion One", sans-serif' }}
        >
          &ldquo;
        </p>
        <p className="text-sm sm:text-base text-gray-700 font-light mb-6">
          {testimonial.message}
        </p>

        <div className="flex items-center gap-4 mt-auto pt-4 border-t border-gray-200">
          <img
            src={testimonial.img}
            alt={testimonial.name}
            className="w-12 h-12 rounded-full object-cover border-2 border-green-900"
          />
          <div className="flex flex-col text-sm text-gray-800">
            <span className="font-semibold">{testimonial.name}</span>
            <span className="text-xs text-gray-600">{testimonial.email}</span>
          </div>
        </div>
      </div>
    ))}
  </div>
</section>

      <Footer />
    </>
  );
}
