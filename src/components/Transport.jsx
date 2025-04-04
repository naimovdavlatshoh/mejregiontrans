import { ShieldAlert } from "lucide-react";
import Image from "next/image";
import Logo from "../assets/logo1.jpg";

const TransportCompanySection = () => {
    return (
        <section className="bg-green text-black  text-center p-6 font-stem font-semibold">
            <div className="max-w-5xl mx-auto">
                <div className="flex items-center justify-center gap-4">
                    <span className="text-5xl">
                        <Image
                            src={Logo}
                            alt="logo"
                            className="h-[150px] object-contain"
                        />
                    </span>
                    <p className="text-lg md:text-3xl font-medium">
                        с 2016 года ООО «Межрегионтранс» специализируется на
                        перевозке грузов продуктов питания, товаров народного
                        потребления, а также строй материалов и других видов
                        продукции
                    </p>
                </div>
            </div>
        </section>
    );
};

export default TransportCompanySection;
