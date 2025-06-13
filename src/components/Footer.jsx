import Logo from "../assets/bookielogo.png";
import { Linkedin, Instagram, Facebook, Twitter, ChevronLeft } from "lucide-react";
import { ChevronRight } from 'lucide-react';
import { MapPin , Mail, Phone } from 'lucide-react';
import { Link } from "react-router";



<ChevronRight />



export default function Footer() {
    return (
        <footer className="bg-[#234046] py-8 px-12 text-white md:px-30">
            <div className=" md:flex justify-between">
                <div className="">
            
                    < img src={Logo} alt=""  />
                    <p className="not-italic mt-3">Library collection with ease. <br /> Search,add,edit <br />and organize your books. <br />Great Books,Smart System </p>
                    <div className="flex flex-row space-x-2 mt-5">
                        <Linkedin className="hover:text-" />
                        <Instagram className="hover:text-[#FDD36B]" />
                        <Facebook className="hover:text-[#FDD36B]" />
                        <Twitter className="hover:text-[#FDD36B]" />
                    </div>
                </div>

                <div className=" grid grid-cols-1 md:grid-cols-3 gap-7 mb-7" >
                    <div className=" mt-5 md:mt-0 md:text-left">
                        <h3 className="text-lg font-medium mb-4 text-gray-400">Quick Links</h3>
                        <ul className="space-y-3">
                            <div className="flex items-center space-x-1 text-sm text-white hover:text-[#FDD36B]">
                                <ChevronRight className="w-4 h-4" />
                                 <span><Link to="/">Home</Link></span>
                            </div>
                            <div className="flex items-center space-x-1 text-sm text-white hover:text-[#FDD36B]">
                                <ChevronRight className="w-4 h-4" />
                                <span><Link to="/create-book">Add Book</Link></span>
                            </div>
                            <div className="flex items-center space-x-1 text-sm text-white hover:text-[#FDD36B]">
                                <ChevronRight className="w-4 h-4" />
                                <span><Link href="">Our Team</Link></span>
                            </div>
                            <div className="flex items-center space-x-1 text-sm text-white hover:text-[#FDD36B]">
                                <ChevronRight className="w-4 h-4" />
                                <span><Link to="/books-page">Books</Link></span>
                            </div>

                        </ul>
                    </div>
                    <div>
                        <h3 className="text-lg font-medium mb-4 text-gray-400">Site Links</h3>
                        <ul className="space-y-3">
                            <div className="flex items-center space-x-1 text-sm text-white hover:text-[#FDD36B]">
                                <ChevronRight className="w-4 h-4" />
                                <span><Link to="">Privacy Policy</Link></span>
                            </div>
                            <div className="flex items-center space-x-1 text-sm text-white hover:text-[#FDD36B]">
                                <ChevronRight className="w-4 h-4" />
                                <span><Link to="">Disclaimer</Link></span>
                            </div>
                            <div className="flex items-center space-x-1 text-sm text-white hover:text-[#FDD36B]">
                                <ChevronRight className="w-4 h-4" />
                                <span><Link to="">Terms & condition</Link></span>
                            </div>
                            <div className="flex items-center space-x-1 text-sm text-white hover:text-[#FDD36B]">
                                <ChevronRight className="w-4 h-4" />
                                <span><Link to="">Cookies Used</Link></span>
                            </div>

                        </ul>
                    </div>
                    <div className=" not-italic space-x-2">
                        <h3 className="text-lg font-medium mb-4 text-gray-400">Stay Tuned With Us</h3>
                        <div className="flex items-center space-x-2 text-sm text-white hover:text-[#FDD36B] mb-3">
                            <MapPin className="w-6 h-6 " />
                            <p>Greater Accra, Afriyie Street </p>
                        </div>
                        <div className="flex items-center space-x-2 text-sm text-white hover:text-[#FDD36B] mb-3">
                            <Mail className="w-5 h-5 " />
                        <p>Bookieguys@gmail.com </p>
                        </div>
                            <div className="flex items-center space-x-2 text-sm text-white hover:text-[#FDD36B] ">
                            <Phone className="w-5 h-5" />
                            <p> +2332446699008</p>
                            </div>
                            
                    </div>



                </div>
            </div>
            <div className="text-center text-sm " >
                <hr className="w-[100%] mt-7" />
                <h1 className="mt-15 uppercase text-gray-400">All right reserved <span className="text-[#FDD36B]">Bookie</span></h1>
            </div>


            

            
           
        

        </footer>



    );
}