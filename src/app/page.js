"use client";

import About from "@/components/About";
import Advantages from "@/components/Advantages";
import Buses from "@/components/Buses";
import ClientsCarousel from "@/components/Clients";
import HistoryCompany from "@/components/HistoryCompany";
import HomeSection from "@/components/HomeSection";
import Navbar from "@/components/Navbar";
import ProjectsSection from "@/components/ProjectsSection";
import Specialization from "@/components/Specialization";
import Stats from "@/components/Stats";
import TransportCompanySection from "@/components/Transport";
import TransportSection from "@/components/TransportSection";
import TransportersPage from "@/components/TransportersPage";
import Image from "next/image";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Geography from "@/components/Geography";
import CardsSection from "@/components/HistoryCompany";

export default function Home() {
    useEffect(() => {
        AOS.init({
            duration: 800, // Animatsiya davomiyligi (ms)
            once: true, // Faqat bir marta ishlaydi
        });
    }, []);
    return (
        <div className="">
            <Navbar />
            <HomeSection />
            <About />
            <Stats />
            <Advantages />
            <Geography />
            <TransportCompanySection />
            <TransportSection />
            <ProjectsSection />
            <ClientsCarousel />
            <CardsSection />
            <Buses />
            <Specialization />
            <TransportersPage />
        </div>
    );
}
