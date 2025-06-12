import Logo from "../assets/bookielogo.png";
import { Linkedin, Instagram, Facebook, Twitter, ChevronLeft } from "lucide-react";
import { ChevronRight } from 'lucide-react';
import { MapPin , Mail, Phone } from 'lucide-react';
import { Link } from "react-router";



<ChevronRight />



export default function Footer() {
    return (
        <footer className="bg-[#234046] py-12 px-7 text-white ">

            <div className="flex justify-between">
                <div className="">
                    <img src={Logo} alt="" />
                    <p className="not-italic mt-3">Library collection with ease. <br /> Search,add,edit and organize your books. <br />Great Books,Smart System </p>
                    <div className="flex flex-row space-x-2 mt-5">
                        <Linkedin className="hover:text-[#FDD36B]" />
                        <Instagram className="hover:text-[#FDD36B]" />
                        <Facebook className="hover:text-[#FDD36B]" />
                        <Twitter className="hover:text-[#FDD36B]" />
                    </div>
                </div>

                <div className=" grid grid-cols-1 md:grid-cols-3 gap-7 mb-7" >
                    <div className="text-center md:text-left">
                        <h3 className="text-2xl font-medium mb-4 text-gray-400">Quick Links</h3>
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
                        <h3 className="text-2xl font-medium mb-4 text-gray-400">Site Links</h3>
                        <ul className="space-y-3">
                            <div className="flex items-center space-x-1 text-sm text-white hover:text-[#FDD36B]">
                                <ChevronRight className="w-4 h-4" />
                                <span>Privacy Policy</span>
                            </div>
                            <div className="flex items-center space-x-1 text-sm text-white hover:text-[#FDD36B]">
                                <ChevronRight className="w-4 h-4" />
                                <span>Disclaimer</span>
                            </div>
                            <div className="flex items-center space-x-1 text-sm text-white hover:text-[#FDD36B]">
                                <ChevronRight className="w-4 h-4" />
                                <span>Terms & condition</span>
                            </div>
                            <div className="flex items-center space-x-1 text-sm text-white hover:text-[#FDD36B]">
                                <ChevronRight className="w-4 h-4" />
                                <span>Cookies Used</span>
                            </div>

                        </ul>
                    </div>
                    <div className=" not-italic space-x-2">
                        <h3 className="text-2xl font-medium mb-4 text-gray-400">Stay Tuned With Us</h3>
                        <div className="flex items-center space-x-2 text-sm text-white hover:text-[#FDD36B]">
                            <MapPin className="w-6 h-6  " />
                            <p className="mb-3">Greater Accra <br /> Afriyie Street </p>
                        </div>
                        <div className="flex items-center space-x-2 text-sm text-white hover:text-[#FDD36B]">
                            <Mail className="w-5 h-5 " />
                        <p className="mb-3">Bookieguys@gmail.com </p>
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
                <h1 className="mt-15 uppercase text-gray-400">All right reserved <span className="text-[#FDD36B]">Bookie</span>. </h1>
            </div>
        </footer>



    );
}