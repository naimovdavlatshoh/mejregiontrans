import { ShieldAlert } from "lucide-react";

const TransportCompanySection = () => {
    return (
        <section className="bg-green text-black  text-center p-6 font-stem font-semibold">
            <div className="max-w-5xl mx-auto">
                <div className="flex items-center justify-center gap-4">
                    <span className="text-5xl">
                        <ShieldAlert size={100} />
                    </span>
                    <p className="text-lg md:text-3xl font-medium">
                        С 2020 года ООО «Поволжье-Транс» специализируется на
                        перевозке грузов для крупнейших корпораций газо- и
                        нефтедобывающей отрасли.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default TransportCompanySection;
