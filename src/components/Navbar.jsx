import Logo from "../assets/bookielogo.png";
export default function Navbar(){

    return(
        <nav className=" bg-gray-800 py-4 px-6 shadow-sm flex  flex-row">
            <div className="flex   mx-auto  ">
            <img src={Logo} alt="" />
            </div>
            <div className="flex space-x-4 items-center ">
                <a href="http://" className=" hover:text-yellow-500 font-medium text-white"> Home</a>
                <a href="http://" className=" hover:text-yellow-500 font-medium text-white">Books </a>
                <a href="http://" className=" hover:text-yellow-500 font-medium text-white"> About</a>
                <a href="http://" className=" hover:text-yellow-500 font-medium text-white">Add Book</a>

            </div>  
            
                
        </nav>
        
        
           
    );
}