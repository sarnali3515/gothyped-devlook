"use client";

import { useState, useEffect } from "react";
import { Button, Link } from "@heroui/react";
import NextLink from "next/link";
import clsx from "clsx";
import { siteConfig } from "@/config/site";



export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY && currentScrollY > 80) {
        // scroll down - hide
        setShowNavbar(false);
      } else {
        // scroll up - show
        setShowNavbar(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <>
      <nav
        className={clsx(
          "fixed top-0 left-0 w-full z-50 transition-transform duration-300",
          showNavbar ? "translate-y-0" : "-translate-y-full"
        )}
      >
        <header className="mx-auto flex h-16 lg:h-20  max-w-7xl lg:max-w-[1300px] xl:max-w-[1320px] 2xl:max-w-[1650px] items-center justify-between px-6 lg:px-0">

          {/* LEFT: LOGO */}
          <NextLink href="/" className="flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg"
              className="h-16 w-auto max-w-[120px] lg:max-w-[160px]" viewBox="0 0 208 84" fill="none" >
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
          </NextLink>

          {/* CENTER MENU (DESKTOP) */}
          <ul className="hidden lg:flex gap-8 bg-white px-4 2xl:px-6 py-2 2xl:py-4 rounded-2xl">
            {siteConfig.navItems.map((item, index) => (
              <li key={index}>
                <NextLink
                  href={item.href}
                  className="text-black font-bold hover:opacity-70"
                >
                  {item.label}
                </NextLink>
              </li>
            ))}
          </ul>

          {/* RIGHT SIDE */}
          <div className="flex items-center gap-3">

            {/* DESKTOP GET RESULTS BUTTON */}
            <div className="hidden sm:flex">
              <Button className="h-11 2xl:h-12 bg-[#fcb8fa] text-black text-lg rounded-xl  flex items-center pr-1.5 gap-3 py-2  font-semibold cursor-pointer transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] hover:skew-x-[8deg] hover:skew-y-[-4deg] hover:scale-x-110 hover:scale-y-105 hover:rounded-lg">
                Get Results
                <span className="w-9 h-9 flex items-center justify-center rounded-lg bg-white">🔥</span>
              </Button>
            </div>

            {/* MOBILE ICONS */}
            <div className="flex sm:hidden items-center gap-2">


              {/* HAMBURGER */}
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className={clsx(
                  "fixed top-4 right-4 z-[60] p-2 rounded-md flex flex-col justify-center items-center w-10 h-10 transition-colors duration-300",
                  isMenuOpen ? "bg-white" : "bg-pink-300"
                )}
              >
                <span
                  className={clsx(
                    "absolute h-[2px] w-6 bg-black transition-all duration-300",
                    isMenuOpen ? "rotate-45" : "-translate-y-1"
                  )}
                />
                <span
                  className={clsx(
                    "absolute h-[2px] w-6 bg-black transition-all duration-300",
                    isMenuOpen ? "-rotate-45" : "translate-y-1"
                  )}
                />
              </button>
            </div>
          </div>
        </header>
      </nav>

      {/*  FULL SCREEN MOBILE MENU  */}
      <div
        className={clsx(
          "fixed inset-0 z-40 bg-pink-300 flex flex-col border-[12px] border-[#faf4ec] rounded-3xl",
          "transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] transform-gpu",
          isMenuOpen
            ? "opacity-100 translate-y-0 rotate-0 scale-100"
            : "opacity-0 -translate-y-[140%] rotate-[8deg] scale-90 pointer-events-none"
        )}
      >

        {/* TOP BAR */}
        <div className="flex items-center justify-between px-3 h-16 ">




        </div>

        {/* MENU ITEMS */}
        <ul className="flex flex-col items-center justify-center flex-1 gap-6 text-black text-2xl font-medium">
          {siteConfig.navItems.map((item, index) => (
            <li key={index}>
              <NextLink
                href={item.href}
                onClick={() => setIsMenuOpen(false)}
                className="bg-white p-2 rounded-xl"
              >
                {item.label}
              </NextLink>
            </li>
          ))}
        </ul>

        {/* GET results BUTTON */}
        <div className="flex items-center justify-center p-6">
          <Button className=" bg-black text-white rounded-xl pr-1.5">
            Get Results
            <span className="w-8 h-8 flex items-center justify-center rounded-lg bg-white">🔥</span>
          </Button>
        </div>
      </div>

    </>
  );
};