import { GitBranch, PackageCheck, Truck } from "lucide-react";
import React from "react";

const ProjectsSection = () => {
    const projects = [
        {
            title: "Развитие филиальной сети",
            description: (
                <>
                    <p className="mb-2">в 2024 году открыты:</p>
                    <ul className="list-disc list-inside">
                        <li>Петербург</li>
                        <li>Челябинск</li>
                        <li>Волгоград</li>
                        <li>Новосибирск</li>
                    </ul>

                    <ul className="list-disc list-inside">
                        <li>Екатеринбург</li>
                        <li>Краснодар</li>
                    </ul>
                </>
            ),
            icon: <GitBranch size={50} color="white" />,
        },
        {
            title: "Покупка собственного комплекса по обслуживанию автопарка",
            description: (
                <ul className="list-disc list-inside">
                    <li>Уменьшение времени простоя техники</li>
                    <li>Снижение затрат на обслуживание автопарка</li>
                    <li>Отличное состояние подвижного состава</li>
                </ul>
            ),
            icon: <Truck size={50} color="white" />,
        },
        {
            title: "Экспресс-доставка грузов",
            description: (
                <ul className="list-disc list-inside">
                    <li>Выход на новый рынок быстрой доставки</li>
                    <li>
                        Гарантия быстрой доставки грузов на 85% территории
                        России
                    </li>
                </ul>
            ),
            icon: <PackageCheck size={50} color="white" />,
        },
    ];

    return (
        <section className="py-12 bg-white font-stem">
            <div className="container mx-auto px-4 text-center">
                <h2
                    data-aos="zoom-in"
                    className="text-3xl font-bold text-white mb-8 bg-pink py-10 rounded-3xl"
                >
                    РЕАЛИЗОВАННЫЕ ПРОЕКТЫ
                </h2>
                <div data-aos="zoom-in" className="grid md:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <div
                            key={index}
                            className="p-6  rounded-lg flex flex-col items-center"
                        >
                            <div className="w-[100px] h-[100px] rounded-full mb-4 bg-pink flex justify-center items-center">
                                {project.icon}
                            </div>
                            <h3 className="text-2xl font-semibold color-pink mb-3">
                                {project.title}
                            </h3>
                            <div className="text-gray-700 text-[16px] text-left font-light">
                                {project.description}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ProjectsSection;
