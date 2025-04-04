import React from "react";

const Stats = () => {
    const stats = [
        {
            number: "4 ",
            description: "филиала в регионах России:",
            details:
                "г.Москва, Московская область г.Дмитров,                   г. Нефтеюганск, г. Брянск",
        },
        {
            number: "200+",
            description: "единиц собственной техникии",
            details: "и дописать марку Dongfeng",
        },
        {
            number: "400+",
            description: "клиентов",
            details: "",
        },
    ];

    return (
        <section className="py-20 bg-[#bafe7e55] font-stem">
            <div className="container mx-auto px-6" data-aos="zoom-in">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center  pt-6">
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
