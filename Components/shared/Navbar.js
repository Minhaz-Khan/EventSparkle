"use client"
import Link from "next/link";
import { useState } from "react";
import { GoThreeBars } from "react-icons/go";
import { GrFormClose } from "react-icons/gr";


const Navbar = () => {

    const [isOpen, setIsOpen] = useState(false); 
    console.log(isOpen)
    return (

      <header className="py-5 bg-white">
      <div className="container">
        <nav className="flex justify-between items-center">
          <Link href="/">
          <h1 className="text-2xl">EventSparkle</h1>
          </Link>
          <ul
            className={`${
              isOpen
                ? "fixed top-20 left-0 right-[50%] h-full flex flex-col justify-center items-center bg-white"
                : "hidden md:relative md:block "}`}
          >
            <li className="inline-block mx-3">
              <Link href={"/"}>Home</Link>
            </li>
            <li className="inline-block mx-3">
              <Link href={"about"}>About</Link>
            </li>
            <li className="inline-block mx-3">
              <Link href={"services"}>Services</Link>
            </li>
            <li className="inline-block mx-3">
              <Link href={"portfolio"}>Portfolio</Link>
            </li>
            <li className="inline-block mx-3">
              <Link href={"gallery"}>Gallery</Link>
            </li>
            <li className="inline-block mx-3">
              <Link href={"contact-us"}>Contact Us</Link>
            </li>
            <span
              className={`${isOpen ? "absolute top-0 right-6" : "md:hidden"}`}
            >
              <GrFormClose size={30} onClick={() => setIsOpen(false)} />
            </span>
          </ul>

          <span className="block md:hidden">
            <GoThreeBars
              size={25}
              className="cursor-pointer"
              onClick={() => setIsOpen(true)}
            />
          </span>
        </nav>
      </div>
    </header>
    );
};

export default Navbar;