import { FaFacebook } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaTiktok } from "react-icons/fa";


function Footer() {
    const copyrightYear = new Date().getFullYear();

    return (
        <div className="bg-white px-5 lg:px-20 pt-4 pb-10 mt-5">
            <div className="flex flex-wrap justify-between text-2xl lg:text-3xl">
                <div className=" text-pink-600">
                    TravelCeylon
                </div>
                <div className="flex flex-wrap gap-4">
                    <a href="#"><FaFacebook className="text-blue-600" /></a>
                    <a href="#"><FaYoutube className="text-red-600" /></a>
                    <a href="#"><FaXTwitter /></a>
                    <a href="#"><FaTiktok /></a>
                </div>
            </div>
            <div className="text-center mt-2">
                <h1>Copywrite© - {copyrightYear} - Design by ABC</h1>
            </div>
        </div>
    )
}

export default Footer