import React from "react";

const TransportersPage = () => {
    return (
        <div className="min-h-screen flex flex-col justify-between">
            {/* Header */}
            <header
                id="transporters"
                data-aos="zoom-in"
                className="text-center py-6 px-6"
            >
                <h1 className="mx-auto py-10 rounded-3xl container text-3xl lg:text-5xl font-bold text-white bg-pink">
                    ПЕРЕВОЗЧИКАМ
                </h1>
            </header>

            {/* Main Section */}
            <main className="flex flex-col md:flex-row items-center justify-center gap-10 md:px-20 px-6">
                <div
                    data-aos="zoom-in"
                    className="w-full md:w-1/2 text-center p-4 border border-gray-200 rounded-lg shadow-lg"
                >
                    <div className="flex flex-col items-center">
                        <div className="text-green-600 text-6xl">📄</div>
                        <p className="mt-4 text-xl">
                            Договор перевозки грузов автомобильным транспортом
                        </p>
                        <a
                            href="/download.docx"
                            download
                            className="mt-4 inline-block px-6 py-2 bg-pink text-white rounded-lg hover:bg-pink-500"
                        >
                            СКАЧАТЬ
                        </a>
                    </div>
                </div>
            </main>

            {/* Footer */}
            <footer
                id="contacts"
                className="bg-green text-black text-center p-6 mt-10 text-lg"
            >
                <p>
                    Документооборот &nbsp;&nbsp;
                    <a href="tel:+7(901) 333-69-09">+7(901) 333-69-09</a>
                </p>
                <p>
                    По оплате &nbsp;&nbsp;
                    <a href="tel:+7 (901) 333-93-65">+7 (901) 333-93-65</a>
                </p>
                <p>
                    Заключение договоров и рассмотрение жалоб заказчиков
                    &nbsp;&nbsp;
                    <a href="tel:+7(901) 333-00-10">+7(901) 333-00-10</a>
                </p>
                <p>
                    Заключение договоров с перевозчиками &nbsp;&nbsp;
                    <a href="tel:+7(901) 333-98-80">+7(901) 333-98-80</a>
                </p>
                <p>
                    <a href="tel:+79019051111">+79019051111</a> &nbsp;
                    <a href="mailto:all@mrt-trans.ru">all@mrt-trans.ru</a>
                </p>

                <p className="mt-2">©2025</p>
            </footer>
        </div>
    );
};

export default TransportersPage;
