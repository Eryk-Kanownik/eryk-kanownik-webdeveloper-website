"use client";
import React from "react";
import Link from "next/link";

const Navbar = () => {
  return (
    <header className=" fixed top-0 left-0 right-0 z-20">
      <nav className="container mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <div className="text-xl font-bold text-gray-800">Eryk Kanownik</div>
          <div className="hidden md:flex space-x-4">
            <Link href="#about" className="text-gray-600 hover:text-gray-800">
              O mnie
            </Link>
            <Link href="#skills" className="text-gray-600 hover:text-gray-800">
              Umiejętności
            </Link>
            <Link
              href="#projects"
              className="text-gray-600 hover:text-gray-800">
              Projekty
            </Link>
            <Link href="#contact" className="text-gray-600 hover:text-gray-800">
              Kontakt
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
