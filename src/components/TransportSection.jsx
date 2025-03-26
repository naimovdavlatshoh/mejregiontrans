import React from "react";
import MainBus from "../assets/bus2.jpg";

const TransportSection = () => {
    const services = [
        {
            title: "Профессиональные знания и опыт",
            description:
                "необходимые для работы транспортно-логистической компании в регионе с суровым климатом",
        },
        {
            title: "Автоматизация логистического процесса",
            description:
                "позволяет нести ответственность за качество оказываемых услуг перед нашими партнерами",
        },
        {
            title: "Мультимодальные перевозки",
            description:
                "благодаря долгосрочным контрактам с предприятиями, предлагающими специальную погрузочную и вездеходную технику",
        },
        {
            title: "Полный комплекс транспортно-экспедицийных услуг",
            description:
                "по доставке и хранению груза позволяет нашим партнерам минимизировать затраты и сэкономить время",
        },
    ];

    return (
        <section
            className=" text-white font-stem"
            style={{
                backgroundImage: `url(${MainBus.src}) `,
                backgroundSize: "cover",
            }}
        >
            <div className="bg-[#00000087] py-20">
                <div className="container  mx-auto px-6 grid md:grid-cols-2 lg:grid-cols-4 gap-8 text-center ">
                    {services.map((service, index) => (
                        <div
                            data-aos="zoom-in"
                            key={index}
                            className="space-y-4"
                        >
                            <h3 className="text-2xl font-bold color-green">
                                {service.title}
                            </h3>
                            <hr className="border-gray-500 mx-auto w-16" />
                            <p className="text-gray-300 text-xl font-light">
                                {service.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default TransportSection;
