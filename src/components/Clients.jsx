"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import Client1 from "../assets/valio.png";
import Client2 from "../assets/kolomenskiy.png";
import Client3 from "../assets/agama.png";
import Client4 from "../assets/bonduelle.svg";
import Client6 from "../assets/agroeko.png";
import Client7 from "../assets/iek.png";
import Client8 from "../assets/sayuzvino.png";
import Client9 from "../assets/Inkerman.png";
import Client10 from "../assets/texnonikol.webp";
import Client11 from "../assets/martin.jpg";
import Client12 from "../assets/polaris1.png";
import Client13 from "../assets/rusargo.png";
import Image from "next/image";

const clients = [
    { img: Client1 },
    { img: Client2 },
    { img: Client3 },
    { img: Client4 },
    { img: Client6 },
    { img: Client7 },
    { img: Client8 },
    { img: Client9 },
    { img: Client10 },
    { img: Client11 },
    { img: Client12 },
    { img: Client13 },
];

const ClientsCarousel = () => {
    return (
        <section
            id="clients"
            className="py-12 bg-white text-center font-stem px-6"
        >
            <h2
                data-aos="zoom-in"
                className="container mx-auto py-10 rounded-3xl text-5xl font-bold text-black mb-20 bg-green flex items-center justify-center"
            >
                НАШИ КЛИЕНТЫ
            </h2>

            <div data-aos="zoom-in" className="relative max-w-5xl mx-auto">
                <Swiper
                    modules={[Navigation, Autoplay]}
                    spaceBetween={30}
                    slidesPerView={3}
                    loop={true}
                    autoplay={{ delay: 3000, disableOnInteraction: false }}
                    navigation={{
                        prevEl: ".prev-btn",
                        nextEl: ".next-btn",
                    }}
                    breakpoints={{
                        456: { slidesPerView: 2 },
                        640: { slidesPerView: 2 },
                        1024: { slidesPerView: 4 },
                    }}
                    className="px-5"
                >
                    {clients.map((client, index) => (
                        <SwiperSlide
                            key={index}
                            className="flex justify-center"
                        >
                            <Image
                                src={client.img}
                                alt={"no img"}
                                className="h-16 object-contain "
                            />
                        </SwiperSlide>
                    ))}
                </Swiper>

                {/* Navigation buttons */}
                <button className="prev-btn absolute left-[-50px] top-1/2 transform -translate-y-1/2 color-green text-4xl hidden lg:block">
                    &lt;
                </button>
                <button className="next-btn absolute right-[-50px] top-1/2 transform -translate-y-1/2 color-green text-4xl hidden lg:block">
                    &gt;
                </button>
            </div>
        </section>
    );
};

export default ClientsCarousel;
