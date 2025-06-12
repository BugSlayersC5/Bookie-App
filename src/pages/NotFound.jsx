import { Link } from "react-router";
import Error from "../assets/erros.jpeg";

export default function NotFound() {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center p-6 text-center">
            <div className="max-w-md w-full"></div>
            
            <div className="flex justify-center mb-4">
                <img src={Error} alt="" className="" /> </div>
           
            <Link to="/" className="inline-flex items-center px-3 py-1 border border-b-transparent text-base font-medium rounded-md shadow-sm text-white bg-amber-300 hover:text-[#FDD36B] transition ">Return Home</Link>
        </div>
    );
}