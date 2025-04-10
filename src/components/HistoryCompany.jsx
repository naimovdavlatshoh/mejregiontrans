"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/autoplay";

import { EffectCoverflow, Pagination, Autoplay } from "swiper/modules";

const data = [
    {
        icon: "🚛",
        title: "в 2024 году докуплено 35 новых большегрузных автомобиля",
        description: "",
    },

    {
        icon: "🏢",
        title: "Развитие автокомплекса (с автоматическими боксами, мойкой, офисными помещениями) ",
        description: "",
    },
    {
        icon: "🚚",
        title: "200+ транспортных единиц.",
        description: "",
    },
];

const HistoryCompany = () => {
    return (
        <section className="py-12 bg-white text-center font-stem px-6">
            <h2
                data-aos="zoom-in"
                className="container mx-auto py-10 rounded-3xl text-5xl font-bold text-white mb-16 bg-pink flex items-center justify-center"
            >
                ИСТОРИЯ КОМПАНИИ
            </h2>

            <p className="container w-full lg:w-[50%] mx-auto mb-16 text-xl font-light">
                Компания продолжает динамично развиваться, увеличивать автопарк
                современной техники, внедрять передовые технологии логистических
                услуг
            </p>

            <div className="flex flex-wrap justify-center gap-5">
                {data.map((item, index) => (
                    <div
                        key={index}
                        className=" w-full lg:w-1/4 h-[300px] bg-pink text-white p-6 flex flex-col justify-center items-center text-center rounded-xl shadow-lg"
                    >
                        <div className="text-[70px]">{item.icon}</div>
                        <h3 className="mt-4 text-2xl font-semibold">
                            {item.title}
                        </h3>
                        <p className="mt-2 text-white text-xl font-light">
                            {item.description}
                        </p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default HistoryCompany;
