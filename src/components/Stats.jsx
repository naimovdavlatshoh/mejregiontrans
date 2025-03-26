import React from "react";

const Stats = () => {
    const stats = [
        {
            number: "6",
            description: "филиалов в регионах России",
            details:
                "Нижний Новгород – центральный офис, Москва, Челябинск, Санкт-Петербург, Волгоград, Новосибирск",
        },
        {
            number: "500+",
            description: "единиц собственной техники",
            details: "Volvo, Scania, Sitrak",
        },
        {
            number: "1000+",
            description: "клиентов",
            details: "",
        },
        {
            number: "750+",
            description: "сотрудников в штате",
            details: "",
        },
    ];

    return (
        <section className="py-20 bg-[#bafe7e55] font-stem">
            <div className="container mx-auto px-6" data-aos="zoom-in">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center  pt-6">
                    {stats.map((item, index) => (
                        <div key={index} className="flex flex-col items-center">
                            <span className="text-[#89f629] text-5xl font-bold mb-5">
                                {item.number}
                            </span>
                            <p className="text-xl text-gray-900 font-semibold">
                                {item.description}
                            </p>
                            {item.details && (
                                <p className="text-lg text-gray-500 font-light mt-2">
                                    {item.details}
                                </p>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Stats;
