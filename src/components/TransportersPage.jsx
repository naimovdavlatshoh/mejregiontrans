import React from "react";

const TransportersPage = () => {
    return (
        <div className="min-h-screen flex flex-col justify-between ">
            {/* Header */}
            <header
                id="transporters"
                data-aos="zoom-in"
                className="text-center py-6 px-6"
            >
                <h1 className="mx-auto py-10 rounded-3xl container text-3xl lg:text-5xl  font-bold text-white bg-pink">
                    ПЕРЕВОЗЧИКАМ
                </h1>
            </header>

            <main className="flex flex-col md:flex-row items-center justify-center gap-10  md:px-20 px-6">
                <div
                    data-aos="zoom-in"
                    className="w-full md:w-1/2 text-center p-4 border border-gray-200 rounded-lg shadow-lg"
                >
                    <div className="flex flex-col items-center">
                        <div className="text-green-600 text-6xl">📄</div>
                        <p className="mt-4 text-xl">
                            Договор публичной оферты на Поволжье Транс
                        </p>
                        <button className="mt-4 px-6 py-2 bg-pink text-white rounded-lg hover:bg-pink-500">
                            СКАЧАТЬ
                        </button>
                    </div>
                </div>

                <div
                    data-aos="zoom-in"
                    className="w-full md:w-1/2 text-center p-4 border border-gray-200 rounded-lg shadow-lg"
                >
                    <div className="flex flex-col items-center">
                        <div className="text-green-600 text-6xl">📄</div>
                        <p className="mt-4 text-xl">
                            Договор публичной оферты на ИП Пилипчук Н.А
                        </p>
                        <button className="mt-4 px-6 py-2 bg-pink text-white rounded-lg hover:bg-pink-500">
                            СКАЧАТЬ
                        </button>
                    </div>
                </div>
            </main>

            {/* Footer */}
            <footer
                id="contacts"
                className="bg-green text-black text-center p-6 mt-10 text-lg"
            >
                <p>
                    <a href="">+79019051111</a> |{" "}
                    <a href="">all@mrt-trans.ru</a>
                </p>
                <p className="mt-2">©2023</p>
            </footer>
        </div>
    );
};

export default TransportersPage;
