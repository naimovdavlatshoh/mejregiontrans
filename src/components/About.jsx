import { Globe, Medal, UserRoundPlus } from "lucide-react";
import Image from "next/image";
import React from "react";
import Throphy from "../assets/throphy.png";
import Kreml from "../assets/kreml.jpg";
import LogoBus from "../assets/logobus.jpg";
import Coloboration from "../assets/coloboration.png";

export const metadata = {
    title: "«Межрегионтранс»",
    description: "на рынке логистических услуг Нижегородской области",
};

const About = () => {
    return (
        <section id="about" className="text-black py-10 font-stem">
            <div className="container mx-auto px-6">
                <h2
                    data-aos="fade-up"
                    className="text-3xl lg:text-5xl font-medium text-center mb-8 lg:mb-20 bg-green py-10 rounded-3xl"
                >
                    О КОМПАНИИ «Межрегионтранс»
                </h2>
                <div
                    data-aos="fade-up"
                    className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 text-center text-xl"
                >
                    <div>
                        <div className="w-full flex justify-center color-green mb-5 lg:mb-10">
                            <Image
                                className="h-[100px] object-contain"
                                src={Kreml}
                                alt="no img"
                            />
                        </div>
                        <p className="mt-4  font-light">
                            на рынке логистических услуг города Москвы и
                            Московской области
                        </p>
                    </div>
                    <div>
                        <div className="w-full flex justify-center color-green mb-5 lg:mb-10">
                            <Image
                                className="h-[100px] object-contain"
                                src={Throphy}
                                alt="no img"
                            />
                        </div>
                        <p className="mt-4  font-light">
                            входит в ТОП лучших перевозчиков России
                        </p>
                    </div>
                    <div>
                        <div className="w-full flex justify-center color-green mb-5 lg:mb-10">
                            <Image
                                className="h-[100px] object-contain"
                                src={LogoBus}
                                alt="no img"
                            />
                        </div>

                        <p className="mt-4  font-light">перевезенных грузов</p>
                    </div>
                    <div>
                        <div className="w-full flex justify-center color-green mb-5 lg:mb-10">
                            <Globe size={100} />
                        </div>

                        <p className="mt-4  font-light">
                            география перевозок - все регионы нашей страны
                        </p>
                    </div>
                    <div>
                        <div className="w-full flex justify-center color-green mb-5 lg:mb-10">
                            <Image
                                className="h-[100px] object-contain"
                                src={Coloboration}
                                alt="no img"
                            />
                        </div>

                        <p className="mt-4  font-light">
                            открыты к сотрудничеству
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
