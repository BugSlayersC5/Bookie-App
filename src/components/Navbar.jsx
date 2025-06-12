import { Link } from "react-router";
import Logo from "../assets/bookielogo.png";
import { Menu, X } from 'lucide-react'; // For the hamburger icon
import { useState } from "react";

export default function Navbar(){

    const [isOpen, setIsOpen] = useState(false);

    return(
        // <nav className=" bg-[#234046] py-4 px-6 shadow-sm flex  flex-row">
        //     <div className="flex   mx-auto ml-19   ">
        //     <img src={Logo} alt="" className=""/>
        //     </div>
        //     <div className="flex space-x-8 items-center ">
        //         <Link to="/" className=" hover:text-[#FDD36B] font-medium text-white"> Home</Link>
        //         <Link to="/books-page" className=" hover:text-[#FDD36B] font-medium text-white">Books </Link>
        //         <Link to="/create-book" className=" hover:text-[#FDD36B] font-medium text-white">Add Book</Link>    
            
        //     </div>  
            
                
       
    





    <nav className="bg-[#234046] px-6 py-4 shadow-sm">
      <div className="flex items-center justify-between max-w-7xl mx-auto">
        <div className="flex-shrink-0">
          <img src={Logo} alt="Logo" className="h-8" />
        </div>
        <div className="sm:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-white focus:outline-none"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        
        <div className="hidden sm:flex space-x-8 items-center">
          <Link to="/" className="text-white font-medium hover:text-[#FDD36B]">
            Home
          </Link>
          <Link to="/books-page" className="text-white font-medium hover:text-[#FDD36B]">
            Books
          </Link>
          <Link to="/create-book" className="text-white font-medium hover:text-[#FDD36B]">
            Add Book
          </Link>
        </div>
      </div>

      
      {isOpen && (
        <div className="sm:hidden mt-4 space-y-2 px-0">
          <Link to="/" className="block text-white font-medium hover:text-[#FDD36B]">
            Home
          </Link>
          <Link to="/books-page" className="block text-white font-medium hover:text-[#FDD36B]">
            Books
          </Link>
          <Link to="/create-book" className="block text-white font-medium hover:text-[#FDD36B]">
            Add Book
          </Link>
        </div>
      )}
    </nav>     
    );
}