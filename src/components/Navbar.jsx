"use client";

import { useState, useEffect } from "react";
import { Menu, X, ArrowUp } from "lucide-react";
import LogoWhite from "../assets/logowhite.jpg";
import Logo from "../assets/logo.jpg";
import Logo1 from "../assets/logo1.jpg";
import Image from "next/image";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const [showButton, setShowButton] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
            setShowButton(window.scrollY > 300); // 300px pastga tushganda tugma chiqadi
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    return (
        <>
            <header
                className={`fixed w-full z-50 transition-all duration-300 font-stem text-[16px] font-light ${
                    isScrolled ? "bg-white shadow-md" : "bg-[#01010191]"
                }`}
            >
                <div className="container mx-auto flex items-center justify-between p-4">
                    <a href="#home" className="hidden lg:block">
                        <Image
                            src={!isScrolled ? LogoWhite : Logo}
                            className="h-12 w-[400px]"
                            alt="logo"
                        />
                    </a>
                    <a href="#home" className="block lg:hidden">
                        <Image
                            src={Logo1}
                            className="h-12 w-[50px]"
                            alt="logo"
                        />
                    </a>

                    <nav
                        className={`hidden text-lg lg:flex gap-3 transition-colors ${
                            isScrolled ? "text-gray-800" : "text-gray-200"
                        }`}
                    >
                        <a href="#about" className="hover:text-[#B9FE7E]">
                            О компании
                        </a>
                        <a href="#geography" className="hover:text-[#B9FE7E]">
                            География
                        </a>
                        <a href="#advantages" className="hover:text-[#B9FE7E]">
                            Преимущества
                        </a>
                        <a href="#clients" className="hover:text-[#B9FE7E]">
                            Наши клиенты
                        </a>
                        <a href="#drivers" className="hover:text-[#B9FE7E]">
                            Водителям
                        </a>
                        <a
                            href="#transporters"
                            className="hover:text-[#B9FE7E]"
                        >
                            Перевозчикам
                        </a>

                        <a href="#contacts" className="hover:text-[#B9FE7E]">
                            Контакты
                        </a>
                    </nav>

                    <button
                        className={`lg:hidden transition-colors ${
                            isScrolled ? "text-gray-800" : "text-gray-200"
                        }`}
                        onClick={() => setIsOpen(!isOpen)}
                    >
                        {isOpen ? <X size={28} /> : <Menu size={28} />}
                    </button>
                </div>

                {/* Mobile Menu */}
                {isOpen && (
                    <div className="font-stem fixed inset-0 bg-black flex flex-col items-center justify-center gap-6 text-3xl text-gray-200">
                        <button
                            className="absolute top-4 right-4 text-gray-200"
                            onClick={() => setIsOpen(false)}
                        >
                            <X size={32} />
                        </button>
                        <a
                            href="#about"
                            className="hover:text-green-400"
                            onClick={() => setIsOpen(false)}
                        >
                            О компании
                        </a>
                        <a
                            href="#geography"
                            className="hover:text-green-400"
                            onClick={() => setIsOpen(false)}
                        >
                            География
                        </a>
                        <a
                            href="#advantages"
                            className="hover:text-green-400"
                            onClick={() => setIsOpen(false)}
                        >
                            Преимущества
                        </a>
                        <a
                            href="#clients"
                            className="hover:text-green-400"
                            onClick={() => setIsOpen(false)}
                        >
                            Наши клиенты
                        </a>
                        <a
                            href="#drivers"
                            className="hover:text-green-400"
                            onClick={() => setIsOpen(false)}
                        >
                            Водителям
                        </a>
                        <a
                            href="#transporters"
                            className="hover:text-green-400"
                            onClick={() => setIsOpen(false)}
                        >
                            Перевозчикам
                        </a>
                        <a
                            href="#contacts"
                            className="hover:text-green-400"
                            onClick={() => setIsOpen(false)}
                        >
                            Контакты
                        </a>
                    </div>
                )}
            </header>

            {/* Yuqoriga chiqish tugmasi */}
            {showButton && (
                <button
                    onClick={scrollToTop}
                    className="fixed bottom-6 right-6 bg-[#B9FE7E] text-black p-3 rounded-full shadow-lg hover:bg-[#A2E96B] transition-all"
                >
                    <ArrowUp size={24} />
                </button>
            )}
        </>
    );
}
