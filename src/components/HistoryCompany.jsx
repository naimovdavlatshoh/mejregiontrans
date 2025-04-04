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
        description:
            "Автопарк более 250 едениц техники» на Автопарк более 120 единиц большегрузной техники",
    },
    {
        icon: "🏗",
        title: "Более 50 новых строительных кранов.",
        description: "Оборудование для высотных работ",
    },
    {
        icon: "🏢",
        title: "100+ завершенных строительных объекта» на «развитие автокомплекса (с автомастерскими боксами, мойкой, офисными помещениями)",
        description: "",
    },
    {
        icon: "🚚",
        title: "200+ транспортных единиц.",
        description: "Грузовые и пассажирские перевозки",
    },
    {
        icon: "🏭",
        title: "30 современных заводов и 50 строительных кранов",
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

            <Swiper
                effect={"coverflow"}
                grabCursor={true}
                spaceBetween={50}
                loop={true}
                autoplay={{
                    delay: 2000,
                    disableOnInteraction: false,
                }}
                coverflowEffect={{
                    rotate: 10,
                    stretch: 0,
                    depth: 100,
                    modifier: 3,
                    slideShadows: true,
                }}
                pagination={{ clickable: false }}
                modules={[EffectCoverflow, Autoplay]}
                className="mySwiper"
                breakpoints={{
                    320: { slidesPerView: 1 },
                    768: { slidesPerView: 2 },
                    1024: { slidesPerView: 3 },
                }}
            >
                {data.map((item, index) => (
                    <SwiperSlide key={index}>
                        <div className="w-full h-[300px] bg-pink text-white p-6 flex flex-col justify-center items-center text-center rounded-xl shadow-lg">
                            <div className="text-[70px]">{item.icon}</div>
                            <h3 className="mt-4 text-2xl font-semibold">
                                {item.title}
                            </h3>
                            <p className="mt-2 text-white text-xl font-light">
                                {item.description}
                            </p>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </section>
    );
};

export default HistoryCompany;
