import React from "react";
import MainBus from "../assets/geography1.jpg";
import Logowhite from "../assets/logowhite.jpg";
import Image from "next/image";

const Geography = () => {
    return (
        <section
            id="geography"
            className=" w-full  flex items-center justify-center font-stem "
        >
            <header
                id="transporters"
                data-aos="zoom-in"
                className="text-center py-6 px-6 w-full"
            >
                <h1 className="mx-auto py-10 rounded-3xl container text-3xl lg:text-5xl  font-bold text-white bg-pink">
                    ПЕРЕВОЗЧИКАМ
                </h1>
                <Image
                    src={MainBus}
                    alt="PI Logo"
                    className=" w-full object-contain mt-20"
                />
            </header>
        </section>
    );
};

export default Geography;
