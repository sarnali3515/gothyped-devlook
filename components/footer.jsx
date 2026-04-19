"use client"

import { useEffect, useState } from "react";
import { FaLinkedinIn, FaInstagram, FaTiktok, FaYoutube } from "react-icons/fa";
import { CiMail } from "react-icons/ci";

export default function Footer() {
    const [rotation, setRotation] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            setRotation(window.scrollY * 0.05); // speed
        };

        window.addEventListener("scroll", handleScroll);

        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (

        <footer className="bg-[#faf4ec] border-t">

            {/* TOP */}
            <div className="hidden sm:block max-w-7xl mx-auto -mb-24 px-6 pt-16 lg:pt-60 text-center relative z-20 ">
                <h2 className="text-5xl md:text-6xl lg:text-7xl xl:text-[100px] 2xl:text-[120px] font-bold mb-8 tracking-tight">
                    Let’s Get Hyped!
                </h2>

                <div className="flex justify-center gap-4">
                    <button className="flex items-center gap-3 border border-black rounded-xl px-2 py-1 text-base font-semibold cursor-pointer transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] hover:skew-x-[8deg] hover:skew-y-[-4deg] hover:scale-x-110 hover:scale-y-105 hover:rounded-lg">
                        Mail Ons Direct
                        <span className="w-8 h-8 flex items-center justify-center rounded-lg bg-black text-white">
                            <CiMail className="text-white w-5 h-5" />
                        </span>
                    </button>
                    <button className="h-12 bg-[#fa5424] text-white text-lg rounded-xl  flex items-center px-1.5 gap-3 py-2  font-semibold cursor-pointer transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] hover:skew-x-[8deg] hover:skew-y-[-4deg] hover:scale-x-110 hover:scale-y-105 hover:rounded-lg">
                        Get Results
                        <span className="w-9 h-9 flex items-center justify-center rounded-lg bg-white text-[#fa5424]">
                            <svg xmlns="http://www.w3.org/2000/svg" width="55%" viewBox="0 0 20 24" fill="none">
                                <path d="M17.4906 11.0361C17.1898 10.6437 16.8237 10.3037 16.4837 9.96371C15.6075 9.17906 14.6136 8.61673 13.7766 7.79284C11.8281 5.88352 11.3965 2.73184 12.6389 0.3125C11.3965 0.613283 10.3111 1.29331 9.38256 2.03873C5.99549 4.75886 4.66158 9.55831 6.25704 13.6777C6.30935 13.8085 6.36166 13.9393 6.36166 14.1093C6.36166 14.397 6.16549 14.6585 5.90394 14.7632C5.60316 14.8939 5.2893 14.8155 5.04083 14.6062C4.96661 14.5441 4.90453 14.4687 4.85774 14.3839C3.37998 12.5138 3.14459 9.83294 4.13848 7.68822C1.95453 9.46676 0.764478 12.4746 0.934486 15.3124C1.01295 15.9663 1.09142 16.6202 1.31373 17.274C1.49682 18.0587 1.84991 18.8433 2.24224 19.5365C3.65461 21.7989 6.10011 23.4205 8.72869 23.7474C11.5273 24.1005 14.522 23.5905 16.6667 21.655C19.0599 19.4841 19.8969 16.0055 18.6676 13.0238L18.4976 12.6838C18.223 12.0823 17.4906 11.0361 17.4906 11.0361ZM13.3581 19.2749C12.992 19.5888 12.3904 19.9288 11.9196 20.0596C10.4549 20.5827 8.99024 19.8503 8.12712 18.9872C9.68335 18.621 10.6118 17.4702 10.8865 16.3063C11.1088 15.2601 10.6903 14.397 10.5203 13.39C10.3634 12.4223 10.3895 11.5984 10.7426 10.6961C10.9911 11.193 11.2526 11.6899 11.5665 12.0823C12.5735 13.39 14.1559 13.9654 14.4959 15.744C14.5482 15.9271 14.5743 16.1101 14.5743 16.3063C14.6136 17.3787 14.1428 18.5556 13.3581 19.2749Z" fill="currentColor">

                                </path>
                            </svg>

                        </span>
                    </button>
                </div>
            </div>

            {/* GRAY SECTION */}
            <div className="relative mx-3 lg:mx-5">

                {/* SHAPE */}
                {/* Desktop */}
                <div
                    className="hidden md:block absolute inset-0 bg-black/10"
                    style={{
                        clipPath: "polygon(0% 75%, 100% 5%, 100% 100%, 0% 100%)"
                    }}
                />
                {/* mobile */}
                <div
                    className="block md:hidden absolute inset-0 bg-black/10"
                    style={{
                        clipPath: "polygon(0% 20%, 100% 10%, 100% 100%, 0% 100%)"
                    }}
                />

                <img
                    src="/images/footer.png"
                    alt="sticker"
                    style={{ transform: `rotate(${rotation}deg)` }}
                    className="hidden lg:block absolute right-20 -top-8 w-44 z-20 pointer-events-none transition-transform duration-75"
                />

                {/* CONTENT */}
                <div className="relative z-10 w-full pl-2 lg:pr-12 pt-24 lg:pt-28 ">

                    <div className="flex flex-col md:flex-row justify-between items-center lg:items-end min-h-[300px] w-full">

                        {/* LEFT SVG */}
                        <div className="order-1 md:order-none flex justify-start md:items-end w-full md:w-auto">
                            <svg xmlns="http://www.w3.org/2000/svg"
                                className="h-20 lg:h-32 w-auto max-w-[320px]" viewBox="0 0 208 84" fill="none" >
                                <path d="M207.793 18.4091V68.8219C207.793 77.2049 200.998 84 192.615 84H7.46524C3.34207 84 0 80.6579 0 76.5348V37.5951C0 33.8732 2.69331 30.6933 6.36831 30.0829L186.384 0.251801C197.596 -1.60491 207.793 7.04266 207.793 18.4049" fill="#FAF4EC">
                                </path>
                                <path d="M188.876 80.0646H55.9061V25.8317L186.618 5.34814C195.454 3.96521 203.444 10.7945 203.444 19.7408V65.4969C203.444 73.5427 196.922 80.0646 188.876 80.0646Z" fill="black">
                                </path>
                                <path d="M71.2635 26.8177V47.2585L67.5415 47.5957V27.3683L59.9312 28.4866V76.7781L67.5415 76.7055V56.478L71.2635 56.2305V76.6714L79.3818 76.5945V25.6226L71.2635 26.8177Z" fill="white">
                                </path>
                                <path d="M94.7092 23.3646L92.5452 42.7512L92.4427 44.4116L92.2378 44.4329L92.1354 42.7939L90.0055 24.0561L81.2256 25.3494L87.9482 58.2622V76.5134L96.8391 76.4323V57.75L104.142 21.9731L94.7092 23.3646Z" fill="white">
                                </path>
                                <path d="M159.835 25.0207V13.7695L135.377 17.3719V76.0695L159.835 75.839V64.5921L147.179 65.0274V51.2238L159.101 50.4384V39.2854L147.179 40.3695V26.5701L159.835 25.0207Z" fill="white"></path><path d="M120.844 48.8506L116.226 49.2006V29.3018L120.844 28.7256V48.8506ZM105.943 21.7085V76.347L116.149 76.2488V58.5396L120.882 58.2878C127.071 57.9591 131.92 52.8457 131.92 46.6482V31.3805C131.92 24.2695 125.603 18.8146 118.565 19.8518L105.943 21.7128V21.7085Z" fill="white"></path><path d="M182.598 64.7713L176.494 64.9677V21.7768L182.598 21.0128V64.7713ZM162.993 13.3042V75.8091L185.769 75.5957C192.163 75.536 197.315 70.3372 197.315 63.9433V21.7469C197.315 14.636 190.998 9.18108 183.959 10.2183L162.989 13.3085L162.993 13.3042Z" fill="white"></path><path d="M21.5464 80.0646H34.7482V70.4738L27.1336 70.6957V59.8585L34.2873 59.4018V49.8835L27.1336 50.5494V39.7079L34.7482 38.739V29.1481L21.5464 31.214V80.0646Z" fill="black"></path><path d="M36.7714 28.828V38.4829L42.03 37.8128V80.0646H48.3812V37.0061L54.0239 36.289V26.1262L36.7714 28.828Z" fill="black"></path><path d="M14.2348 51.7488V41.2829L8.49394 42.0128V71.5152L14.2348 71.3488V62.6969L10.7092 62.8976V54.5146L19.5616 53.7634V80.0604H14.2391V77.3159L13.3128 78.225C12.1134 79.4031 10.5 80.0604 8.8226 80.0604H7.90491C5.48905 80.0604 3.53418 78.1012 3.53418 75.6896V39.0207C3.53418 36.1524 5.62563 33.7067 8.45978 33.2628L14.5165 32.3152C17.1671 31.9012 19.5659 33.95 19.5659 36.6305V51.2494L14.2433 51.7445L14.2348 51.7488Z" fill="black">
                                </path>
                            </svg>
                        </div>

                        {/* RIGHT SIDE */}
                        <div className="order-2 md:order-none ">
                            <div className="flex flex-col md:flex-row gap-10 lg:ml-auto">

                                {/* COLUMN 1 */}
                                <div className="space-y-8">
                                    <div className="block md:hidden w-full mt-3">
                                        {/* Mobile button only */}
                                        <button className="h-12 bg-[#fa5424] text-white text-base rounded-xl  flex items-center px-1.5 gap-3 py-2  font-semibold transition-all duration-300">
                                            Get Hyped! Neem contact op
                                            <span className="w-9 h-9 flex items-center justify-center rounded-lg bg-white text-[#fa5424]">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="50%" viewBox="0 0 20 24" fill="none">
                                                    <path d="M17.4906 11.0361C17.1898 10.6437 16.8237 10.3037 16.4837 9.96371C15.6075 9.17906 14.6136 8.61673 13.7766 7.79284C11.8281 5.88352 11.3965 2.73184 12.6389 0.3125C11.3965 0.613283 10.3111 1.29331 9.38256 2.03873C5.99549 4.75886 4.66158 9.55831 6.25704 13.6777C6.30935 13.8085 6.36166 13.9393 6.36166 14.1093C6.36166 14.397 6.16549 14.6585 5.90394 14.7632C5.60316 14.8939 5.2893 14.8155 5.04083 14.6062C4.96661 14.5441 4.90453 14.4687 4.85774 14.3839C3.37998 12.5138 3.14459 9.83294 4.13848 7.68822C1.95453 9.46676 0.764478 12.4746 0.934486 15.3124C1.01295 15.9663 1.09142 16.6202 1.31373 17.274C1.49682 18.0587 1.84991 18.8433 2.24224 19.5365C3.65461 21.7989 6.10011 23.4205 8.72869 23.7474C11.5273 24.1005 14.522 23.5905 16.6667 21.655C19.0599 19.4841 19.8969 16.0055 18.6676 13.0238L18.4976 12.6838C18.223 12.0823 17.4906 11.0361 17.4906 11.0361ZM13.3581 19.2749C12.992 19.5888 12.3904 19.9288 11.9196 20.0596C10.4549 20.5827 8.99024 19.8503 8.12712 18.9872C9.68335 18.621 10.6118 17.4702 10.8865 16.3063C11.1088 15.2601 10.6903 14.397 10.5203 13.39C10.3634 12.4223 10.3895 11.5984 10.7426 10.6961C10.9911 11.193 11.2526 11.6899 11.5665 12.0823C12.5735 13.39 14.1559 13.9654 14.4959 15.744C14.5482 15.9271 14.5743 16.1101 14.5743 16.3063C14.6136 17.3787 14.1428 18.5556 13.3581 19.2749Z" fill="currentColor">

                                                    </path>
                                                </svg>
                                            </span>
                                        </button>
                                    </div>
                                    {/* BUTTONS */}
                                    <div className="flex flex-wrap gap-2 justify-start font-semibold lg:font-bold">
                                        {["Expertises", "Work", "About", "Contact"].map((item, idx) => (
                                            <span
                                                key={idx}
                                                className="relative overflow-hidden bg-white px-1.5 lg:px-3 py-1.5 lg:py-2 rounded-xl cursor-pointer group"
                                                style={{
                                                    transitionDelay: `${idx * 50}ms`,
                                                }}
                                            >
                                                {/* DEFAULT TEXT */}
                                                <span className="relative z-10 block transition-all duration-400 ease-[cubic-bezier(0.34,1.56,0.64,1)] group-hover:-translate-y-full">
                                                    {item}
                                                </span>

                                                {/* HOVER LAYER */}
                                                <span
                                                    className="
          absolute left-0 bottom-0 w-full h-full
          translate-y-full
          group-hover:translate-y-0
          transition-all duration-400 ease-[cubic-bezier(0.34,1.56,0.64,1)]
          flex flex-col
        "
                                                >
                                                    <span className="h-1/6 w-full bg-orange-400"></span>
                                                    <span className="h-1/6 w-full bg-orange-600"></span>
                                                    <span className="h-3/5 w-full bg-black"></span>
                                                </span>

                                                {/* BLACK LAYER  */}
                                                <span
                                                    className="
          absolute left-0 bottom-0 w-full h-full
          translate-y-full
          group-hover:translate-y-0
          transition-all duration-500 ease-[cubic-bezier(0.34,1.56,0.64,1)]
          delay-75
          flex items-center justify-center bg-black text-white
        "
                                                >
                                                    {item}
                                                </span>
                                            </span>
                                        ))}
                                    </div>

                                    {/* SOCIAL ICONS */}
                                    <div className="flex gap-5 items-center justify-center md:justify-start">
                                        <p className="hidden md:block font-bold text-lg">Follow us</p>

                                        <div className="flex gap-3">
                                            <div className="bg-white rounded-full p-3 cursor-pointer transform transition duration-300 hover:scale-110">
                                                <FaLinkedinIn className="w-5 h-5" />
                                            </div>

                                            <div className="bg-white rounded-full p-3 cursor-pointer transform transition duration-300 hover:scale-110">
                                                <FaTiktok className="w-5 h-5" />
                                            </div>

                                            <div className="bg-white rounded-full p-3 cursor-pointer transform transition duration-300 hover:scale-110">
                                                <FaInstagram className="w-5 h-5" />
                                            </div>

                                            <div className="bg-white rounded-full p-3 cursor-pointer transform transition duration-300 hover:scale-110">
                                                <FaYoutube className="w-5 h-5" />
                                            </div>
                                        </div>
                                    </div>

                                </div>

                                {/* COLUMN 2 */}
                                <div className="text-sm space-y-1 lg:space-y-4 text-center md:text-left">

                                    <div>
                                        <p className="hidden md:block font-bold text-lg">Contact</p>
                                        <p className="text-sm lg:text-base">info@gethyped.nl</p>
                                        <p className="text-sm lg:text-base">+31 6 1533 7496</p>
                                    </div>

                                    <div>
                                        <p className="hidden md:block font-bold text-lg">Adres</p>
                                        <p className="text-sm lg:text-base">Beltrumstraat 6,</p>
                                        <p className="text-sm lg:text-base">7411 AL Deventer</p>
                                    </div>

                                </div>

                            </div>
                            {/* FOOTER BOTTOM */}
                            <div className="flex flex-col lg:flex-row items-center justify-center lg:justify-end my-3 text-xs lg:text-sm text-gray-600 gap-1 lg:gap-4 pr-1">
                                <p>© 2025 Get Hyped</p>
                                <p>Developed by Sarnali</p>
                                <p>Privacyvoorwaarden
                                </p>
                            </div>
                        </div>

                    </div>



                </div>
            </div>

        </footer>
    );
}