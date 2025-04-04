import React from "react";
import Bus1 from "../assets/mainbusss2.jpg";

const Buses = () => {
    return (
        <div
            className="w-full h-screen  font-stem"
            style={{
                backgroundImage: `url(${Bus1.src}) `,
                backgroundSize: "cover",
                backgroundAttachment: "fixed",
            }}
        >
            <div className="w-full h-full bg-[#0000007f] flex justify-center items-center">
                <p className="w-full lg:w-[50%]  title text-[40px] lg:text-[80px] text-white text-center">
                    Современный автопарк и собственная СТО
                </p>
            </div>
        </div>
    );
};

export default Buses;
