import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";

function Footer() {
    return (
        <footer className="bg-[#222] p-12 text-white text-center">
            <ul className="flex justify-center list-none text-2xl mb-4">
                <li className="mx-4 hover:text-[#1877f2] transition-colors duration-300 cursor-pointer">
                    <FaFacebook />
                </li>
                <li className="mx-4 hover:text-[#e1306c] transition-colors duration-300 cursor-pointer">
                    <FaInstagram />
                </li>
                <li className="mx-4 hover:text-[#0a66c2] transition-colors duration-300 cursor-pointer">
                    <FaLinkedin />
                </li>
            </ul>
            <p className="mt-[2em]">
                <span className="font-bold text-[#ffbb33]">Costs</span> &copy; 2025
            </p>
        </footer>
    );
}

export default Footer;
