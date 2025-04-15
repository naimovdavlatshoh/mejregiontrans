"use client";

import React from "react";
import {
    FaLink,
    FaCarCrash,
    FaFileAlt,
    FaTruck,
    FaRoad,
    FaWarehouse,
    FaRegQuestionCircle,
    FaClipboardList,
} from "react-icons/fa";

const data = [
    {
        icon: <FaLink size={40} />,
        title: "Ссылка на дорожную сеть",
        pdf: "https://dornet.ru/map",
    },
    {
        icon: <FaCarCrash size={40} />,
        title: "Инструкция «Что делать при ДТП»",
        pdf: "pdfs/dtp.pdf",
    },
    {
        icon: <FaFileAlt size={40} />,
        title: "Инструкция по заполнению распечаток тахографа",
        pdf: "pdfs/tachograph1_merged.pdf",
    },
    {
        icon: <FaTruck size={40} />,
        title: "Инструкция по эксплуатации «Платона»",
        pdf: "pdfs/platon1_merged.pdf",
    },
    {
        icon: <FaRoad size={40} />,
        title: "Инструкция по установке и эксплуатации «Транспондера»",
        pdf: "pdfs/transponder1_merged.pdf",
    },
    {
        icon: <FaWarehouse size={40} />,
        title: "Правила поведения на территории клиента",
        pdf: "pdfs/new_territory.pdf",
    },
    {
        icon: <FaRegQuestionCircle size={40} />,
        title: "Инструкция «когда загорается АБС тягача и прицепа?»",
        pdf: "pdfs/abc1.pdf",
    },
    {
        icon: <FaClipboardList size={40} />,
        title: "Тест по работе в компании",
        pdf: "https://forms.yandex.ru/u/67fd569d505690c059b1c941/",
    },
];

const HistoryCompany = () => {
    return (
        <section
            id="drivers"
            className="py-12 bg-white text-center font-stem px-6"
        >
            <h2
                data-aos="zoom-in"
                className="container mx-auto py-10 rounded-3xl text-4xl md:text-5xl font-bold text-white mb-16 bg-black flex items-center justify-center"
            >
                Документы и инструкции
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 container mx-auto">
                {data.map((item, index) => (
                    <a
                        key={index}
                        href={item.pdf}
                        rel="noopener noreferrer"
                        className="bg-white border border-black hover:bg-gray-100 p-6 rounded-2xl shadow-md flex flex-col items-center justify-center text-center transition duration-300"
                    >
                        <div className="text-black mb-4">{item.icon}</div>
                        <h3 className="text-lg font-semibold text-black">
                            {item.title}
                        </h3>
                    </a>
                ))}
            </div>
        </section>
    );
};

export default HistoryCompany;
