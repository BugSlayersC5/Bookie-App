import { Link } from "react-router";
import Logo from "../assets/bookielogo.png";
export default function Navbar(){

    return(
        <nav className=" bg-[#234046] py-4 px-6 shadow-sm flex  flex-row">
            <div className="flex   mx-auto ml-19  ">
            <img src={Logo} alt="" />
            </div>
            <div className="flex space-x-8 items-center ">
                <Link to="/" className=" hover:text-[#FDD36B] font-medium text-white"> Home</Link>
                <Link to="/books-page" className=" hover:text-[#FDD36B] font-medium text-white">Books </Link>
                <Link to="/create-book" className=" hover:text-[#FDD36B] font-medium text-white">Add Book</Link>    

            </div>  
            
                
        </nav>
        
        
           
    );
}