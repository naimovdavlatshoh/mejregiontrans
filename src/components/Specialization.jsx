"use client";

import React, { useState } from "react";

const Specialization = () => {
    const data = [
        {
            number: "1",
            title: "Преимущества системы ",
            description:
                "Адаптация, мониторинг и аналитика обучения сотрудников в реальном времени.",
        },
        {
            number: "2",
            title: "Гибкость и удобство",
            description:
                "Система позволяет учиться в удобное время и в удобном темпе.",
        },
        {
            number: "3",
            title: "Повышение квалификации",
            description:
                "Эффективное освоение новых знаний и повышение профессионального уровня.",
        },
    ];

    const [showAll, setShowAll] = useState(false);

    return (
        <section className="bg-white py-12 font-stem px-6">
            <div className="max-w-6xl mx-auto text-center">
                <h2
                    data-aos="zoom-in"
                    className="text-3xl lg:text-5xl font-bold text-black bg-green py-10 rounded-3xl mb-10"
                >
                    СПЕЦИАЛИЗАЦИЯ
                </h2>
                <p className="mt-4 text-gray-700 text-3xl">
                    Инновационная платформа для адаптации и повышения
                    квалификации сотрудников.
                </p>

                <div className="mt-10 grid grid-cols-1 md:grid-cols-1 gap-8">
                    {data
                        .slice(0, showAll ? data.length : 1)
                        .map((item, index) => (
                            <div
                                data-aos="zoom-in"
                                key={index}
                                className="flex flex-col items-center text-center p-6  rounded-lg bg-[#bafe7e55] shadow-lg"
                            >
                                <div className="w-16 h-16 flex items-center justify-center bg-green-500 text-white text-xl font-bold rounded-full">
                                    {item.number}
                                </div>
                                <h3 className="mt-4 text-xl font-semibold">
                                    {item.title}
                                </h3>
                                <p className="mt-2 text-gray-600 text-lg font-light">
                                    {item.description}
                                </p>
                            </div>
                        ))}
                </div>

                <button
                    onClick={() => setShowAll(!showAll)}
                    className="mt-10 px-6 py-3 bg-green text-black text-lg font-semibold rounded-lg shadow-lg hover:bg-green-600 hover:text-white transition"
                >
                    {showAll ? "Скрыть" : "Узнать больше"}
                </button>
            </div>
        </section>
    );
};

export default Specialization;
