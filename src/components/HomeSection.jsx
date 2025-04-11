import React from "react";
import MainBus from "../assets/mainmain.jpg";
import Logowhite from "../assets/logowhite.jpg";
import Image from "next/image";

const HomeSection = () => {
    console.log(MainBus.src);
    return (
        <section
            id="home"
            className="relative w-full min-h-screen flex items-center justify-center font-stem bg-cover bg-center bg-no-repeat"
            style={{
                backgroundImage: `url(${MainBus.src}) `,
            }}
        >
            <div className="container mx-auto px-6 md:px-12 relative z-10 flex flex-col md:flex-row items-center">
                <div className="text-center w-full space-y-6">
                    <h1
                        data-aos="zoom-in"
                        className="text-4xl font-stem md:text-5xl font-bold text-white"
                        style={{ textShadow: "2px 2px 6px rgba(0, 0, 0, 0.8)" }}
                    >
                        Благодарим Вас за интерес, проявленный к деятельности
                        ООО «Межрегионтранс» и предлагаем Вашему вниманию
                        краткую информацию о компании.
                    </h1>

                    <div
                        className="flex items-center w-full justify-center"
                        data-aos="zoom-in"
                    >
                        <Image
                            src={Logowhite}
                            alt="PI Logo"
                            className="h-10 w-[350px]"
                        />
                    </div>
                    {/* <a
                        data-aos="zoom-in"
                        href="#"
                        className="inline-block text-lg bg-[#B9FE7E] font-medium text-black px-6 py-3 rounded-md shadow-md hover:bg-[#9efa4e] transition"
                    >
                        Узнать больше
                    </a> */}
                </div>
            </div>
        </section>
    );
};

export default HomeSection;
