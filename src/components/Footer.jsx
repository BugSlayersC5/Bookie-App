import Logo from "../assets/bookielogo.png";
import { Linkedin, Instagram, Facebook ,Twitter } from "lucide-react";


export default function Footer() {
    return (
        <footer className="bg-[#234046] py-12 px-7 text-white">
            <div className="mb-3">
                <img src={Logo} alt="" />
            </div>
            <div>
                <p className="font-medium">Library collection with ease. <br /> Search,add,edit and organize your books. <br />Great Book,Smart System </p>
            </div>

            <div className="flex flex-row space-x-2 mt-5">
              <Linkedin className="hover:text-[#FDD36B]"/>
              <Instagram className="hover:text-[#FDD36B]"/>
              <Facebook className="hover:text-[#FDD36B]"/>
              <Twitter className="hover:text-[#FDD36B]"/>
            </div>

        </footer>



    );
}