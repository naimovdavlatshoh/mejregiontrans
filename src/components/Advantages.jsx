import React from "react";
import ArrowRight from "../assets/arrowright.svg";
import ArrowLeft from "../assets/arrowleft.svg";
import {
    Briefcase,
    Users,
    FileText,
    Truck,
    Search,
    RefreshCw,
} from "lucide-react";

const advantages = [
    {
        title: "Репутация компании как надежного логистического партнера",
        icon: <Briefcase size={40} className="text-[#FC97B5]" />,
    },
    {
        title: "Максимальная эффективность на каждом этапе взаимодействия с клиентом",
        icon: <Users size={40} className="text-[#FC97B5]" />,
    },
    {
        title: "Прозрачные тарифы и оптимизация затрат",
        icon: <FileText size={40} className="text-[#FC97B5]" />,
    },
    {
        title: "Квалифицированный персонал",
        icon: <Users size={40} className="text-[#FC97B5]" />,
    },
    {
        title: "Транспортировка всех видов грузов (в том числе опасных)",
        icon: <Truck size={40} className="text-[#FC97B5]" />,
    },
    {
        title: "Автоматизированная система контроля (круглосуточный мониторинг транспортного средства и груза на всем пути следования)",
        icon: <Search size={60} className="text-[#FC97B5]" />,
    },
    {
        title: "Надежный собственный подвижной состав (включая технику с ADR пакетом и рефрижераторы)",
        icon: <Truck size={60} className="text-[#FC97B5]" />,
    },
    {
        title: "Своевременный возврат и корректное оформление товарно-сопроводительной документации в том числе в соответствии с требованиями клиента",
        icon: <RefreshCw size={60} className="text-[#FC97B5]" />,
    },
];

const Advantages = () => {
    return (
        <section id="advantages" className="py-12 bg-white font-stem">
            <div className="container mx-auto px-6">
                <h2
                    data-aos="zoom-in"
                    className="text-3xl lg:text-5xl font-bold text-white text-center mb-10 py-10 bg-[#FC97B5] rounded-3xl"
                >
                    ПРЕИМУЩЕСТВА
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {advantages.map((adv, index) => (
                        <div
                            data-aos="zoom-in"
                            data-aos-offset="300"
                            key={index}
                            className={`flex  text-white items-center gap-4 p-4 ${
                                index == 0 || index % 2 == 0
                                    ? "bg-gray-200  rounded-s-full rounded-e-xl"
                                    : "bg-gray-200  rounded-e-full rounded-s-lg"
                            } rounded-lg`}
                        >
                            {adv.icon}
                            <p className="text-black font-normall text-xl font-light">
                                {adv.title}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Advantages;
