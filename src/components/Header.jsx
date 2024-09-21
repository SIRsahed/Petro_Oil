import React from "react";
import { IoMailUnread } from "react-icons/io5";
import { MdAddIcCall } from "react-icons/md";
import { FaFacebookF, FaTwitter, FaLinkedin, FaInstagramSquare} from "react-icons/fa";

const Header = () => {
    return (
        <>
            <header className="bg-[#282828] border-b-4 border-[#FFB800]">
            <div className="max-w-container mx-auto">
                <div className="lg:flex py-[16px] bg-[#282828]">
                    <div className="lg:w-1/4 w-full lg:pb-0 pb-3">
                        <div className="text-white flex justify-center lg:justify-start items-center gap-[9px] lg:text-[16px]">
                            <IoMailUnread />
                            <p className="font-pops">mail@yourcompany.com</p>
                        </div>
                    </div>
                    <div className="lg:w-1/4 w-full lg:pb-0 pb-3">
                        <div className="text-white flex justify-center lg:justify-start items-center gap-[9px] lg:text-[16px]">
                            <MdAddIcCall/>
                            <p className="font-pops">+896 120 5889 (Toll free)</p>
                        </div>
                    </div>
                    <div className="lg:w-1/2 w-full lg:pb-0 pb-3">
                        <div className="text-white flex justify-center lg:justify-end gap-x-4">
                            <FaFacebookF/>
                            <FaTwitter/>
                            <FaLinkedin/>
                            <FaInstagramSquare/>
                        </div>
                    </div>
                </div>
            </div>
            </header>
        </>
    );
};

export default Header;
